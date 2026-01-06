
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../services/progress.service';

import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, I18nPipe],
})
export class PracticeComponent {
  private progressService = inject(ProgressService);
  viewMode = signal<'cabins' | 'montage'>('cabins');

  cabins = [
    {
      id: 'c1',
      title: 'practice.cabins.c1.title',
      description: 'practice.cabins.c1.desc',
      difficulty: 'Medio',
      icon: 'settings_motion_mode',
      color: 'blue',
      thumbnail: 'assets/images/exercises/IMG_0930.PNG'
    },
    {
      id: 'c2',
      title: 'practice.cabins.c2.title',
      description: 'practice.cabins.c2.desc',
      difficulty: 'Experto',
      icon: 'home_iot_device',
      color: 'green',
      thumbnail: 'assets/images/exercises/IMG_0942.PNG'
    },
    {
      id: 'c3',
      title: 'practice.cabins.c3.title',
      description: 'practice.cabins.c3.desc',
      difficulty: 'Fácil',
      icon: 'developer_board',
      color: 'purple',
      thumbnail: 'assets/images/premium/cabinet.png'
    },
    {
      id: 'c4',
      title: 'practice.cabins.c4.title',
      description: 'practice.cabins.c4.desc',
      difficulty: 'Medio',
      icon: 'terminal',
      color: 'teal',
      thumbnail: 'assets/images/exercises/IMG_0940.PNG'
    }
  ];

  currentStep = signal(3);
  steps = [
    { id: 1, title: 'practice.montage.steps.step1', status: 'done' },
    { id: 2, title: 'practice.montage.steps.step2', status: 'done' },
    { id: 3, title: 'practice.montage.steps.step3', status: 'active' },
    { id: 4, title: 'practice.montage.steps.step4', status: 'pending' },
    { id: 5, title: 'practice.montage.steps.step5', status: 'pending' },
  ];

  selectedCabinId = signal<string | null>(null);

  // Bornes para el montaje de motores (Cabina A)
  bornes = signal<{ id: string, label: string, connectedTo: string | null, type: 'motor' | 'power' }[]>([
    { id: 'L1', label: 'L1', connectedTo: null, type: 'power' },
    { id: 'L2', label: 'L2', connectedTo: null, type: 'power' },
    { id: 'L3', label: 'L3', connectedTo: null, type: 'power' },
    { id: 'U1', label: 'U1', connectedTo: null, type: 'motor' },
    { id: 'V1', label: 'V1', connectedTo: null, type: 'motor' },
    { id: 'W1', label: 'W1', connectedTo: null, type: 'motor' },
    { id: 'W2', label: 'W2', connectedTo: null, type: 'motor' },
    { id: 'U2', label: 'U2', connectedTo: null, type: 'motor' },
    { id: 'V2', label: 'V2', connectedTo: null, type: 'motor' },
  ]);

  activeSourceBorne = signal<string | null>(null);

  selectCabin(id: string) {
    this.selectedCabinId.set(id);
    this.viewMode.set('montage');
  }

  resetConnections() {
    this.bornes.update(bs => bs.map(b => ({ ...b, connectedTo: null })));
    this.activeSourceBorne.set(null);
  }

  toggleBorne(id: string) {
    const source = this.activeSourceBorne();
    if (!source) {
      this.activeSourceBorne.set(id);
    } else {
      if (source === id) {
        this.activeSourceBorne.set(null);
        return;
      }
      // Conectar bornes
      this.bornes.update(bs => bs.map(b => {
        if (b.id === id) return { ...b, connectedTo: source };
        if (b.id === source) return { ...b, connectedTo: id };
        return b;
      }));
      this.activeSourceBorne.set(null);
    }
  }

