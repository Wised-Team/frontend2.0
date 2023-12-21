import { useState } from 'react';
import { Bell, BellWithNotification, Magnify, Wised } from '../assets';
import { ImageIcon } from '../components';

const Navbar = () => {
  const [isNotify, setisNotify] = useState(false);
  return (
    <div className="sticky top-0 flex flex-row items-center justify-between bg-[#40494f20] px-7 py-3 shadow-md">
      <div className="flex flex-row items-center gap-5">
        <ImageIcon url={Wised} wt="80px" ht="80px" classname="cursor-pointer" />
        <div className="flex flex-row items-center rounded-2xl bg-[#fff] px-1">
          <ImageIcon url={Magnify} wt="20px" ht="20px" />
          <input
            className="justify-center rounded-2xl bg-[#fff] px-2 py-[4px] text-[16px] font-inter placeholder:text-[#333] focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-row">
        {isNotify ? (
          <ImageIcon url={Bell} wt="20px" ht="20px" />
        ) : (
          <ImageIcon url={BellWithNotification} wt="20px" ht="20px" />
        )}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
