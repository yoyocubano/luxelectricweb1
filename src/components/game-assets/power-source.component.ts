import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-power-source',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="relative w-24 h-24 select-none group cursor-pointer">
      <!-- Etiqueta Superior -->
      <div class="absolute -top-6 left-0 w-full text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
        {{ label }}
      </div>

      <!-- SVG Container -->
      <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-xl transition-transform hover:scale-105">
        <!-- Caja Principal -->
        <rect x="10" y="10" width="80" height="80" rx="4" fill="#3B82F6" stroke="#2563EB" stroke-width="2"/>
        <rect x="15" y="15" width="70" height="70" rx="2" fill="#60A5FA" class="shadow-inner" opacity="0.1"/>
        
        <!-- Símbolo Red Trifásica -->
        <text x="50" y="45" text-anchor="middle" font-size="20" fill="white" font-weight="bold">L1 L2 L3</text>
        <text x="50" y="65" text-anchor="middle" font-size="10" fill="white" opacity="0.8">400V~</text>

        <!-- Bornes Salida (Abajo) -->
        <g transform="translate(25, 85)">
            <circle cx="0" cy="0" r="4" fill="#1F2937" stroke="white" stroke-width="1"/>
            <text x="0" y="15" text-anchor="middle" font-size="8" fill="white" font-weight="bold">L1</text>
        </g>
        <g transform="translate(50, 85)">
            <circle cx="0" cy="0" r="4" fill="#1F2937" stroke="white" stroke-width="1"/>
            <text x="0" y="15" text-anchor="middle" font-size="8" fill="white" font-weight="bold">L2</text>
        </g>
        <g transform="translate(75, 85)">
            <circle cx="0" cy="0" r="4" fill="#1F2937" stroke="white" stroke-width="1"/>
            <text x="0" y="15" text-anchor="middle" font-size="8" fill="white" font-weight="bold">L3</text>
        </g>

        <!-- Indicador LED Estado -->
        <circle cx="85" cy="20" r="4" fill="#10B981" class="animate-pulse"/>
      </svg>
    </div>
  `
})
export class PowerSourceComponent {
    @Input() label: string = 'Red';
}
