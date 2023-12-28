import Avatar from '../../../components/ui/others/Avatar';

import marker from '../../../assets/Icons/marker.svg';
import doc from '../../../assets/Icons/doc.svg';
import file from '../../../assets/Icons/file.svg';
import pic from '../../../assets/Icons/pic.svg';
import poll from '../../../assets/Icons/poll.svg';
import IconButton from '../../../components/ui/buttons/IconButton';

type IIconsData = {
  text: string;
  icon: any;
};

const iconsData: IIconsData[] = [
  {
    text: 'Document',
    icon: doc,
  },
  {
    text: 'Write Up',
    icon: file,
  },
  {
    text: 'Photo',
    icon: pic,
  },
  {
    text: 'Poll',
    icon: poll,
  },
];

const UtitlityIcons = () => {
  return (
    <div className="mt-[1.5rem] flex items-center gap-8 bg-morelighestBlue px-8 py-4">
      {iconsData.map((data: IIconsData, index: number) => (
        <IconButton
          key={data.text}
          text={data.text}
          icon={data.icon}
          direction="left"
          className=""
        />
      ))}
    </div>
  );
};

const Create = () => {
  return (
    <>
      <div className="flex items-center gap-x-4 px-8 pt-8">
        <Avatar size={50} />
        <div className=" flex items-center p-2">
          <input
            className=" p-2 text-sm placeholder-black  focus:outline-none"
            placeholder="Create Something ..."
          ></input>
          <img src={marker} alt="Marker Image" className="right-2 w-4 " />
        </div>
      </div>
      <UtitlityIcons />
    </>
  );
};

export default Create;
