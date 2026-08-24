# Julie Goetzinger — Astrocartography & Intuition

A beautiful, high-end editorial website built with **Next.js 15+ (App Router)**, styled with **Tailwind CSS**, and animated with **Motion**. Optimized with clean typography, sophisticated layouts, and responsive interfaces to match a premium wellness and celestial astrology brand.

---

## 🚀 Deploy to Vercel

This application is fully optimized for zero-config, ultra-fast hosting on **Vercel**. Since it is built on Next.js 15 with App Router, Vercel will automatically detect, optimize, and build it natively.

### Option 1: Deploy with Vercel & GitHub (Recommended)

1. **Push to GitHub**:
   - Create a new repository on your GitHub account.
   - Push this codebase to your repository:
     ```bash
     git init
     git add .
     git commit -m "feat: initial commit for premium astrocartography site"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Sign in and click **Add New** -> **Project**.
   - Import your GitHub repository.

3. **Configure & Deploy**:
   - Vercel will automatically detect **Next.js** as the Framework Preset.
   - Click **Deploy**. Vercel will build and launch your application globally under a free `.vercel.app` subdomain (or your custom domain).

---

### Option 2: Deploy via Vercel CLI (Command Line)

If you have the Vercel CLI installed globally (`npm i -g vercel`), you can deploy directly from your terminal in 2 seconds:

1. Open your terminal at the project root directory.
2. Run the deployment command:
   ```bash
   vercel
   ```
3. Follow the interactive prompts to log in, link the project, and configure it (you can accept all default choices).
4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Project Configuration & Performance Settings

This project is built using:
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React (`lucide-react`)

### Next.js Standalone Configuration
The file `next.config.ts` includes `output: 'standalone'` which is ideal for containerized or Docker-based environments. Vercel automatically overrides and optimizes this during its serverless build, but you can leave it as-is for maximum hosting flexibility!
