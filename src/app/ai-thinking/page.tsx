import PageContainer from '@/components/PageContainer';
import InteractiveCampaignIdeator from '@/components/InteractiveCampaignIdeator';

export default function AIThinkingPage() {
  return (
    <PageContainer
      title="AI Campaign Ideator"
      description="ให้ AI ช่วย brainstorm campaign concepts พร้อม visual analysis — ได้ 3 concepts ทันที"
    >
      {/* How It Works */}
      <div className="bg-gradient-to-br from-skypath-blue/5 to-journey-coral/5 rounded-lg p-8 mb-8 border border-skypath-blue/20">
        <h3 className="text-xl font-headline font-bold text-deep-earth mb-4">
          🧠 AI จะวิเคราะห์ให้:
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-lg p-4">
            <div className="text-3xl mb-2">💡</div>
            <h4 className="font-semibold text-deep-earth mb-1">Campaign Concepts</h4>
            <p className="text-xs text-deep-earth/70">3 ไอเดีย ที่ fit แบรนด์</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="font-semibold text-deep-earth mb-1">Visual Analysis</h4>
            <p className="text-xs text-deep-earth/70">Customer journey diagram</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-semibold text-deep-earth mb-1">AI Recommendation</h4>
            <p className="text-xs text-deep-earth/70">Top pick + เหตุผล</p>
          </div>
        </div>
      </div>

      <InteractiveCampaignIdeator />
    </PageContainer>
  );
}
