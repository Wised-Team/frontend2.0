import Create from './Create';
import ImageCard from './feedcards/ImageCard';

// Temporary Name of The Component.
const SectionB = () => {
  return (
    <div className="w-[40%] rounded-lg border-[1px] border-[#E5E5E5]">
      <Create />
      <ImageCard />
    </div>
  );
};

export default SectionB;
