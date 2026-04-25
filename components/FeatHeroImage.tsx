'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

const badges = [
  // Top Badges
  { src: '/img/ve-scaleup.svg', top: '20%', right: '22%', duration: '3s', speed: 0.05, delay: '0ms' },
  { src: '/img/ve-learning.svg', top: '17%', left: '44%', duration: '4s', speed: -0.03, delay: '100ms' },

  // Left Side Badges
  { src: '/img/ve-monitoring.svg', top: '29%', left: '2%', duration: '3.5s', speed: 0.08, delay: '200ms' },
  { src: '/img/ve-scaleout.svg', top: '71%', left: '5%', duration: '4.2s', speed: -0.06, delay: '300ms' },

  // Center/Right Internal Badges
  { src: '/img/ve-hardkill.svg', top: '48%', right: '4%', duration: '3.8s', speed: 0.04, delay: '150ms' },
  { src: '/img/ve-paused.svg', top: '55%', left: '33%', duration: '4.5s', speed: 0.02, delay: '250ms' },

  // Bottom Badges
  { src: '/img/ve-softkill.svg', bottom: '7%', left: '40%', duration: '3.2s', speed: 0.07, delay: '350ms' },
  { src: '/img/ve-stoploss.svg', bottom: '17%', right: '16%', duration: '3.6s', speed: -0.04, delay: '400ms' }
];

const FeatHeroImage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollStats, setScrollStats] = useState({ top: 0, height: 0 });

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setScrollStats({
          top: rect.top,
          height: rect.height
        });

        if (!isVisible && rect.top < window.innerHeight * 0.45) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const getParallaxOffset = (speed: number) => {
    if (!hasMounted || typeof window === 'undefined') return 0;
    const scrollOffset = scrollStats.top - (window.innerHeight / 2);
    return scrollOffset * speed;
  };

  const tilt = useMemo(() => {
    if (!hasMounted || typeof window === 'undefined' || !isVisible || !scrollStats.top) return 0;
    
    // Calculate progress starting from the visibility trigger (0.45) up to the top (0)
    let progress = Math.min(Math.max(scrollStats.top / window.innerHeight, 0), 0.45);
    let factor = (0.45 - progress) / 0.45;

    // Max tilt of 15 degrees as it reaches the top
    return factor * 15;
  }, [hasMounted, isVisible, scrollStats.top]);

  return (
    <div
      ref={targetRef}
      id="hero-image"
      className="max-w-(--mw) mx-auto relative border-x border-n20 group px-4 overflow-hidden"
    >
      {/* LAYER 1: THE TILTED DASHBOARD (Isolated 3D) */}
      <div className="relative w-full" style={{ perspective: '2000px' }}>
        <div
          className="relative w-full transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt}deg)`,
            transformOrigin: 'center top'
          }}
        >
          <img
            src="/img/sp-hero.png"
            alt="ScalePilot Dashboard"
            className="w-full relative z-0"
          />
        </div>
      </div>

      {/* LAYER 2: THE FLAT BADGE OVERLAY (Standard 2D Z-Index) */}
      <div className="absolute inset-0 z-20 pointer-events-none px-4">
        <div className="relative w-full h-full">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="absolute w-[10%] md:w-[11%] min-w-24"
              style={{
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
              }}
            >
              {/* THE POP (Scale & Opacity) */}
              <div
                className="transition-all duration-800"
                style={{
                  transitionDelay: isVisible ? badge.delay : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.4)'
                }}
              >
                {/* THE PARALLAX (Direct Scroll Movement) */}
                <div style={{
                  transform: `translateY(${getParallaxOffset(badge.speed)}px)`
                }}>
                  {/* THE FLOAT (Continuous CSS Animation) */}
                  <div
                    className="floating-badge"
                    style={{ animationDuration: badge.duration }}
                  >
                    <img
                      src={badge.src}
                      className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                      alt="Verdict Badge"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatHeroImage;
