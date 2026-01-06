import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-calculators',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './calculators.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorsComponent {
    activeTab = signal<'cable' | 'motor' | 'basics'>('cable');

    // Cable Sizer State
    cablePower = signal(2500);
    cableVoltage = signal(230);
    cableLength = signal(20);
    cablePhase = signal<'mono' | 'tri'>('mono');
    cableCosPhi = signal(0.85);

    // Motor State
    motorPower = signal(5500); // 5.5 kW
    motorVoltage = signal(400);
    motorEfficiency = signal(0.88);
    motorCosPhi = signal(0.8);

    // Basics State
    val1 = signal(230);
    val2 = signal(10);
    basicsType = signal<'ohm' | 'power'>('ohm');

    // Results - Cable
    cableCurrent = computed(() => {
        const p = this.cablePower();
        const v = this.cableVoltage();
        const cos = this.cableCosPhi();
        if (this.cablePhase() === 'mono') {
            return p / (v * cos);
        } else {
            return p / (Math.sqrt(3) * v * cos);
        }
    });

    recommendedSection = computed(() => {
        const i = this.cableCurrent();
        const l = this.cableLength();
        const deltaV_pct = 3; // Límite alumbrado
        const v = this.cableVoltage();
        const rho = 0.01724; // Cobre

        // Caída de tensión ∆U = (2 * L * I * cosPhi / Section) -> S = (2 * L * I * cosPhi) / ∆U
        const deltaU_max = (v * deltaV_pct) / 100;
        const factor = this.cablePhase() === 'mono' ? 2 : Math.sqrt(3);
        const s_min = (factor * l * i * this.cableCosPhi() * rho) / deltaU_max;

        // Secciones estándar
        const standards = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50];
        return standards.find(s => s >= s_min && s >= (i / 6)) || 70; // 6A/mm2 regla básica térmico
    });

    // Results - Motor
    motorCurrent = computed(() => {
        const p = this.motorPower();
        const v = this.motorVoltage();
        const cos = this.motorCosPhi();
        const eff = this.motorEfficiency();
        return p / (Math.sqrt(3) * v * cos * eff);
    });

    basicsResult = computed(() => {
        if (this.basicsType() === 'ohm') {
            return this.val1() / this.val2(); // R = U / I
        } else {
            return this.val1() * this.val2(); // P = U * I
        }
    });

    setTab(tab: 'cable' | 'motor' | 'basics') {
        this.activeTab.set(tab);
    }
}
