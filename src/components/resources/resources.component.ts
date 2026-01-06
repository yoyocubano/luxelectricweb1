import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Resource {
    id: string;
    name: string;
    type: 'pdf' | 'image' | 'doc';
    url: string;
    category: string;
    description: string;
}

@Component({
    selector: 'app-resources',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './resources.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {
    searchQuery = signal('');
    selectedCategory = signal('Todos');

    categories = ['Todos', 'Exámenes', 'Esquemas', 'Ejercicios', 'Teoría'];

    allResources = signal<Resource[]>([
        // PDFs de Exámenes
        { id: 'pdf1', name: 'Examen 2023-2024', type: 'pdf', url: 'assets/pdfs/PIFQU_2023_2024_DAP_Theorie-a-F.pdf', category: 'Exámenes', description: 'Último examen oficial de teoría (Francés).' },
        { id: 'pdf2', name: 'Examen 2020-2021', type: 'pdf', url: 'assets/pdfs/PIFQU_2020_2021_DAP_ELF_161_F.pdf', category: 'Exámenes', description: 'Preguntas y esquemas del año 2020.' },
        { id: 'pdf3', name: 'Examen 2019-2020', type: 'pdf', url: 'assets/pdfs/PIFQU_2019_2020_DAP_ELF_161_F.pdf', category: 'Exámenes', description: 'Preguntas y esquemas del año 2019.' },
        { id: 'pdf4', name: 'Examen 2018-2019', type: 'pdf', url: 'assets/pdfs/PIFQU_2018_2019_DAP_ELF_161_F.pdf', category: 'Exámenes', description: 'Preguntas y esquemas del año 2018.' },
        { id: 'pdf5', name: 'Examen 2017-2018', type: 'pdf', url: 'assets/pdfs/PIFQU_2017_2018_DAP_ELF_161_F.pdf', category: 'Exámenes', description: 'Preguntas y esquemas del año 2017.' },
        { id: 'pdf6', name: 'Ejercicios DC3ELF 1-23', type: 'pdf', url: 'assets/pdfs/DC3ELF exercices 1-15_1-23.pdf', category: 'Ejercicios', description: 'Cuaderno completo de ejercicios prácticos.' },

        // Esquemas de ayer (NotebookLM)
        { id: 'doc1', name: 'Resumen Fórmulas', type: 'doc', url: '#', category: 'Teoría', description: 'Compendio de fórmulas de Ohm, Watt, Trifásica.' },

        // Imágenes de ejercicios (Muestra representativa)
        { id: 'img1', name: 'Esquema Potencia', type: 'image', url: 'assets/images/exercises/IMG_0930.PNG', category: 'Esquemas', description: 'Circuito de potencia para arranque de motor.' },
        { id: 'img2', name: 'Esquema Control', type: 'image', url: 'assets/images/exercises/IMG_0931.PNG', category: 'Esquemas', description: 'Lógica de contactores para marcha/paro.' },
        { id: 'img3', name: 'Cálculo de Secciones', type: 'image', url: 'assets/images/exercises/IMG_0932.PNG', category: 'Ejercicios', description: 'Ejercicio práctico de caída de tensión.' },
        { id: 'img4', name: 'Arranque Estrella', type: 'image', url: 'assets/images/exercises/IMG_0933.PNG', category: 'Esquemas', description: 'Esquema de conexiones Y/Δ.' },
        { id: 'img5', name: 'Inversión Giro', type: 'image', url: 'assets/images/exercises/IMG_0935.PNG', category: 'Esquemas', description: 'Circuito completo de inversión de giro.' }
    ]);

    filteredResources = computed(() => {
        const query = this.searchQuery().toLowerCase();
        const cat = this.selectedCategory();

        return this.allResources().filter(r => {
            const folderMatches = cat === 'Todos' || r.category === cat;
            const searchMatches = r.name.toLowerCase().includes(query) || r.description.toLowerCase().includes(query);
            return folderMatches && searchMatches;
        });
    });

    setCategory(cat: string) {
        this.selectedCategory.set(cat);
    }

    updateSearch(event: Event) {
        this.searchQuery.set((event.target as HTMLInputElement).value);
    }

    openResource(url: string) {
        if (url !== '#') {
            window.open(url, '_blank');
        }
    }

    downloadResource(resource: Resource) {
        const link = document.createElement('a');
        link.href = resource.url;
        link.download = `${resource.name}.${resource.type === 'pdf' ? 'pdf' : 'png'}`;
        link.click();
    }
}
