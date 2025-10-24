import PageContainer from '@/components/PageContainer';
import AIToneChecker from '@/components/AIToneChecker';
import ToneChecker from '@/components/ToneChecker';

export default function ToneCheckerPage() {
  return (
    <PageContainer
      title="Tone Checker"
      description="Validate your copy to ensure it matches Waykeeper's brand voice"
    >
      <div className="space-y-8">
        {/* AI-Powered Tone Checker */}
        <AIToneChecker />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-soft-stone/30"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-morning-light text-deep-earth/60">
              Or use quick keyword-based checker below
            </span>
          </div>
        </div>

        {/* Simple Keyword Checker */}
        <ToneChecker />
      </div>
    </PageContainer>
  );
}


