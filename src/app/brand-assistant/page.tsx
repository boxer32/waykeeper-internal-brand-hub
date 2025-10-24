'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import { MessageCircle, Copy, Check, HelpCircle } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

const commonQuestions = [
  {
    category: 'การใช้สี (Colors)',
    questions: [
      {
        q: 'ใช้สีอะไรสำหรับปุ่ม CTA?',
        a: 'Skypath Blue (#77BEF0) สำหรับปุ่มหลัก หรือ Journey Coral (#FF894F) สำหรับ action ที่ต้องการ energy มากขึ้น',
        promptToAsk: 'What color should I use for CTA buttons in Waykeeper?',
      },
      {
        q: 'สีไหนใช้กับ background?',
        a: 'Morning Light (#F5F3EE) สำหรับ background หลัก, Soft Stone (#D4C5B0) สำหรับ secondary background',
        promptToAsk: 'What colors should I use for backgrounds?',
      },
      {
        q: 'Winter Campaign ควรใช้สีโทนไหน?',
        a: 'ใช้ Deep Earth + Morning Light + Soft Stone (warm neutral tones) เป็นหลัก เพิ่ม Heart Rose เป็น accent สำหรับความอบอุ่น',
        promptToAsk: 'What color palette works for winter campaign?',
      },
    ],
  },
  {
    category: 'การเขียน Copy (Content)',
    questions: [
      {
        q: 'ช่วยเขียน caption IG เปิดตัวสินค้าใหม่ แบบหรูแต่เป็นกันเอง',
        a: 'ใช้ AI Prompt: "Instagram Caption" + เพิ่ม context ของสินค้า + ระบุว่าต้องการ "sophisticated yet approachable"',
        promptToAsk: 'Write an Instagram caption for [PRODUCT] that feels sophisticated yet approachable, in Waykeeper voice.',
      },
      {
        q: 'เขียนอีเมลติดตามลูกค้าที่ยังไม่ตอบกลับ แบบไม่ aggressive',
        a: 'ใช้ permission-giving language: "I know you\'re busy — no pressure. Just wanted to check in..." + เสนอ value ไม่ใช่ push',
        promptToAsk: 'Write a gentle follow-up email for non-responsive client, Waykeeper voice.',
      },
      {
        q: 'มีตัวอย่าง email ที่ work ไหม?',
        a: 'ไปที่ Content Examples → ดู "Post-Retreat Day 7 Email" (68% open rate) หรือ "Welcome Email" (72% open rate)',
        promptToAsk: 'Show me proven email examples from Waykeeper.',
      },
    ],
  },
  {
    category: 'Brand Voice',
    questions: [
      {
        q: 'Waykeeper พูดยังไงตอนลูกค้าไม่พอใจ?',
        a: 'Acknowledge → Take responsibility → Concrete action → Timeline. ใช้ "I understand..." + validate feelings + honest about what happened + clear next steps',
        promptToAsk: 'How should Waykeeper respond to an unhappy customer?',
      },
      {
        q: 'แบรนด์เราพูดแบบ "กดดัน" หรือ "ให้กำลังใจ"?',
        a: 'ให้กำลังใจแบบ permission-giving ("It\'s okay to...") ไม่ใช่กดดันแบบ prescriptive ("You should...")',
        promptToAsk: 'Is Waykeeper voice more supportive or prescriptive?',
      },
      {
        q: 'พูดเรื่องยากๆ (เช่น ราคาแพง) ยังไง?',
        a: 'ใช้ anti-BS honesty: "The truth is, integration work isn\'t cheap. Here\'s why it\'s worth it..." ตรงไปตรงมาแต่อธิบายด้วย empathy',
        promptToAsk: 'How does Waykeeper talk about difficult topics like high prices?',
      },
    ],
  },
  {
    category: 'การใช้ Assets',
    questions: [
      {
        q: 'มี logo ไหนบ้าง? download ที่ไหน?',
        a: 'ไปที่ Assets → มี 3 แบบ: Full Color, White, Black ในรูปแบบ SVG, PNG, PDF',
        promptToAsk: 'Where can I download Waykeeper logos?',
      },
      {
        q: 'มี code สำเร็จรูปสำหรับทำปุ่มไหม?',
        a: 'ไปที่ Embed Code → เลือก "Primary CTA Button" → มี HTML/CSS, React, CSS Module',
        promptToAsk: 'Is there ready-to-use button code?',
      },
      {
        q: 'มี template presentation ไหม?',
        a: 'ไปที่ Templates → มี Brand Pitch Deck, Sub-Brand Proposal, และอื่นๆ รวม 6 templates',
        promptToAsk: 'What presentation templates are available?',
      },
    ],
  },
];

