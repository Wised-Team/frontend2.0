import { useState } from "react"
import { Bell, BellWithNotification, Magnify, Wised } from "../assets"
import { ImageIcon } from "../components"

const Navbar = () => {
  const [isNotify, setisNotify] = useState(false);
  return (
    <div className="flex flex-row top-0 sticky px-7 py-3 items-center bg-[#40494f20] shadow-md justify-between">
       <div className="flex flex-row gap-5 items-center">
           <ImageIcon url={Wised} wt="80px" ht="80px" classname="cursor-pointer"/>
           <div className="flex flex-row bg-[#fff] rounded-2xl items-center px-1">
            <ImageIcon url={Magnify} wt="20px" ht="20px"/>
            <input className="bg-[#fff] rounded-2xl px-2 py-[4px] justify-center text-[16px] focus:outline-none font-inter placeholder:text-[#333]" placeholder="Search"/>
           </div>
       </div>
       <div className="flex flex-row">
         {
            (isNotify)?(
                <ImageIcon url={Bell} wt="20px" ht="20px"/>
            ):
            (
                <ImageIcon url={BellWithNotification} wt="20px" ht="20px"/>
            )
         }
         <div className="">

         </div>
       </div>
    </div>
  )
}

export default Navbar