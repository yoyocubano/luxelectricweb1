import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TheoryComponent } from './components/theory/theory.component';
import { PracticeComponent } from './components/practice/practice.component';
import { GamesComponent } from './components/games/games.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { VoltajeVelozComponent } from './components/games/voltaje-veloz/voltaje-veloz.component';
import { MaestroMontajeComponent } from './components/games/maestro-montaje/maestro-montaje.component';
import { CableadoMaestroComponent } from './components/games/cableado-maestro/cableado-maestro.component';
import { SimuladorLogicoComponent } from './components/games/simulador-logico/simulador-logico.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CalculatorsComponent } from './components/calculators/calculators.component';
import { TrainerComponent } from './components/trainer/trainer.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'theory', component: TheoryComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'calculators', component: CalculatorsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/voltaje-veloz', component: VoltajeVelozComponent },
  { path: 'games/maestro-montaje', component: MaestroMontajeComponent },
  { path: 'games/cableado-maestro', component: CableadoMaestroComponent },
  { path: 'games/simulador-logico', component: SimuladorLogicoComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: '**', redirectTo: 'dashboard' } // Wildcard route for a 404 page
];
