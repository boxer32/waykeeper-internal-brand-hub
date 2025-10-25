import Link from 'next/link';
import { Palette, Type, MessageCircle, Download, Sparkles, Code2, Image, Package, Tag, FileText, Lightbulb, ImageIcon, Cpu, AlertTriangle, Zap, HelpCircle } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: 'Brand Foundation',
      description: 'Core purpose, promise, and voice',
      items: [
        { name: 'Brand Core', href: '/brand-core', icon: <Lightbulb size={20} />, description: 'Purpose, promise, values' },
        { name: 'Brand Voice', href: '/voice', icon: <MessageCircle size={20} />, description: 'How we communicate' },
        { name: 'Tone Checker', href: '/tone-checker', icon: <FileText size={20} />, description: 'Validate your copy' },
      ],
    },
    {
      title: 'Visual Identity',
      description: 'Colors, typography, and visual guidelines',
      items: [
        { name: 'Colors', href: '/colors', icon: <Palette size={20} />, description: '7 brand colors' },
        { name: 'Typography', href: '/typography', icon: <Type size={20} />, description: 'Font system' },
        { name: 'Image Style Guide', href: '/image-guide', icon: <ImageIcon size={20} />, description: 'Visual principles' },
      ],
    },
    {
      title: 'Assets & Downloads',
      description: 'Logos, templates, and ready-to-use code',
      items: [
        { name: 'Logo & Assets', href: '/assets', icon: <Download size={20} />, description: 'Downloadable files' },
        { name: 'Templates', href: '/templates', icon: <FileText size={20} />, description: 'Presentations & docs' },
        { name: 'Embed Code', href: '/embeds', icon: <Code2 size={20} />, description: '4 components' },
      ],
    },
    {
      title: 'AI Content Tools',
      description: 'AI-powered content creation and analysis',
      items: [
        { name: 'AI Content Generator', href: '/ai-generator', icon: <Sparkles size={20} />, description: 'Generate with AI' },
        { name: 'AI Rewriter', href: '/ai-rewriter', icon: <Sparkles size={20} />, description: 'Rewrite in brand voice' },
        { name: 'AI Prompts Library', href: '/prompts', icon: <Sparkles size={20} />, description: '13 brand prompts' },
        { name: 'Brand Brief Generator', href: '/brand-brief', icon: <FileText size={20} />, description: 'Generate AI briefs' },
        { name: 'Content Examples', href: '/examples', icon: <Image size={20} />, description: 'Real examples with metrics' },
      ],
    },
    {
      title: 'AI Advanced',
      description: 'Strategic brand analysis and validation',
      items: [
        { name: 'Campaign Ideator', href: '/ai-thinking', icon: <Lightbulb size={20} />, description: 'Brainstorm campaigns' },
        { name: 'A/B Test Analyzer', href: '/ab-test', icon: <Sparkles size={20} />, description: 'Compare versions' },
        { name: 'Brand Alignment Check', href: '/brand-check', icon: <Sparkles size={20} />, description: 'Validate ideas' },
        { name: 'Stress Test', href: '/stress-test', icon: <Sparkles size={20} />, description: 'Crisis scenarios' },
      ],
    },
    {
      title: 'Team Resources',
      description: 'Role-based kits and quick phrases',
      items: [
        { name: 'Brand Kits', href: '/brand-kits', icon: <Package size={20} />, description: '6 team kits' },
        { name: 'Taglines', href: '/taglines', icon: <Tag size={20} />, description: '10 ready phrases' },
        { name: 'Brand Narrative Book', href: '/narrative-book', icon: <FileText size={20} />, description: '8-chapter story for partners' },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skypath-blue to-journey-coral text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 leading-tight">
              Waykeeper Brand Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
              ระบบแบรนด์ครบครันสำหรับทุกทีม — พร้อม AI ช่วยงาน
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/brand-kits"
                className="px-8 py-4 bg-white text-skypath-blue font-semibold rounded-lg hover:bg-morning-light transition-colors text-lg"
              >
                หาชุดทีมของคุณ
              </Link>
              <Link
                href="/narrative-book"
                className="px-8 py-4 bg-white text-skypath-blue font-semibold rounded-lg hover:bg-morning-light transition-colors text-lg"
              >
                Brand Narrative Book
              </Link>
              <Link
                href="/prompts"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg"
              >
                ดู AI Prompts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-deep-earth mb-4">
            สำรวจ Hub
          </h2>
          <p className="text-lg text-deep-earth/70 max-w-2xl mx-auto">
            ทุกอย่างจัดเป็นหมวดหมู่ — จากรากฐานแบรนด์ไปจนถึงเครื่องมือเฉพาะทีม
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="mb-6">
                <h3 className="text-2xl font-headline font-bold text-deep-earth mb-2">
                  {category.title}
                </h3>
                <p className="text-deep-earth/60">{category.description}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6 hover:shadow-md hover:border-skypath-blue/50 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-skypath-blue/10 text-skypath-blue rounded-lg group-hover:bg-skypath-blue group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-deep-earth group-hover:text-skypath-blue transition-colors mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-deep-earth/60">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-br from-morning-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-headline font-bold text-skypath-blue mb-2">13</div>
              <div className="text-sm text-deep-earth/70">AI Prompts</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-sunrise-gold mb-2">7</div>
              <div className="text-sm text-deep-earth/70">สีแบรนด์</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-journey-coral mb-2">6</div>
              <div className="text-sm text-deep-earth/70">ชุดทีม</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-heart-rose mb-2">10</div>
              <div className="text-sm text-deep-earth/70">Taglines</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-earth text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-headline mb-2">Waykeeper Brand Hub</p>
          <p className="text-sm opacity-70">ใช้งานภายในเท่านั้น — อัพเดทล่าสุด 21 ตุลาคม 2568</p>
        </div>
      </footer>
    </main>
  );
}
