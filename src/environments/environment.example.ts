// ============================================
// 🔐 ENVIRONMENT TEMPLATE - COPY TO environment.ts
// ============================================
// 
// INSTRUCTIONS:
// 1. Copy this file to: src/environments/environment.ts
// 2. Replace the placeholder values with your actual API keys
// 3. NEVER commit environment.ts to the repository
//
// This file is safe to commit as it contains no real credentials.
// ============================================

export const environment = {
    // Supabase Configuration
    // Get your keys from: https://app.supabase.com/project/YOUR_PROJECT/settings/api
    supabaseUrl: 'https://YOUR_PROJECT_ID.supabase.co',
    supabaseKey: 'YOUR_SUPABASE_ANON_KEY_HERE',
    
    // Google Gemini API Key
    // Get your key from: https://aistudio.google.com/app/apikey
    googleApiKey: 'YOUR_GOOGLE_GEMINI_API_KEY_HERE',
    
    // Environment flag
    production: false
};

// ============================================
// 📋 CHECKLIST BEFORE RUNNING:
// ============================================
// [ ] Copied this file to environment.ts
// [ ] Added Supabase URL and Anon Key
// [ ] Added Google Gemini API Key
// [ ] Verified environment.ts is in .gitignore
// ============================================
