import SuggestedProfiles from './SuggestedProfiles'
import Trending from './Trending'

// Temporary Name of The Component.
const SectionC = () => {
    return (
        <div className='w-[25%] border-[1px] border-[#E5E5E5] rounded-l-lg p-3 pr-4 relative'>
            <Trending />
            <div className='mt-[1rem]'></div>
            <SuggestedProfiles />
        </div>
    )
}

export default SectionC