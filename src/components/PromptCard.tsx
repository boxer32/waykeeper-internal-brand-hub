'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface PromptCardProps {
  category: string;
  title: string;
  description: string;
  prompt: string;
}

export default function PromptCard({ category, title, description, prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 bg-skypath-blue/10 text-skypath-blue text-xs font-semibold rounded mb-2">
              {category}
            </span>
            <h3 className="font-headline font-bold text-lg text-deep-earth">{title}</h3>
            <p className="text-sm text-deep-earth/70 mt-1">{description}</p>
          </div>
        </div>

        {/* Prompt Preview/Full */}
        <div className="mt-4">
          <div
            className={`bg-morning-light rounded-lg p-4 font-mono text-sm text-deep-earth leading-relaxed ${
              expanded ? '' : 'line-clamp-3'
            }`}
          >
            {prompt}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-medium text-skypath-blue hover:text-journey-coral transition-colors"
            >
              {expanded ? 'Show Less' : 'Show Full Prompt'}
            </button>

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
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

