'use client';

import PageContainer from '@/components/PageContainer';
import { brandValues } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandCorePage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('brandCore.title')}
      description={t('brandCore.description')}
    >
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">{t('brandCore.purpose')}</h2>
          <p className="text-lg text-deep-earth leading-relaxed">
            "We exist because transformation shouldn't fade — anywhere in life."
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">{t('brandCore.brandPromise')}</h2>
          <p className="text-lg text-deep-earth leading-relaxed">
            "Whether you retreat, explore, rest, heal, or practice — the transformation lasts, because we're there for what happens after."
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6">{t('brandCore.coreValues')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandValues.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="text-4xl">{value.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-earth mb-2 text-lg">{value.title}</h3>
                  <p className="text-sm text-deep-earth/70">{value.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

