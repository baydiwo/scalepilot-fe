import React from 'react';

interface TitleAccentTriangleProps {
  color?: 'green' | 'red';
  className?: string;
}

const TitleAccentTriangle: React.FC<TitleAccentTriangleProps> = ({ 
  color = 'green', 
  className = '' 
}) => {
  return (
    <svg
      width="56"
      height="12"
      viewBox="0 0 56 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${color === 'red' ? 'text-spred' : 'text-spgreen'} ${className}`}
    >
      <path
        d="M0 12L56 0V12H0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TitleAccentTriangle;
