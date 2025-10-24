# Deployment Guide — Waykeeper Brand Hub

> Complete instructions for deploying the Internal Brand Hub to Vercel

---

## 🚀 Quick Deploy (Recommended)

### Method 1: GitHub + Vercel (Automatic)

**Step 1: Push to GitHub**
```bash
cd /Users/test/Desktop/PaiProject/internal-brand-hub
git init
git add .
git commit -m "Initial commit: Waykeeper Brand Hub"
git remote add origin https://github.com/YOUR_USERNAME/waykeeper-brand-hub.git
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Done! Your hub is live at `https://your-project.vercel.app`

**Automatic Updates:**
- Every push to `main` = automatic redeployment
- Preview deployments for PRs

---

## 📦 Method 2: Vercel CLI (Manual)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy
```bash
cd /Users/test/Desktop/PaiProject/internal-brand-hub

# First deployment (interactive setup)
vercel

# Production deployment
vercel --prod
```

Your hub will be live at the provided URL.

---

## 🔧 Pre-Deployment Checklist

### ✅ Before You Deploy

1. **Add Brand Assets**
   - [ ] Upload logos to `/public/downloads/logos/`
   - [ ] Upload templates to `/public/downloads/templates/`
   - [ ] Add any custom fonts to `/public/assets/fonts/`

2. **Update External Links**
   - [ ] Update Figma link in `src/lib/brandData.ts`
   - [ ] Update Canva link in `src/lib/brandData.ts`
   - [ ] Update Google Drive link in `src/lib/brandData.ts`

3. **Test Build Locally**
   ```bash
   npm install
   npm run build
   npm run start
   ```
   - [ ] Visit `http://localhost:3000`
   - [ ] Test all sections
   - [ ] Test asset downloads
   - [ ] Test color copy buttons
   - [ ] Test AI prompt copy
   - [ ] Test search functionality

4. **Review Content**
   - [ ] Brand colors accurate
   - [ ] Typography correct
   - [ ] AI prompts up-to-date
   - [ ] Voice guidelines complete
   - [ ] Templates listed

---

## 📁 Asset Preparation

### Logo Files
Recommended file structure:
```
public/downloads/logos/
├── waykeeper-logo-color.svg
├── waykeeper-logo-color.png (2000px width)
├── waykeeper-logo-color.pdf
├── waykeeper-logo-white.svg
├── waykeeper-logo-white.png (2000px transparent)
├── waykeeper-logo-black.svg
├── waykeeper-logo-black.png (2000px transparent)
└── waykeeper-logos-all.zip (contains all above)
```

### Template Files
```
public/downloads/templates/
├── waykeeper-pitch-deck.pptx
├── subbrand-proposal.pptx
├── email-signature.html
├── letterhead.docx
├── instagram-stories.zip
└── social-media-kit.zip
```

---

## ⚙️ Vercel Configuration

### Build Settings
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `out`
- **Install Command:** `npm install`

### Environment Variables
None required (static site)

### Custom Domain (Optional)
1. Go to Vercel project settings
2. Add custom domain (e.g., `brand.waykeeper.com`)
3. Update DNS records as instructed
4. SSL auto-configured

---

## 🔒 Security Settings

### Prevent Search Engine Indexing

Already configured:
- `public/robots.txt` — Disallow all crawlers
- `vercel.json` — X-Robots-Tag header
- `src/app/layout.tsx` — noindex meta tag

### Access Control Options

**Option 1: Password Protection (Vercel Pro/Enterprise)**
1. Go to project settings
2. Enable "Password Protection"
3. Set password
4. Share with internal team

**Option 2: IP Allowlist**
Configure in `vercel.json`:
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "headers": {
        "Access-Control-Allow-Origin": "YOUR_IP_RANGE"
      }
    }
  ]
}
```

**Option 3: Environment-Based Access**
For more control, consider Next.js middleware with auth.

---

## 📊 Post-Deployment

### Verify Deployment

1. **Check Homepage**
   - [ ] Hero section loads
   - [ ] Navigation works
   - [ ] All sections visible

2. **Test Functionality**
   - [ ] Color copy buttons work
   - [ ] Asset download links work
   - [ ] AI prompt copy works
   - [ ] Brand brief generator works
   - [ ] Search bar filters prompts
   - [ ] Responsive on mobile

3. **Performance Check**
   - [ ] Run Lighthouse audit
   - [ ] Target: 90+ scores across all metrics
   - [ ] Check load time < 2 seconds

### Share with Team

```
🎉 Waykeeper Brand Hub is Live!

Access: https://your-project.vercel.app

What's Inside:
✓ Brand colors with one-click copy
✓ Typography guidelines
✓ Logo & template downloads
✓ AI prompt library
✓ Brand brief generator
✓ Full brand voice guide

Internal use only — please don't share externally.
```

---

## 🔄 Update Workflow

### Make Updates
```bash
# Edit content in src/lib/brandData.ts
# or components in src/components/

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update: [description]"
git push
```

Vercel automatically redeploys within 1-2 minutes.

### Add New Assets
1. Upload to `/public/downloads/`
2. Update paths in `src/lib/brandData.ts`
3. Commit and push
4. Vercel redeploys with new files

---

## 🐛 Common Issues

### Build Fails
**Error:** `Module not found`
```bash
# Solution: Reinstall dependencies
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading
**Error:** 404 on asset URLs
```bash
# Solution: Check file paths
# Ensure files are in /public/downloads/
# Paths should start with /downloads/ (not /public/downloads/)
```

### Fonts Not Rendering
**Error:** System fonts used instead of brand fonts
```bash
# Solution: Check Google Fonts import
# Verify in src/app/layout.tsx
# Clear browser cache
```

### Search Not Working
**Error:** Search returns no results
- Check `src/lib/utils.ts` searchContent function
- Verify search query is properly passed to component
- Test with different keywords

---

## 📈 Analytics (Optional)

### Add Vercel Analytics
1. Go to project settings → Analytics
2. Enable Vercel Analytics
3. View traffic, performance, and user behavior

### Add Google Analytics
Add to `src/app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

---

## 🎯 Optimization Tips

### Image Optimization
- Use SVG for logos (scalable, small file size)
- Compress PNG files (use TinyPNG)
- Provide multiple formats (SVG + PNG + PDF)

### Performance
- Already optimized with Next.js static export
- Fonts preloaded via Google Fonts
- No external API calls (instant load)

### Accessibility
- All colors meet WCAG AA contrast ratios
- Semantic HTML structure
- Keyboard navigation supported
- Screen reader friendly

---

## 🆘 Support

### Deployment Issues
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Test locally first: `npm run build`

### Code Issues
1. Review component code comments
2. Check `src/lib/brandData.ts` for content structure
3. Verify file paths in `/public/downloads/`

---

## ✅ Final Checklist

- [ ] Assets uploaded
- [ ] Content reviewed and accurate
- [ ] Build succeeds locally
- [ ] Deployed to Vercel
- [ ] Custom domain configured (if needed)
- [ ] Password protection enabled (if needed)
- [ ] All functionality tested
- [ ] Mobile responsive checked
- [ ] Team notified and link shared
- [ ] Bookmark saved for future updates

---

**🎉 Congratulations! Your Waykeeper Brand Hub is live!**

---

*For questions: Contact brand team lead*

**Version:** 1.0.0  
**Updated:** October 21, 2025

