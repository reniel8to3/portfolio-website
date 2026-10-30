# 🌸 Whimsical Pink & White Portfolio

A dreamy, responsive, and performance-optimized personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with the exact pink & white palette you provided, floating sparkles, soft curves, and friendly placeholders ready for you to fill in!

---

## 🎨 Color Palette Used

- **`#FE5D9F`** (Cyclamen) — Vibrant primary button gradients, sparkles & active badges
- **`#F686BD`** (Persian Pink) — Medium glow accents, borders & active highlights
- **`#F4BBD3`** (Orchid Pink) — Soft pastel borders & badge ribbons
- **`#F5D2E4`** (Mimi Pink) — Subtle card borders, dot textures & scrollbar
- **`#F5E8F5`** (Pale Purple / Lilac) — Soft chip backgrounds & pill badges
- **`#FFF9FB`** & **`#FFFFFF`** — Warm creamy white background with subtle polka dots
- **`#442233`** & **`#733E57`** — Rich warm plum typography for maximum contrast and legibility

---

## ✏️ How to Fill in Your Information in VS Code

All content is populated with intuitive placeholders inside **one single file**:

👉 Open [`src/data/portfolioData.ts`](src/data/portfolioData.ts) in VS Code.

Look for the placeholder tags like `"[Your Name]"`, `"[Your Title]"`, `"[Project Title 1]"`, and fill them in with your real details whenever you are ready:

1. **`personal`**:
   - `name`: `"[Your Name]"`
   - `role`: `"[Your Title / Role]"`
   - `shortBio`: Your brief opening tagline
   - `about.paragraphs`: 3 narrative paragraphs sharing your story, process, and interests
   - `email`: `your.email@example.com`
   - `socials`: Links to your GitHub, LinkedIn, X, etc.
   - `resumeUrl`: Link to `/resume.pdf` (drop your PDF into the `public/` folder)
2. **`skills`**:
   - Grouped into 4 categories (*Design & Frontend*, *Backend & Systems*, *Creative Tools*, *Other Specialties*)
   - Each skill can have a level (`"Expert"`, `"Advanced"`, `"Intermediate"`)
3. **`projects`**:
   - Add your own projects with title, category, description, feature highlights, tags, and live demo / GitHub links
4. **`education`**:
   - Degree, major, school name, timeline, honors/GPA, coursework chips, and academic achievements
5. **`certifications`**:
   - Certification title, issuing platform, date, credential ID, and verification link
6. **`experiences`**:
   - Internships, jobs, or club leadership entries

---

## 💻 Running Locally in VS Code

1. In VS Code, open the built-in terminal (`Ctrl + \``).
2. If PowerShell script restrictions are enabled, run either:
   ```powershell
   npm.cmd run dev
   ```
   *or apply the one-time user policy:*
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   npm run dev
   ```
3. Open your browser to:
   ```text
   http://localhost:3000
   ```
Every time you save `src/data/portfolioData.ts`, your portfolio will update instantly!

---

## 🚀 Deploying to Vercel (Free & Instant)

### Option 1: Via GitHub (Recommended)
1. Commit and push:
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   git add .
   git commit -m "Whimsical pink and white portfolio"
   ```
2. Push to your GitHub repository and link it in [vercel.com](https://vercel.com).
3. Vercel automatically deploys it in under a minute with free SSL and automatic redeploys on every push.

### Option 2: Via Vercel CLI
```powershell
npx vercel
```
Follow the prompts in your terminal to deploy immediately!
