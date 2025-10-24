'use client';

import { useState } from 'react';
import { Copy, Check, Download, Instagram, Mail, Presentation } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface ContentExampleCardProps {
  type: 'social' | 'email' | 'presentation';
  title: string;
  description: string;
  caption?: string;
  image?: string;
  content?: string;
  downloadUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export default function ContentExampleCard({
  type,
  title,
  description,
  caption,
  image,
  content,
  downloadUrl,
  metrics,
}: ContentExampleCardProps) {
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);

  const handleCopyCaption = async () => {
    if (caption) {
      const success = await copyToClipboard(caption);
      if (success) {
        setCopiedCaption(true);
        setTimeout(() => setCopiedCaption(false), 2000);
      }
    }
  };

  const handleCopyContent = async () => {
    if (content) {
      const success = await copyToClipboard(content);
      if (success) {
        setCopiedContent(true);
        setTimeout(() => setCopiedContent(false), 2000);
      }
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'social':
        return <Instagram size={18} />;
      case 'email':
        return <Mail size={18} />;
      case 'presentation':
        return <Presentation size={18} />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'social':
        return 'Social Media';
      case 'email':
        return 'Email';
      case 'presentation':
        return 'Presentation';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Preview */}
      {image && (
        <div className="bg-soft-stone/20 aspect-square flex items-center justify-center text-deep-earth/30">
          {/* Placeholder for image */}
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-morning-light rounded-lg flex items-center justify-center mx-auto mb-3">
              {getIcon()}
            </div>
            <p className="text-sm font-medium">{image}</p>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-5">
        {/* Type Badge */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-journey-coral/10 text-journey-coral text-xs font-semibold rounded">
            {getIcon()}
            <span>{getTypeLabel()}</span>
          </span>
        </div>

        <h3 className="font-headline font-bold text-lg text-deep-earth mb-2">{title}</h3>
        <p className="text-sm text-deep-earth/70 mb-4">{description}</p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-soft-stone/30">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-skypath-blue">{metric.value}</div>
                <div className="text-xs text-deep-earth/60">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Caption/Content */}
        {caption && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-deep-earth/60">Caption</p>
              <button
                onClick={handleCopyCaption}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  copiedCaption
                    ? 'bg-skypath-blue text-white'
                    : 'bg-morning-light text-deep-earth hover:bg-skypath-blue/10'
                }`}
              >
                {copiedCaption ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedCaption ? 'Copied!' : 'Copy Caption'}</span>
              </button>
            </div>
            <div className="bg-morning-light rounded-lg p-3 text-sm text-deep-earth leading-relaxed">
              {caption}
            </div>
          </div>
        )}

        {content && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-deep-earth/60">Content</p>
              <button
                onClick={handleCopyContent}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  copiedContent
                    ? 'bg-skypath-blue text-white'
                    : 'bg-morning-light text-deep-earth hover:bg-skypath-blue/10'
                }`}
              >
                {copiedContent ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedContent ? 'Copied!' : 'Copy Content'}</span>
              </button>
            </div>
            <div className="bg-morning-light rounded-lg p-3 text-sm text-deep-earth leading-relaxed max-h-48 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans">{content}</pre>
            </div>
          </div>
        )}

        {/* Download Button */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2.5 bg-deep-earth text-white rounded-lg hover:bg-skypath-blue transition-colors font-medium text-sm"
          >
            <Download size={16} />
            <span>Download Asset</span>
          </a>
        )}
      </div>
    </div>
  );
}

