import { Injectable } from '@angular/core';
import { NodeEditor, ClassicPreset } from 'rete';

// Define simulation node data interfaces
export interface NodeData {
    label: string;
    isOn?: boolean;         // For Breakers/Switches
    isRunning?: boolean;    // For Motors/Loads
    poweredInputs?: Set<string>; // Tracks which inputs have power (e.g., 'L1', 'L2', 'L3')
}

@Injectable({
    providedIn: 'root'
})
export class CircuitSimulationService {

    constructor() { }

    /**
     * Main simulation loop.
     * Starts from Power Sources and propagates "energy" through connections.
     */
    async process(editor: NodeEditor<any>) {
        const nodes = editor.getNodes();
        const connections = editor.getConnections();

        // 1. Reset Simulation State
        // We track power at the socket level for each node
        const nodePowerState = new Map<string, Set<string>>(); // NodeID -> Set of powered input socket keys

        // Initialize state for all nodes
        for (const node of nodes) {
            nodePowerState.set(node.id, new Set<string>());
            if ((node as any).data) { // Reset visual state
                (node as any).data.isRunning = false;
                // We DON'T reset 'isOn' because that's user controlled (switches)
            }
        }

        // 2. Identify Power Sources
        // In our simplified model, any node labeled 'Red Eléctrica' or similar is a source.
        // We assume sources output power on all their output sockets.
        const sources = nodes.filter(n => n.label === 'Red Eléctrica');

        // Queue for BFS: [NodeID, OutputSocketKey, Phase/SignalType]
        // Phase/SignalType: 'L1', 'L2', 'L3', etc.
        const queue: { nodeId: string, socketKey: string, signal: string }[] = [];

        for (const source of sources) {
            // Assume the source provides L1, L2, L3 on matching output sockets
            // Or simplifies: Output 'L1' carries 'L1' signal, etc.
            if (source.outputs['L1']) queue.push({ nodeId: source.id, socketKey: 'L1', signal: 'L1' });
            if (source.outputs['L2']) queue.push({ nodeId: source.id, socketKey: 'L2', signal: 'L2' });
            if (source.outputs['L3']) queue.push({ nodeId: source.id, socketKey: 'L3', signal: 'L3' });
        }

        // 3. Propagate Power (BFS)
        const visited = new Set<string>(); // Keep track of 'ConnectionID + Signal' to avoid loops

        while (queue.length > 0) {
            const current = queue.shift()!;

            // Find connections leaving this socket
            const outgoingConnections = connections.filter(c => c.source === current.nodeId && c.sourceOutput === current.socketKey);

            for (const conn of outgoingConnections) {
                const visitKey = `${conn.id}-${current.signal}`;
                if (visited.has(visitKey)) continue;
                visited.add(visitKey);

                const targetNode = nodes.find(n => n.id === conn.target);
                if (!targetNode) continue;

                // 3a. Register power arriving at target
                const targetState = nodePowerState.get(targetNode.id)!;
                // If the signal matches the input socket expectation (e.g. L1 to L1), or generic.
                // For simplicity, we'll map the arriving signal EXACTLY to the input socket name if possible,
                // OR just register that *this* specific input socket is powered by *this* signal.

                // Let's simplify: valid simulation requires correct phasing? 
                // Let's assume input socket 'L1' acts as L1 input.

                // Logic: A signal arrives at targetInput. 
                // Does it pass through?

                // Check Node Type logic
                if (targetNode.label === 'Magnetotérmico') {
                    // Breaker Logic:
                    // Input 'L1' -> Output 'T1' ONLY IF isOn = true
                    const breakerData = (targetNode as any).data;
                    if (breakerData && breakerData.isOn) {
                        // Pass through
                        // Map Input to Output. 
                        // L1 -> T1, etc.
                        // Simplified 1-pole breaker in this demo? Or 3-pole?
                        // Our current BreakerNode has Input 'L1' and Output 'T1'.
                        if (conn.targetInput === 'L1') {
                            queue.push({ nodeId: targetNode.id, socketKey: 'T1', signal: current.signal });
                        }
                    }
                } else if (targetNode.label === 'Motor Trifásico') {
                    // Motor Logic:
                    // It's a sink, doesn't output power.
                    // Just registers inputs.
                    if (conn.targetInput === 'U1' && current.signal === 'L1') targetState.add('L1');
                    if (conn.targetInput === 'V1' && current.signal === 'L2') targetState.add('L2');
                    if (conn.targetInput === 'W1' && current.signal === 'L3') targetState.add('L3');

                    // Check if run condition met
                    if (targetState.has('L1') && targetState.has('L2') && targetState.has('L3')) {
                        (targetNode as any).data.isRunning = true;
                    }
                }
            }
        }

        // Trigger update of the view?
        // Angular change detection should pick up the data object mutations if components use inputs correctly.
        return true;
    }
}
