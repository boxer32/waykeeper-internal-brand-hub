'use client';

import { useState } from 'react';
import { Download, Presentation, BookOpen, ArrowRight, CheckCircle, TrendingUp, Users, Target, Lightbulb, Zap, Globe, Heart } from 'lucide-react';
import { brandNarrativeBook } from '@/lib/brandData';

export default function NarrativeBookPage() {
  const [activeChapter, setActiveChapter] = useState(0);

  const getChapterIcon = (chapterNumber: number) => {
    const icons = [
      <Lightbulb className="w-6 h-6" />,
      <Target className="w-6 h-6" />,
      <Zap className="w-6 h-6" />,
      <Globe className="w-6 h-6" />,
      <TrendingUp className="w-6 h-6" />,
      <Users className="w-6 h-6" />,
      <Heart className="w-6 h-6" />,
      <BookOpen className="w-6 h-6" />
    ];
    return icons[chapterNumber - 1] || <BookOpen className="w-6 h-6" />;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-morning-light to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-skypath-blue to-journey-coral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              {brandNarrativeBook.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-95">
              {brandNarrativeBook.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={brandNarrativeBook.downloadLink}
                className="px-6 py-3 bg-white text-skypath-blue font-semibold rounded-lg hover:bg-morning-light transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                ดาวน์โหลด PDF
              </a>
              <a
                href={brandNarrativeBook.presentationLink}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Presentation className="w-5 h-5" />
                ดู Presentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-2">
              Key Statistics
            </h2>
            <p className="text-deep-earth/70">ข้อมูลสำคัญสำหรับ partners และ investors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brandNarrativeBook.keyStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-morning-light to-white rounded-lg border border-soft-stone/30">
                <div className="text-3xl font-headline font-bold text-skypath-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-deep-earth mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-deep-earth/60">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Navigation */}
      <section className="py-8 bg-gradient-to-br from-morning-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-headline font-bold text-deep-earth mb-2">
              8 Chapters Overview
            </h2>
            <p className="text-deep-earth/70">เรื่องราวแบรนด์ที่ครบถ้วนสำหรับ partners และ investors</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandNarrativeBook.chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  activeChapter === index
                    ? 'border-skypath-blue bg-skypath-blue/10 text-skypath-blue'
                    : 'border-soft-stone/30 bg-white hover:border-skypath-blue/50 hover:bg-skypath-blue/5'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activeChapter === index ? 'bg-skypath-blue text-white' : 'bg-skypath-blue/10 text-skypath-blue'
                  }`}>
                    {getChapterIcon(chapter.chapter)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-deep-earth mb-1">
                      Chapter {chapter.chapter}
                    </div>
                    <div className="text-xs text-deep-earth/70">
                      {chapter.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Chapter Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {brandNarrativeBook.chapters[activeChapter] && (
            <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-skypath-blue/10 text-skypath-blue rounded-lg">
                  {getChapterIcon(brandNarrativeBook.chapters[activeChapter].chapter)}
                </div>
                <div>
                  <div className="text-sm text-skypath-blue font-semibold mb-1">
                    Chapter {brandNarrativeBook.chapters[activeChapter].chapter}
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-deep-earth">
                    {brandNarrativeBook.chapters[activeChapter].title}
                  </h3>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <div className="whitespace-pre-line text-deep-earth leading-relaxed">
                  {brandNarrativeBook.chapters[activeChapter].content}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-morning-light to-white p-6 rounded-lg border border-soft-stone/30">
                <h4 className="font-semibold text-deep-earth mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-skypath-blue" />
                  Key Points
                </h4>
                <ul className="space-y-2">
                  {brandNarrativeBook.chapters[activeChapter].keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-skypath-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-deep-earth/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-gradient-to-br from-skypath-blue/5 to-journey-coral/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-headline font-bold text-deep-earth mb-4">
            Ready to Share?
          </h2>
          <p className="text-deep-earth/70 mb-8">
            ดาวน์โหลดเอกสารฉบับเต็มสำหรับ partners และ investors
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={brandNarrativeBook.downloadLink}
              className="px-8 py-4 bg-skypath-blue text-white font-semibold rounded-lg hover:bg-skypath-blue/90 transition-colors flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              ดาวน์โหลด PDF (8 Chapters)
            </a>
            <a
              href={brandNarrativeBook.presentationLink}
              className="px-8 py-4 bg-journey-coral text-white font-semibold rounded-lg hover:bg-journey-coral/90 transition-colors flex items-center gap-3"
            >
              <Presentation className="w-5 h-5" />
              ดู Presentation Slides
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-earth text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">
            Brand Narrative Book v{brandNarrativeBook.version} • Last updated {brandNarrativeBook.lastUpdated}
          </p>
        </div>
      </footer>
    </main>
  );
}
