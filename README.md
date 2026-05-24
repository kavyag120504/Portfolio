# Kavya Goswami — Portfolio

**🌐 Live Demo: [portfolio-one-mauve-32.vercel.app](https://portfolio-one-mauve-32.vercel.app)**

A premium developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
kavya-portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, utilities
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky nav with active section tracking
│   ├── Hero.tsx           # Hero with typing animation & profile photo
│   ├── About.tsx          # Bio, stats, education
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Filterable project showcase
│   ├── Skills.tsx         # Animated skill bars + scrolling banner
│   ├── Achievements.tsx   # GitHub stats, LeetCode, certifications
│   ├── Contact.tsx        # Contact form + social links
│   ├── Footer.tsx         # Footer
│   └── icons.tsx          # Custom SVG brand icons (GitHub, LinkedIn)
├── lib/
│   └── data.ts            # All portfolio data (edit this to update content)
└── public/
    └── profile.jpg        # Your profile photo (replace with your actual photo)
```

## 🖼️ Adding Your Profile Photo

Replace `public/profile.jpg` with your actual photo. The image should be:
- Square format (1:1 ratio)
- At least 400×400px
- Named `profile.jpg`

## 📄 Adding Your Resume

Place your resume PDF at `public/resume.pdf` to enable the download button.

## ✏️ Customizing Content

All portfolio data is in `lib/data.ts`. Edit that file to update:
- Personal info, links, bio
- Education, experience, projects
- Skills, certifications, achievements

---

## 🌐 Deployment

### Option 1: Vercel (Recommended — Free & Easiest)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub

3. Click **"New Project"** → Import your repository

4. Click **Deploy** — Vercel auto-detects Next.js, no config needed

5. Your site is live at `https://your-project.vercel.app`

6. **Custom domain**: In Vercel dashboard → Settings → Domains → Add your domain

---

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) → New site from Git

3. Connect GitHub repo → Set build command: `npm run build`, publish dir: `.next`

4. Deploy!

---

### Option 3: GitHub Pages (Static Export)

Add to `next.config.ts`:
```ts
const nextConfig = {
  output: 'export',
  // ...
}
```

Then:
```bash
npm run build
# Upload the 'out' folder to GitHub Pages
```

---

## 🎨 Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **react-type-animation** — Typing effect in hero
- **react-intersection-observer** — Scroll-triggered animations
- **lucide-react** — Icons
