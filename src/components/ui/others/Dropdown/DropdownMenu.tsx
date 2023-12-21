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
        'relative flex h-[2rem] min-w-[9rem] cursor-pointer items-center justify-between rounded-xl border-[1.5px] border-x-morelighestBlue px-4',
        className
      )}
      onClick={handleDropdownOpener}
    >
      <span className={`font-semibold `}>
        {selectedItem === '' ? 'Select' : `${selectedItem}`}
      </span>
      <img
        src={arrow}
        className={`${
          isDropdownActive ? 'rotate-180' : ' rotate-0'
        } transition-all duration-200`}
      />
      {isDropdownActive && (
        <div className="absolute left-0 top-[100%] mt-[0.3rem] w-full rounded-md bg-white p-2 shadow-md">
          <div className="flex flex-col gap-2">
            {listItems.map(({ title, value }: ListItemInterface) => (
              <span
                className="rounded-lg p-1 hover:bg-gray-200"
                key={value}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  handleDropDownItemChange(e.currentTarget.textContent || '')
                }
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
