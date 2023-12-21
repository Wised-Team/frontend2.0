import FollowButton from "../components/ui/buttons/FollowButton"
import LayerdButton from "../components/ui/buttons/LayerdButton"
import LessRoundedButton from "../components/ui/buttons/LessRoundedButton"
import MoreRoundedButton from "../components/ui/buttons/MoreRoundedButton"
import Avatar from "../components/ui/others/Avatar"
import DropdownMenu from "../components/ui/others/Dropdown/DropdownMenu"
import Toggler from "../components/ui/others/Toggler"
// import { Navbar } from "../layouts"

const FeedPage = () => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="mt-[2rem] font-bold text-5xl text-center">
        Design System
      </div>
      <div className="grid grid-cols-3 gap-4 border-[2px] border-black min-h-[1400px] mt-[1rem] p-4 grid-rows-5">
        <div className="border-[2px] border-black flex items-center justify-center w-full h-full">
          <LayerdButton className=" bg-lighterBlue" variant={"red"} text={"Label"} />
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <div className="flex items-center gap-4">
            <Toggler variant="blue" size={"default"} />
            <Toggler variant={"default"} size={"default"} />
          </div>
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <div className="flex flex-col gap-2">
            <MoreRoundedButton variant={"default"} size={"default"} text="Read More" />
            <MoreRoundedButton variant={"outline"} size={"default"} text="Read More" />
            <MoreRoundedButton variant={"ghost"} size={"default"} text="Read More" />
          </div>
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <div className="flex flex-col gap-2">
            <LessRoundedButton variant={"default"} size={"default"} text="Read More" />
            <LessRoundedButton variant={"outline"} size={"default"} text="Read More" />
            <LessRoundedButton variant={"ghost"} size={"default"} text="Read More" />
          </div>
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <div className="flex items-center gap-4">
            <Avatar size={60} />
            <Avatar size={40} />
            <Avatar size={20} />
          </div>
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <FollowButton />
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}

export default FeedPage