'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BaseTooltipProps {
  title?: string;
  items?: string[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: React.ReactNode;
}

const BaseTooltip: React.FC<BaseTooltipProps> = ({
  title,
  items,
  position = 'right',
  trigger,
}) => {
  const [actualPosition, setActualPosition] = useState(position);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const updatePosition = () => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const spaceTop = rect.top;
      const spaceBottom = windowHeight - rect.bottom;
      const spaceLeft = rect.left;
      const spaceRight = windowWidth - rect.right;

      let newPos = position;

      if (newPos === 'top' && spaceTop < 80 && spaceBottom > spaceTop) newPos = 'bottom';
      else if (newPos === 'bottom' && spaceBottom < 80 && spaceTop > spaceBottom) newPos = 'top';
      else if (newPos === 'left' && spaceLeft < 120 && spaceRight > spaceLeft) newPos = 'right';
      else if (newPos === 'right' && spaceRight < 120 && spaceLeft > spaceRight) newPos = 'left';

      setActualPosition(newPos);
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [position]);

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      x: actualPosition === 'left' ? 10 : actualPosition === 'right' ? -10 : 0,
      y: actualPosition === 'top' ? 10 : actualPosition === 'bottom' ? -10 : 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: actualPosition === 'left' ? 10 : actualPosition === 'right' ? -10 : 0,
      y: actualPosition === 'top' ? 10 : actualPosition === 'bottom' ? -10 : 0,
    },
  };

  const getPositionClasses = () => {
    switch (actualPosition) {
      case 'top': return 'bottom-full left-1/2 -translate-x-1/2 mb-3 pb-2';
      case 'bottom': return 'top-full left-1/2 -translate-x-1/2 mt-3 pt-2';
      case 'left': return 'right-full top-1/2 -translate-y-1/2 mr-3 pr-2';
      case 'right': return 'left-full top-1/2 -translate-y-1/2 ml-3 pl-2';
      default: return '';
    }
  };

  const getOrigin = () => {
    switch (actualPosition) {
      case 'top': return 'bottom';
      case 'bottom': return 'top';
      case 'left': return 'right';
      case 'right': return 'left';
      default: return 'center';
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="cursor-pointer flex items-center">
        {trigger}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 pointer-events-none ${getPositionClasses()}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2 }}
            style={{ originX: getOrigin() === 'left' ? 0 : getOrigin() === 'right' ? 1 : 0.5, originY: getOrigin() === 'top' ? 0 : getOrigin() === 'bottom' ? 1 : 0.5 }}
          >
            <div className="bg-white border border-n20 rounded shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-3 w-max">
              {/* Arrow */}
              <div
                className={`absolute w-3.5 h-3.5 rotate-45 bg-white border-n20 border ${
                  actualPosition === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-[7px] border-t-0 border-l-0' :
                  actualPosition === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-[7px] border-b-0 border-r-0' :
                  actualPosition === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-[7px] border-b-0 border-l-0' :
                  'right-full top-1/2 -translate-y-1/2 -mr-[7px] border-t-0 border-r-0'
                }`}
              ></div>

              {title && (
                <div className="text-[10px] font-bold text-n40 uppercase tracking-[0.1em] mb-2">
                  {title}
                </div>
              )}

              {items && items.length > 0 && (
                <div className="grid grid-cols-1 gap-2 mb-1">
                  {items.map((item, idx) => (
                    <div key={idx} className="text-xs text-n110 font-medium whitespace-nowrap leading-none">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BaseTooltip;
