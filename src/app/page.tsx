'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProgressBarSection from '@/components/ProgressBarSection';
import {StorySection} from '@/components/StorySection';
import DonationSection from '@/components/DonationSection';
import CallToAction from '@/components/CallToAction';
import textsData from '@/data/texts.json';
import { useLanguage } from '@/components/LanguageProvider';
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  const { language } = useLanguage();
  const texts = textsData[language];
  const [currentRaised, setCurrentRaised] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const goalAmount = 30000;

  useEffect(() => {
    fetch('/api/progress')
      .then((res) => res.json())
      .then((data) => setCurrentRaised(data.currentRaised || 0))
      .catch((error) => console.error('Error fetching progress:', error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <HeroSection texts={texts} currentRaised={currentRaised} goalAmount={goalAmount} language={language} />
      
      <div className="container mx-auto px-6 space-y-24">
        <ProgressBarSection texts={texts} currentRaised={currentRaised} goalAmount={goalAmount} language={language} />
        <StorySection sections={texts.sections} language={language} />
        <DonationSection texts={texts} language={language} />
        <CallToAction texts={texts} />
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:shadow-blue-500/30"
          title="Volver arriba"
        >
          <ArrowUp className="h-6 w-6 animate-bounce" />
        </button>
      )}
    </div>
  );
}