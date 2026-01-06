import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(
            environment.supabaseUrl,
            environment.supabaseKey
        );
    }

    get client(): SupabaseClient {
        return this.supabase;
    }

    // Método genérico para consultar datos
    async getTableData(tableName: string) {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('*');

        if (error) throw error;
        return data;
    }

    // Método para guardar progreso o puntuación
    async saveData(tableName: string, data: any) {
        const { error } = await this.supabase
            .from(tableName)
            .insert(data);

        if (error) throw error;
    }
}
