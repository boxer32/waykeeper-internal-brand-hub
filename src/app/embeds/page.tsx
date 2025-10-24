'use client';

import PageContainer from '@/components/PageContainer';
import EmbedCard from '@/components/EmbedCard';
import { embedLibrary } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EmbedsPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('navigation.embedCode')}
      description="โค้ดสำเร็จรูปสำหรับใช้ในเว็บไซต์และแอป"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {embedLibrary.map((embed, index) => (
          <EmbedCard
            key={index}
            title={embed.title}
            description={embed.description}
            formats={embed.formats}
            preview={
              embed.preview === 'button' ? (
                <button className="bg-gradient-to-br from-skypath-blue to-journey-coral text-white font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(119,190,240,0.25)]">
                  Explore Waykeeper
                </button>
              ) : embed.preview === 'form' ? (
                <div className="flex gap-2 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3 bg-morning-light border-2 border-soft-stone rounded-lg"
                    disabled
                  />
                  <button className="px-7 py-3 bg-skypath-blue text-white font-semibold rounded-lg">
                    Join
                  </button>
                </div>
              ) : embed.preview === 'badge' ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-skypath-blue rounded-full text-deep-earth font-medium text-sm">
                  <span>🧭</span>
                  <span>Waykeeper Certified</span>
                </div>
              ) : embed.preview === 'heading' ? (
                <h2 className="font-headline text-3xl font-bold text-deep-earth relative inline-block pb-3">
                  Transform. Integrate. Continue.
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-skypath-blue to-journey-coral rounded-full" />
                </h2>
              ) : null
            }
          />
        ))}
      </div>

      <div className="bg-sunrise-gold/10 border border-sunrise-gold/30 rounded-lg p-6">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-2">
          💡 วิธีใช้โค้ด
        </h3>
        <ul className="text-sm text-deep-earth/80 space-y-2">
          <li>• <strong>HTML/CSS:</strong> คัดลอกและวางลงในไฟล์ HTML ใดก็ได้</li>
          <li>• <strong>React:</strong> ใช้เป็น component ในโปรเจค React/Next.js</li>
          <li>• <strong>CSS Module:</strong> Import เป็น module สำหรับ styling แยกส่วน</li>
          <li>• <strong>Iframe:</strong> ฝังเป็น iframe สำหรับแยกส่วนสมบูรณ์</li>
        </ul>
      </div>
    </PageContainer>
  );
}

