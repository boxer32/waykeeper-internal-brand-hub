'use client';

import PageContainer from '@/components/PageContainer';
import { Download, ExternalLink } from 'lucide-react';
import { assetDownloads, externalLinks } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AssetsPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('navigation.assets')}
      description="โลโก้และไฟล์สื่อทั้งหมด — พร้อมดาวน์โหลด"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6 flex items-center space-x-2">
            <Download size={24} />
            <span>Logo Package</span>
          </h2>
          <div className="space-y-4">
            {assetDownloads.logos.map((logo, index) => (
              <div key={index} className="border-b border-soft-stone/30 pb-4 last:border-0">
                <p className="font-semibold text-deep-earth mb-3">{logo.name}</p>
                <div className="flex flex-wrap gap-2">
                  {logo.files.map((file, fileIndex) => (
                    <a
                      key={fileIndex}
                      href={file.url}
                      download
                      className="px-4 py-2 bg-skypath-blue text-white text-sm rounded-lg hover:bg-journey-coral transition-colors font-medium"
                    >
                      {file.format}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6 flex items-center space-x-2">
            <ExternalLink size={24} />
            <span>External Links</span>
          </h2>
          <div className="space-y-3">
            <ExternalLinkItem label="Figma Design Files" url={externalLinks.figma} />
            <ExternalLinkItem label="Canva Templates" url={externalLinks.canva} />
            <ExternalLinkItem label="Google Drive Assets" url={externalLinks.googleDrive} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

function ExternalLinkItem({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 bg-morning-light rounded-lg hover:bg-skypath-blue/10 transition-colors group"
    >
      <span className="text-deep-earth font-medium">{label}</span>
      <ExternalLink size={18} className="text-skypath-blue group-hover:text-journey-coral transition-colors" />
    </a>
  );
}

