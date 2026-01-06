# 🔐 Security Setup Guide - LuxEléctrico

## ⚠️ IMPORTANT: Before Running the Project

This project requires sensitive API keys that are **NOT included in the repository** for security reasons.

## 📋 Quick Setup (3 Steps)

### Step 1: Create Environment File
```bash
# Copy the template
cp .env.example .env

# Or on Windows PowerShell
Copy-Item .env.example .env
```

### Step 2: Add Your API Keys
Edit `.env` and replace the placeholder values with your real credentials:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=your_real_key_here
GOOGLE_API_KEY=your_gemini_api_key_here
```

### Step 3: Create TypeScript Environment
```bash
# Copy the TypeScript template
cp src/environments/environment.example.ts src/environments/environment.ts
```

Then edit `src/environments/environment.ts` with your real keys.

## 🔑 Where to Get API Keys

| Service | Where to Get Key |
|---------|------------------|
| **Supabase** | [app.supabase.com](https://app.supabase.com) → Project Settings → API |
| **Google Gemini** | [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| **Resend** | [resend.com/api-keys](https://resend.com/api-keys) |
| **DeepSeek** | [platform.deepseek.com](https://platform.deepseek.com) |

## 🛡️ Security Best Practices

1. **Never commit `.env` or `environment.ts`** - They are in `.gitignore`
2. **Use different keys for dev/prod** - Create separate Supabase projects
3. **Rotate keys regularly** - If you suspect a leak, regenerate immediately
4. **Use environment variables in CI/CD** - Never hardcode in pipelines

## ✅ Verification

After setup, verify your files are protected:
```bash
git status
# Should NOT show .env or environment.ts as modified
```

---
*Last updated: 2026-01-06*