export default function BrandAssistantPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <PageContainer
      title="AI ช่วยเรื่องแบรนด์"
      description="ถาม-ตอบเรื่องแบรนด์แบบธรรมชาติ — เหมือนมี Brand Copilot คอยช่วย"
    >
      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8 mb-12">
        <div className="flex items-start space-x-4">
          <MessageCircle className="text-journey-coral shrink-0 mt-1" size={32} />
          <div>
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-3">
              วิธีใช้ Brand Assistant
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-deep-earth/80">
              <div>
                <strong className="text-deep-earth">Option 1: คำถามสำเร็จรูป</strong>
                <p className="mt-1">เลือกคำถามด้านล่าง → คลิก → ได้คำตอบ + AI Prompt พร้อมใช้</p>
              </div>
              <div>
                <strong className="text-deep-earth">Option 2: ถามเอง</strong>
                <p className="mt-1">Copy "Brand Navigator Prompt" → Paste ให้ ChatGPT → ถามคำถามของคุณ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Navigator Base Prompt */}
      <BrandNavigatorPrompt />

      {/* Common Questions */}
      <div className="mt-12">
        <h2 className="text-3xl font-headline font-bold text-deep-earth mb-6">
          คำถามที่ถามบ่อย
        </h2>

        <div className="space-y-8">
          {commonQuestions.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-headline font-bold text-deep-earth mb-4 flex items-center space-x-2">
                <HelpCircle className="text-skypath-blue" size={20} />
                <span>{category.category}</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.questions.map((item, qIndex) => (
                  <QuestionCard key={qIndex} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

function BrandNavigatorPrompt() {
  const [copied, setCopied] = useState(false);

  const navigatorPrompt = `You are the Waykeeper Brand Navigator — an AI assistant that helps team members with brand questions.

**Your Role:**
- Answer questions about Waykeeper brand (voice, colors, usage, examples)
- Guide team to the right resources in the Brand Hub
- Provide examples and suggestions that match brand voice
- Help validate if content/ideas are on-brand

**Waykeeper Brand Quick Reference:**
- **Voice:** Warm wisdom, permission-giving, anti-BS honesty
- **Core Values:** Integration Over Experience, Permission Without Judgment, Depth With Comfort
- **Colors:** Skypath Blue (primary), Sunrise Gold, Journey Coral, Heart Rose, Deep Earth, Morning Light, Soft Stone
- **Typography:** Libre Baskerville (headlines), Inter (body)
- **Positioning:** We focus on integration (what happens after), not just experience

**When answering:**
1. Be helpful and specific
2. Point to exact resources when relevant
3. Give examples, not just rules
4. Use Waykeeper voice in your answers
5. If you're not sure, say "Check the Brand Hub at [section]"

Ready to help! What's your brand question?`;

  const handleCopy = async () => {
    const success = await copyToClipboard(navigatorPrompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-journey-coral/10 to-heart-rose/10 border border-journey-coral/30 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-headline font-bold text-deep-earth flex items-center space-x-2">
          <MessageCircle className="text-journey-coral" size={24} />
          <span>Brand Navigator Prompt</span>
        </h3>
        <button
          onClick={handleCopy}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            copied
              ? 'bg-journey-coral text-white'
              : 'bg-white text-deep-earth hover:bg-journey-coral hover:text-white border border-journey-coral/30'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <p className="text-sm text-deep-earth/70 mb-4">
        Paste this into ChatGPT/Claude to turn AI into your personal brand assistant
      </p>
      <div className="bg-white rounded-lg p-4 font-mono text-xs text-deep-earth leading-relaxed max-h-48 overflow-y-auto">
        {navigatorPrompt}
      </div>
    </div>
  );
}

function QuestionCard({ q, a, promptToAsk }: { q: string; a: string; promptToAsk: string }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    const fullPrompt = `[Using Waykeeper Brand Context]\n\n${promptToAsk}`;
    const success = await copyToClipboard(fullPrompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-5 hover:shadow-md transition-shadow">
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="w-full text-left"
      >
        <h4 className="font-semibold text-deep-earth mb-2 flex items-start space-x-2">
          <span className="text-skypath-blue mt-0.5">Q:</span>
          <span>{q}</span>
        </h4>
      </button>

      {showAnswer && (
        <div className="mt-3 pt-3 border-t border-soft-stone/30 space-y-3">
          <div className="flex items-start space-x-2">
            <span className="text-sunrise-gold font-semibold shrink-0">A:</span>
            <p className="text-sm text-deep-earth/80">{a}</p>
          </div>

          <button
            onClick={handleCopyPrompt}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              copied
                ? 'bg-skypath-blue text-white'
                : 'bg-morning-light text-deep-earth hover:bg-skypath-blue/10'
            }`}
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied AI Prompt!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy as AI Prompt</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

