import PageContainer from '@/components/PageContainer';
import InteractiveBrandCheck from '@/components/InteractiveBrandCheck';

export default function BrandCheckPage() {
  return (
    <PageContainer
      title="Brand Alignment Checker"
      description="ตรวจสอบว่าไอเดียของคุณตรงกับแบรนด์ Waykeeper หรือไม่ — ได้ scorecard, visual analysis, และ improved version"
    >
      <div className="bg-gradient-to-br from-skypath-blue/5 to-sunrise-gold/5 rounded-lg p-6 mb-8 border border-skypath-blue/20">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
          🛡️ AI Brand Guardian จะตรวจสอบ:
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Value Alignment</div>
            <p className="text-xs text-deep-earth/70">ตรงกับ core values 5 ข้อหรือไม่</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Voice Match</div>
            <p className="text-xs text-deep-earth/70">ใช้ brand voice ถูกต้องไหม</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Red Line Check</div>
            <p className="text-xs text-deep-earth/70">ละเมิดกฎห้ามไหม (hype, toxic positivity)</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Visual Diagram</div>
            <p className="text-xs text-deep-earth/70">Mermaid mindmap ของ idea structure</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Verdict</div>
            <p className="text-xs text-deep-earth/70">Green/Yellow/Red light</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-lg p-3">
            <div className="font-semibold text-deep-earth mb-1">Improved Version</div>
            <p className="text-xs text-deep-earth/70">Waykeeper-ified version</p>
          </div>
        </div>
      </div>

      <InteractiveBrandCheck />
    </PageContainer>
  );
}

