'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import { Cpu, Copy, Check, Zap } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

export default function PromptEnginePage() {
  const [projectType, setProjectType] = useState('');
  const [audience, setAudience] = useState('');
  const [subBrand, setSubBrand] = useState('master');
  const [customNotes, setCustomNotes] = useState('');
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const basePrompt = `# Waykeeper Brand DNA — Permanent AI Context

You are now writing as Waykeeper. This is your permanent brand context. Use this for ALL outputs.

---

## 🎯 Brand Core

**Purpose:** We exist because transformation shouldn't fade — anywhere in life

**Promise:** Whether you retreat, explore, rest, heal, or practice — the transformation lasts, because we're there for what happens after

**Positioning:** We focus on INTEGRATION, not just experience. Most brands stop at the retreat/workshop. We exist for the 90 days after.

---

## 🧭 Philosophy: The 4 Phases

1. **Arrival** — Prepare context for transformation
2. **Immersion** — The experience itself (retreat, travel, practice)
3. **Integration** — Embed changes into daily life (OUR FOCUS)
4. **Continuity** — Sustain growth long-term (OUR FOCUS)

Most brands do 1-2. Waykeeper does 3-4.

---

## 🗣️ Voice Characteristics

**Core Voice:** Warm wisdom that holds space for your becoming

**Characteristics:**
- **Empathetic Directness** — Name the struggle without drama
- **Permission-Giving** — "It's okay to..." not "You should..."
- **Anti-BS Honesty** — Tell truth, no hype
- **Grounded Wisdom** — Wise but not cold, warm but not soft

**Energy by Sub-Brand:**
${getSubBrandEnergy(subBrand)}

---

## ✅ Language Guidelines

**USE:**
- "We believe..."
- "It's okay to..."
- "The truth is..."
- "You're not alone..."
- "We're here for..."
- "Integration", "Transformation", "Permission"

**AVOID:**
- "You must..." / "You should..."
- "Just think positive"
- "Amazing", "Incredible", "Life-changing" (hype)
- "Manifest", "Sacred", "Blessed" (woo-woo)
- "Everything happens for a reason" (toxic positivity)
- Guru language, corporate speak

---

## 🎨 Tone by Context

- **Marketing:** Curious, helpful, non-pushy
- **During Experience:** Present, supportive, wise
- **Post-Experience:** Consistent, encouraging, accountable
- **Support:** Patient, honest, solution-focused
- **Internal:** Direct, warm, trustworthy

---

## 🎯 Current Project

**What I'm creating:** ${projectType || '[Your project]'}
**Audience:** ${audience || '[Your audience]'}
**Sub-Brand:** ${getSubBrandName(subBrand)}
${customNotes ? `**Additional Context:** ${customNotes}` : ''}

---

## ✅ Your Instructions

Now that you understand Waykeeper's brand DNA, ${projectType || 'create content'} using:
- Our voice (warm wisdom, permission-giving, honest)
- Our positioning (integration over experience)
- Our values (see above)
- Language guidelines (use/avoid lists)

**Remember:** We're not selling experiences that fade. We're supporting transformations that last.

Ready to create on-brand content.`;

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(basePrompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <PageContainer
      title="Brand Prompt Engine"
      description="สร้าง base prompt ที่ทำให้ AI 'รู้จัก' Waykeeper แบบถาวร — ใช้ซ้ำได้กับทุกโปรเจกต์"
    >
      {/* Overview */}
      <div className="bg-gradient-to-br from-skypath-blue/10 to-sunrise-gold/10 border border-skypath-blue/30 rounded-lg p-8 mb-12">
        <div className="flex items-start space-x-4">
          <Cpu className="text-skypath-blue shrink-0 mt-1" size={32} />
          <div>
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-3">
              ทำให้ AI "เป็น" Waykeeper
            </h2>
            <p className="text-deep-earth/80 mb-4">
              แทนที่จะป้อน brand context ใหม่ทุกครั้ง — ใช้ Base Prompt นี้ทุกครั้งที่เริ่ม conversation กับ AI
            </p>
            <ul className="text-sm text-deep-earth/70 space-y-2">
              <li>• ✅ ใช้กับ ChatGPT, Claude, Gemini ทุกตัว</li>
              <li>• ✅ ฝัง voice, values, positioning ครบ</li>
              <li>• ✅ Reusable — save ไว้ใช้ซ้ำได้</li>
              <li>• ✅ Customizable — ปรับตาม project ได้</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Generator Form */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8 mb-8">
        <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6">
          ปรับแต่ง Base Prompt ของคุณ
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              คุณกำลังสร้างอะไร?
            </label>
            <input
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              placeholder="เช่น Social media campaign, Email sequence, Website copy..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Target Audience
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g., Burned-out professionals, Solo travelers..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Sub-Brand
            </label>
            <select
              value={subBrand}
              onChange={(e) => setSubBrand(e.target.value)}
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            >
              <option value="master">Waykeeper (Master Brand)</option>
              <option value="retreat">Waykeeper Retreat</option>
              <option value="explore">Waykeeper Explore</option>
              <option value="stay">Waykeeper Stay</option>
              <option value="wellness">Waykeeper Wellness</option>
              <option value="connect">Waykeeper Connect</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Additional Context (Optional)
            </label>
            <textarea
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Any specific requirements, constraints, or context..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              rows={3}
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-skypath-blue to-journey-coral text-white font-semibold py-4 rounded-lg hover:shadow-lg transition-all"
          >
            สร้าง Base Prompt
          </button>
        </div>
      </div>

      {/* Generated Prompt */}
      {generated && (
        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-headline font-bold text-deep-earth">
              Your Waykeeper Base Prompt
            </h2>
            <button
              onClick={handleCopy}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                copied
                  ? 'bg-skypath-blue text-white'
                  : 'bg-deep-earth text-white hover:bg-skypath-blue'
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>คัดลอก Prompt</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-deep-earth rounded-lg p-6 text-morning-light font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-[600px] overflow-y-auto">
            {basePrompt}
          </div>

          <div className="mt-6 bg-sunrise-gold/10 border border-sunrise-gold/30 rounded-lg p-5">
            <h3 className="font-semibold text-deep-earth mb-2 flex items-center space-x-2">
              <Zap className="text-sunrise-gold" size={18} />
              <span>How to Use</span>
            </h3>
            <ol className="text-sm text-deep-earth/80 space-y-2">
              <li>1. Click "Copy Prompt" above</li>
              <li>2. Open ChatGPT, Claude, or any AI tool</li>
              <li>3. Paste this as your FIRST message</li>
              <li>4. Wait for AI to acknowledge</li>
              <li>5. Now ask for what you need (AI will respond in Waykeeper voice)</li>
            </ol>
          </div>

          <div className="mt-4 bg-heart-rose/10 border border-heart-rose/30 rounded-lg p-5">
            <h3 className="font-semibold text-deep-earth mb-2">💡 Pro Tip</h3>
            <p className="text-sm text-deep-earth/80">
              Save this prompt in a note or doc. Reuse it every time you start a new AI conversation for Waykeeper work.
              The AI will "remember" your brand throughout the entire conversation.
            </p>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

function getSubBrandName(subBrand: string): string {
  const names = {
    master: 'Waykeeper (Master Brand)',
    retreat: 'Waykeeper Retreat',
    explore: 'Waykeeper Explore',
    stay: 'Waykeeper Stay',
    wellness: 'Waykeeper Wellness',
    connect: 'Waykeeper Connect',
  };
  return names[subBrand as keyof typeof names] || names.master;
}

function getSubBrandEnergy(subBrand: string): string {
  const energy = {
    master: '- **Master Brand:** Grounded, clear, trustworthy',
    retreat: '- **Retreat:** Deep, spacious, reflective (lowest energy, most contemplative)',
    explore: '- **Explore:** Energized, curious, adventurous (highest energy, most active)',
    stay: '- **Stay:** Restful, nurturing, comfortable (calm, restorative)',
    wellness: '- **Wellness:** Caring, holistic, renewing (gentle, supportive)',
    connect: '- **Connect:** Clear, encouraging, efficient (practical, enabling)',
  };
  return energy[subBrand as keyof typeof energy] || energy.master;
}

