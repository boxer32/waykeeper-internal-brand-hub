# 🤖 OpenAI API Integration — Setup Guide

**Version:** 2.2.0  
**Features:** AI Tone Checker, Content Generator, Rewriter, Brand Copilot

---

## 🔑 API Key Setup

### Step 1: Get OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign in or create account
3. Navigate to API Keys
4. Click "Create new secret key"
5. Copy the key (starts with `sk-...`)

---

### Step 2: Add API Key to Project

Create a file named `.env.local` in the project root:

```bash
cd /Users/test/Desktop/PaiProject/internal-brand-hub
touch .env.local
```

Add this content to `.env.local`:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-actual-api-key-here

# Optional: Choose model (default: gpt-4-turbo)
# OPENAI_MODEL=gpt-4-turbo        # Best quality
# OPENAI_MODEL=gpt-3.5-turbo      # Faster, cheaper
# OPENAI_MODEL=gpt-4              # Most accurate
```

**⚠️ Important:** Never commit `.env.local` to git (already in .gitignore)

---

### Step 3: Install Dependencies

```bash
npm install openai
```

Already added to `package.json`:
- `openai`: ^4.20.0

---

### Step 4: Restart Development Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

## 🎯 AI Features Available

### 1. **AI Tone Checker** (`/tone-checker`)
**API:** `/api/ai/tone-check`  
**Model:** GPT-4 Turbo  
**Function:** Analyzes text for brand voice alignment

**Features:**
- Score 0-100
- Strengths analysis
- Concerns highlighted
- Specific suggestions
- AI rewrite suggestion

**Cost:** ~$0.03-0.05 per analysis

---

### 2. **AI Content Generator** (`/ai-generator`)
**API:** `/api/ai/generate`  
**Model:** GPT-4 Turbo  
**Function:** Creates new content from scratch

**Features:**
- 10 content types (Instagram, Email, Blog, etc.)
- Sub-brand voice modulation
- Audience targeting
- Custom instructions
- Instant generation

**Cost:** ~$0.05-0.10 per generation

---

### 3. **AI Content Rewriter** (`/ai-rewriter`)
**API:** `/api/ai/rewrite`  
**Model:** GPT-4 Turbo  
**Function:** Transforms existing text to brand voice

**Features:**
- Corporate → Waykeeper voice
- Remove hype and toxic positivity
- Add permission-giving language
- Tone adjustments
- Specific instructions

**Cost:** ~$0.04-0.08 per rewrite

---

### 4. **Brand Copilot** (Floating Chat)
**API:** `/api/ai/chat`  
**Model:** GPT-4 Turbo  
**Function:** AI assistant for brand questions

**Features:**
- Conversational AI
- Knows entire brand system
- Helps with writing
- Answers brand questions
- Available on all pages

**Cost:** ~$0.02-0.05 per message

---

## 📊 API Routes Created

```
/api/ai/tone-check   → POST → Analyze text for brand voice
/api/ai/generate     → POST → Generate new content
/api/ai/rewrite      → POST → Rewrite in brand voice
/api/ai/chat         → POST → Copilot chat conversation
```

---

## 💰 Cost Estimates

### Per Request (GPT-4 Turbo)
- Tone Check: ~$0.03-0.05
- Generate Content: ~$0.05-0.10
- Rewrite: ~$0.04-0.08
- Chat Message: ~$0.02-0.05

### Monthly Estimates
**Light Usage** (10 team members, 5 requests/day)
- ~1,500 requests/month
- **~$75-150/month**

**Medium Usage** (25 team members, 10 requests/day)
- ~7,500 requests/month
- **~$375-750/month**

**Heavy Usage** (50 team members, 20 requests/day)
- ~30,000 requests/month
- **~$1,500-3,000/month**

### Cost Reduction Options
1. **Use GPT-3.5-Turbo** (10x cheaper)
   - Set `OPENAI_MODEL=gpt-3.5-turbo`
   - Quality still good for most uses
   - Cost: ~$7.50-75/month for light-medium usage

2. **Rate Limiting**
   - Add per-user limits
   - Cache common requests
   - Batch processing

3. **Hybrid Approach**
   - GPT-3.5 for simple tasks
   - GPT-4 for complex analysis

---

## 🔒 Security Best Practices

### API Key Protection
✅ `.env.local` is in `.gitignore`  
✅ API routes run server-side only  
✅ No API key exposed to client  
✅ Validate all inputs before API calls  

### Rate Limiting (Recommended)
Add to API routes:
```typescript
// Check user rate limit
// Return error if exceeded
```

### Error Handling
All API routes include:
- Try/catch blocks
- Proper error messages
- No API key in error logs

---

## 🧪 Testing

### Test Tone Checker
1. Go to `/tone-checker`
2. Paste: "You must join our amazing transformational retreat!"
3. Click "Analyze with AI"
4. Should get low score + suggestions

### Test Content Generator
1. Go to `/ai-generator`
2. Topic: "Post-retreat integration"
3. Content Type: "Instagram Caption"
4. Click "Generate"
5. Should get on-brand caption

### Test Rewriter
1. Go to `/ai-rewriter`
2. Paste: "Our retreat will give you amazing results!"
3. Click "Rewrite in Brand Voice"
4. Should get permission-giving, honest version

### Test Copilot
1. Click floating chat button (bottom right)
2. Ask: "What's our brand voice?"
3. Should get accurate answer about Waykeeper

---

## 🐛 Troubleshooting

### Error: "API key not found"
**Solution:** Check `.env.local` file exists with correct key

### Error: "Failed to analyze"
**Solution:** 
- Check internet connection
- Verify API key is valid
- Check OpenAI account has credits

### Slow Response
**Normal:** GPT-4 takes 3-10 seconds  
**If longer:** Check OpenAI status page

### Build Error with OpenAI
**Solution:**
```bash
npm install openai@latest
rm -rf .next
npm run dev
```

---

## 📈 Usage Analytics (Recommended)

Track in your app:
- Which AI features are used most
- Average cost per feature
- User satisfaction with AI outputs
- Error rates

---

## 🚀 Deployment Notes

### Vercel Deployment
When deploying to Vercel:

1. Add environment variable in Vercel dashboard:
   - Key: `OPENAI_API_KEY`
   - Value: `sk-your-key...`

2. Deploy:
```bash
npm run build
vercel --prod
```

### Environment Variables in Vercel
- Settings → Environment Variables
- Add `OPENAI_API_KEY`
- Redeploy

---

## ⚡ Model Recommendations

| Use Case | Recommended Model | Why |
|----------|------------------|-----|
| Tone Checker | gpt-4-turbo | Needs nuance understanding |
| Content Generator | gpt-4-turbo | Best creative output |
| Rewriter | gpt-4-turbo or gpt-4 | Preserves meaning well |
| Copilot Chat | gpt-4-turbo | Conversational + accurate |

**Budget Option:** Use `gpt-3.5-turbo` for all (10x cheaper, still good quality)

---

## 📝 Next.js API Route Configuration

All routes are in `/src/app/api/ai/`:
- Server-side only (not exposed to client)
- Proper error handling
- JSON responses
- TypeScript typed

---

## ✅ Setup Checklist

- [ ] OpenAI account created
- [ ] API key obtained
- [ ] `.env.local` file created
- [ ] API key added to `.env.local`
- [ ] `npm install openai` completed
- [ ] Dev server restarted
- [ ] Tested tone checker
- [ ] Tested content generator
- [ ] Tested rewriter
- [ ] Tested copilot chat
- [ ] For deployment: API key added to Vercel

---

## 🎉 Ready to Use!

Once setup is complete, all AI features will work:
- ✅ AI Tone Checker (analyzes your copy)
- ✅ AI Content Generator (creates from scratch)
- ✅ AI Rewriter (transforms text to brand voice)
- ✅ Brand Copilot (floating chat assistant)

**All powered by GPT-4, all trained on Waykeeper brand!**

---

**For questions:** Check OpenAI documentation at platform.openai.com/docs

**Version:** 2.2.0  
**AI Features:** 4  
**API Routes:** 4  
**Status:** Ready to Deploy 🚀

