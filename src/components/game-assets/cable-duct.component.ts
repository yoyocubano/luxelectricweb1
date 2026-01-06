import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cable-duct',
    standalone: true,
    imports: [CommonModule],
    template: `
    <svg [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="duct-slots" x="5" y="0" width="12" height="40" patternUnits="userSpaceOnUse">
           <line x1="6" y1="2" x2="6" y2="15" stroke="#9ca3af" stroke-width="1.5"/>
           <line x1="6" y1="25" x2="6" y2="38" stroke="#9ca3af" stroke-width="1.5"/>
        </pattern>
        <linearGradient id="plastic-grey" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e5e7eb" />
          <stop offset="50%" stop-color="#d1d5db" />
          <stop offset="100%" stop-color="#9ca3af" />
        </linearGradient>
      </defs>
      
      <!-- Main Duct Body -->
      <rect width="100%" height="100%" fill="url(#plastic-grey)" stroke="#6b7280" stroke-width="1"/>
      
      <!-- Side Fingers/Slots -->
      <rect width="100%" height="100%" fill="url(#duct-slots)" opacity="0.4"/>
      
      <!-- Center Cover -->
      <rect x="0" y="10" width="100%" height="20" fill="#d1d5db" stroke="#9ca3af" stroke-width="1"/>
      
      <!-- Cover Gloss -->
      <rect x="0" y="12" width="100%" height="5" fill="white" opacity="0.3"/>
    </svg>
  `,
    styles: [`
    :host {
      display: block;
      line-height: 0;
    }
  `]
})
export class CableDuctComponent {
    @Input() width: number = 300;
    @Input() height: number = 40;
}
