'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface SubMenuItem {
  name: string;
  href: string;
  description?: string;
}

interface MenuItem {
  name: string;
  href?: string;
  subItems?: SubMenuItem[];
}

export default function HeaderWithDropdown({ onSearchClick }: { onSearchClick?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  const navigation: MenuItem[] = [
    {
      name: t('header.brandFoundation'),
      subItems: [
        { name: t('navigation.brandCore'), href: '/brand-core', description: 'Purpose, promise, values' },
        { name: t('navigation.brandVoice'), href: '/voice', description: 'How we communicate' },
        { name: t('navigation.toneChecker'), href: '/tone-checker', description: 'Validate your copy' },
      ],
    },
    {
      name: t('header.visualIdentity'),
      subItems: [
        { name: t('navigation.colors'), href: '/colors', description: 'Brand color palette' },
        { name: t('navigation.typography'), href: '/typography', description: 'Font system' },
        { name: t('navigation.imageGuide'), href: '/image-guide', description: 'Visual principles' },
      ],
    },
    {
      name: t('header.assetsDownloads'),
      subItems: [
        { name: t('navigation.assets'), href: '/assets', description: 'Downloadable files' },
        { name: t('navigation.templates'), href: '/templates', description: 'Presentation & docs' },
        { name: t('navigation.embedCode'), href: '/embeds', description: 'Ready-to-use components' },
      ],
    },
    {
      name: t('header.aiContentTools'),
      subItems: [
        { name: t('navigation.aiGenerator'), href: '/ai-generator', description: 'Generate content with AI' },
        { name: t('navigation.aiRewriter'), href: '/ai-rewriter', description: 'Rewrite in brand voice' },
        { name: t('navigation.aiPrompts'), href: '/prompts', description: '13 brand prompts' },
        { name: t('navigation.brandBrief'), href: '/brand-brief', description: 'Generate AI briefs' },
        { name: t('navigation.examples'), href: '/examples', description: 'Real examples with metrics' },
      ],
    },
    {
      name: t('header.aiAdvanced'),
      subItems: [
        { name: t('navigation.campaignIdeator'), href: '/ai-thinking', description: 'Brainstorm campaigns with AI' },
        { name: t('navigation.abTest'), href: '/ab-test', description: 'Compare 2 versions' },
        { name: t('navigation.brandCheck'), href: '/brand-check', description: 'Idea validation' },
        { name: t('navigation.stressTest'), href: '/stress-test', description: 'Crisis & edge cases' },
      ],
    },
    {
      name: t('header.teamResources'),
      subItems: [
        { name: t('navigation.brandKits'), href: '/brand-kits', description: 'Packaged by role' },
        { name: t('navigation.taglines'), href: '/taglines', description: '10 ready phrases' },
        { name: 'Narrative Book', href: '/narrative-book', description: '8-chapter story for partners' },
        { name: 'Project Tracker', href: '/project-tracker', description: '3-month ecosystem progress' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-soft-stone/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-headline font-bold text-skypath-blue">
              Waykeeper
            </div>
            <div className="hidden sm:block text-sm text-deep-earth/60 border-l border-soft-stone pl-2 ml-2">
              Brand Hub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageSwitcher />
            <div className="h-6 w-px bg-soft-stone mx-2" />
            <div className="flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems ? (
                  <>
                    <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-deep-earth hover:text-skypath-blue transition-colors rounded-lg hover:bg-morning-light">
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-1">
                        <div className="w-72 bg-white rounded-lg shadow-xl border border-soft-stone/30 py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 hover:bg-morning-light transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium text-deep-earth group-hover:text-skypath-blue text-sm">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="text-xs text-deep-earth/60 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-3 py-2 text-sm font-medium text-deep-earth hover:text-skypath-blue transition-colors rounded-lg hover:bg-morning-light"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Search Button */}
            {onSearchClick && (
              <button
                onClick={onSearchClick}
                className="ml-2 p-2 text-deep-earth hover:text-skypath-blue hover:bg-morning-light rounded-lg transition-colors"
                title="Search (Cmd+K)"
              >
                <Search size={20} />
              </button>
            )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-deep-earth hover:text-skypath-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-soft-stone/30">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="px-4 py-2 text-sm font-semibold text-deep-earth/80">
                    {item.name}
                  </div>
                  {item.subItems?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-deep-earth hover:bg-morning-light hover:text-skypath-blue rounded transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ))}
              
              {onSearchClick && (
                <button
                  onClick={() => {
                    onSearchClick();
                    setMobileMenuOpen(false);
                  }}
                  className="mx-4 mt-2 px-4 py-2 bg-skypath-blue text-white rounded-lg text-sm font-medium hover:bg-journey-coral transition-colors"
                >
                  <Search size={16} className="inline mr-2" />
                  Search Everything
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