  get isCircuitoCorrecto() {
    const bs = this.bornes();
    // Validación básica para Estrella: W2-U2-V2 puenteados
    const W2 = bs.find(b => b.id === 'W2');
    const U2 = bs.find(b => b.id === 'U2');
    const V2 = bs.find(b => b.id === 'V2');

    // Simplificación: Solo chequeamos si W2 y U2 están conectados entre sí o a V2
    return (W2?.connectedTo === 'U2' || W2?.connectedTo === 'V2') &&
      (U2?.connectedTo === 'V2' || U2?.connectedTo === 'W2');
  }

  // Componentes KNX para la Cabina B
  knxComponents = signal<{ id: string, name: string, type: 'sensor' | 'actuator' | 'supply', address: string | null, groupAddress: string | null }[]>([
    { id: 'ps', name: 'practice.montage.components.knx_ps', type: 'supply', address: '1.1.0', groupAddress: null },
    { id: 's1', name: 'practice.montage.components.knx_switch', type: 'sensor', address: '1.1.1', groupAddress: null },
    { id: 'a1', name: 'practice.montage.components.knx_actuator', type: 'actuator', address: '1.1.2', groupAddress: null },
  ]);

  knxTargetAddress = signal<string | null>(null);

  assignGroupAddress(compId: string, ga: string) {
    this.knxComponents.update(comps => comps.map(c =>
      c.id === compId ? { ...c, groupAddress: ga } : c
    ));
    this.knxTargetAddress.set(null);
  }

  get isKnxCorrecto() {
    const comps = this.knxComponents();
    const sensor = comps.find(c => c.id === 's1');
    const actuator = comps.find(c => c.id === 'a1');
    return sensor?.groupAddress === '1/1/1' && actuator?.groupAddress === '1/1/1';
  }

  // Componentes Cuadro Eléctrico para la Cabina C
  cuadroComponents = signal<{ id: string, name: string, type: 'main' | 'diff' | 'mcb', connected: boolean, parentId: string | null }[]>([
    { id: 'iga', name: 'practice.montage.components.iga', type: 'main', connected: false, parentId: null },
    { id: 'id1', name: 'practice.montage.components.id', type: 'diff', connected: false, parentId: 'iga' },
    { id: 'c1', name: 'practice.montage.components.c1', type: 'mcb', connected: false, parentId: 'id1' },
    { id: 'c2', name: 'practice.montage.components.c2', type: 'mcb', connected: false, parentId: 'id1' },
  ]);

  toggleCuadroComponent(id: string) {
    this.cuadroComponents.update(comps => comps.map(c => {
      if (c.id === id) {
        const parent = comps.find(p => p.id === c.parentId);
        if (!c.parentId || (parent && parent.connected)) {
          return { ...c, connected: !c.connected };
        }
      }
      return c;
    }));
  }

  get isCuadroCorrecto() {
    return this.cuadroComponents().every(c => c.connected);
  }

  // Lógica Programada para la Cabina D
  logicInputs = signal<{ id: string, state: boolean }[]>([
    { id: 'I1', state: false },
    { id: 'I2', state: false },
  ]);
  selectedLogicGate = signal<'AND' | 'OR' | 'XOR'>('AND');

  toggleLogicInput(id: string) {
    this.logicInputs.update(ins => ins.map(i =>
      i.id === id ? { ...i, state: !i.state } : i
    ));
  }

  get logicOutput(): boolean {
    const i1 = this.logicInputs().find(i => i.id === 'I1')?.state || false;
    const i2 = this.logicInputs().find(i => i.id === 'I2')?.state || false;
    const gate = this.selectedLogicGate();
    if (gate === 'AND') return i1 && i2;
    if (gate === 'OR') return i1 || i2;
    if (gate === 'XOR') return i1 !== i2;
    return false;
  }

  get isLogicCorrecto() {
    // Reto: Conseguir que la salida Q1 sea TRUE usando la compuerta seleccionada
    return this.logicOutput === true;
  }

  completeMontage() {
    const cabinId = this.selectedCabinId();
    if (!cabinId) return;

    // Simular guardado de progreso
    this.progressService.completePracticeStep();
    this.viewMode.set('cabins');
    this.selectedCabinId.set(null);
  }
}
