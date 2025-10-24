'use client';

import PageContainer from '@/components/PageContainer';
import ContentRewriter from '@/components/ContentRewriter';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIRewriterPage() {
  const { t } = useLanguage();
  
  return (
    <PageContainer
      title={t('rewriter.title')}
      description={t('rewriter.description')}
    >
      <ContentRewriter />
      
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-journey-coral/10 border border-journey-coral/30 rounded-lg p-6">
          <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
            🎯 ใช้กับอะไรบ้าง
          </h3>
          <ul className="text-sm text-deep-earth/80 space-y-2">
            <li>• เปลี่ยนข้อความทางการให้เป็นโทน Waykeeper</li>
            <li>• ลบ hype และ toxic positivity ออกจาก draft</li>
            <li>• เพิ่ม permission-giving language</li>
            <li>• ทำให้เนื้อหาดู empathetic และตรงไปตรงมามากขึ้น</li>
            <li>• ปรับเนื้อหาจากพาร์ทเนอร์ให้ตรงกับโทนเรา</li>
          </ul>
        </div>

        <div className="bg-sunrise-gold/10 border border-sunrise-gold/30 rounded-lg p-6">
          <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
            ⚡ เคล็ดลับ
          </h3>
          <ul className="text-sm text-deep-earth/80 space-y-2">
            <li>• <strong>ระบุให้ชัด:</strong> เพิ่มคำแนะนำเพื่อผลลัพธ์ที่ดีกว่า</li>
            <li>• <strong>ตรวจสอบผลลัพธ์:</strong> AI ดีแต่ไม่สมบูรณ์แบบ</li>
            <li>• <strong>ปรับปรุง:</strong> เขียนใหม่ถ้าจำเป็น</li>
            <li>• <strong>ประหยัดเวลา:</strong> ใช้เป็น draft แรก แล้วค่อยปรับแต่ง</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}

