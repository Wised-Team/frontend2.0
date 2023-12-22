import { useState } from 'react';
import { Bell, BellWithNotification, Ellipse, Magnify, Wised } from '../assets';
import { ImageIcon } from '../components';

const Navbar = () => {
  const [isNotify, setisNotify] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#40494f20] px-9 py-[6px] shadow-md">
      <div className="flex items-center gap-5">
        <ImageIcon url={Wised} wt="80px" ht="80px" classname="cursor-pointer" />
        <div className="flex w-[24rem] items-center rounded-2xl bg-[#fff] px-1">
          <ImageIcon url={Magnify} wt="20px" ht="20px" />
          <input
            className="justify-center rounded-2xl bg-[#fff] px-2 py-[4px] text-[16px] font-inter placeholder:text-[#333] focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="cursor-pointer rounded-md px-1 py-1 hover:bg-[#40494f31]"
          onClick={() => {
            setisNotify(!isNotify);
          }}
        >
          {isNotify ? (
            <ImageIcon url={Bell} wt="20px" ht="20px" />
          ) : (
            <ImageIcon url={BellWithNotification} wt="20px" ht="20px" />
          )}
        </div>
        <div className="cursor-pointer px-1 py-1 hover:rounded-3xl hover:bg-[#40494f31]">
          <ImageIcon
            url={Ellipse}
            wt="35px"
            ht="35px"
            classname="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
