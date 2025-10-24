import PageContainer from '@/components/PageContainer';
import { imageStyleGuide } from '@/lib/brandData';

export default function ImageGuidePage() {
  return (
    <PageContainer
      title="Image Style Guide"
      description="Visual principles for photography, graphics, and brand imagery"
    >
      {/* Principles */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {imageStyleGuide.principles.map((principle, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
            <h3 className="font-headline font-bold text-xl text-deep-earth mb-4">
              {principle.title}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-green-600 mb-1">✓ Do:</p>
                <p className="text-sm text-deep-earth/80">{principle.good}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-heart-rose mb-1">✗ Avoid:</p>
                <p className="text-sm text-deep-earth/80">{principle.avoid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Color Palette for Images */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6 mb-6">
        <h3 className="font-headline font-bold text-xl text-deep-earth mb-4">
          Color Palette for Photography
        </h3>
        <ul className="space-y-2">
          {imageStyleGuide.colorPalette.map((item, index) => (
            <li key={index} className="text-sm text-deep-earth flex items-start space-x-2">
              <span className="text-skypath-blue mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Subject Matter */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
        <h3 className="font-headline font-bold text-xl text-deep-earth mb-4">
          Subject Matter Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {imageStyleGuide.subjects.map((item, index) => (
            <div
              key={index}
              className={`text-sm p-3 rounded-lg ${
                item.startsWith('✓')
                  ? 'bg-green-50 text-green-800'
                  : 'bg-heart-rose/10 text-heart-rose'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

