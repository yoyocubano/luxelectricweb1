import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-motor',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="relative w-32 h-32 select-none group cursor-pointer" (click)="toggle()">
      <!-- Etiqueta Superior -->
      <div class="absolute -top-6 left-0 w-full text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
        {{ label }} - {{ rpm }} RPM
      </div>

      <!-- SVG Container -->
      <svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-xl transition-transform hover:scale-105">
        <!-- Carcasa Motor -->
        <circle cx="60" cy="60" r="50" fill="#E5E7EB" stroke="#4B5563" stroke-width="2"/>
        <circle cx="60" cy="60" r="40" fill="#F3F4F6" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="4 2"/>
        
        <!-- Eje -->
        <circle cx="60" cy="60" r="10" fill="#374151" [class.animate-spin-slow]="isRunning"/>
        <rect x="58" y="50" width="4" height="20" fill="#9CA3AF" [class.animate-spin-slow]="isRunning"/>

        <!-- Bornes U1, V1, W1 (Arriba) -->
        <g transform="translate(35, 15)">
            <circle cx="0" cy="0" r="4" fill="#1F2937"/>
            <text x="0" y="-8" text-anchor="middle" font-size="8" font-weight="bold">U1</text>
        </g>
        <g transform="translate(60, 15)">
            <circle cx="0" cy="0" r="4" fill="#1F2937"/>
            <text x="0" y="-8" text-anchor="middle" font-size="8" font-weight="bold">V1</text>
        </g>
        <g transform="translate(85, 15)">
            <circle cx="0" cy="0" r="4" fill="#1F2937"/>
            <text x="0" y="-8" text-anchor="middle" font-size="8" font-weight="bold">W1</text>
        </g>

        <!-- Placa Características -->
        <rect x="40" y="80" width="40" height="20" fill="#111827" rx="2"/>
        <text x="60" y="93" text-anchor="middle" font-size="6" fill="#FBBF24" font-weight="bold">SIEMENS</text>

        <!-- Indicador de Giro -->
        <path d="M 90 60 A 30 30 0 0 1 60 90" stroke="#EF4444" stroke-width="2" fill="none" marker-end="url(#arrow)" *ngIf="isRunning"/>
        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#EF4444" />
            </marker>
        </defs>
      </svg>
      
      <!-- Estado (Humo si hay fallo, etc - Futuro) -->
    </div>
  `,
    styles: [`
    .animate-spin-slow {
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
  `]
})
export class MotorComponent {
    @Input() label: string = 'M1';
    @Input() rpm: number = 1500;
    @Input() isRunning: boolean = false;

    toggle() {
        this.isRunning = !this.isRunning;
    }
}
