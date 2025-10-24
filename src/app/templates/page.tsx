'use client';

import PageContainer from '@/components/PageContainer';
import { Download } from 'lucide-react';
import { templateLibrary } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TemplatesPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('navigation.templates')}
      description="เทมเพลตสำเร็จรูปสำหรับงานนำเสนอ อีเมล และโซเชียลมีเดีย"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templateLibrary.map((template, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6 hover:shadow-md transition-shadow">
            <span className="inline-block px-3 py-1 bg-sunrise-gold/10 text-sunrise-gold text-xs font-semibold rounded mb-3">
              {template.category}
            </span>
            <h3 className="font-headline font-bold text-xl text-deep-earth mb-2">
              {template.title}
            </h3>
            <p className="text-sm text-deep-earth/70 mb-3">{template.description}</p>
            <p className="text-xs text-deep-earth/50 mb-4">{template.format}</p>
            <a
              href={template.downloadUrl}
              download
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-skypath-blue text-white rounded-lg hover:bg-journey-coral transition-colors w-full justify-center font-medium"
            >
              <Download size={18} />
              <span>ดาวน์โหลด</span>
            </a>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

