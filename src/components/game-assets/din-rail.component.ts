import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-din-rail',
    standalone: true,
    imports: [CommonModule],
    template: `
    <svg [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="rail-holes" x="10" y="0" width="20" height="35" patternUnits="userSpaceOnUse">
          <rect x="5" y="10" width="10" height="15" rx="5" ry="5" fill="#a1a1aa" opacity="0.6"/>
        </pattern>
        <linearGradient id="metal-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e4e4e7" />
          <stop offset="20%" stop-color="#f4f4f5" />
          <stop offset="50%" stop-color="#d4d4d8" />
          <stop offset="80%" stop-color="#a1a1aa" />
          <stop offset="100%" stop-color="#71717a" />
        </linearGradient>
      </defs>
      
      <!-- Main Rail Body -->
      <rect width="100%" height="100%" fill="url(#metal-sheen)" rx="2" ry="2" stroke="#52525b" stroke-width="1"/>
      
      <!-- Center Recess -->
      <rect x="0" y="8" width="100%" height="19" fill="#d4d4d8" opacity="0.5"/>
      
      <!-- Slotted Holes Pattern -->
      <rect width="100%" height="100%" fill="url(#rail-holes)"/>
      
      <!-- Highlights -->
      <line x1="0" y1="2" x2="100%" y2="2" stroke="white" stroke-opacity="0.5" stroke-width="1"/>
    </svg>
  `,
    styles: [`
    :host {
      display: block;
      line-height: 0;
    }
  `]
})
export class DinRailComponent {
    @Input() width: number = 300;
    @Input() height: number = 35;
}
