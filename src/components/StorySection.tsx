// StorySection.tsx - Enhanced
import React from 'react';
import { Heart, Zap, Target, Star } from 'lucide-react';

const icons = [Heart, Zap, Target, Star];

interface StorySectionsProps {
  sections: any;
}

export default function StorySection({ sections }: StorySectionsProps) {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Mi Historia
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conoce mi historia y cómo puedes ayudarme a recuperar mi vida
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(sections).map(([key, section]: [string, any], index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={key} className="glass-strong rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fadeInUp group" style={{animationDelay: `${index * 200}ms`}}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}