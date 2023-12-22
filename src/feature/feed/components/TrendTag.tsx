import React from 'react';

const TrendTag: React.FC<{
  text?: string;
  className?: string;
}> = ({ text, className }) => {
  return <div className={`${className} bg-[#e7e5e5] px-1 py-1`}>{text}</div>;
};

export default TrendTag;
