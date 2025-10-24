'use client';

import { useState } from 'react';
import { Shield, Loader2, Copy, Check, AlertTriangle, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
// import MermaidDiagram from './MermaidDiagram'; // Temporarily disabled

interface BrandCheckResult {
  overallScore: number;
  verdict: 'green-light' | 'yellow-proceed-with-changes' | 'red-stop';
  scores: {
    valueAlignment: number;
    voiceMatch: number;
    emotionalTruth: number;
    differentiation: number;
    feasibility: number;
  };
  analysis: {
    whatWorks: string[];
    whatsConcerning: string[];
    redLineViolations: string[];
    howToFix: string[];
  };
  improvedVersion: string;
  visualStructure?: {
    type: string;
    code: string;
  };
  recommendation: string;
}

export default function InteractiveBrandCheck() {
  const [idea, setIdea] = useState('');
  const [type, setType] = useState('campaign');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BrandCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkAlignment = async () => {
    if (!idea.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai/brand-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, type }),
      });

      if (!response.ok) {
        throw new Error('Failed to check alignment');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getVerdictConfig = (verdict: string) => {
    const configs = {
      'green-light': {
        icon: <CheckCircle2 size={32} className="text-green-600" />,
        bg: 'bg-green-50',
        border: 'border-green-500',
        text: '✅ Green Light — Go for It!',
        color: 'text-green-700',
      },
      'yellow-proceed-with-changes': {
        icon: <AlertTriangle size={32} className="text-sunrise-gold" />,
        bg: 'bg-sunrise-gold/10',
        border: 'border-sunrise-gold',
        text: '⚠️ Yellow — Proceed with Changes',
        color: 'text-sunrise-gold',
      },
      'red-stop': {
        icon: <XCircle size={32} className="text-heart-rose" />,
        bg: 'bg-heart-rose/10',
        border: 'border-heart-rose',
        text: '🛑 Red — Stop (Breaks Brand)',
        color: 'text-heart-rose',
      },
    };
    return configs[verdict as keyof typeof configs] || configs['yellow-proceed-with-changes'];
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="text-skypath-blue" size={28} />
          <h2 className="text-2xl font-headline font-bold text-deep-earth">
            Brand Alignment Checker
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Type of Idea
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
              disabled={loading}
            >
              <option value="campaign">Campaign Concept</option>
              <option value="content">Content Piece</option>
              <option value="product">Product/Service Idea</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="positioning">Positioning Change</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Describe Your Idea <span className="text-heart-rose">*</span>
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="อธิบายไอเดียของคุณให้ละเอียด — AI จะวิเคราะห์ว่าตรงกับแบรนด์ Waykeeper หรือไม่..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[150px]"
              disabled={loading}
            />
          </div>
        </div>

        <button
          onClick={checkAlignment}
          disabled={!idea.trim() || loading}
          className="w-full mt-4 bg-gradient-to-r from-skypath-blue to-journey-coral hover:shadow-lg text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={22} className="animate-spin" />
              <span>AI กำลังตรวจสอบแบรนด์...</span>
            </>
          ) : (
            <>
              <Shield size={22} />
              <span>Check Brand Alignment</span>
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
      {result && (
        <div className="space-y-6">
          {/* Verdict Card */}
          {(() => {
            const config = getVerdictConfig(result.verdict);
            return (
              <div className={`${config.bg} border-2 ${config.border} rounded-lg p-8`}>
                <div className="flex items-start space-x-4">
                  {config.icon}
                  <div className="flex-1">
                    <h3 className={`text-2xl font-headline font-bold ${config.color} mb-2`}>
                      {config.text}
                    </h3>
                    <div className="text-5xl font-bold text-deep-earth mb-2">
                      {result.overallScore}<span className="text-2xl">/100</span>
                    </div>
                    <p className="text-deep-earth/80">
                      {result.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Score Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <h4 className="font-headline font-bold text-lg text-deep-earth mb-6">
              Score Breakdown
            </h4>
            <div className="grid md:grid-cols-5 gap-6">
              {Object.entries(result.scores).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className={`text-3xl font-bold mb-1 ${
                    value >= 80 ? 'text-green-600' :
                    value >= 60 ? 'text-sunrise-gold' :
                    'text-heart-rose'
                  }`}>
                    {value}
                  </div>
                  <div className="text-xs text-deep-earth/60 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* What Works */}
            {result.analysis.whatWorks.length > 0 && (
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h5 className="font-semibold text-green-700 mb-3 flex items-center space-x-2">
                  <CheckCircle2 size={18} />
                  <span>What Works</span>
                </h5>
                <ul className="space-y-2">
                  {result.analysis.whatWorks.map((item, i) => (
                    <li key={i} className="text-sm text-green-800 flex items-start space-x-2">
                      <span>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's Concerning */}
            {result.analysis.whatsConcerning.length > 0 && (
              <div className="bg-sunrise-gold/10 rounded-lg p-6 border border-sunrise-gold/30">
                <h5 className="font-semibold text-sunrise-gold mb-3 flex items-center space-x-2">
                  <AlertTriangle size={18} />
                  <span>What's Concerning</span>
                </h5>
                <ul className="space-y-2">
                  {result.analysis.whatsConcerning.map((item, i) => (
                    <li key={i} className="text-sm text-deep-earth flex items-start space-x-2">
                      <span className="text-sunrise-gold">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Red Line Violations */}
          {result.analysis.redLineViolations && result.analysis.redLineViolations.length > 0 && (
            <div className="bg-heart-rose/10 border-2 border-heart-rose/30 rounded-lg p-6">
              <h5 className="font-semibold text-heart-rose mb-3 flex items-center space-x-2">
                <XCircle size={20} />
                <span>🚨 Brand Red Line Violations</span>
              </h5>
              <ul className="space-y-2">
                {result.analysis.redLineViolations.map((item, i) => (
                  <li key={i} className="text-sm text-heart-rose font-medium flex items-start space-x-2">
                    <span>✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How to Fix */}
          {result.analysis.howToFix && result.analysis.howToFix.length > 0 && (
            <div className="bg-skypath-blue/10 border border-skypath-blue/30 rounded-lg p-6">
              <h5 className="font-semibold text-skypath-blue mb-3">💡 How to Waykeeper-ify It:</h5>
              <ol className="space-y-2">
                {result.analysis.howToFix.map((fix, i) => (
                  <li key={i} className="text-sm text-deep-earth flex items-start space-x-2">
                    <span className="font-bold text-skypath-blue">{i + 1}.</span>
                    <span>{fix}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Visual Structure */}
          {result.visualStructure && result.visualStructure.code && (
            <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
              <h4 className="font-headline font-bold text-lg text-deep-earth mb-4">
                Visual Structure (Mermaid Diagram)
              </h4>
              <pre className="text-xs font-mono text-deep-earth/70 overflow-x-auto bg-morning-light p-4 rounded">
                {result.visualStructure.code}
              </pre>
              <p className="text-xs text-deep-earth/50 mt-3">
                📊 Copy this code and paste at <a href="https://mermaid.live" target="_blank" className="text-skypath-blue hover:underline">mermaid.live</a> to visualize
              </p>
            </div>
          )}

          {/* Improved Version */}
          {result.improvedVersion && (
            <div className="bg-gradient-to-br from-green-50 to-skypath-blue/5 border-2 border-green-500/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-headline font-bold text-lg text-deep-earth">
                  ✨ Your Idea, Waykeeper-ified
                </h4>
                <button
                  onClick={() => copyToClipboard(result.improvedVersion)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2"
                >
                  <Copy size={16} />
                  <span>Copy Improved Version</span>
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 text-deep-earth leading-relaxed whitespace-pre-wrap">
                {result.improvedVersion}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

