## 🔄 Cómo reemplazar a Copilot por DeepSeek (Pasos Finales)

Para que DeepSeek ocupe el lugar de Copilot en tu día a día, haz lo siguiente:

### 1. Desactiva Copilot
No hace falta borrarlo, solo apágalo para que no moleste:
- Haz clic en el icono pequeño de Copilot (la cara de robot abajo a la derecha).
- Selecciona **"Disable Completions"** o **"Sign Out"**.

### 2. Usa Continue como tu Asistente Principal
- **Chat:** En lugar de usar `Ctrl + I` (de Copilot), ahora usa el panel de **Continue** en la barra lateral.
- **Autocompletado (Tab):** Si quieres que DeepSeek te sugiera código mientras escribes, ve a los ajustes de **Continue** (el icono del engranaje) y busca la opción `"tabAutocompleteModel"`.

### 3. Atajos Rápidos
- **`Ctrl + L`**: Abre el chat de Continue para preguntar cosas.
- **`Ctrl + Shift + L`**: Pide al asistente que edite el código que tienes seleccionado.

### 1. Install Extension
Go to the VSCode Extensions marketplace (Ctrl+Shift+X) and search for:
### 2. Configurar DeepSeek (Paso a Paso)
Una vez instalada la extensión **Continue**, sigue estos pasos exactos para configurar el JSON:

1.  **Abre el panel de Continue:** Haz clic en el icono de **Continue** (el símbolo `>`) en la barra lateral izquierda de VSCode.
2.  **Abre los ajustes (el JSON):** En la esquina inferior derecha del panel de Continue, verás un icono de **engranaje (Settings)**. Haz clic en él. Esto abrirá un archivo llamado `config.json`.
3.  **Localiza la sección "models":** Busca donde empieza el texto `"models": [`.
4.  **Pega el código:** Borra lo que haya dentro de los corchetes `[]` (o añade una coma antes de pegar si ya tienes otros) y pega este bloque:

```json
{
  "title": "DeepSeek Coder",
  "model": "deepseek-coder",
  "apiKey": "sk-ee8de57e3144456aa0b13285ada8c0eb",
  "apiBase": "https://api.deepseek.com",
  "provider": "openai"
}
```

5.  **Guarda el archivo:** Presiona `Ctrl + S`. La extensión se reiniciará sola y ya verás **DeepSeek Coder** listo para usar en el menú desplegable.

### ⚠️ Solución de Errores en tu JSON
He visto tu configuración y hay un pequeño error en las comillas que hará que no funcione. Aquí tienes la corrección.

