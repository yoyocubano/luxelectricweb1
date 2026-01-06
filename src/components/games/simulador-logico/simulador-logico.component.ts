import { ChangeDetectionStrategy, Component, computed, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'INPUT' | 'OUTPUT' | 'CONTACTOR' | 'RELAY';

interface Node {
    id: string;
    type: GateType;
    x: number;
    y: number;
    label: string;
    output: boolean;
    connections: string[]; // IDs of nodes connected to this node's inputs
    knxAddress?: string; // Ej: "1/1/1"
}

interface Telegram {
    timestamp: string;
    source: string;
    destination: string;
    value: string;
    type: string;
}

@Component({
    selector: 'app-simulador-logico',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './simulador-logico.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimuladorLogicoComponent {
    busHistory = signal<Telegram[]>([]);
    nodes = signal<Node[]>([
        { id: 'in1', type: 'INPUT', x: 80, y: 150, label: 'I1', output: false, connections: [], knxAddress: '1/1/1' },
        { id: 'in2', type: 'INPUT', x: 80, y: 300, label: 'I2', output: false, connections: [], knxAddress: '1/1/2' },
        { id: 'gate1', type: 'AND', x: 300, y: 225, label: 'B001 (AND)', output: false, connections: ['in1', 'in2'] },
        { id: 'out1', type: 'OUTPUT', x: 550, y: 225, label: 'Q1', output: false, connections: ['gate1'], knxAddress: '1/1/10' }
    ]);

    draggingNodeId = signal<string | null>(null);
    hoverNodeId = signal<string | null>(null);
    dragOffset = { x: 0, y: 0 };

    evaluateLogic() {
        const currentNodes = JSON.parse(JSON.stringify(this.nodes()));
        let changed = true;
        let iterations = 0;

        while (changed && iterations < 15) {
            changed = false;
            currentNodes.forEach((node: Node) => {
                if (node.type === 'INPUT') return;

                const inputValues = node.connections.map(id => currentNodes.find((n: Node) => n.id === id)?.output || false);
                let newOutput = false;

                switch (node.type) {
                    case 'AND': newOutput = inputValues.length > 0 && inputValues.every(v => v); break;
                    case 'OR': newOutput = inputValues.some(v => v); break;
                    case 'NOT': newOutput = inputValues.length > 0 ? !inputValues[0] : true; break;
                    case 'NAND': newOutput = !(inputValues.length > 0 && inputValues.every(v => v)); break;
                    case 'NOR': newOutput = !inputValues.some(v => v); break;
                    case 'XOR': newOutput = inputValues.reduce((a, b) => a !== b, false); break;
                    case 'CONTACTOR': newOutput = inputValues[0] || false; break; // Se activa con su bobina
                    case 'RELAY': newOutput = inputValues[0] || false; break;
                    case 'OUTPUT': newOutput = inputValues[0] || false; break;
                }

                if (node.output !== newOutput) {
                    node.output = newOutput;
                    changed = true;
                }
            });
            iterations++;
        }
        this.nodes.set(currentNodes);
    }

    logTelegram(source: string, destination: string, value: boolean) {
        if (!destination) return;
        const newTelegram: Telegram = {
            timestamp: new Date().toLocaleTimeString(),
            source,
            destination,
            value: value ? 'ON' : 'OFF',
            type: 'GroupValueWrite'
        };
        this.busHistory.update(history => [newTelegram, ...history].slice(0, 10)); // Mantener los últimos 10
    }

    toggleInput(id: string) {
        const node = this.nodes().find(n => n.id === id);
        if (node) {
            this.nodes.update(nodes => nodes.map(n => n.id === id ? { ...n, output: !n.output } : n));
            if (node.knxAddress) {
                this.logTelegram(`1.1.${node.id === 'in1' ? '1' : '2'}`, node.knxAddress, !node.output);
            }
            this.evaluateLogic();
        }
    }

    addGate(type: GateType) {
        const id = `gate_${Date.now()}`;
        const prefixMap: Record<string, string> = {
            'CONTACTOR': 'KM',
            'RELAY': 'KA',
            'INPUT': 'S',
            'OUTPUT': 'H',
            'AND': 'B',
            'OR': 'B',
            'XOR': 'B',
            'NOT': 'B'
        };
        const prefix = prefixMap[type] || 'B';

        this.nodes.update(nodes => [...nodes, {
            id, type, x: 200, y: 200, label: `${prefix}${nodes.length + 1}`, output: false, connections: []
        }]);
    }

    // Drag & Drop
    startDrag(event: MouseEvent | TouchEvent, id: string) {
        this.draggingNodeId.set(id);
        const node = this.nodes().find(n => n.id === id)!;
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        this.dragOffset = { x: clientX - node.x, y: clientY - node.y };
    }

    @HostListener('window:mousemove', ['$event'])
    @HostListener('window:touchmove', ['$event'])
    onMove(event: MouseEvent | TouchEvent) {
        const id = this.draggingNodeId();
        if (!id) return;

        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

        this.nodes.update(nodes => nodes.map(n => n.id === id ? {
            ...n, x: clientX - this.dragOffset.x, y: clientY - this.dragOffset.y
        } : n));
    }

    @HostListener('window:mouseup')
    @HostListener('window:touchend')
    stopDrag() {
        this.draggingNodeId.set(null);
    }

    // SVG Bezier Logic
    getCurve(sourceId: string, targetId: string) {
        const s = this.nodes().find(n => n.id === sourceId);
        const t = this.nodes().find(n => n.id === targetId);
        if (!s || !t) return '';

        const x1 = s.x + 80; // Offset from node center to output terminal
        const y1 = s.y;
        const x2 = t.x - 40; // Offset to input terminal
        const y2 = t.y;

        const cp1x = x1 + (x2 - x1) / 2;
        const cp2x = x2 - (x2 - x1) / 2;

        return `M ${x1} ${y1} C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`;
    }

    isWireActive(sourceId: string) {
        return this.nodes().find(n => n.id === sourceId)?.output || false;
    }
}
