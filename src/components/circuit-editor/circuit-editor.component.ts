import { Component, AfterViewInit, ViewChild, ElementRef, inject, ChangeDetectorRef, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin';
import { AngularPlugin, Presets as AngularPresets, AngularArea2D } from 'rete-angular-plugin';

import { BreakerNodeComponent, MotorNodeComponent, PowerNodeComponent } from './custom-nodes';
import { CircuitSimulationService } from '../../services/circuit-simulation.service';

type Schemes = GetSchemes<ClassicPreset.Node, ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>>;
type AreaExtra = AngularArea2D<Schemes>;

@Component({
    selector: 'app-circuit-editor',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
        <!-- Toolbar -->
        <div class="absolute top-4 left-4 z-10 flex flex-col gap-2 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
            <button (click)="addSource()" class="p-2 hover:bg-white/10 rounded-lg text-white flex flex-col items-center gap-1">
                <span class="material-symbols-outlined">bolt</span>
                <span class="text-[10px] uppercase font-bold">Fuente</span>
            </button>
            <button (click)="addBreaker()" class="p-2 hover:bg-white/10 rounded-lg text-white flex flex-col items-center gap-1">
                <span class="material-symbols-outlined">toggle_on</span>
                <span class="text-[10px] uppercase font-bold">Magneto</span>
            </button>
            <button (click)="addMotor()" class="p-2 hover:bg-white/10 rounded-lg text-white flex flex-col items-center gap-1">
                <span class="material-symbols-outlined">settings_motion_mode</span>
                <span class="text-[10px] uppercase font-bold">Motor</span>
            </button>
            <div class="h-px bg-white/20 my-1"></div>
            <button (click)="runSimulation()" class="p-2 bg-green-600 hover:bg-green-500 rounded-lg text-white flex flex-col items-center gap-1 shadow-lg shadow-green-500/20">
                <span class="material-symbols-outlined">play_arrow</span>
                <span class="text-[10px] uppercase font-bold">Simular</span>
            </button>
             <button (click)="clear()" class="p-2 hover:bg-red-500/20 text-red-400 rounded-lg flex flex-col items-center gap-1">
                <span class="material-symbols-outlined">delete</span>
                <span class="text-[10px] uppercase font-bold">Borrar</span>
            </button>
        </div>

        <!-- Rete Canvas -->
        <div #rete class="w-full h-full" style="background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px;"></div>
    </div>
  `
})
export class CircuitEditorComponent implements AfterViewInit {
    @ViewChild('rete') container!: ElementRef;

    editor!: NodeEditor<Schemes>;
    area!: AreaPlugin<Schemes, AreaExtra>;

    private simulationService = inject(CircuitSimulationService);
    private cdr = inject(ChangeDetectorRef);
    private injector = inject(Injector);

    async ngAfterViewInit() {
        // 1. Initialize Rete Editor
        const socket = new ClassicPreset.Socket('socket');
        this.editor = new NodeEditor<Schemes>();
        this.area = new AreaPlugin<Schemes, AreaExtra>(this.container.nativeElement);
        const connection = new ConnectionPlugin<Schemes, AreaExtra>();
        const render = new AngularPlugin<Schemes, AreaExtra>({ injector: this.injector });

        // 2. Setup Plugins
        AreaExtensions.selectableNodes(this.area, AreaExtensions.selector(), {
            accumulating: AreaExtensions.accumulateOnCtrl()
        });

        render.addPreset(AngularPresets.classic.setup({
            customize: {
                node(data) {
                    if (data.payload instanceof ClassicPreset.Node) {
                        if (data.payload.label === 'Magnetotérmico') return BreakerNodeComponent;
                        if (data.payload.label === 'Motor Trifásico') return MotorNodeComponent;
                        if (data.payload.label === 'Red Eléctrica') return PowerNodeComponent;
                    }
                    return null;
                }
            }
        }));

        connection.addPreset(ConnectionPresets.classic.setup());

        this.editor.use(this.area);
        this.area.use(connection);
        this.area.use(render);

        // 3. Add Initial Nodes
        await this.addSource();

        // Center logic
        AreaExtensions.zoomAt(this.area, this.editor.getNodes());

        // 4. Hook Simulation Events
        // Run simulation on connection lifecycle events
        this.editor.addPipe(context => {
            if (context.type === 'connectioncreated' || context.type === 'connectionremoved') {
                // Include a small delay to let the connection object register
                setTimeout(() => this.runSimulation(), 50);
            }
            return context;
        });

        // Also need to listen for Component State Changes (e.g. Breaker Toggle)
        setInterval(() => this.runSimulation(), 500);
    }

    async runSimulation() {
        await this.simulationService.process(this.editor);
        this.cdr.detectChanges(); // Update UI
    }

    async addSource() {
        const node = new ClassicPreset.Node('Red Eléctrica');
        node.addOutput('L1', new ClassicPreset.Output(new ClassicPreset.Socket('socket'), 'L1'));
        node.addOutput('L2', new ClassicPreset.Output(new ClassicPreset.Socket('socket'), 'L2'));
        node.addOutput('L3', new ClassicPreset.Output(new ClassicPreset.Socket('socket'), 'L3'));

        (node as any).data = { label: 'Red ' + (this.editor.getNodes().length + 1) };

        await this.editor.addNode(node);
        await this.area.translate(node.id, { x: 50, y: 50 });
    }

    async addBreaker() {
        const node = new ClassicPreset.Node('Magnetotérmico');
        node.addInput('L1', new ClassicPreset.Input(new ClassicPreset.Socket('socket'), 'L1'));
        node.addOutput('T1', new ClassicPreset.Output(new ClassicPreset.Socket('socket'), 'T1'));

        // Data passed to Angular Component
        (node as any).data = { label: 'Q' + (this.editor.getNodes().length + 1), isOn: false };

        await this.editor.addNode(node);
        await this.area.translate(node.id, { x: 300, y: 50 });
    }

    async addMotor() {
        const node = new ClassicPreset.Node('Motor Trifásico');
        node.addInput('U1', new ClassicPreset.Input(new ClassicPreset.Socket('socket'), 'U1'));
        node.addInput('V1', new ClassicPreset.Input(new ClassicPreset.Socket('socket'), 'V1'));
        node.addInput('W1', new ClassicPreset.Input(new ClassicPreset.Socket('socket'), 'W1'));

        (node as any).data = { label: 'M' + (this.editor.getNodes().length + 1), rpm: 1500, isRunning: false };

        await this.editor.addNode(node);
        await this.area.translate(node.id, { x: 600, y: 200 });
    }

    async clear() {
        await this.editor.clear();
    }
}
