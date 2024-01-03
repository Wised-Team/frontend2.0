import { useState } from 'react';

const categories = [
  'All',
  'Internet of Things (IoT)',
  'Biomedical Engineering',
  'Cybersecurity in Engineering Systems',
  'Biomedical Engineering',
  'Big Data',
  'Medi Engineering',
];

const Catergories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handleClick = (index: any) => {
    setSelectedCategory(index);
  };

  return (
    <>
      <div className="flex flex-row items-center overflow-x-scroll whitespace-nowrap py-2 text-[15px] font-inter scrollbar-hide ">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`mx-2 cursor-pointer px-3 py-1 text-sm ${
              selectedCategory === index ? 'bg-[#DEF3FF]' : ''
            } rounded-3xl text-center hover:bg-[#DEF3FF]`}
            onClick={() => handleClick(index)}
          >
            {category}
          </div>
        ))}
      </div>
    </>
  );
};

export default Catergories;
