# ⚡ Quick Setup — Enable AI Features

**ใช้เวลา 2 นาที!**

---

## 🔑 Step 1: Get OpenAI API Key

1. Go to: **https://platform.openai.com/api-keys**
2. Sign in (or create free account)
3. Click **"Create new secret key"**
4. **Copy the key** (starts with `sk-...`)
5. **Save it!** (จะแสดงครั้งเดียว)

---

## 📝 Step 2: Create `.env.local` File

ใน folder: `/Users/test/Desktop/PaiProject/internal-brand-hub/`

สร้างไฟล์ใหม่ชื่อ `.env.local` และใส่:

```env
OPENAI_API_KEY=sk-your-actual-api-key-paste-here
```

**ตัวอย่าง:**
```env
OPENAI_API_KEY=sk-proj-abc123xyz456...
```

---

## 🔄 Step 3: Restart Server

```bash
# Stop server (Ctrl+C if running)
cd /Users/test/Desktop/PaiProject/internal-brand-hub
npm run dev
```

---

## ✅ Step 4: Test AI Features

### Test Tone Checker
1. Go to http://localhost:3000/tone-checker
2. Paste any text
3. Click "Analyze with AI"
4. Should see AI analysis in 5-10 seconds

### Test Content Generator  
1. Go to http://localhost:3000/ai-generator
2. Fill in topic
3. Click "Generate Content"
4. Should see generated content

### Test Copilot
1. On any page, click floating chat button (bottom right)
2. Ask: "What's our brand voice?"
3. Should get detailed answer

---

## ❓ Troubleshooting

### "API key not found"
✅ Check `.env.local` exists in project root  
✅ Check key starts with `sk-`  
✅ Restart server after creating file

### "Failed to analyze/generate"
✅ Check internet connection  
✅ Verify API key is valid  
✅ Check OpenAI account has credits  

### Still not working?
```bash
# Clear and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

---

## 💰 Cost Info

**Using GPT-4 Turbo:**
- Each request: ~$0.02-0.10
- 100 requests: ~$2-10

**ถ้าไม่อยากจ่ายเยอะ:**
ใน `.env.local` เพิ่ม:
```env
OPENAI_MODEL=gpt-3.5-turbo
```
(ถูกกว่า 10 เท่า แต่คุณภาพยังดี)

---

## ✨ ทำเสร็จแล้ว!

เมื่อ setup เสร็จ คุณจะได้:
- ✅ AI Tone Checker ทำงาน
- ✅ AI Content Generator ทำงาน
- ✅ AI Rewriter ทำงาน
- ✅ Brand Copilot chatbot ทำงาน

**ทุก feature ใช้ GPT-4 ที่รู้จัก Waykeeper brand!** 🤖

---

**Questions?** Read OPENAI-SETUP.md for full documentation

