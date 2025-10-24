'use client';

import PageContainer from '@/components/PageContainer';
import { brandVoice } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VoicePage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('voice.title')}
      description={t('voice.description')}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6">
            Voice Characteristics
          </h2>
          <div className="space-y-4">
            {brandVoice.characteristics.map((char, index) => (
              <div key={index}>
                <h3 className="font-semibold text-deep-earth text-lg">{char.name}</h3>
                <p className="text-sm text-deep-earth/70 mt-1">{char.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">
              ✓ Words We Use
            </h2>
            <div className="flex flex-wrap gap-2">
              {brandVoice.doWords.map((word, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-skypath-blue/10 text-skypath-blue rounded-full text-sm font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">
              ✗ Words to Avoid
            </h2>
            <div className="flex flex-wrap gap-2">
              {brandVoice.avoidWords.map((word, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium line-through"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

