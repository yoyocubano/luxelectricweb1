import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitBreakerComponent } from '../game-assets/circuit-breaker.component';
import { MotorComponent } from '../game-assets/motor.component';
import { PowerSourceComponent } from '../game-assets/power-source.component';

// Custom Rete Node for Circuit Breaker
@Component({
  selector: 'app-breaker-node',
  standalone: true,
  imports: [CommonModule, CircuitBreakerComponent],
  template: `
    <div class="node-wrapper p-2 rounded-xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm" 
         [class.selected]="selected">
      <!-- Inputs (Top) -->
      <div class="flex justify-center gap-4 mb-2">
        <div class="socket-input w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-400 transition-colors" 
             data-testid="input-L1"></div>
      </div>

      <!-- The Visual Component -->
      <app-circuit-breaker 
        [label]="data.label" 
        [isOn]="data.isOn">
      </app-circuit-breaker>

      <!-- Outputs (Bottom) -->
      <div class="flex justify-center gap-4 mt-2">
        <div class="socket-output w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-400 transition-colors" 
             data-testid="output-T1"></div>
      </div>
    </div>
  `,
  styles: [`
    .selected { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
    .socket-input, .socket-output { cursor: crosshair; }
  `]
})
export class BreakerNodeComponent {
  @Input() data: any;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;
  @Input() selected!: boolean;
}

// Custom Rete Node for Motor
@Component({
  selector: 'app-motor-node',
  standalone: true,
  imports: [CommonModule, MotorComponent],
  template: `
      <div class="node-wrapper p-2 rounded-xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
           [class.selected]="selected">
        <!-- Inputs (Top) -->
        <div class="flex justify-center gap-8 mb-2">
          <div class="socket-input w-4 h-4 bg-gray-400 rounded-full" title="U1"></div>
          <div class="socket-input w-4 h-4 bg-gray-400 rounded-full" title="V1"></div>
          <div class="socket-input w-4 h-4 bg-gray-400 rounded-full" title="W1"></div>
        </div>
  
        <!-- The Visual Component -->
        <app-motor 
            [label]="data.label" 
            [rpm]="data.rpm"
            [isRunning]="data.isRunning">
        </app-motor>
      </div>
    `,
  styles: [`
      .selected { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
    `]
})
export class MotorNodeComponent {
  @Input() data: any;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;
  @Input() selected!: boolean;
}

// Custom Rete Node for Power Source
@Component({
  selector: 'app-power-node',
  standalone: true,
  imports: [CommonModule, PowerSourceComponent],
  template: `
    <div class="node-wrapper p-2 rounded-xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
         [class.selected]="selected">
      <app-power-source [label]="data.label"></app-power-source>

      <!-- Outputs (Bottom) -->
      <div class="flex justify-center gap-8 mt-2">
          <div class="socket-output w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-400" title="L1"></div>
          <div class="socket-output w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-400" title="L2"></div>
          <div class="socket-output w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-400" title="L3"></div>
      </div>
    </div>
  `,
  styles: [`
    .selected { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
    .socket-output { cursor: crosshair; }
  `]
})
export class PowerNodeComponent {
  @Input() data: any;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;
  @Input() selected!: boolean;
}
