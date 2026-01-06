import { ChangeDetectionStrategy, Component, computed, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../../pipes/i18n.pipe';
import { ProgressService } from '../../../services/progress.service';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

type GameState = 'start' | 'playing' | 'finished';
type PlayState = 'layout' | 'components' | 'wiring';

interface Terminal {
  id: string;
  x: number; // Relative to component
  y: number;
  type: 'power' | 'control';
}

interface Draggable {
  id: string;
  name: string;
  type: 'duct' | 'rail' | 'component' | 'wire';
  image: string; // Path to image asset
  width: number; // in px
  height: number; // in px
  x?: number; // Free positioning
  y?: number;
  placed?: boolean; // Keep for compatibility if needed, but rely on lists
  resizable?: boolean; // New: Allow resizing
  terminals?: Terminal[]; // New: Connection points
}

interface Wire {
  id: string;
  from: string; // terminal ID
  to: string; // terminal ID
  isNeat: boolean; // routed through ducts
}

import { DinRailComponent } from '../../game-assets/din-rail.component';
import { CableDuctComponent } from '../../game-assets/cable-duct.component';

@Component({
  selector: 'app-maestro-montaje',
  templateUrl: './maestro-montaje.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, I18nPipe, DragDropModule, DinRailComponent, CableDuctComponent],
})
export class MaestroMontajeComponent {
  gameState = signal<GameState>('start');
  playState = signal<PlayState>('layout');

  // Game elements - Updated with real assets and interactive properties
  inventoryMaster = signal<Draggable[]>([
    {
      id: 'rail1', name: 'Carril DIN 1', type: 'rail', image: 'assets/images/components/din_rail.png',
      width: 300, height: 35, resizable: true
    },
    {
      id: 'rail2', name: 'Carril DIN 2', type: 'rail', image: 'assets/images/components/din_rail.png',
      width: 300, height: 35, resizable: true
    },
    {
      id: 'duct-top', name: 'Canaleta Sup.', type: 'duct', image: 'assets/images/components/cable_duct.png',
      width: 300, height: 40, resizable: true
    },
    {
      id: 'duct-mid', name: 'Canaleta Cen.', type: 'duct', image: 'assets/images/components/cable_duct.png',
      width: 300, height: 40, resizable: true
    },
    {
      id: 'q1', name: 'Disyuntor Q1', type: 'component', image: 'assets/images/components/mcb.png',
      width: 60, height: 100, resizable: false,
      terminals: [
        { id: '1', x: 15, y: 5, type: 'power' }, { id: '3', x: 45, y: 5, type: 'power' },
        { id: '2', x: 15, y: 95, type: 'power' }, { id: '4', x: 45, y: 95, type: 'power' }
      ]
    },
    {
      id: 'km1', name: 'Contactor KM1', type: 'component', image: 'assets/images/components/contactor.png',
      width: 80, height: 100, resizable: false,
      terminals: [
        { id: '1', x: 15, y: 5, type: 'power' }, { id: '3', x: 40, y: 5, type: 'power' }, { id: '5', x: 65, y: 5, type: 'power' },
        { id: '2', x: 15, y: 95, type: 'power' }, { id: '4', x: 40, y: 95, type: 'power' }, { id: '6', x: 65, y: 95, type: 'power' },
        { id: 'A1', x: 5, y: 50, type: 'control' }, { id: 'A2', x: 75, y: 50, type: 'control' }
      ]
    },
    {
      id: 'f1', name: 'Relé Térmico F1', type: 'component', image: 'assets/images/components/thermal_relay.png',
      width: 80, height: 90, resizable: false,
      terminals: [
        { id: '1', x: 15, y: 0, type: 'power' }, { id: '3', x: 40, y: 0, type: 'power' }, { id: '5', x: 65, y: 0, type: 'power' },
        { id: '2', x: 15, y: 90, type: 'power' }, { id: '4', x: 40, y: 90, type: 'power' }, { id: '6', x: 65, y: 90, type: 'power' },
        { id: '95', x: 60, y: 20, type: 'control' }, { id: '96', x: 70, y: 20, type: 'control' }
      ]
    },
  ]);

  inventory = signal<Draggable[]>([]);
  placedItems = signal<Draggable[]>([]);
  wires = signal<Wire[]>([]);

  cleanliness = signal(100);
  isWiringCorrect = signal(false);
  finalScore = signal(0);
  feedbackMessage = signal('');

  // Computed state
  layoutPlaced = computed(() => this.placedItems().filter(item => item.type === 'duct' || item.type === 'rail').length >= 4);
  componentsPlaced = computed(() => this.placedItems().filter(item => item.type === 'component').length >= 3);

  constructor(private progressService: ProgressService) {
    effect(() => {
      // Auto-advance phases for guidance, but allow flexibility
      if (this.layoutPlaced() && this.playState() === 'layout') {
        // Optional: Auto-advance or visual cue
      }
    });
  }

  startGame() {
    this.gameState.set('playing');
    this.playState.set('layout');
    // Deep copy to reset state
    this.inventory.set(JSON.parse(JSON.stringify(this.inventoryMaster())));
    this.placedItems.set([]);
    this.wires.set([]);
    this.cleanliness.set(100);
    this.isWiringCorrect.set(false);
  }

  drop(event: CdkDragDrop<Draggable[]>) {
    if (event.previousContainer === event.container) {
      // Reorder within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move from Inventory to Panel
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const item = event.container.data[event.currentIndex];
      // Mark as placed visually
      item.placed = true;

      // Update logic based on item type
      if (item.type === 'duct' || item.type === 'rail') {
        // Check progress to unlock next phase if needed
      }
    }

    // Trigger signal updates
    this.inventory.set([...this.inventory()]);
    this.placedItems.set([...this.placedItems()]);
  }

  // Resize Logic
  isResizing = signal(false);
  activeItem: Draggable | null = null;
  initialX = 0;
  initialWidth = 0;

  startResize(event: MouseEvent, item: Draggable) {
    if (!item.resizable) return;
    event.stopPropagation();
    this.isResizing.set(true);
    this.activeItem = item;
    this.initialX = event.clientX;
    this.initialWidth = item.width;

    // Add global listeners
    window.addEventListener('mousemove', this.onResize);
    window.addEventListener('mouseup', this.stopResize);
  }

  onResize = (event: MouseEvent) => {
    if (!this.activeItem) return;
    const delta = event.clientX - this.initialX;
    const newWidth = Math.max(50, this.initialWidth + delta); // Min width 50px

    // Update item in place (mutating for performance during drag, or signal update)
    // For Signal hygiene, we should update the signal:
    this.placedItems.update(items =>
      items.map(i => i.id === this.activeItem!.id ? { ...i, width: newWidth } : i)
    );
  };

  stopResize = () => {
    this.isResizing.set(false);
    this.activeItem = null;
    window.removeEventListener('mousemove', this.onResize);
    window.removeEventListener('mouseup', this.stopResize);
  };

  // Wiring Logic
  selectedTerminal = signal<{ item: Draggable; terminal: Terminal } | null>(null);

  handleTerminalClick(item: Draggable, terminal: Terminal) {
    if (this.playState() !== 'wiring') return;

    const current = this.selectedTerminal();

    if (!current) {
      // Select first point
      this.selectedTerminal.set({ item, terminal });
    } else {
      // Connect to second point
      if (current.item.id === item.id) { // Allow self-connect? No, usually not helpful for this game
        this.selectedTerminal.set(null);
        return;
      }

      const id = `wire-${this.wires().length + 1}`;
      this.wires.update(w => [...w, {
        id,
        from: `${current.item.id}`,
        to: `${item.id}`,
        isNeat: true
      }]);

      this.selectedTerminal.set(null);
    }
  }

  // Simplified manual wiring (for now, keeping existing logic as a mode)
  addWire(isNeat: boolean) {
    if (!this.componentsPlaced()) return;

    const id = `wire-${this.wires().length + 1}`;
    this.wires.update(w => [...w, { id, from: 'a', to: 'b', isNeat }]);

    if (!isNeat) {
      this.cleanliness.update(c => Math.max(0, c - 15));
    }
  }

  checkWork() {
    // Simplified validation
    const hasMessyWires = this.wires().some(w => !w.isNeat);
    // Allow pass if components are placed, even if wiring is simulated for now
    this.isWiringCorrect.set(this.componentsPlaced());

    const cleanlinessScore = this.cleanliness();
    const correctnessScore = this.isWiringCorrect() ? 100 : 0;

    const calculatedScore = Math.round((correctnessScore * 0.7) + (cleanlinessScore * 0.3));
    this.finalScore.set(calculatedScore);

    this.progressService.completeGame(calculatedScore, 100);

    if (calculatedScore === 100) {
      this.progressService.checkAndUnlockAchievement('perfect_assembly', true);
    }

    if (!this.isWiringCorrect()) {
      this.feedbackMessage.set('games.maestro_montaje.feedback.missing');
    } else if (hasMessyWires) {
      this.feedbackMessage.set('games.maestro_montaje.feedback.messy');
    } else {
      this.feedbackMessage.set('games.maestro_montaje.feedback.perfect');
    }

    this.gameState.set('finished');
  }

  restartGame() {
    this.startGame();
  }
}
