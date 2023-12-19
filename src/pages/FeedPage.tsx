import LayerdButton from "../components/ui/buttons/LayerdButton"
import Toggler from "../components/ui/others/Toggler"
// import { Navbar } from "../layouts"

const FeedPage = () => {
  return (
    <div className="flex flex-col p-4 overflow-x-hidden">
      <div className="mt-[2rem] font-bold text-5xl text-center">
        Design System
      </div>
      <div className="grid grid-cols-3 gap-4 border-[2px] border-black h-screen mt-[1rem] p-4 grid-rows-3 ">
        <div className="border-[2px] border-black flex items-center justify-center w-full h-full">
          <LayerdButton className=" bg-lighterBlue" text={"Label"} />
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <div className="flex items-center gap-4">
            <Toggler variant="blue" size={"default"} />
            <Toggler variant={"default"} size={"default"} />
          </div>
        </div>
        <div className="border-[2px] border-black flex items-center justify-center w-full">
          <LayerdButton className=" bg-lighterBlue" text={"Label"} />
        </div>
      </div>
    </div>
  )
}

export default FeedPage