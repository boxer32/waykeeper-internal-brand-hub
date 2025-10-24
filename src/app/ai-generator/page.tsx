'use client';

import PageContainer from '@/components/PageContainer';
import AIContentGenerator from '@/components/AIContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIGeneratorPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('aiGenerator.title')}
      description={t('aiGenerator.description')}
    >
      <AIContentGenerator />
      
      <div className="mt-8 bg-skypath-blue/10 border border-skypath-blue/30 rounded-lg p-6">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
          💡 วิธีใช้งาน
        </h3>
        <ul className="text-sm text-deep-earth/80 space-y-2">
          <li>• <strong>AI-Powered:</strong> ใช้ GPT-4 ที่เรียนรู้น้ำเสียง Waykeeper</li>
          <li>• <strong>ตรงแบรนด์เสมอ:</strong> ใช้ลักษณะน้ำเสียงและค่านิยมอัตโนมัติ</li>
          <li>• <strong>ปรับแต่งได้:</strong> ปรับตาม sub-brand, กลุ่มเป้าหมาย, หรือโทนเฉพาะ</li>
          <li>• <strong>รวดเร็ว:</strong> ได้เนื้อหาใน 5-10 วินาที</li>
          <li>• <strong>แก้ไขได้:</strong> ใช้เป็นจุดเริ่มต้นแล้วปรับแต่งต่อ</li>
        </ul>
      </div>
    </PageContainer>
  );
}

