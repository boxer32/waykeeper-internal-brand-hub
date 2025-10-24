'use client';

import PageContainer from '@/components/PageContainer';
import ColorCard from '@/components/ColorCard';
import { brandColors } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ColorsPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('colors.title')}
      description={t('colors.description')}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-headline font-bold text-deep-earth mb-6">{t('colors.primaryColors')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandColors.primary.map((color, index) => (
              <ColorCard key={index} {...color} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-headline font-bold text-deep-earth mb-6">{t('colors.accentColors')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandColors.accent.map((color, index) => (
              <ColorCard key={index} {...color} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-headline font-bold text-deep-earth mb-6">{t('colors.neutralColors')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.neutral.map((color, index) => (
              <ColorCard key={index} {...color} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

