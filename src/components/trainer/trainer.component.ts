import { ChangeDetectionStrategy, Component, inject, signal, ElementRef, ViewChild, effect } from '@angular/core';
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
export class TrainerComponent {
    private aiService = inject(AiService);
    private isAutoScrollEnabled = true;

    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    messages = signal<ChatMessage[]>([
        { role: 'model', content: '¡Qué bolá, asere! Soy tu entrenador de LuxElectro. Estoy aquí para que ese examen del 19 de enero sea pan comido. ¿Por qué quieres empezar hoy? ¿Motores, esquemas o normativas?' }
    ]);

    userInput = signal('');
    isLoading = this.aiService.isLoading;
    selectedModel = signal<'gemini' | 'deepseek'>('gemini');
    isTyping = signal(false); // New signal for typewriter effect

    constructor() {
        // Automatically scroll when messages update
        effect(() => {
            this.messages(); // track changes
            this.scrollToBottom();
        });
    }

    // Detect intentional manual scroll up
    onScroll(event: Event) {
        const element = event.target as HTMLElement;
        const threshold = 150; // generous threshold
        const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + threshold;
        this.isAutoScrollEnabled = isAtBottom;
    }

    private scrollToBottom(): void {
        if (!this.isAutoScrollEnabled) return;

        // Use requestAnimationFrame for smoother performance like welux
        requestAnimationFrame(() => {
            if (this.scrollContainer) {
                try {
                    this.scrollContainer.nativeElement.scrollTo({
                        top: this.scrollContainer.nativeElement.scrollHeight,
                        behavior: 'smooth'
                    });
                } catch (err) { }
            }
        });
    }

    // Since strictly using signals, we'll call scrollToBottom after updates

    async sendMessage(overrideText?: string) {
        const text = (overrideText || this.userInput()).trim();
        if (!text || (this.isLoading() && !overrideText)) return;

        // Añadir mensaje del usuario
        const userMsg: ChatMessage = { role: 'user', content: text };
        this.messages.update(msgs => [...msgs, userMsg]);
        this.userInput.set('');
        this.scrollToBottom();

        // Llamar a la IA
        const responseData = await this.aiService.chat(this.messages());

        // Añadir respuesta de la IA (vacía al inicio para el typewriter)
        const modelMsg: ChatMessage = {
            role: 'model',
            content: '',
            isKb: responseData.source === 'kb'
        };

        const msgIndex = this.messages().length;
        this.messages.update(msgs => [...msgs, modelMsg]);

        await this.typewriter(responseData.content, msgIndex);
    }

    private async typewriter(text: string, index: number) {
        this.isTyping.set(true);
        let currentContent = '';
        const words = text.split(' ');

        for (let i = 0; i < words.length; i++) {
            currentContent += words[i] + (i === words.length - 1 ? '' : ' ');

            // Actualizar el mensaje en el signal
            this.messages.update(msgs => {
                const newMsgs = [...msgs];
                if (newMsgs[index]) {
                    newMsgs[index] = { ...newMsgs[index], content: currentContent };
                }
                return newMsgs;
            });

            this.scrollToBottom();

            // Velocidad variable para naturalidad
            const delay = Math.random() * 30 + 20;
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        this.isTyping.set(false);
    }

    onTipClick(tip: string) {
        if (this.isLoading() || this.isTyping()) return;
        const query = tip.replace('💡 ', '');
        this.sendMessage(query);
    }

    setAiModel(model: 'gemini' | 'deepseek') {
        this.selectedModel.set(model);
        this.aiService.setProvider(model);
    }
}
