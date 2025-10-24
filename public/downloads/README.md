# Asset Downloads Folder

This folder contains all downloadable brand assets for the Waykeeper Brand Hub.

## 📁 Folder Structure

```
downloads/
├── logos/
│   ├── waykeeper-logo-color.svg
│   ├── waykeeper-logo-color.png
│   ├── waykeeper-logo-color.pdf
│   ├── waykeeper-logo-white.svg
│   ├── waykeeper-logo-white.png
│   ├── waykeeper-logo-black.svg
│   ├── waykeeper-logo-black.png
│   └── waykeeper-logos-all.zip
│
├── templates/
│   ├── waykeeper-pitch-deck.pptx
│   ├── subbrand-proposal.pptx
│   ├── email-signature.html
│   ├── letterhead.docx
│   ├── instagram-stories.zip
│   └── social-media-kit.zip
│
└── README.md (this file)
```

## 📝 Adding New Assets

1. Place files in appropriate subfolder
2. Update paths in `/src/lib/brandData.ts`
3. Rebuild and redeploy

## 🎨 Logo Guidelines

### File Formats
- **SVG** — For web and scalable use
- **PNG** — For presentations and documents (2000px width, transparent background)
- **PDF** — For print and vector editing

### Color Variants
- **Full Color** — Primary use on light backgrounds
- **White** — For dark backgrounds
- **Black** — For single-color applications

## 📋 Template Guidelines

### Naming Convention
- Use lowercase with hyphens
- Be descriptive
- Example: `waykeeper-pitch-deck.pptx`

### File Types
- Presentations: .pptx (PowerPoint)
- Documents: .docx (Word)
- Email: .html
- Design packages: .zip

## 🔄 Update Process

When assets are updated:
1. Replace files in this folder
2. Keep same filenames (or update references)
3. Git commit and push
4. Vercel auto-deploys

---

*Part of Waykeeper Brand Hub*

