'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Block {
  id: number;
  left: string;
  top: string;
  opacity: number;
  animation: string;
}

const VisualGrid: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cols = Math.floor(size.width / 40) || 20;
  const rows = Math.floor(size.height / 40) || 10;

  useEffect(() => {
    // Generate blocks only once on mount or when size changes significantly
    if (cols > 0 && rows > 0) {
      const newBlocks = Array.from({ length: 40 }).map((_, i) => {
        const x = Math.floor(Math.random() * cols) * 40;
        const y = Math.floor(Math.random() * rows) * 40;
        const opacity = Math.random() * 0.4 + 0.1;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;

        return {
          id: i,
          left: `${x}px`,
          top: `${y}px`,
          opacity,
          animation: `pulse ${duration}s ease-in-out ${delay}s infinite`,
        };
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBlocks(newBlocks);
    }
  }, [cols, rows]);

  return (
    <div
      ref={targetRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* The surgical grid lines */}
      <div
        className="absolute inset-0 mask-circle-hole"
        style={{
          backgroundImage: 'linear-gradient(var(--color-n20) 1px, transparent 1px), linear-gradient(to right, var(--color-n20) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* The random "data" blocks */}
      <div className="absolute inset-0">
        {hasMounted && blocks.map((block) => (
          <div
            key={block.id}
            className="absolute bg-n60/15"
            style={{
              width: '40px',
              height: '40px',
              left: block.left,
              top: block.top,
              opacity: block.opacity,
              animation: block.animation,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VisualGrid;
