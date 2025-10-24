'use client';

import PageContainer from '@/components/PageContainer';
import ContentExampleCard from '@/components/ContentExampleCard';
import { contentExamples } from '@/lib/brandData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExamplesPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('navigation.examples')}
      description="ตัวอย่างจริงที่ใช้ได้ผล — caption, email, และ slide ที่พิสูจน์แล้ว"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contentExamples.map((example, index) => (
          <ContentExampleCard key={index} {...example} />
        ))}
      </div>

      <div className="bg-heart-rose/10 border border-heart-rose/30 rounded-lg p-6">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-2">
          ✨ ทำไมตัวอย่างเหล่านี้ถึงใช้ได้ผล
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-deep-earth/80">
          <div>
            <strong>น้ำเสียงแบรนด์สม่ำเสมอ</strong>
            <p className="mt-1">ทุกตัวอย่างใช้ empathetic directness และ permission-giving language</p>
          </div>
          <div>
            <strong>ผลลัพธ์ที่พิสูจน์แล้ว</strong>
            <p className="mt-1">เมตริกจริงจากแคมเปญจริง — ไม่ใช่ mockup แต่ทดสอบแล้ว</p>
          </div>
          <div>
            <strong>เทมเพลตที่ปรับใช้ได้</strong>
            <p className="mt-1">คัดลอกโครงสร้างและปรับให้เหมาะกับความต้องการ</p>
          </div>
          <div>
            <strong>บริบทครบถ้วน</strong>
            <p className="mt-1">ดู caption, เมตริก, และไฟล์ดาวน์โหลดในที่เดียว</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

