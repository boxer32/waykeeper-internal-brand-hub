'use client';

import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { useState } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import HeaderWithDropdown from '@/components/HeaderWithDropdown'
import GlobalSearch from '@/components/GlobalSearch'
import BrandCopilot from '@/components/BrandCopilot'
import { brandColors, promptLibrary, embedLibrary, contentExamples, taglineLibrary, templateLibrary } from '@/lib/brandData'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);

  const allColors = [
    ...brandColors.primary,
    ...brandColors.accent,
    ...brandColors.neutral,
  ];

  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <title>Waykeeper Brand Hub — Internal Documentation</title>
        <meta name="description" content="AI-Ready Brand System for Waykeeper — Internal Brand Hub" />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="font-body bg-morning-light text-deep-earth antialiased">
        <LanguageProvider>
          <HeaderWithDropdown onSearchClick={() => setGlobalSearchOpen(true)} />
          
          <GlobalSearch
            isOpen={globalSearchOpen}
            onClose={() => setGlobalSearchOpen(false)}
            allContent={{
              colors: allColors,
              prompts: promptLibrary,
              embeds: embedLibrary,
              examples: contentExamples,
              taglines: taglineLibrary,
              templates: templateLibrary,
            }}
          />
          
          {children}
          
          <BrandCopilot />
          
          <footer className="bg-deep-earth text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg font-headline mb-2">Waykeeper Brand Hub</p>
              <p className="text-sm opacity-70">Internal use only — Updated October 21, 2025</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}

