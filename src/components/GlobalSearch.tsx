'use client';

import { useState, useEffect } from 'react';
import { Search, X, FileText, Palette, Code2, Image, Sparkles, Tag } from 'lucide-react';

interface SearchResult {
  type: 'color' | 'prompt' | 'embed' | 'example' | 'tagline' | 'template';
  title: string;
  description: string;
  content?: string;
  link: string;
  category?: string;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  allContent: {
    colors: any[];
    prompts: any[];
    embeds: any[];
    examples: any[];
    taglines: any[];
    templates: any[];
  };
}

export default function GlobalSearch({ isOpen, onClose, allContent }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const foundResults: SearchResult[] = [];

    // Search Colors
    allContent.colors.forEach(color => {
      if (
        color.name.toLowerCase().includes(searchTerm) ||
        color.hex.toLowerCase().includes(searchTerm) ||
        color.usage.toLowerCase().includes(searchTerm)
      ) {
        foundResults.push({
          type: 'color',
          title: color.name,
          description: color.usage,
          content: color.hex,
          link: '#colors',
          category: 'Color Palette',
        });
      }
    });

    // Search Prompts
    allContent.prompts.forEach(prompt => {
      if (
        prompt.title.toLowerCase().includes(searchTerm) ||
        prompt.description.toLowerCase().includes(searchTerm) ||
        prompt.category.toLowerCase().includes(searchTerm) ||
        prompt.prompt.toLowerCase().includes(searchTerm)
      ) {
        foundResults.push({
          type: 'prompt',
          title: prompt.title,
          description: prompt.description,
          link: '#prompts',
          category: prompt.category,
        });
      }
    });

    // Search Embeds
    allContent.embeds.forEach(embed => {
      if (
        embed.title.toLowerCase().includes(searchTerm) ||
        embed.description.toLowerCase().includes(searchTerm)
      ) {
        foundResults.push({
          type: 'embed',
          title: embed.title,
          description: embed.description,
          link: '#embeds',
          category: 'Embed Code',
        });
      }
    });

    // Search Examples
    allContent.examples.forEach(example => {
      if (
        example.title.toLowerCase().includes(searchTerm) ||
        example.description.toLowerCase().includes(searchTerm) ||
        (example.caption && example.caption.toLowerCase().includes(searchTerm))
      ) {
        foundResults.push({
          type: 'example',
          title: example.title,
          description: example.description,
          link: '#examples',
          category: `${example.type.charAt(0).toUpperCase() + example.type.slice(1)} Example`,
        });
      }
    });

    // Search Templates
    allContent.templates.forEach(template => {
      if (
        template.title.toLowerCase().includes(searchTerm) ||
        template.description.toLowerCase().includes(searchTerm) ||
        template.category.toLowerCase().includes(searchTerm)
      ) {
        foundResults.push({
          type: 'template',
          title: template.title,
          description: template.description,
          link: '#templates',
          category: template.category,
        });
      }
    });

    // Search Taglines
    allContent.taglines.forEach((tagline: any) => {
      if (
        tagline.text.toLowerCase().includes(searchTerm) ||
        tagline.useCase.toLowerCase().includes(searchTerm)
      ) {
        foundResults.push({
          type: 'tagline',
          title: tagline.text,
          description: tagline.useCase,
          link: '#taglines',
          category: 'Tagline',
        });
      }
    });

    setResults(foundResults);
  }, [query, allContent]);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'color': return <Palette size={18} className="text-skypath-blue" />;
      case 'prompt': return <Sparkles size={18} className="text-sunrise-gold" />;
      case 'embed': return <Code2 size={18} className="text-journey-coral" />;
      case 'example': return <Image size={18} className="text-heart-rose" />;
      case 'tagline': return <Tag size={18} className="text-skypath-blue" />;
      case 'template': return <FileText size={18} className="text-journey-coral" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-deep-earth/80 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Search Input */}
        <div className="p-6 border-b border-soft-stone/30">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-deep-earth/40" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colors, prompts, templates, examples..."
              className="w-full pl-12 pr-12 py-3 bg-morning-light rounded-lg border border-soft-stone/30 focus:border-skypath-blue focus:ring-2 focus:ring-skypath-blue/20 outline-none transition-all text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-deep-earth/40 hover:text-deep-earth"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-6">
          {!query.trim() ? (
            <div className="text-center py-12 text-deep-earth/60">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium mb-2">Search the entire brand hub</p>
              <p className="text-sm">Try: "email", "blue", "caption", "button"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-deep-earth/60">
              <p className="text-lg">No results found for "{query}"</p>
              <p className="text-sm mt-2">Try different keywords</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-deep-earth/60 mb-4">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.map((result, index) => (
                <a
                  key={index}
                  href={result.link}
                  onClick={onClose}
                  className="block p-4 bg-morning-light hover:bg-skypath-blue/10 rounded-lg border border-soft-stone/30 hover:border-skypath-blue/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{getIcon(result.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-deep-earth group-hover:text-skypath-blue transition-colors truncate">
                          {result.title}
                        </h3>
                        {result.category && (
                          <span className="text-xs px-2 py-0.5 bg-white rounded-full text-deep-earth/60 shrink-0">
                            {result.category}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-deep-earth/70 line-clamp-2">{result.description}</p>
                      {result.content && (
                        <p className="text-xs font-mono text-skypath-blue mt-1">{result.content}</p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-soft-stone/30 bg-morning-light/50">
          <div className="flex items-center justify-between text-xs text-deep-earth/60">
            <span>Press ESC to close</span>
            <span className="flex items-center gap-4">
              <kbd className="px-2 py-1 bg-white rounded border border-soft-stone/30">↑↓</kbd>
              Navigate
              <kbd className="px-2 py-1 bg-white rounded border border-soft-stone/30">Enter</kbd>
              Go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

