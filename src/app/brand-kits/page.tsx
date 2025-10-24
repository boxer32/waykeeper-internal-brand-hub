'use client';

import PageContainer from '@/components/PageContainer';
import { Package } from 'lucide-react';
import { brandKits } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandKitsPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('brandKits.title')}
      description={t('brandKits.description')}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandKits.map((kit, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Package className="text-skypath-blue" size={32} />
              <span className="text-xs px-2 py-1 bg-sunrise-gold/10 text-sunrise-gold rounded-full font-medium">
                {kit.forTeam}
              </span>
            </div>
            <h3 className="font-headline font-bold text-xl text-deep-earth mb-2">
              {kit.name}
            </h3>
            <p className="text-sm text-deep-earth/70 mb-4">{kit.description}</p>
            
            <div className="mb-4">
              <p className="text-xs font-semibold text-deep-earth/60 mb-2">{t('brandKits.includes')}</p>
              <ul className="text-sm text-deep-earth space-y-1">
                {kit.includes.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-skypath-blue mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-soft-stone/30">
              <p className="text-xs font-semibold text-deep-earth/60 mb-2">{t('brandKits.quickAccess')}</p>
              <div className="flex flex-wrap gap-2">
                {kit.quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    className="text-xs px-2 py-1 bg-skypath-blue/10 text-skypath-blue rounded hover:bg-skypath-blue hover:text-white transition-colors"
                  >
                    {link.replace('#', '').replace('/', '')}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

