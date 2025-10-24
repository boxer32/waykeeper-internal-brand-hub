'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import PromptCard from '@/components/PromptCard';
import SearchBar from '@/components/SearchBar';
import { promptLibrary } from '@/lib/brandData';
import { searchContent } from '@/lib/utils';

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPrompts = searchContent(searchQuery, promptLibrary);

  return (
    <PageContainer
      title="AI Prompt Library"
      description="Pre-built prompts for ChatGPT, Claude, and other AI tools — always on-brand"
    >
      <div className="mb-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search prompts by category, title, or keyword..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPrompts.map((prompt, index) => (
          <PromptCard key={index} {...prompt} />
        ))}
      </div>

      {filteredPrompts.length === 0 && (
        <div className="text-center py-12 text-deep-earth/60">
          No prompts found. Try a different search term.
        </div>
      )}
    </PageContainer>
  );
}

