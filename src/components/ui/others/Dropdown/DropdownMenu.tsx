import React, { useState, useEffect } from 'react';
import arrow from '../../../../assets/Icons/arrow.svg';
import { cn } from '../../../../utils';

interface ListItemInterface {
  title: string;
  value: string;
}

const listItems: ListItemInterface[] = [
  {
    title: 'Popular',
    value: 'popular',
  },
  {
    title: 'Recent',
    value: 'recent',
  },
];

interface DropdownMenuInterface {
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuInterface> = ({ className }) => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleDropdownOpener = () => {
    setIsDropdownActive((prev) => !prev);
  };

  const handleDropDownItemChange = (text: string) => {
    if (text === '') {
      setSelectedItem('');
      setIsDropdownActive(false);
      return;
    }

    setSelectedItem(text);
    setIsDropdownActive(false);
  };

  useEffect(() => {
    console.log(isDropdownActive);
  }, [isDropdownActive]);

  return (
    <div
      className={cn(
        'min-w-[9rem] h-[2rem] border-[1.5px] border-x-morelighestBlue flex items-center justify-between px-4 rounded-xl cursor-pointer relative',
        className
      )}
      onClick={handleDropdownOpener}
    >
      <span className={`font-semibold `}>{selectedItem === '' ? 'Select' : `${selectedItem}`}</span>
      <img src={arrow} className={`${isDropdownActive ? 'rotate-180' : ' rotate-0'} transition-all duration-200`} />

      {isDropdownActive && (
        <div className='absolute w-full p-2 bg-white shadow-md rounded-md top-[100%] mt-[0.3rem] left-0'>
          <div className='flex flex-col gap-2'>
            {listItems.map(({ title, value }: ListItemInterface) => (
              <span
                className='p-1 hover:bg-gray-200 rounded-lg'
                key={value}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => handleDropDownItemChange(e.currentTarget.textContent || '')}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
