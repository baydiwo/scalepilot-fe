import React from 'react';

const IconUpTriangle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 10L16 14H8L12 10Z"
      />
    </svg>
  );
};

export default IconUpTriangle;