#### Si estás editando el `settings.json` de VSCode (para la extensión de DeepSeek):
Copia y pega esto exactamente así (fíjate que he quitado las barras `\` en la API Key):

```json
{
    "workbench.iconTheme": "vscode-icons",
    "vsicons.dontShowNewVersionMessage": true,
    "workbench.colorTheme": "Default Dark+",
    "editor.fontSize": 16,
    "git.openRepositoryInParentFolders": "never",
    "deepseek.apiKey": "sk-ee8de57e3144456aa0b13285ada8c0eb",
    "deepseek.banmaModel": "deepseek-coder"
}
```

#### 💡 Diferencia Importante:
- **`settings.json` (Lo que enviaste):** Sirve para configurar la apariencia de VSCode y algunas extensiones simples de DeepSeek.
- **`config.json` (De la extensión Continue):** Es el que te recomendé para tener un **Agente (Persona)**. Si quieres que el asistente se comporte como el "Ingeniero Senior de LuxEléctrico", debes usar **Continue**.

Si prefieres seguir con la extensión que ya tienes, asegúrate de quitar las comillas extras (`\"`) en la API Key como puse arriba.
### 3. ¡Dale el "Cerebro" de LuxEléctrico! (PASO FINAL)
Para que el asistente se comporte como el experto del proyecto, debes copiar el siguiente texto en los ajustes de "Instrucciones Personalizadas" (Custom Instructions) de tu extensión.

#### 📍 ¿Dónde pegarlo?
- **Si usas la extensión que ya tienes:** Busca en los ajustes de VSCode (`Ctrl + ,`) la palabra `System Prompt` o `Template`.
- **Si usas Continue:** Haz clic en el engranaje del panel de Continue y busca la sección `"customInstructions"`.

#### 🧠 Copia y pega este texto (Misión Reforzada):
```markdown
Actúa como mi Ingeniero Senior Fullstack y Auditor de confianza. 

TU MISIÓN PRINCIPAL:
1. **Corregir Código:** Audita cada archivo que revise y corrige errores de sintaxis o lógica.
2. **Depuración:** Identifica, verifica y soluciona bugs de forma proactiva.
3. **Mejora Continua:** Propón mejoras de rendimiento, seguridad y arquitectura en cada proyecto.
4. **Proyecto Foco (LuxEléctrico):** Ayúdame a preparar el examen de electricista en Luxemburgo (19 enero). El stack es Angular 21 (Signals, Zoneless) y Supabase.

ESTILO:
- Sé técnico, preciso y directo al grano con las correcciones.
- Usa el estilo del "Entrenador Cubano" (¡Dale gas!, ¡Asere!) para motivar y dar feedback positivo.
```

---

## 📸 Windows Screenshot Pro Tip
To take a screenshot in Windows instantly:
- **`Win + Shift + S`**: Opens the Snipping Tool. You can select an area, a window, or the full screen. The image is saved to your clipboard (you can paste it in chat) and saved automatically in `Pictures > Screenshots`.

### ❌ ¿El asistente te devuelve un "div vacío" o nada?
Si le pides que revise código y no te responde nada útil, suele ser por una de estas 3 razones:

1.  **Falta de Contexto (El "@"):** El asistente no adivina qué archivo quieres revisar. Debes decirle qué ver. En el chat, escribe `@` seguido del nombre del archivo. Ejemplo: `@ai.service.ts revisa si hay bugs`.
2.  **Selección de Modelo Incorrecta:** Asegúrate de que en la parte inferior del chat diga **`deepseek-coder`**. Si dice `deepseek-chat` (V3), a veces se confunde con código muy específico.
3.  **Archivo no guardado:** El asistente suele leer la versión guardada en disco. Pulsa `Ctrl + S` antes de preguntar.

#### 💡 Prueba este truco:
Selecciona con el ratón el trozo de código que falla, y luego presiona **`Ctrl + L`**. Eso "mete" automáticamente el código seleccionado en el chat para que el asistente lo vea.

---

---

## 📂 Carpeta `userideas` Repuesta
He vuelto a crear la carpeta `userideas` en la raíz del proyecto.
- **¿Para qué sirve?** Úsala para dejarme capturas de pantalla, archivos de texto, PDFs o cualquier material que quieras que yo analice e integre en el proyecto. 
- **Ojo:** Una vez que yo integre los archivos en la estructura oficial (`assets/`), los moveré para mantener el orden de la casa.

---

## 🛠️ Prueba de Diagnóstico (Si el chat falla)
Si el asistente te devuelve un "div vacío", escribe esto en el chat:
> "Hola, ¿puedes leerme? Responde solo con 'SÍ' si la conexión funciona."

### ❌ ¿Sigues con la página en blanco? (Caso: Extensión DeepSeek-AI)
Por el JSON que me pasaste, parece que estás usando la extensión oficial de **DeepSeek** o una llamada **Banma**, y no la de **Continue**. 

Para que esta extensión funcione:
1.  **Reinicia VSCode:** Es vital después de cambiar el `settings.json`.
2.  **Abre los Logs de Error:** Si sigue fallando, vamos a "abrir el capó" para ver qué pasa:
    - Ve al menú superior: **View (Ver) > Output (Salida)**.
    - En el panel que se abre abajo a la derecha, en el desplegable, busca **"DeepSeek"** o **"DeepSeek-Chat"**.
    - Copia lo que diga ahí y mételo en la carpeta `userideas` en un archivo de texto. ¡Eso me dirá exactamente el error!

#### 💡 Sugerencia técnica:
Si la extensión específica de DeepSeek te da problemas (porque a veces se satura), te recomiendo mucho **Continue**. Es la que te permite usar el "System Prompt" (cerebro) que te preparé de forma mucho más estable.
