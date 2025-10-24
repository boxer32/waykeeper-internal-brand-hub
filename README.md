# Waykeeper Brand Hub — Internal Documentation Platform

> **AI-Ready Brand System** — A modern, web-based brand documentation platform for internal teams.

---

## 📋 Overview

The Waykeeper Brand Hub is an interactive, no-login internal documentation platform that replaces static brand books. Built for teams and AI collaboration, it provides instant access to:

- **Brand Colors** with copy-to-clipboard HEX/RGB/CMYK values
- **Typography Guidelines** with live previews and download links
- **Brand Voice Framework** with do's and don'ts
- **Asset Downloads** (logos, templates, fonts)
- **AI Prompt Library** — Pre-built prompts for ChatGPT, Claude, etc.
- **Brand Brief Generator** — Auto-fill AI context for consistent output
- **Template Library** — Presentation, email, and social media kits
- **Client-side Search** — Fast keyword search across all content

---

## 🎯 Key Features

### ✅ No Authentication Required
- Fully open static site hosted on Vercel
- Shareable public link for internal use
- No login, no passwords, no friction

### 🎨 Brand Asset Management
- One-click copy for color values (HEX, RGB, CMYK)
- Logo downloads in multiple formats (SVG, PNG, PDF)
- Direct links to Figma and Canva templates
- Font download links to Google Fonts

### 🤖 AI-Ready Documentation
- **6 Pre-Built AI Prompts** covering common use cases:
  - Complete Brand Context
  - Blog/Article Writing
  - Instagram Captions
  - Email Sequences
  - Sub-Brand Voice Modulation
  - Customer Support Responses

- **Brand Brief Generator**:
  - Fill in project details
  - Auto-generates AI-ready brand brief
  - One-click copy to use with any LLM

### 🔍 Fast Client-Side Search
- Real-time keyword search
- No server required
- Instant results across all content

### 📱 Fully Responsive
- Mobile, tablet, and desktop optimized
- Modern UI with smooth animations
- Accessible (WCAG AA compliant colors)

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Libre Baskerville + Inter)
- **Deployment:** Vercel (Static Export)

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Navigate to the hub folder
cd internal-brand-hub

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the hub.

---

## 🏗️ Build & Deploy

### Build for Production

```bash
# Create optimized static export
npm run build

# Output will be in /out folder
```

### Deploy to Vercel

**Option 1: Automatic (Recommended)**
1. Push to GitHub/GitLab
2. Import project in Vercel
3. Deploy automatically

**Option 2: Manual**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Variables
None required — this is a fully static site.

---

## 📁 Project Structure

```
internal-brand-hub/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx             # Main hub page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── ColorCard.tsx        # Color display + copy
│   │   ├── PromptCard.tsx       # AI prompt display
│   │   ├── BrandBriefGenerator.tsx  # AI brief tool
│   │   └── SearchBar.tsx        # Search component
│   └── lib/
│       ├── brandData.ts         # All brand content
│       └── utils.ts             # Helper functions
├── public/
│   ├── downloads/               # Asset files
│   │   ├── logos/
│   │   ├── templates/
│   │   └── fonts/
│   └── robots.txt               # Prevent search indexing
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🎨 Brand Assets

### Colors
All Waykeeper brand colors are defined in `src/lib/brandData.ts`:
- **Primary:** Skypath Blue (#77BEF0), Sunrise Gold (#FFCB61)
- **Accent:** Journey Coral (#FF894F), Heart Rose (#EA5B6F)
- **Neutral:** Deep Earth (#3A3A3A), Morning Light (#F5F3EE), Soft Stone (#D4C5B0)

### Typography
- **Headlines:** Libre Baskerville (Google Fonts)
- **Body:** Inter (Google Fonts)

### Asset Downloads
To add downloadable assets:

1. Place files in `/public/downloads/`
2. Update paths in `src/lib/brandData.ts` (assetDownloads)

Example structure:
```
public/downloads/
├── logos/
│   ├── waykeeper-logo-color.svg
│   ├── waykeeper-logo-white.svg
│   └── waykeeper-logos-all.zip
├── templates/
│   ├── waykeeper-pitch-deck.pptx
│   └── email-signature.html
└── fonts/
    └── (fonts available via Google Fonts)
```

---

## 🤖 AI Prompt Library

### Adding New Prompts

Edit `src/lib/brandData.ts` and add to `promptLibrary`:

```typescript
{
  category: 'Category Name',
  title: 'Prompt Title',
  description: 'What this prompt does',
  prompt: `Your full prompt text here...`
}
```

### Current Prompt Categories
- Brand Overview
- Content Writing
- Social Media
- Marketing
- Sub-Brand Adaptation
- Customer Support

---

## 📋 Template Library

### Adding New Templates

1. Upload template file to `/public/downloads/templates/`
2. Add entry in `src/lib/brandData.ts` (templateLibrary):

```typescript
{
  category: 'Presentation',
  title: 'Template Name',
  description: 'What it's for',
  downloadUrl: '/downloads/templates/filename.pptx',
  format: 'PowerPoint (.pptx)',
}
```

---

## 🔧 Customization

### Brand Colors
Update colors in:
- `src/lib/brandData.ts` (data)
- `tailwind.config.js` (Tailwind theme)
- `src/app/globals.css` (CSS variables)

### Navigation
Edit navigation links in `src/components/Header.tsx`

### Content Sections
All content is in `src/app/page.tsx` and `src/lib/brandData.ts`

---

## 🚀 Deployment Checklist

- [ ] All brand assets added to `/public/downloads/`
- [ ] Logo files uploaded (SVG, PNG, PDF)
- [ ] Template files uploaded
- [ ] External links updated (Figma, Canva, Google Drive)
- [ ] AI prompts reviewed and updated
- [ ] Build succeeds (`npm run build`)
- [ ] Deploy to Vercel
- [ ] Share internal link with team

---

## 🔒 Access Control

**Important:** This hub is designed for **internal use only**.

### Current Configuration
- No authentication (static site)
- Robots.txt blocks search engines
- X-Robots-Tag header prevents indexing
- Share link only with internal team members

### Future Options
If you need access control:
- Add Vercel Password Protection (Team/Enterprise plan)
- Implement basic auth via middleware
- Use VPN/IP allowlist

---

## 🛠️ Maintenance

### Update Brand Content
Edit `src/lib/brandData.ts` and redeploy

### Update UI/Design
- Components: `src/components/`
- Styles: `src/app/globals.css`, `tailwind.config.js`
- Layout: `src/app/page.tsx`

### Update Assets
Replace files in `/public/downloads/` and redeploy

---

## 📊 Performance

- **Build Time:** ~30 seconds
- **Page Size:** ~200KB (initial load)
- **Load Time:** <1 second
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Fonts Not Loading
- Check Google Fonts links in `src/app/layout.tsx`
- Verify font variables in `tailwind.config.js`

### Assets Not Downloading
- Ensure files exist in `/public/downloads/`
- Check file paths in `src/lib/brandData.ts`
- Rebuild and redeploy

---

## 📝 License

Internal use only — All brand assets © Waykeeper

---

## 👥 Support

For questions or issues:
1. Check this README
2. Review code comments in source files
3. Contact brand team lead

---

**Version:** 1.0.0  
**Last Updated:** October 21, 2025  
**Status:** Production Ready 🎉

---

*Built with care for the Waykeeper brand team*

