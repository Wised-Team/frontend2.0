import Avatar from '../../../../components/ui/others/Avatar';
import FeedIcons from './FeedIcons';
import TextReadMore from './TextReadMore';

const ImageCard = () => {
  return (
    <div className="p-4 border-b-[1px] border-x-lighterBlue">
      <div className="flex items-center gap-2">
        <Avatar size={40} />
        <div className="flex flex-col">
          <h3 className="text-sm font-bold">Robert Green</h3>
          <p className="text-sm font-normal">Software Developer</p>
        </div>
      </div>
      <TextReadMore
        text={`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer, sometimes by accident, sometimes on purpose
        `}
      />
      <div className='h-[18rem] w-full  overflow-hidden rounded-2xl mt-[1rem]'>
        <img src={"https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Image" className='w-full h-full object-cover' />
      </div>
      <FeedIcons />
    </div>
  );
};

export default ImageCard;
