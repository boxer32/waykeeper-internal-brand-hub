'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Colors', href: '/colors' },
    { name: 'Typography', href: '/typography' },
    { name: 'Brand Voice', href: '/voice' },
    { name: 'Assets', href: '/assets' },
    { name: 'AI Prompts', href: '/prompts' },
    { name: 'Templates', href: '/templates' },
    { name: 'Embed Code', href: '/embeds' },
    { name: 'Examples', href: '/examples' },
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
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-deep-earth hover:text-skypath-blue transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-deep-earth hover:text-skypath-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-soft-stone/30">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-deep-earth hover:bg-morning-light hover:text-skypath-blue rounded transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

