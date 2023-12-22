import FollowButton from '../features/feed/components/ui/buttons/FollowButton';
import LayerdButton from '../features/feed/components/ui/buttons/LayerdButton';
import LessRoundedButton from '../features/feed/components/ui/buttons/LessRoundedButton';
import MoreRoundedButton from '../features/feed/components/ui/buttons/MoreRoundedButton';
import Avatar from '../features/feed/components/ui/others/Avatar';
import DropdownMenu from '../features/feed/components/ui/others/Dropdown/DropdownMenu';
import Toggler from '../features/feed/components/ui/others/Toggler';
// import { Navbar } from "../layouts"

const DesignSystem = () => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="mt-[2rem] text-center text-5xl font-bold">
        Design System
      </div>
      <div className="mt-[1rem] grid min-h-[1400px] grid-cols-3 grid-rows-5 gap-4 border-[2px] border-black p-4">
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
      </div>
    </div>
  )
}

export default DesignSystem



