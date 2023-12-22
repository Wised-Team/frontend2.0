import SuggestedProfiles from './SuggestedProfiles';
import Trending from './Trending';

// Temporary Name of The Component.
const SectionC = () => {
  return (
    <div className="relative w-[30%] rounded-l-lg border-[1px] border-[#E5E5E5] p-3 pr-4">
      <Trending />
      <div className="mt-[1rem]"></div>
      <SuggestedProfiles />
    </div>
  );
};

export default SectionC;
