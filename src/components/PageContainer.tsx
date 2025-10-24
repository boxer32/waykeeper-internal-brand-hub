import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageContainer({ children, title, description }: PageContainerProps) {
  return (
    <main className="min-h-screen bg-morning-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {(title || description) && (
          <div className="mb-12">
            {title && (
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-deep-earth mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-xl text-deep-earth/70 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </main>
  );
}

