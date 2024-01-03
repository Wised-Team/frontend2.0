import Avatar from '../../../../components/ui/others/Avatar';
import FeedIcons from './FeedIcons';
import TextReadMore from './TextReadMore';

const ImageCard = () => {
  return (
    <div className="border-b-[1px] border-x-lighterBlue p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size={40} />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold">Robert Green</h3>
            <p className="text-sm font-normal">Software Developer</p>
          </div>
        </div>

        <div className="mr-2 flex cursor-pointer items-center gap-1">
          {new Array(3).fill(0).map((_, index) => (
            <span
              key={index}
              className="h-[6px] w-[6px] rounded-full bg-black"
            ></span>
          ))}
        </div>
      </div>

      <TextReadMore
        text={`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer, sometimes by accident, sometimes on purpose
        `}
      />
      <div className="mt-[1rem] h-[18rem]  w-full overflow-hidden rounded-2xl">
        <img
          src={
            'https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
      <FeedIcons />
    </div>
  );
};

export default ImageCard;
