import Create from './Create';
import ImageCard from './feedcards/ImageCard';

// Temporary Name of The Component.
const SectionB = () => {
  return (
    <div className="w-[40%] rounded-lg border-[1px] border-[#E5E5E5]">
      <Create />
      {new Array(6).fill(0).map((_, index) => (
        <ImageCard key={index} />
      ))}
    </div>
  );
};

export default SectionB;
