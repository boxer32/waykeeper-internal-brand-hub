'use client';

import PageContainer from '@/components/PageContainer';
import { ExternalLink } from 'lucide-react';
import { typography } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TypographyPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('typography.title')}
      description={t('typography.description')}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">
            {t('typography.headlines')}: {typography.headline.name}
          </h2>
          <p className="text-deep-earth/70 mb-6">{typography.headline.usage}</p>
          
          <div className="space-y-4 mb-8">
            <div className="font-headline text-5xl">The quick brown fox</div>
            <div className="font-headline text-3xl">jumps over the lazy dog</div>
            <div className="font-headline text-2xl">1234567890</div>
          </div>

          <a
            href={typography.headline.googleFonts}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-skypath-blue hover:text-journey-coral font-semibold"
          >
            <ExternalLink size={16} />
            <span>{t('typography.getFromGoogleFonts')}</span>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">
            {t('typography.body')}: {typography.body.name}
          </h2>
          <p className="text-deep-earth/70 mb-6">{typography.body.usage}</p>
          
          <div className="space-y-4 mb-8">
            <div className="text-2xl">The quick brown fox</div>
            <div className="text-lg">jumps over the lazy dog</div>
            <div className="text-base">1234567890</div>
          </div>

          <a
            href={typography.body.googleFonts}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-skypath-blue hover:text-journey-coral font-semibold"
          >
            <ExternalLink size={16} />
            <span>{t('typography.getFromGoogleFonts')}</span>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}

