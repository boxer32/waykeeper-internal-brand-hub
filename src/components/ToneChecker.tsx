'use client';

import { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

const WORDS_TO_USE = [
  "It's okay to...",
  "You're allowed to...",
  "We believe...",
  "We're here for...",
  "The truth is...",
  "You're not alone",
  "Integration",
  "Transformation",
  "Permission",
  "Grounded",
  "Honest",
  "Supportive",
];

const WORDS_TO_AVOID = [
  "You must...",
  "You should...",
  "Just think positive",
  "Everything happens for a reason",
  "Amazing transformation",
  "Manifest",
  "Sacred",
  "Blessed",
  "Guru",
  "Toxic positivity phrases",
];

export default function ToneChecker() {
  const [text, setText] = useState('');
  const [results, setResults] = useState<{
    goodWords: string[];
    badWords: string[];
    score: number;
  } | null>(null);

  const checkTone = () => {
    const lowerText = text.toLowerCase();
    const foundGood: string[] = [];
    const foundBad: string[] = [];

    WORDS_TO_USE.forEach(word => {
      if (lowerText.includes(word.toLowerCase())) {
        foundGood.push(word);
      }
    });

    WORDS_TO_AVOID.forEach(word => {
      const wordToCheck = word.replace(' (overused)', '').toLowerCase();
      if (lowerText.includes(wordToCheck)) {
        foundBad.push(word);
      }
    });

    // Calculate score (0-100)
    const score = foundGood.length > 0 || foundBad.length === 0
      ? Math.min(100, (foundGood.length * 20) - (foundBad.length * 15))
      : 0;

    setResults({
      goodWords: foundGood,
      badWords: foundBad,
      score: Math.max(0, score),
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-sunrise-gold';
    return 'text-heart-rose';
  };

  const getScoreBg = (score: number) => {
    if (score >= 70) return 'bg-green-100';
    if (score >= 40) return 'bg-sunrise-gold/10';
    return 'bg-heart-rose/10';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <AlertCircle className="text-skypath-blue" size={24} />
        <h3 className="text-2xl font-headline font-bold text-deep-earth">
          เช็คโทนเสียงแบรนด์
        </h3>
      </div>

      <p className="text-deep-earth/70 mb-6">
        วางข้อความของคุณที่นี่เพื่อตรวจสอบว่าเข้ากับน้ำเสียงแบรนด์ Waykeeper หรือไม่
      </p>

      {/* Text Input */}
      <div className="mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="วาง email, caption, หรือข้อความของคุณที่นี่..."
          className="w-full px-4 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all min-h-[150px]"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-deep-earth/60">
            {text.length} ตัวอักษร
          </span>
          <button
            onClick={checkTone}
            disabled={!text.trim()}
            className="px-6 py-2 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            เช็คโทน
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Score */}
          <div className={`p-6 rounded-lg ${getScoreBg(results.score)}`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-headline font-bold text-lg text-deep-earth">
                คะแนนโทนเสียง
              </h4>
              <span className={`text-4xl font-bold ${getScoreColor(results.score)}`}>
                {results.score}/100
              </span>
            </div>
            <p className="text-sm text-deep-earth/70">
              {results.score >= 70 && "✅ Great! This sounds like Waykeeper."}
              {results.score >= 40 && results.score < 70 && "⚠️ Getting there. Consider using more brand-aligned language."}
              {results.score < 40 && "❌ This doesn't quite match our tone. Try more permission-giving, supportive language."}
            </p>
          </div>

          {/* Good Words Found */}
          {results.goodWords.length > 0 && (
            <div>
              <h4 className="flex items-center space-x-2 font-semibold text-deep-earth mb-3">
                <Check size={20} className="text-green-600" />
                <span>Brand-Aligned Phrases Found ({results.goodWords.length})</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {results.goodWords.map((word, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    ✓ {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bad Words Found */}
          {results.badWords.length > 0 && (
            <div>
              <h4 className="flex items-center space-x-2 font-semibold text-deep-earth mb-3">
                <X size={20} className="text-heart-rose" />
                <span>Phrases to Avoid Found ({results.badWords.length})</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {results.badWords.map((word, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium line-through"
                  >
                    ✗ {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          <div className="bg-skypath-blue/10 rounded-lg p-4">
            <h4 className="font-semibold text-deep-earth mb-2">💡 Suggestions</h4>
            <ul className="text-sm text-deep-earth/80 space-y-1">
              <li>• Use "It's okay to..." instead of "You should..."</li>
              <li>• Show empathy before giving advice</li>
              <li>• Avoid hype words like "amazing" or "incredible"</li>
              <li>• Be honest about challenges, not just positive outcomes</li>
            </ul>
          </div>
        </div>
      )}

      {/* Reference */}
      <div className="mt-6 pt-6 border-t border-soft-stone/30">
        <h4 className="font-semibold text-deep-earth mb-3">Quick Reference</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-green-600 mb-2">✓ Use These:</p>
            <ul className="text-xs text-deep-earth/70 space-y-1">
              {WORDS_TO_USE.slice(0, 6).map((word, i) => (
                <li key={i}>• {word}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-heart-rose mb-2">✗ Avoid These:</p>
            <ul className="text-xs text-deep-earth/70 space-y-1">
              {WORDS_TO_AVOID.slice(0, 6).map((word, i) => (
                <li key={i} className="line-through">• {word}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

