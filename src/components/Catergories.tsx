import { useState } from 'react';
import { ImageIcon } from '.';
import { arrow } from '../assets';

const categories = ['All', 'Internet Of Things(IOT)', 'BioMedical Engineering', 'Big Data', 'Medi Engineering'];

const Catergories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (index:any) => {
    setSelectedCategory(index);
  };

  return (
    <div className="flex flex-row text-[15px] items-center font-inter">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`px-3 py-1 mx-2 cursor-pointer ${
            selectedCategory === index ? 'bg-[#DEF3FF]' : ''
          } rounded-3xl text-center hover:bg-[#DEF3FF]`}
          onClick={() => handleClick(index)}
        >
          {category}
        </div>
      ))}
      <div className="px-3 py-2 mx-2 cursor-pointer bg-[#DEF3FF] rounded-3xl font-bold text-[#1DA1F2]">
        <ImageIcon url={arrow} wt="7px" ht="7px"  />
      </div>
    </div>
  );
};

export default Catergories;
