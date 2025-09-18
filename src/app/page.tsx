'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProgressSection from '@/components/ProgressSection';
import StorySection from '@/components/StorySection';
import DonationSection from '@/components/DonationSection';
import CallToAction from '@/components/CallToAction';
import textsData from '@/data/texts.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { language } = useLanguage();
  const texts = textsData[language];
  const [currentRaised, setCurrentRaised] = useState(0);
  const goalAmount = 30000;

  useEffect(() => {
    fetch('/api/progress')
      .then((res) => res.json())
      .then((data) => setCurrentRaised(data.currentRaised || 0))
      .catch((error) => console.error('Error fetching progress:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection texts={texts} />
      <ProgressSection currentRaised={currentRaised} goalAmount={goalAmount} />
      <StorySection sections={texts.sections} />
      <DonationSection texts={texts} language={language} />
      <CallToAction texts={texts} />
    </div>
  );
}