import React from 'react';

interface StorySectionsProps {
  sections: any;
}

export default function StorySection({ sections }: StorySectionsProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="grid gap-8">
        {Object.entries(sections).map(([key, section]: [string, any]) => (
          <div key={key} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}