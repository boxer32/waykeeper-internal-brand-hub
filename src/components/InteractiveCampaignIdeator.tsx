'use client';

import { useState } from 'react';
import { Sparkles, Loader2, Copy, Check, TrendingUp } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
// import MermaidDiagram from './MermaidDiagram'; // Temporarily disabled

interface CampaignConcept {
  name: string;
  bigIdea: string;
  why: string;
  messageAngles: string[];
  visualDirection: string;
  keyMessages: string[];
  cta: string;
  brandAlignment: number;
  mermaidFlow?: string;
}

interface CampaignResult {
  concepts: CampaignConcept[];
  recommendations: {
    topPick: number;
    reasoning: string;
  };
}

export default function InteractiveCampaignIdeator() {
  const [goal, setGoal] = useState('');
  const [audience, setAudience] = useState('');
  const [platform, setPlatform] = useState('');
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CampaignResult | null>(null);
  const [selectedConcept, setSelectedConcept] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const generateConcepts = async () => {
    if (!goal.trim() || !audience.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai/campaign-ideate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, audience, platform, budget }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate campaign concepts');
      }

      const data = await response.json();
      setResult(data);
      setSelectedConcept(data.recommendations?.topPick || 0);
    } catch (err: any) {
      setError(err.message || 'Failed to generate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyConcept = async (concept: CampaignConcept) => {
    const text = `Campaign: ${concept.name}

Big Idea: ${concept.bigIdea}

Why Waykeeper: ${concept.why}

Message Angles:
${concept.messageAngles.map((m, i) => `${i + 1}. ${m}`).join('\n')}

Key Messages:
${concept.keyMessages.map((m, i) => `• ${m}`).join('\n')}

Visual Direction: ${concept.visualDirection}

CTA: ${concept.cta}

Brand Alignment: ${concept.brandAlignment}/100`;

    await copyToClipboard(text);
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="text-sunrise-gold" size={28} />
          <h2 className="text-2xl font-headline font-bold text-deep-earth">
            Interactive Campaign Ideator
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              เป้าหมายแคมเปญ <span className="text-heart-rose">*</span>
            </label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="เช่น เพิ่มการจอง retreat ใน Q1, เพิ่มการรับรู้แบรนด์สำหรับ Waykeeper Explore..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              rows={2}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              กลุ่มเป้าหมาย <span className="text-heart-rose">*</span>
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="เช่น คนทำงานที่เหนื่อยล้า, อายุ 30-45 ปี"
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              ช่องทาง (ไม่บังคับ)
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            >
              <option value="">หลายช่องทาง</option>
              <option value="Instagram">Instagram</option>
              <option value="Email">Email</option>
              <option value="Paid Ads">Paid Ads</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Landing Page">Landing Page</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              งบประมาณ/ขอบเขต (ไม่บังคับ)
            </label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="เช่น งบจำกัด / organic only, งบใหญ่ / paid media"
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            />
          </div>
        </div>

        <button
          onClick={generateConcepts}
          disabled={!goal.trim() || !audience.trim() || loading}
          className="w-full bg-gradient-to-r from-skypath-blue to-journey-coral hover:shadow-lg text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={22} className="animate-spin" />
              <span>AI กำลังคิด Campaign Concepts...</span>
            </>
          ) : (
            <>
              <Sparkles size={22} />
              <span>สร้างไอเดียแคมเปญ</span>
            </>
          )}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-heart-rose/10 border border-heart-rose/30 rounded-lg text-heart-rose text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Results */}
      {result && result.concepts && (
        <div className="space-y-6">
          {/* Concept Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-headline font-bold text-deep-earth">
                ไอเดียแคมเปญ {result.concepts.length} แบบ
              </h3>
              {result.recommendations && (
                <span className="px-3 py-1.5 bg-sunrise-gold/10 text-sunrise-gold text-sm font-semibold rounded-lg">
                  ⭐ Top Pick: Concept {result.recommendations.topPick + 1}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {result.concepts.map((concept, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedConcept(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedConcept === index
                      ? 'bg-skypath-blue text-white shadow-md'
                      : 'bg-morning-light text-deep-earth hover:bg-soft-stone'
                  }`}
                >
                  Concept {index + 1}
                  {result.recommendations?.topPick === index && ' ⭐'}
                </button>
              ))}
            </div>

            {/* Selected Concept Detail */}
            {result.concepts[selectedConcept] && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-2xl font-headline font-bold text-deep-earth mb-2">
                      {result.concepts[selectedConcept].name}
                    </h4>
                    <p className="text-lg text-deep-earth/80 italic">
                      "{result.concepts[selectedConcept].bigIdea}"
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-4xl font-bold text-skypath-blue">
                      {result.concepts[selectedConcept].brandAlignment}
                    </div>
                    <div className="text-xs text-deep-earth/60">ความตรงกับแบรนด์</div>
                  </div>
                </div>

                {/* Why Waykeeper */}
                <div className="bg-skypath-blue/5 rounded-lg p-4 border-l-4 border-skypath-blue">
                  <p className="text-sm font-semibold text-deep-earth mb-1">ทำไมถึงเหมาะกับ Waykeeper:</p>
                  <p className="text-sm text-deep-earth/80">{result.concepts[selectedConcept].why}</p>
                </div>

                {/* Message Angles */}
                <div>
                  <h5 className="font-semibold text-deep-earth mb-3">มุมมองข้อความ:</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    {result.concepts[selectedConcept].messageAngles.map((angle, i) => (
                      <div key={i} className="bg-morning-light rounded-lg p-3 text-sm text-deep-earth">
                        <span className="font-semibold text-journey-coral">#{i + 1}</span> {angle}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Messages */}
                <div>
                  <h5 className="font-semibold text-deep-earth mb-3">ข้อความหลัก:</h5>
                  <ul className="space-y-2">
                    {result.concepts[selectedConcept].keyMessages.map((msg, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-deep-earth">
                        <span className="text-skypath-blue mt-0.5">•</span>
                        <span>{msg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Direction */}
                <div className="bg-gradient-to-br from-morning-light to-soft-stone/20 rounded-lg p-4">
                  <h5 className="font-semibold text-deep-earth mb-2">ทิศทางภาพ:</h5>
                  <p className="text-sm text-deep-earth/80">{result.concepts[selectedConcept].visualDirection}</p>
                </div>

                {/* CTA */}
                <div className="bg-journey-coral/10 rounded-lg p-4 border border-journey-coral/30">
                  <h5 className="font-semibold text-deep-earth mb-2">CTA ที่แนะนำ:</h5>
                  <p className="text-base font-medium text-deep-earth">"{result.concepts[selectedConcept].cta}"</p>
                </div>

                {/* Customer Journey (Mermaid) */}
                {result.concepts[selectedConcept].mermaidFlow && (
                  <div className="bg-white rounded-lg border border-soft-stone/30 p-4">
                    <h5 className="font-semibold text-deep-earth mb-3">Customer Journey Flow:</h5>
                    <pre className="text-xs font-mono text-deep-earth/70 overflow-x-auto bg-morning-light p-3 rounded">
                      {result.concepts[selectedConcept].mermaidFlow}
                    </pre>
                    <p className="text-xs text-deep-earth/50 mt-2">
                      📊 Mermaid diagram code (paste at mermaid.live to visualize)
                    </p>
                  </div>
                )}

                {/* Copy Button */}
                <button
                  onClick={() => copyConcept(result.concepts[selectedConcept])}
                  className="w-full bg-deep-earth text-white font-semibold py-3 rounded-lg hover:bg-skypath-blue transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy size={18} />
                  <span>คัดลอกทั้ง Concept</span>
                </button>
              </div>
            )}
          </div>

          {/* Top Recommendation */}
          {result.recommendations && (
            <div className="bg-gradient-to-br from-sunrise-gold/10 to-skypath-blue/10 border-2 border-sunrise-gold/30 rounded-lg p-6">
              <h4 className="font-headline font-bold text-lg text-deep-earth mb-3 flex items-center space-x-2">
                <TrendingUp className="text-sunrise-gold" size={22} />
                <span>AI แนะนำ</span>
              </h4>
              <p className="text-sm text-deep-earth leading-relaxed">
                {result.recommendations.reasoning}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

