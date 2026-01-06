import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-circuit-breaker',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="relative w-24 h-44 select-none group cursor-pointer" (click)="toggle()">
      <!-- Etiqueta Superior -->
      <div class="absolute -top-6 left-0 w-full text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
        {{ label }}
      </div>

      <!-- SVG Container -->
      <svg viewBox="0 0 100 180" class="w-full h-full drop-shadow-xl transition-transform hover:scale-105">
        <!-- Cuerpo Principal -->
        <rect x="10" y="10" width="80" height="160" rx="4" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
        <rect x="15" y="15" width="70" height="150" rx="2" fill="#F3F4F6" class="shadow-inner"/>
        
        <!-- Zona de Bornes (Arriba) -->
        <circle cx="50" cy="25" r="6" fill="#D1D5DB" stroke="#6B7280" stroke-width="1"/>
        <circle cx="50" cy="25" r="3" fill="#374151"/>
        <text x="50" y="15" text-anchor="middle" font-size="8" fill="#4B5563" font-weight="bold">1/L1</text>

        <!-- Zona de Bornes (Abajo) -->
        <circle cx="50" cy="155" r="6" fill="#D1D5DB" stroke="#6B7280" stroke-width="1"/>
        <circle cx="50" cy="155" r="3" fill="#374151"/>
        <text x="50" y="175" text-anchor="middle" font-size="8" fill="#4B5563" font-weight="bold">2/T1</text>

        <!-- Etiqueta de Marca/Modelo -->
        <rect x="20" y="40" width="60" height="20" fill="#1F2937" rx="2"/>
        <text x="50" y="53" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="bold">SIEMENS</text>

        <!-- Palanca (Switch) -->
        <g class="transition-all duration-300" [class.translate-y-8]="!isOn">
            <!-- Base de la palanca -->
            <rect x="35" y="70" width="30" height="40" rx="4" fill="#111827"/>
            
            <!-- Indicador ON/OFF -->
            <rect x="38" y="75" width="24" height="12" [attr.fill]="isOn ? '#10B981' : '#374151'"/>
            <text x="50" y="84" text-anchor="middle" font-size="8" fill="white" font-weight="bold">{{ isOn ? 'I' : '0' }}</text>
        </g>
        
        <!-- Ventana de Estado Mecánico -->
        <rect x="42" y="125" width="16" height="8" stroke="#9CA3AF" fill="white"/>
        <rect x="43" y="126" width="14" height="6" [attr.fill]="isOn ? '#EF4444' : '#10B981'"/>

        <!-- Especificaciones -->
        <text x="50" y="145" text-anchor="middle" font-size="7" fill="#4B5563" font-family="monospace">C16</text>
        <text x="50" y="152" text-anchor="middle" font-size="6" fill="#6B7280">230V~</text>
      </svg>

      <!-- Estado Flotante -->
      <div class="absolute top-1/2 -right-4 transform -translate-y-1/2">
        <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" [class.bg-green-400]="isOn" [class.bg-red-400]="!isOn"></span>
            <span class="relative inline-flex rounded-full h-3 w-3" [class.bg-green-500]="isOn" [class.bg-red-500]="!isOn"></span>
        </span>
      </div>
    </div>
  `
})
export class CircuitBreakerComponent {
    @Input() label: string = 'Q1';
    @Input() isOn: boolean = false;

    toggle() {
        this.isOn = !this.isOn;
    }
}
