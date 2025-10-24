'use client';

import { useState } from 'react';
import { AlertCircle, Loader2, Check, X, Sparkles, Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface ToneAnalysis {
  score: number;
  alignment: 'excellent' | 'good' | 'needs-work' | 'off-brand';
  strengths: string[];
  concerns: string[];
  suggestions: string[];
  rewriteSuggestion?: string;
}

export default function AIToneChecker() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ToneAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fixing, setFixing] = useState(false);
  const [fixedVersion, setFixedVersion] = useState<string | null>(null);
  const [copiedFixed, setCopiedFixed] = useState(false);

  const checkTone = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);
    setFixedVersion(null);

    try {
      const response = await fetch('/api/ai/tone-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze tone');
      }

      const data = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const autoFix = async () => {
    if (!text.trim()) return;

    setFixing(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          instruction: 'Fix to perfectly match Waykeeper brand voice. Make it score 90+.',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fix text');
      }

      const data = await response.json();
      setFixedVersion(data.rewritten);
      
      // Re-check the fixed version
      const recheckResponse = await fetch('/api/ai/tone-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: data.rewritten }),
      });

      if (recheckResponse.ok) {
        const recheckData = await recheckResponse.json();
        setResults(recheckData);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fix. Please try again.');
    } finally {
      setFixing(false);
    }
  };

  const handleCopyFixed = async () => {
    if (fixedVersion) {
      const success = await copyToClipboard(fixedVersion);
      if (success) {
        setCopiedFixed(true);
        setTimeout(() => setCopiedFixed(false), 2000);
      }
    }
  };

  const useFixedVersion = () => {
    if (fixedVersion) {
      setText(fixedVersion);
      setFixedVersion(null);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-sunrise-gold';
    if (score >= 40) return 'text-orange-600';
    return 'text-heart-rose';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-sunrise-gold/10';
    if (score >= 40) return 'bg-orange-100';
    return 'bg-heart-rose/10';
  };

  const getAlignmentLabel = (alignment: string) => {
    const labels: Record<string, string> = {
      excellent: '✨ Excellent! Perfect Waykeeper voice',
      good: '✓ Good match with minor improvements',
      'needs-work': '⚠️ Needs work to match brand voice',
      'off-brand': '✗ Off-brand — significant changes needed',
    };
    return labels[alignment] || alignment;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="text-skypath-blue" size={24} />
        <h3 className="text-2xl font-headline font-bold text-deep-earth">
          AI Brand Tone Checker
        </h3>
        <span className="px-2 py-1 bg-sunrise-gold/10 text-sunrise-gold text-xs font-semibold rounded">
          Powered by GPT-4
        </span>
      </div>

      <p className="text-deep-earth/70 mb-6">
        AI-powered analysis to check if your copy matches Waykeeper's brand voice
      </p>

      {/* Text Input */}
      <div className="mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="วาง email, caption, blog post, หรือข้อความใดๆ ที่นี่..."
          className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[150px]"
          disabled={loading}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-deep-earth/60">
            {text.length} ตัวอักษร
          </span>
          <button
            onClick={checkTone}
            disabled={!text.trim() || loading}
            className="px-6 py-2 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>กำลังวิเคราะห์...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>วิเคราะห์ด้วย AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-heart-rose/10 border border-heart-rose/30 rounded-lg text-heart-rose text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Score */}
          <div className={`p-6 rounded-lg ${getScoreBg(results.score)}`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-headline font-bold text-lg text-deep-earth">
                Brand Alignment Score
              </h4>
              <span className={`text-4xl font-bold ${getScoreColor(results.score)}`}>
                {results.score}/100
              </span>
            </div>
            <p className="text-sm text-deep-earth/80 font-medium">
              {getAlignmentLabel(results.alignment)}
            </p>
          </div>

          {/* Strengths */}
          {results.strengths && results.strengths.length > 0 && (
            <div>
              <h4 className="flex items-center space-x-2 font-semibold text-deep-earth mb-3">
                <Check size={20} className="text-green-600" />
                <span>What's Working Well</span>
              </h4>
              <ul className="space-y-2">
                {results.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-sm text-deep-earth bg-green-50 p-3 rounded-lg"
                  >
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Concerns */}
          {results.concerns && results.concerns.length > 0 && (
            <div>
              <h4 className="flex items-center space-x-2 font-semibold text-deep-earth mb-3">
                <X size={20} className="text-heart-rose" />
                <span>Areas to Improve</span>
              </h4>
              <ul className="space-y-2">
                {results.concerns.map((concern, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-sm text-deep-earth bg-heart-rose/10 p-3 rounded-lg"
                  >
                    <span className="text-heart-rose mt-0.5">✗</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {results.suggestions && results.suggestions.length > 0 && (
            <div>
              <h4 className="flex items-center space-x-2 font-semibold text-deep-earth mb-3">
                <AlertCircle size={20} className="text-skypath-blue" />
                <span>AI Suggestions</span>
              </h4>
              <ul className="space-y-2">
                {results.suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-sm text-deep-earth bg-skypath-blue/10 p-3 rounded-lg"
                  >
                    <span className="text-skypath-blue mt-0.5">💡</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Auto-Fix Button */}
          {results.score < 70 && !fixedVersion && (
            <div className="bg-sunrise-gold/10 border border-sunrise-gold/30 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-deep-earth mb-2 flex items-center space-x-2">
                    <Sparkles size={18} className="text-sunrise-gold" />
                    <span>Score Below 70 — Need Help?</span>
                  </h4>
                  <p className="text-sm text-deep-earth/80">
                    Let AI automatically rewrite this in perfect Waykeeper voice
                  </p>
                </div>
                <button
                  onClick={autoFix}
                  disabled={fixing}
                  className="ml-4 px-6 py-3 bg-sunrise-gold hover:bg-journey-coral text-white font-semibold rounded-lg transition-colors disabled:opacity-50 flex items-center space-x-2 whitespace-nowrap"
                >
                  {fixing ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Fixing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      <span>Auto-Fix</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Fixed Version */}
          {fixedVersion && (
            <div className="bg-gradient-to-br from-green-50 to-skypath-blue/5 border-2 border-green-500/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-deep-earth flex items-center space-x-2">
                  <Check size={20} className="text-green-600" />
                  <span>✨ Fixed Version (Score: {results?.score}/100)</span>
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyFixed}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      copiedFixed
                        ? 'bg-green-600 text-white'
                        : 'bg-white border border-green-500/30 text-green-700 hover:bg-green-50'
                    }`}
                  >
                    {copiedFixed ? (
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
                  <button
                    onClick={useFixedVersion}
                    className="px-4 py-2 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors font-medium text-sm"
                  >
                    Use This Version
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-deep-earth leading-relaxed">
                {fixedVersion}
              </div>
              
              <p className="text-xs text-deep-earth/60 mt-3 italic">
                ✅ AI has rewritten your text to perfectly match Waykeeper voice
              </p>
            </div>
          )}

          {/* Rewrite Suggestion */}
          {results.rewriteSuggestion && !fixedVersion && (
            <div className="bg-gradient-to-br from-skypath-blue/5 to-journey-coral/5 border border-skypath-blue/30 rounded-lg p-6">
              <h4 className="font-semibold text-deep-earth mb-3 flex items-center space-x-2">
                <Sparkles size={18} className="text-skypath-blue" />
                <span>AI Rewrite Suggestion</span>
              </h4>
              <div className="bg-white rounded-lg p-4 text-sm text-deep-earth leading-relaxed">
                {results.rewriteSuggestion}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info */}
      <div className="mt-6 pt-6 border-t border-soft-stone/30">
        <p className="text-xs text-deep-earth/60">
          💡 This AI analyzer uses GPT-4 trained on Waykeeper's complete brand voice guidelines. 
          Analysis typically takes 3-5 seconds.
        </p>
      </div>
    </div>
  );
}

