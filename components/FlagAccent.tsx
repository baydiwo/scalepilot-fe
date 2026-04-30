'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FlagAccentProps {
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const FlagAccent: React.FC<FlagAccentProps> = ({ 
  icon = 'chart', 
  className = '',
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [origin, setOrigin] = useState<'top' | 'bottom'>('top');
  const targetRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  const iconPath = `/img/sm-icon-${icon}.svg`;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!isInitialized.current) {
          setOrigin('top');
          isInitialized.current = true;
        } else {
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          if (rect.top < viewportHeight / 2) {
            setOrigin('bottom');
          } else {
            setOrigin('top');
          }
        }
      }
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.8 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={targetRef}
      className={`flex-col items-center gap-2 hidden h-[90%] absolute right-[-9px] lg:flex bottom-0 ${className}`}
    >
      {children ? children : (
        <Image
          src={iconPath}
          className="size-5"
          alt=""
          width={20}
          height={20}
        />
      )}

      <div
        className={`w-px bg-n20 flex-1 transition-transform duration-1000 ease-out ${
          isVisible ? 'scale-y-100' : 'scale-y-0'
        } ${origin === 'top' ? 'origin-top' : 'origin-bottom'}`}
      ></div>
    </div>
  );
};

export default FlagAccent;
