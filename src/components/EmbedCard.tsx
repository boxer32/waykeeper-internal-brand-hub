'use client';

import { useState } from 'react';
import { Copy, Check, Code, Blocks, FileCode } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface EmbedCardProps {
  title: string;
  description: string;
  preview?: React.ReactNode;
  formats: {
    type: 'HTML/CSS' | 'React' | 'CSS Module' | 'Iframe';
    code: string;
  }[];
}

export default function EmbedCard({ title, description, preview, formats }: EmbedCardProps) {
  const [activeFormat, setActiveFormat] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(formats[activeFormat].code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'React':
        return <Blocks size={16} />;
      case 'Iframe':
        return <FileCode size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 overflow-hidden">
      {/* Preview Section */}
      {preview && (
        <div className="bg-morning-light p-8 border-b border-soft-stone/30 flex items-center justify-center min-h-[120px]">
          {preview}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-2">{title}</h3>
        <p className="text-sm text-deep-earth/70 mb-4">{description}</p>

        {/* Format Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {formats.map((format, index) => (
            <button
              key={index}
              onClick={() => setActiveFormat(index)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFormat === index
                  ? 'bg-skypath-blue text-white'
                  : 'bg-morning-light text-deep-earth hover:bg-soft-stone/50'
              }`}
            >
              {getIcon(format.type)}
              <span>{format.type}</span>
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="relative">
          <pre className="bg-deep-earth text-morning-light p-4 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
            {formats[activeFormat].code}
          </pre>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`absolute top-3 right-3 flex items-center space-x-2 px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
              copied
                ? 'bg-sunrise-gold text-deep-earth'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

