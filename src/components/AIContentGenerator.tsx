'use client';

import { useState } from 'react';
import { Sparkles, Loader2, Copy, Check, RefreshCw } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

export default function AIContentGenerator() {
  const [contentType, setContentType] = useState('Instagram Caption');
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [tone, setTone] = useState('');
  const [subBrand, setSubBrand] = useState('master');
  const [additionalContext, setAdditionalContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState<string | null>(null);
  const [versions, setVersions] = useState<string[]>([]);
  const [currentVersion, setCurrentVersion] = useState(0);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contentTypes = [
    { value: 'Instagram Caption', label: 'Instagram Caption' },
    { value: 'Blog Post Opening', label: 'Blog Post Opening' },
    { value: 'Email Subject + Preview', label: 'Email Subject + Preview' },
    { value: 'Email Body', label: 'Email Body' },
    { value: 'Facebook Post', label: 'Facebook Post' },
    { value: 'LinkedIn Post', label: 'LinkedIn Post' },
    { value: 'Tweet/X Post', label: 'Tweet/X Post' },
    { value: 'Ad Copy', label: 'Ad Copy' },
    { value: 'Product Description', label: 'Product Description' },
    { value: 'Landing Page Hero', label: 'Landing Page Hero' },
  ];

  const generateContent = async (instruction?: string) => {
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const contextWithInstruction = instruction 
        ? `${additionalContext}\n\nSpecial instruction: ${instruction}`.trim()
        : additionalContext;

      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentType,
          topic,
          audience,
          tone,
          subBrand,
          additionalContext: contextWithInstruction,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      setGenerated(data.content);
      
      // Add to versions history
      setVersions(prev => [data.content, ...prev].slice(0, 5)); // Keep last 5 versions
      setCurrentVersion(0);
    } catch (err: any) {
      setError(err.message || 'Failed to generate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const regenerate = () => generateContent();
  const makeShorter = () => generateContent('Make this shorter and more concise');
  const makeLonger = () => generateContent('Make this longer with more detail');
  const makeMoreCasual = () => generateContent('Make this more casual and friendly');
  const makeMoreProfessional = () => generateContent('Make this more professional but keep warmth');

  const handleCopy = async () => {
    if (generated) {
      const success = await copyToClipboard(generated);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="text-sunrise-gold" size={24} />
        <h3 className="text-2xl font-headline font-bold text-deep-earth">
          AI Content Generator
        </h3>
        <span className="px-2 py-1 bg-sunrise-gold/10 text-sunrise-gold text-xs font-semibold rounded">
          GPT-4 Powered
        </span>
      </div>

      <p className="text-deep-earth/70 mb-6">
        Generate brand-aligned content with AI — always in Waykeeper voice
      </p>

      {/* Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            ประเภทเนื้อหา
          </label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            disabled={loading}
          >
            {contentTypes.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            หัวข้อ / เขียนเกี่ยวกับอะไร <span className="text-heart-rose">*</span>
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="เช่น ความท้าทายในการ integrate หลัง retreat, เปิดตัว Waykeeper Explore, ทำไมการเปลี่ยนแปลงต้องมี support..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            rows={3}
            disabled={loading}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              กลุ่มเป้าหมาย (ไม่บังคับ)
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="เช่น คนทำงานที่เหนื่อยล้า, ผู้บริหาร 30-45 ปี"
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
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
              disabled={loading}
            >
              <option value="master">Waykeeper (Master Brand)</option>
              <option value="retreat">Waykeeper Retreat</option>
              <option value="explore">Waykeeper Explore</option>
              <option value="stay">Waykeeper Stay</option>
              <option value="wellness">Waykeeper Wellness</option>
              <option value="connect">Waykeeper Connect</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            ข้อมูลเพิ่มเติม (ไม่บังคับ)
          </label>
          <input
            type="text"
            value={additionalContext}
            onChange={(e) => setAdditionalContext(e.target.value)}
            placeholder="เช่น ใส่ CTA ให้จอง, กล่าวถึงโปรแกรม 90 วัน..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            disabled={loading}
          />
        </div>

        <button
          onClick={generateContent}
          disabled={!topic.trim() || loading}
          className="w-full bg-skypath-blue hover:bg-journey-coral text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>กำลังสร้าง...</span>
            </>
          ) : (
            <>
              <Sparkles size={20} />
              <span>สร้างเนื้อหา</span>
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-heart-rose/10 border border-heart-rose/30 rounded-lg text-heart-rose text-sm">
          {error}
        </div>
      )}

      {/* Generated Content */}
      {generated && (
        <div className="border-t border-soft-stone/30 pt-6 space-y-6">
          {/* Header with Actions */}
          <div className="flex items-center justify-between">
            <h3 className="font-headline font-bold text-lg text-deep-earth">
              เนื้อหาที่สร้างแล้ว: {contentType}
              {versions.length > 1 && (
                <span className="ml-2 text-sm font-normal text-deep-earth/60">
                  (เวอร์ชัน {currentVersion + 1} จาก {versions.length})
                </span>
              )}
            </h3>
            <button
              onClick={handleCopy}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-skypath-blue text-white hover:bg-journey-coral'
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  <span>คัดลอกแล้ว!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>คัดลอก</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Text */}
          <div className="bg-morning-light rounded-lg p-6 text-deep-earth whitespace-pre-wrap leading-relaxed border border-soft-stone/30">
            {generated}
          </div>

          {/* Quick Actions */}
          <div>
            <p className="text-sm font-semibold text-deep-earth/70 mb-3">✨ ปรับแต่งด่วน:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={regenerate}
                disabled={loading}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-skypath-blue hover:text-skypath-blue rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
              >
                <RefreshCw size={14} className="inline mr-1.5" />
                สร้างใหม่
              </button>
              <button
                onClick={makeShorter}
                disabled={loading}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-journey-coral hover:text-journey-coral rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
              >
                ทำให้สั้นลง
              </button>
              <button
                onClick={makeLonger}
                disabled={loading}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-journey-coral hover:text-journey-coral rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
              >
                ทำให้ยาวขึ้น
              </button>
              <button
                onClick={makeMoreCasual}
                disabled={loading}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-sunrise-gold hover:text-sunrise-gold rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
              >
                เป็นกันเองมากขึ้น
              </button>
              <button
                onClick={makeMoreProfessional}
                disabled={loading}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-sunrise-gold hover:text-sunrise-gold rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
              >
                เป็นทางการมากขึ้น
              </button>
            </div>
          </div>

          {/* Version History */}
          {versions.length > 1 && (
            <div>
              <p className="text-sm font-semibold text-deep-earth/70 mb-3">📚 เวอร์ชันก่อนหน้า:</p>
              <div className="flex flex-wrap gap-2">
                {versions.map((version, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setGenerated(version);
                      setCurrentVersion(index);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      currentVersion === index
                        ? 'bg-skypath-blue text-white'
                        : 'bg-white border border-soft-stone text-deep-earth hover:border-skypath-blue'
                    }`}
                  >
                    เวอร์ชัน {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm text-deep-earth/60 italic">
            💡 เนื้อหาที่ AI สร้างในน้ำเสียง Waykeeper คลิก "คัดลอก" เมื่อพร้อมใช้งาน
          </p>
        </div>
      )}
    </div>
  );
}

