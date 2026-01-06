
import { ChangeDetectionStrategy, Component, inject, signal, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AiService, ChatMessage } from '../../services/ai.service';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
    selector: 'app-trainer',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, I18nPipe],
    templateUrl: './trainer.component.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainerComponent implements AfterViewChecked {
    private aiService = inject(AiService);

    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    messages = signal<ChatMessage[]>([
        { role: 'model', content: '¡Qué bolá, asere! Soy tu entrenador de LuxElectro. Estoy aquí para que ese examen del 19 de enero sea pan comido. ¿Por qué quieres empezar hoy? ¿Motores, esquemas o normativas?' }
    ]);

    userInput = signal('');
    isLoading = this.aiService.isLoading;
    selectedModel = signal<'gemini' | 'deepseek'>('gemini');

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    async sendMessage() {
        const text = this.userInput().trim();
        if (!text || this.isLoading()) return;

        // Añadir mensaje del usuario
        const userMsg: ChatMessage = { role: 'user', content: text };
        this.messages.update(msgs => [...msgs, userMsg]);
        this.userInput.set('');

        // Llamar a la IA
        const response = await this.aiService.chat(this.messages());

        // Añadir respuesta de la IA
        const modelMsg: ChatMessage = { role: 'model', content: response };
        this.messages.update(msgs => [...msgs, modelMsg]);
    }

    setAiModel(model: 'gemini' | 'deepseek') {
        this.selectedModel.set(model);
        this.aiService.setProvider(model);
    }
}
