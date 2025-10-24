'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  cmyk?: string;
  usage: string;
  emotion: string;
}

export default function ColorCard({ name, hex, rgb, cmyk, usage, emotion }: ColorCardProps) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = async (value: string, type: string) => {
    const success = await copyToClipboard(value);
    if (success) {
      setCopiedValue(type);
      setTimeout(() => setCopiedValue(null), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 overflow-hidden hover:shadow-md transition-shadow">
      {/* Color Preview */}
      <div
        className="h-32 w-full"
        style={{ backgroundColor: hex }}
      />

      {/* Color Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-headline font-bold text-lg text-deep-earth">{name}</h3>

        {/* Color Values */}
        <div className="space-y-2">
          <ColorValue label="HEX" value={hex} onCopy={() => handleCopy(hex, 'hex')} copied={copiedValue === 'hex'} />
          <ColorValue label="RGB" value={rgb} onCopy={() => handleCopy(rgb, 'rgb')} copied={copiedValue === 'rgb'} />
          {cmyk && <ColorValue label="CMYK" value={cmyk} onCopy={() => handleCopy(cmyk, 'cmyk')} copied={copiedValue === 'cmyk'} />}
        </div>

        {/* Usage */}
        <div className="pt-2 border-t border-soft-stone/30">
          <p className="text-xs font-semibold text-deep-earth/60 mb-1">Usage</p>
          <p className="text-sm text-deep-earth">{usage}</p>
        </div>

        {/* Emotion */}
        <div>
          <p className="text-xs font-semibold text-deep-earth/60 mb-1">Emotion Tags</p>
          <p className="text-sm text-deep-earth/80 italic">{emotion}</p>
        </div>
      </div>
    </div>
  );
}

function ColorValue({ label, value, onCopy, copied }: { label: string; value: string; onCopy: () => void; copied: boolean }) {
  return (
    <div className="flex items-center justify-between bg-morning-light rounded px-3 py-2">
      <div className="flex-1">
        <span className="text-xs font-semibold text-deep-earth/60">{label}</span>
        <p className="text-sm font-mono text-deep-earth">{value}</p>
      </div>
      <button
        onClick={onCopy}
        className={`p-1.5 rounded transition-all ${
          copied ? 'bg-skypath-blue text-white' : 'hover:bg-soft-stone'
        }`}
        title={`Copy ${label}`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

