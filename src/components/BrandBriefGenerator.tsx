'use client';

import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

export default function BrandBriefGenerator() {
  const [context, setContext] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');
  const [subBrand, setSubBrand] = useState('master');
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateBrief = () => {
    setGenerated(true);
  };

  const briefContent = `# AI Brand Brief for Waykeeper

## Project Context
${context || '[Describe what you\'re creating]'}

## Target Audience
${audience || '[Who is this for?]'}

## Goal
${goal || '[What should this achieve?]'}

## Sub-Brand Focus
${getSubBrandDetails(subBrand)}

## Brand Voice Guidelines
- **Tone:** Warm wisdom that holds space for becoming
- **Style:** Empathetic directness with permission-giving honesty
- **Energy:** ${getSubBrandEnergy(subBrand)}

## Voice Characteristics
✓ Empathetic directness — name the struggle without drama
✓ Permission-giving — "It's okay to..." language
✓ Anti-BS honesty — tell the truth, no hype
✓ Grounded, not floating or spiritual

## Words to Use
- "We believe..."
- "It's okay to..."
- "The truth is..."
- "You're not alone..."
- "We're here for..."

## Words to Avoid
✗ "You must..." / "You should..."
✗ Toxic positivity ("Just think positive")
✗ Hype ("Amazing transformation")
✗ Guru language ("You need to...")
✗ Woo-woo terms ("Sacred journey")

## Core Brand Philosophy
Transformation is not an event. It's a process that requires Arrival, Immersion, Integration, and Continuity. Most brands stop at Immersion. Waykeeper exists for Integration and Continuity.

## Next Steps
Use this brief when prompting AI tools (ChatGPT, Claude, etc.) to ensure brand-consistent output.
`;

  const handleCopy = async () => {
    const success = await copyToClipboard(briefContent);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="text-sunrise-gold" size={24} />
        <h2 className="text-2xl font-headline font-bold text-deep-earth">
          AI Brand Brief Generator
        </h2>
      </div>

      <p className="text-deep-earth/70 mb-6">
        Create a custom brand brief for AI tools (ChatGPT, Claude, etc.) to ensure consistent, on-brand output.
      </p>

      {/* Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            คุณกำลังสร้างอะไร?
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="เช่น Email sequence สำหรับ post-retreat integration, Instagram campaign สำหรับ Waykeeper Explore launch..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            กลุ่มเป้าหมายคือใคร?
          </label>
          <input
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="เช่น คนทำงานที่เหนื่อยล้า, นักเดินทางคนเดียว, คนที่สนใจ wellness..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            เป้าหมายคืออะไร?
          </label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="เช่น เพิ่มการจอง, เพิ่ม engagement, ให้ความรู้เรื่อง integration..."
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

        <button
          onClick={generateBrief}
          className="w-full bg-skypath-blue hover:bg-journey-coral text-white font-semibold py-3 rounded-lg transition-colors"
        >
          สร้าง Brand Brief
        </button>
      </div>

      {/* Generated Brief */}
      {generated && (
        <div className="border-t border-soft-stone/30 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-bold text-lg text-deep-earth">
              Your AI Brand Brief
            </h3>
            <button
              onClick={handleCopy}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                copied
                  ? 'bg-skypath-blue text-white'
                  : 'bg-deep-earth text-white hover:bg-skypath-blue'
              }`}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>คัดลอกแล้ว!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>คัดลอก Brief</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-morning-light rounded-lg p-6 font-mono text-sm text-deep-earth whitespace-pre-wrap">
            {briefContent}
          </div>

          <p className="text-sm text-deep-earth/60 mt-4 italic">
            💡 Copy this brief and paste it at the start of your conversation with any AI tool for brand-consistent results.
          </p>
        </div>
      )}
    </div>
  );
}

function getSubBrandDetails(subBrand: string): string {
  const details = {
    master: 'Waykeeper (Master Brand) — Philosophy holder & trust anchor',
    retreat: 'Waykeeper Retreat — Deep transformation + 90-day integration',
    explore: 'Waykeeper Explore — Transformational travel experiences',
    stay: 'Waykeeper Stay — Certified accommodation network',
    wellness: 'Waykeeper Wellness — Integrated wellness services',
    connect: 'Waykeeper Connect — Digital platform & community',
  };
  return details[subBrand as keyof typeof details] || details.master;
}

function getSubBrandEnergy(subBrand: string): string {
  const energy = {
    master: 'Grounded, clear, trustworthy',
    retreat: 'Deep, spacious, reflective',
    explore: 'Energized, curious, adventurous',
    stay: 'Restful, nurturing, comfortable',
    wellness: 'Caring, holistic, renewing',
    connect: 'Clear, encouraging, efficient',
  };
  return energy[subBrand as keyof typeof energy] || energy.master;
}

