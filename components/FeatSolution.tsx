'use client';

import React, { useState, useEffect, useRef } from 'react';

const DURATION = 8000;

const features = [
  {
    title: 'Verdict Engine',
    subtitle: 'Real-time AI-powered decision system that moves beyond simple data.',
    description: 'The analytical brain of ScalePilot. It processes dozens of real-time metrics, from ROAS trends to spend velocity, to deliver clear, 7 actionable commands. It eliminates decision fatigue by telling you exactly what to do next.',
    icon: '/img/verdictengine-icon.svg',
    image: '/img/tab-verdict-engine.png',
    link: '#',
  },
  {
    title: 'Action Hub',
    subtitle: 'Real-time command center for quick budget boosts and manual adjustments.',
    description: 'Your central command for execution. No more jumping between Meta Ads Manager tabs. Execute budget changes, pause losing ads, or duplicate winners with a single click directly from the ScalePilot dashboard.',
    icon: '/img/actionhub-icon.svg',
    image: '/img/tab-action-hub.png',
    link: '#',
  },
  {
    title: 'Scale Tracker',
    subtitle: 'Full historical audit of every scaling decision and its marginal ROI impact.',
    description: 'The ultimate learning machine for your scaling strategy. It automatically logs every budget adjustment and its marginal impact on performance, building a historical database of your scaling "hits and misses" so you can refine your strategy over time.',
    icon: '/img/scaletracker-icon.svg',
    image: '/img/tab-scale-tracker.png',
    link: '#',
  },
  {
    title: 'Budget Revert',
    subtitle: 'Instantly undo underperforming scales and restore previous budget levels.',
    description: 'The safety net for aggressive scaling. If a budget increase doesn\'t yield the expected gains within 24-72 hours, the Budget Revert Engine lets you undo the change with one click, restoring your previous budget and protecting your profits from "scale-up crashes.',
    icon: '/img/budgetrevert-icon.svg',
    image: '/img/tab-budget-revert.png',
    link: '#',
  },
];

const FeatSolution: React.FC = () => {
  const [featSelected, setFeatSelected] = useState(0);
  const [key, setKey] = useState(0); // For resetting animation
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFeatSelected((prev) => (prev + 1) % features.length);
      setKey((prev) => prev + 1);
    }, DURATION);
  };

  const selectFeature = (idx: number) => {
    setFeatSelected(idx);
    setKey((prev) => prev + 1);
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="max-w-(--mw) mx-auto relative">
          <div
            id="feature-nav"
            className="grid grid-cols-4 divide-x divide-n20 border-x border-b border-n20"
          >
            {features.map((feat, idx) => (
              <button
                key={feat.title}
                className={`flex gap-3 items-center justify-center py-6 relative group overflow-hidden ${
                  featSelected === idx ? 'bg-brand-light' : ''
                }`}
                onClick={() => selectFeature(idx)}
              >
                {/* Background Progress Indicator */}
                {featSelected === idx && (
                  <div
                    key={`indicator-${key}`}
                    className="indicator-fill w-full h-1 bg-brand absolute bottom-0 left-0 origin-left z-10"
                    style={{ animation: `progress ${DURATION}ms linear forwards` }}
                  ></div>
                )}

                <img
                  src={feat.icon}
                  alt={feat.title}
                  className={`w-8 transition-all duration-300 pointer-events-none select-none ${
                    featSelected === idx ? '' : 'saturate-0 opacity-50 group-hover:opacity-100 group-hover:saturate-100'
                  }`}
                />
                <span
                  className={`font-semibold text-xl transition-colors duration-300 ${
                    featSelected === idx ? 'text-n100' : 'text-n60 group-hover:text-n100'
                  }`}
                >
                  {feat.title.split(' ')[0]}
                  <span className="font-normal">{feat.title.split(' ')[1]}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="w-full h-4 md:h-6 diagonal-lines border-x border-b border-n20"></div>
        <div className="max-w-(--mw) mx-auto relative border-x border-n20">
          <div className="grid grid-cols-2 divide-x divide-n20">
            <div className="p-8">
              <div className="max-w-md">
                <span className="block mb-6 font-semibold text-xl text-n100">
                  {features[featSelected].title.split(' ')[0]}
                  <span className="font-normal">{features[featSelected].title.split(' ')[1]}</span>
                </span>
                <h4 className="text-spgreen text-2xl mb-4">{features[featSelected].subtitle}</h4>
                <p className="text-n100 font-medium text-lg leading-relaxed">
                  {features[featSelected].description}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="w-full overflow-hidden relative grid grid-cols-1 grid-rows-1">
                {features.map((feat, idx) => (
                   <img
                    key={feat.title}
                    src={feat.image}
                    alt={feat.title}
                    className={`w-full col-start-1 row-start-1 pointer-events-none select-none transition-all duration-500 ease-in-out ${
                      featSelected === idx 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-5 pointer-events-none'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatSolution;
