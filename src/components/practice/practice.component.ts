
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class PracticeComponent {
  currentStep = signal(3);
  steps = [
    { id: 1, title: 'Introducción y Seguridad', status: 'done' },
    { id: 2, title: 'Selección de Componentes', status: 'done' },
    { id: 3, title: 'Cableado del Motor', status: 'active' },
    { id: 4, title: 'Montaje del Tablero', status: 'pending' },
    { id: 5, title: 'Validación Final', status: 'pending' },
  ];
}
