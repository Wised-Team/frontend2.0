import React from 'react';

const chips = [
  'constetur',
  'con',
  'constetur',
  'coggfgn',
  'constetur',
  'constetur',
  'con',
  'coggfgn',
];

const Trending = () => {
  return (
    <div className="border-b-[1px] ">
      <h3 className="text-lg font-bold">Trending</h3>
      <div className="mb-[1rem] mt-[1rem] flex flex-wrap gap-x-6 gap-y-3">
        {chips.map((item, index) => (
          <div
            key={index}
            className="rounded-lg  border-[1px] border-[#E5E5E5] p-1 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="absolute left-0  right-0 h-[1px] bg-[#E5E5E5]"></div>
    </div>
  );
};

export default Trending;
