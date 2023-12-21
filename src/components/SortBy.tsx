import { useEffect, useRef, useState } from 'react';
import { ImageIcon } from '.';
import { arrow } from '../assets';

// Enum representing the sorting options
const SortOptions = {
  POPULAR: 'Popular',
  RECENT: 'Recent',
};

const SortBy = () => {
  const [selectedOption, setSelectedOption] = useState(SortOptions.POPULAR);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef:any = useRef(null);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleOutsideClick = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='relative flex flex-row text-[15px] font-inter items-center gap-2'>
      <h5>Sort By:</h5>
      <div
        ref={dropdownRef}
        className="px-5 py-1 rounded-3xl border-[1.5px] cursor-pointer flex flex-col gap-1"
        onClick={toggleDropdown}
      >
        <div className='flex flex-row items-center gap-5'>
          <h5>{selectedOption}</h5>
          <ImageIcon url={arrow} classname='transform: rotate-90' />
        </div>
       
        {isDropdownOpen && (
          <div className="absolute top-9 left-[65px] z-10 bg-white border border-gray-300 rounded-md shadow-md px-1 py-1">
            <div
              className="py-1 px-6 cursor-pointer hover:bg-[#DEF3FF] rounded-md"
              onClick={() => handleOptionClick(SortOptions.POPULAR)}
            >
              Popular
            </div>
            <div
              className="py-1 px-6 cursor-pointer hover:bg-[#DEF3FF] rounded-md"
              onClick={() => handleOptionClick(SortOptions.RECENT)}
            >
              Recent
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortBy;
