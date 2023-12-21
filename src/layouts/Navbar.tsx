import { useState } from "react";
import { Bell, BellWithNotification, Ellipse, Magnify, Wised, sharuk } from "../assets";
import { ImageIcon } from "../components";
import PersonaIcon from "../components/PersonaIcon";
const Navbar = () => {
  const [isNotify, setisNotify] = useState(false);

  return (
    <div className="bg-[#40494f20] shadow-md px-9 py-3 flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <ImageIcon url={Wised} wt="80px" ht="80px" classname="cursor-pointer" />
        <div className="flex bg-[#fff] rounded-2xl items-center px-1">
          <ImageIcon url={Magnify} wt="20px" ht="20px" />
          <input
            className="bg-[#fff] rounded-2xl px-2 py-[4px] justify-center text-[16px] focus:outline-none font-inter placeholder:text-[#333]"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="cursor-pointer hover:bg-[#40494f31] px-1 py-1 rounded-md"
          onClick={() => {
            setisNotify(!isNotify);
          }}
        >
          {isNotify ? <ImageIcon url={Bell} wt="20px" ht="20px" /> : <ImageIcon url={BellWithNotification} wt="20px" ht="20px" />}
        </div>
        <div className="cursor-pointer hover:bg-[#40494f31] hover:rounded-3xl px-1 py-1">
          <ImageIcon url={Ellipse} wt="35px" ht="35px" classname="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
