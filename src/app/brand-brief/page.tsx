import PageContainer from '@/components/PageContainer';
import BrandBriefGenerator from '@/components/BrandBriefGenerator';

export default function BrandBriefPage() {
  return (
    <PageContainer
      title="Brand Brief Generator"
      description="Create custom AI-ready brand briefs for any project"
    >
      <BrandBriefGenerator />
    </PageContainer>
  );
}

