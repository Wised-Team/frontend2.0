import FollowButton from '../components/ui/buttons/FollowButton';
import IconButton from '../components/ui/buttons/IconButton';
import LayerdButton from '../components/ui/buttons/LayerdButton';
import LessRoundedButton from '../components/ui/buttons/LessRoundedButton';
import MoreRoundedButton from '../components/ui/buttons/MoreRoundedButton';
import Avatar from '../components/ui/others/Avatar';
import DropdownMenu from '../components/ui/others/Dropdown/DropdownMenu';
import Toggler from '../components/ui/others/Toggler';
// import { Navbar } from "../layouts"

import homeicon from '../assets/Icons/HomeIcon.svg';

const DesignSystem = () => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="mt-[2rem] text-center text-5xl font-bold">
        Design System
      </div>
      <div className="mt-[1rem] grid min-h-[900px] grid-cols-3 grid-rows-5 gap-4 border-[2px] border-black p-4">
        <div className="flex h-full w-full items-center justify-center border-[2px] border-black">
          <LayerdButton
            className=" bg-lighterBlue"
            variant={'red'}
            text={'Label'}
          />
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <div className="flex items-center gap-4">
            <Toggler variant="blue" size={'default'} />
            <Toggler variant={'default'} size={'default'} />
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <div className="flex flex-col gap-2">
            <MoreRoundedButton
              variant={'default'}
              size={'default'}
              text="Read More"
            />
            <MoreRoundedButton
              variant={'outline'}
              size={'default'}
              text="Read More"
            />
            <MoreRoundedButton
              variant={'ghost'}
              size={'default'}
              text="Read More"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <div className="flex flex-col gap-2">
            <LessRoundedButton
              variant={'default'}
              size={'default'}
              text="Read More"
            />
            <LessRoundedButton
              variant={'outline'}
              size={'default'}
              text="Read More"
            />
            <LessRoundedButton
              variant={'ghost'}
              size={'default'}
              text="Read More"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <div className="flex items-center gap-4">
            <Avatar size={60} />
            <Avatar size={40} />
            <Avatar size={20} />
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <FollowButton />
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <DropdownMenu />
        </div>
        <div className="flex w-full items-center justify-center border-[2px] border-black">
          <IconButton
            variant={'default'}
            size={'default'}
            text="Messages"
            icon={homeicon}
            direction="left"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
