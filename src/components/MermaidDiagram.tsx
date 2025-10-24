'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && chart) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          primaryColor: '#77BEF0',
          primaryTextColor: '#3A3A3A',
          primaryBorderColor: '#77BEF0',
          lineColor: '#FF894F',
          secondaryColor: '#FFCB61',
          tertiaryColor: '#EA5B6F',
        },
      });

      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      ref.current.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`;
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div 
      ref={ref} 
      className={`mermaid-container bg-white rounded-lg p-6 overflow-auto ${className}`}
    />
  );
}

