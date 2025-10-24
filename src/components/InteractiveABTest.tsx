'use client';

import { useState } from 'react';
import { GitCompare, Loader2, Copy, Check, TrendingUp, Award, Sparkles } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface VersionAnalysis {
  overallScore: number;
  voiceScore: number;
  valueScore: number;
  emotionalScore: number;
  trustScore: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
}

interface ABTestResult {
  versionA: VersionAnalysis;
  versionB: VersionAnalysis;
  comparison: {
    winner: 'A' | 'B';
    margin: string;
    reasoning: string;
    keyDifferences: string[];
    recommendation: string;
  };
  improvedVersion: string;
}

export default function InteractiveABTest() {
  const [versionA, setVersionA] = useState('');
  const [versionB, setVersionB] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ABTestResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeVersions = async () => {
    if (!versionA.trim() || !versionB.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai/ab-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ versionA, versionB, context }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze versions');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const ScoreBar = ({ label, score, color = 'skypath-blue' }: { label: string; score: number; color?: string }) => (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-deep-earth/70">{label}</span>
        <span className="text-sm font-bold text-deep-earth">{score}/100</span>
      </div>
      <div className="h-2 bg-morning-light rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color} transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <GitCompare className="text-journey-coral" size={28} />
          <h2 className="text-2xl font-headline font-bold text-deep-earth">
            A/B Test Analyzer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Version A <span className="text-heart-rose">*</span>
            </label>
            <textarea
              value={versionA}
              onChange={(e) => setVersionA(e.target.value)}
              placeholder="Paste your first version here..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[150px]"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-earth mb-2">
              Version B <span className="text-heart-rose">*</span>
            </label>
            <textarea
              value={versionB}
              onChange={(e) => setVersionB(e.target.value)}
              placeholder="Paste your second version here..."
              className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[150px]"
              disabled={loading}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-deep-earth mb-2">
            Context (Optional)
          </label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g., Instagram caption for retreat launch, Email subject line..."
            className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all"
            disabled={loading}
          />
        </div>

        <button
          onClick={analyzeVersions}
          disabled={!versionA.trim() || !versionB.trim() || loading}
          className="w-full bg-gradient-to-r from-journey-coral to-heart-rose hover:shadow-lg text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={22} className="animate-spin" />
              <span>AI กำลังวิเคราะห์...</span>
            </>
          ) : (
            <>
              <GitCompare size={22} />
              <span>Compare & Analyze</span>
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
          {/* Winner Announcement */}
          <div className={`rounded-lg p-6 border-2 ${
            result.comparison.winner === 'A'
              ? 'bg-skypath-blue/10 border-skypath-blue'
              : 'bg-journey-coral/10 border-journey-coral'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <Award className="text-sunrise-gold" size={32} />
              <div>
                <h3 className="text-2xl font-headline font-bold text-deep-earth">
                  Winner: Version {result.comparison.winner}
                </h3>
                <p className="text-sm text-deep-earth/70">
                  Margin: {result.comparison.margin}
                </p>
              </div>
            </div>
            <p className="text-deep-earth/90 leading-relaxed">
              {result.comparison.reasoning}
            </p>
          </div>

          {/* Side-by-Side Scores */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Version A */}
            <div className={`bg-white rounded-lg shadow-sm border-2 p-6 ${
              result.comparison.winner === 'A' ? 'border-skypath-blue' : 'border-soft-stone/30'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline font-bold text-xl text-deep-earth">
                  Version A
                </h4>
                {result.comparison.winner === 'A' && (
                  <Award className="text-sunrise-gold" size={24} />
                )}
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-skypath-blue mb-1">
                  {result.versionA.overallScore}
                </div>
                <div className="text-sm text-deep-earth/60">Overall Score</div>
              </div>

              <div className="space-y-3 mb-6">
                <ScoreBar label="Voice Match" score={result.versionA.voiceScore} color="skypath-blue" />
                <ScoreBar label="Value Alignment" score={result.versionA.valueScore} color="sunrise-gold" />
                <ScoreBar label="Emotional Truth" score={result.versionA.emotionalScore} color="journey-coral" />
                <ScoreBar label="Trust Building" score={result.versionA.trustScore} color="heart-rose" />
              </div>

              {result.versionA.strengths.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-600 mb-2">✓ Strengths:</p>
                  <ul className="text-xs text-deep-earth/80 space-y-1">
                    {result.versionA.strengths.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.versionA.weaknesses.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-heart-rose mb-2">✗ Weaknesses:</p>
                  <ul className="text-xs text-deep-earth/80 space-y-1">
                    {result.versionA.weaknesses.map((w, i) => (
                      <li key={i}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Version B */}
            <div className={`bg-white rounded-lg shadow-sm border-2 p-6 ${
              result.comparison.winner === 'B' ? 'border-journey-coral' : 'border-soft-stone/30'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline font-bold text-xl text-deep-earth">
                  Version B
                </h4>
                {result.comparison.winner === 'B' && (
                  <Award className="text-sunrise-gold" size={24} />
                )}
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-journey-coral mb-1">
                  {result.versionB.overallScore}
                </div>
                <div className="text-sm text-deep-earth/60">Overall Score</div>
              </div>

              <div className="space-y-3 mb-6">
                <ScoreBar label="Voice Match" score={result.versionB.voiceScore} color="skypath-blue" />
                <ScoreBar label="Value Alignment" score={result.versionB.valueScore} color="sunrise-gold" />
                <ScoreBar label="Emotional Truth" score={result.versionB.emotionalScore} color="journey-coral" />
                <ScoreBar label="Trust Building" score={result.versionB.trustScore} color="heart-rose" />
              </div>

              {result.versionB.strengths.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-600 mb-2">✓ Strengths:</p>
                  <ul className="text-xs text-deep-earth/80 space-y-1">
                    {result.versionB.strengths.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.versionB.weaknesses.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-heart-rose mb-2">✗ Weaknesses:</p>
                  <ul className="text-xs text-deep-earth/80 space-y-1">
                    {result.versionB.weaknesses.map((w, i) => (
                      <li key={i}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Key Differences */}
          {result.comparison.keyDifferences && result.comparison.keyDifferences.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
              <h4 className="font-headline font-bold text-lg text-deep-earth mb-4">
                Key Differences
              </h4>
              <ul className="space-y-2">
                {result.comparison.keyDifferences.map((diff, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-deep-earth">
                    <span className="text-skypath-blue mt-0.5">→</span>
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Final Recommendation */}
          <div className="bg-gradient-to-br from-sunrise-gold/10 to-skypath-blue/10 border-2 border-sunrise-gold/30 rounded-lg p-6">
            <h4 className="font-headline font-bold text-lg text-deep-earth mb-3 flex items-center space-x-2">
              <TrendingUp className="text-sunrise-gold" size={22} />
              <span>AI Recommendation</span>
            </h4>
            <p className="text-sm text-deep-earth/90 leading-relaxed mb-4">
              {result.comparison.recommendation}
            </p>
          </div>

          {/* Improved Version */}
          {result.improvedVersion && (
            <div className="bg-gradient-to-br from-green-50 to-skypath-blue/5 border-2 border-green-500/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-headline font-bold text-lg text-deep-earth flex items-center space-x-2">
                  <Sparkles className="text-green-600" size={20} />
                  <span>✨ Even Better Version</span>
                </h4>
                <button
                  onClick={() => copyToClipboard(result.improvedVersion)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <Copy size={14} />
                  <span>Copy</span>
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 text-deep-earth leading-relaxed">
                {result.improvedVersion}
              </div>
              <p className="text-xs text-deep-earth/60 mt-3">
                AI combined the best of both versions
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

