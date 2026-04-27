import React from 'react';

const IconDownArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 16L6 10H18L12 16Z"></path>
    </svg>
  );
};

export default IconDownArrow;
