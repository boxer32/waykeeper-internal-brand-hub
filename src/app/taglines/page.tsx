'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import { Copy, Check } from 'lucide-react';
import { taglineLibrary } from '@/lib/brandData';
import { copyToClipboard } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

function TaglineCard({ text, useCase, context }: { text: string; useCase: string; context: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 bg-sunrise-gold/10 text-sunrise-gold text-xs font-semibold rounded mb-2">
            {useCase}
          </span>
          <h3 className="font-headline font-bold text-lg text-deep-earth leading-tight">
            "{text}"
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className={`shrink-0 p-2 rounded-lg transition-all ${
            copied
              ? 'bg-skypath-blue text-white'
              : 'bg-morning-light text-deep-earth hover:bg-skypath-blue/10'
          }`}
          title="Copy tagline"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <p className="text-sm text-deep-earth/70">{context}</p>
    </div>
  );
}

export default function TaglinesPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('taglines.title')}
      description={t('taglines.description')}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {taglineLibrary.map((tagline, index) => (
          <TaglineCard key={index} {...tagline} />
        ))}
      </div>
    </PageContainer>
  );
}

