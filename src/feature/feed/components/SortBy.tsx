import { useEffect, useRef, useState } from 'react';
import { ImageIcon } from '../../../components';
import { arrow } from '../../../assets';

// Enum representing the sorting options
const SortOptions = {
  POPULAR: 'Popular',
  RECENT: 'Recent',
};

const SortBy = () => {
  const [selectedOption, setSelectedOption] = useState(SortOptions.POPULAR);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleOutsideClick = (event: any) => {
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
    <div className="relative flex flex-row items-center gap-2 text-[15px] font-inter">
      <h5>Sort By:</h5>
      <div
        ref={dropdownRef}
        className="flex cursor-pointer flex-col gap-1 rounded-3xl border-[1.5px] px-5 py-1"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row items-center gap-5">
          <h5>{selectedOption}</h5>
          <ImageIcon
            url={arrow}
            classname={`${
              isDropdownOpen ? 'rotate-[-180deg]' : 'rotate-[0deg]'
            } transition-all duration-300`}
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute left-[65px] top-9 z-10 rounded-md border border-gray-300 bg-white px-1 py-1 shadow-md">
            <div
              className="cursor-pointer rounded-md px-6 py-1 hover:bg-[#DEF3FF]"
              onClick={() => handleOptionClick(SortOptions.POPULAR)}
            >
              Popular
            </div>
            <div
              className="cursor-pointer rounded-md px-6 py-1 hover:bg-[#DEF3FF]"
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
