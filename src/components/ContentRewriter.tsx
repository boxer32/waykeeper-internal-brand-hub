'use client';

import { useState } from 'react';
import { RefreshCw, Loader2, Copy, Check, X } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

export default function ContentRewriter() {
  const [originalText, setOriginalText] = useState('');
  const [instruction, setInstruction] = useState('');
  const [targetTone, setTargetTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [rewritten, setRewritten] = useState<string | null>(null);
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedRewritten, setCopiedRewritten] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const rewriteContent = async () => {
    if (!originalText.trim()) return;

    setLoading(true);
    setError(null);
    setRewritten(null);

    try {
      const response = await fetch('/api/ai/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: originalText,
          targetTone,
          instruction,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to rewrite content');
      }

      const data = await response.json();
      setRewritten(data.rewritten);
    } catch (err: any) {
      setError(err.message || 'Failed to rewrite. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyOriginal = async () => {
    if (originalText) {
      const success = await copyToClipboard(originalText);
      if (success) {
        setCopiedOriginal(true);
        setTimeout(() => setCopiedOriginal(false), 2000);
      }
    }
  };

  const handleCopyRewritten = async () => {
    if (rewritten) {
      const success = await copyToClipboard(rewritten);
      if (success) {
        setCopiedRewritten(true);
        setTimeout(() => setCopiedRewritten(false), 2000);
      }
    }
  };

  const acceptRewrite = () => {
    if (rewritten) {
      setOriginalText(rewritten);
      setAccepted(true);
      setTimeout(() => setAccepted(false), 2000);
    }
  };

  const tryAgain = () => {
    setRewritten(null);
    setAccepted(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <RefreshCw className="text-journey-coral" size={24} />
        <h3 className="text-2xl font-headline font-bold text-deep-earth">
          AI Content Rewriter
        </h3>
        <span className="px-2 py-1 bg-journey-coral/10 text-journey-coral text-xs font-semibold rounded">
          GPT-4 Powered
        </span>
      </div>

      <p className="text-deep-earth/70 mb-6">
        Transform any text into Waykeeper brand voice — from corporate speak to warm wisdom
      </p>

      {/* Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            ข้อความต้นฉบับ <span className="text-heart-rose">*</span>
          </label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="วางข้อความที่ต้องการปรับเป็นน้ำเสียง Waykeeper..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[120px]"
            disabled={loading}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              โทนที่ต้องการ (ไม่บังคับ)
            </label>
            <select
              value={targetTone}
              onChange={(e) => setTargetTone(e.target.value)}
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            >
              <option value="">อัตโนมัติ (Waykeeper Default)</option>
              <option value="more-empathetic">เห็นอกเห็นใจมากขึ้น</option>
              <option value="more-direct">ตรงไปตรงมามากขึ้น</option>
              <option value="warmer">อบอุ่นและนุ่มนวลมากขึ้น</option>
              <option value="professional">เป็นทางการแต่อบอุ่น</option>
              <option value="casual">เป็นกันเองมากขึ้น</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              คำแนะนำเฉพาะ (ไม่บังคับ)
            </label>
            <input
              type="text"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="เช่น ทำให้สั้นลง, เพิ่ม CTA..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            />
          </div>
        </div>

        <button
          onClick={rewriteContent}
          disabled={!originalText.trim() || loading}
          className="w-full bg-journey-coral hover:bg-skypath-blue text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>กำลังปรับ...</span>
            </>
          ) : (
            <>
              <RefreshCw size={20} />
              <span>ปรับเป็นน้ำเสียง Waykeeper</span>
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

      {/* Rewritten Content - Side by Side */}
      {rewritten && (
        <div className="border-t border-soft-stone/30 pt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Original */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-deep-earth/60 flex items-center space-x-1">
                  <X size={16} className="text-heart-rose" />
                  <span>Original (Before)</span>
                </h4>
                <button
                  onClick={handleCopyOriginal}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    copiedOriginal
                      ? 'bg-skypath-blue text-white'
                      : 'bg-white border border-soft-stone text-deep-earth hover:border-skypath-blue'
                  }`}
                >
                  {copiedOriginal ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedOriginal ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="bg-morning-light/70 rounded-lg p-4 text-sm text-deep-earth/70 leading-relaxed min-h-[120px] border border-soft-stone/30">
                {originalText}
              </div>
            </div>

            {/* Rewritten */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-deep-earth flex items-center space-x-1">
                  <Check size={16} className="text-green-600" />
                  <span>✨ Waykeeper Voice (After)</span>
                </h4>
                <button
                  onClick={handleCopyRewritten}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    copiedRewritten
                      ? 'bg-green-600 text-white'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {copiedRewritten ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedRewritten ? 'Copied!' : 'Copy This'}</span>
                </button>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-skypath-blue/5 border-2 border-green-500/30 rounded-lg p-4 text-deep-earth leading-relaxed min-h-[120px]">
                {rewritten}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-soft-stone/30">
            <div className="flex items-center space-x-3">
              {accepted && (
                <span className="flex items-center space-x-2 text-green-600 font-medium text-sm">
                  <Check size={16} />
                  <span>Accepted! Original updated</span>
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={tryAgain}
                className="px-4 py-2 bg-white border border-soft-stone text-deep-earth hover:border-journey-coral hover:text-journey-coral rounded-lg transition-colors text-sm font-medium"
              >
                Try Different Version
              </button>
              <button
                onClick={acceptRewrite}
                className="px-5 py-2 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors font-medium text-sm flex items-center space-x-2"
              >
                <Check size={16} />
                  <span>ยอมรับและใช้</span>
              </button>
            </div>
          </div>

          <p className="text-sm text-deep-earth/60 italic">
            💡 Compare side-by-side. Click "Copy This" on the rewritten version to use it, or "Accept & Use" to replace your original.
          </p>
        </div>
      )}
    </div>
  );
}


