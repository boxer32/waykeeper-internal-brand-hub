import PageContainer from '@/components/PageContainer';
import InteractiveABTest from '@/components/InteractiveABTest';

export default function ABTestPage() {
  return (
    <PageContainer
      title="A/B Test Analyzer"
      description="เปรียบเทียบ 2 versions ด้วย AI — ได้ scorecard, comparison table, และคำแนะนำ"
    >
      <div className="bg-gradient-to-br from-journey-coral/5 to-heart-rose/5 rounded-lg p-6 mb-8 border border-journey-coral/20">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
          📊 AI จะวิเคราะห์:
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-skypath-blue">•</span>
            <span className="text-deep-earth/80">Brand voice alignment (5 มิติ)</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-skypath-blue">•</span>
            <span className="text-deep-earth/80">Side-by-side comparison</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-skypath-blue">•</span>
            <span className="text-deep-earth/80">Winner + reasoning</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-skypath-blue">•</span>
            <span className="text-deep-earth/80">Improved version (best of both)</span>
          </div>
        </div>
      </div>

      <InteractiveABTest />
    </PageContainer>
  );
}

