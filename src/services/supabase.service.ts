import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase!: SupabaseClient;
    private offlineMode = false;

    // Mock para evitar crashes cuando no hay claves
    private mockBuilder = {
        select: () => this.mockBuilder,
        insert: () => Promise.resolve({ data: null, error: null }),
        upsert: () => Promise.resolve({ data: null, error: null }),
        eq: () => this.mockBuilder,
        single: () => Promise.resolve({ data: null, error: null }),
        then: (resolve: any) => resolve({ data: [], error: null })
    };

    private mockClient = {
        from: (table: string) => this.mockBuilder
    };

    constructor() {
        const url = environment.supabaseUrl || '';
        if (!url || url.toLowerCase().includes('your_project_id') || url.toLowerCase().includes('placeholder')) {
            console.info('ℹ️ [Offline Mode] App running with Mock Database (Missing Supabase Keys or Placeholder found).');
            this.offlineMode = true;
        } else {
            this.supabase = createClient(
                environment.supabaseUrl,
                environment.supabaseKey
            );
        }
    }

    get client(): SupabaseClient {
        if (this.offlineMode) {
            return this.mockClient as any;
        }
        return this.supabase;
    }

    // Método genérico para consultar datos
    async getTableData(tableName: string) {
        if (this.offlineMode) return [];

        const { data, error } = await this.supabase
            .from(tableName)
            .select('*');

        if (error) throw error;
        return data;
    }

    // Método para guardar progreso o puntuación
    async saveData(tableName: string, data: any) {
        if (this.offlineMode) {
            console.log(`[Offline] Simulated save to ${tableName}:`, data);
            return;
        }

        const { error } = await this.supabase
            .from(tableName)
            .insert(data);

        if (error) throw error;
    }
}
