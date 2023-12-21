import {  sharuk } from "../assets"
import Catergories from "../components/Catergories"
import PersonaIcon from "../components/PersonaIcon"
import SortBy from "../components/SortBy"


const FeedPage = () => {
  return (
    <div className="flex flex-col px-6 py-7">
        <div className="flex flex-row justify-between items-center">
          <Catergories/>
          <SortBy/>
        </div>
        <div className="flex flex-row h-screen w-screen">
             
        </div>
    </div>
  )
}

export default FeedPage