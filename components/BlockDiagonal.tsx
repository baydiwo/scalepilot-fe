import React from 'react';

const BlockDiagonal: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-10 md:h-14 diagonal-lines border-y border-n20 ${className}`}></div>
  );
};

export default BlockDiagonal;
