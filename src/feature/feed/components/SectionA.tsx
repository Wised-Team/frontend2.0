import Avatar from '../../../components/ui/others/Avatar';
import IconButton from '../../../components/ui/buttons/IconButton';
import {
  editableIcon,
  home,
  libraryIcon,
  message,
  settingIcon,
} from '../../../assets';
import './RecentComponentText';
import RecentComponentText from './RecentComponentText';
import Divider from '../../../components/ui/others/Divider';

//dummy data
import data from '../dummydata/recent.json';
import { useState } from 'react';

// Temporary Name of The Component.
const SectionA = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data based on the current page
  const displayedData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="relative h-[50%] w-[25%] rounded-r-lg border-[1px]  border-[#E5E5E5] px-5 py-5">
      <div className="mt-3 flex flex-row items-center gap-4">
        <Avatar size={40} />
        <div className="flex flex-col">
          <h3 className="text-sm font-bold">Robert Green</h3>
          <p className="text-sm font-normal">Software Developer</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col  gap-3">
        <IconButton icon={home} text={'Home'} direction={'left'} />
        <IconButton icon={message} text={'Message'} direction={'left'} />
        <IconButton
          icon={libraryIcon}
          text={'Browse Library'}
          direction={'left'}
        />
        <IconButton
          icon={editableIcon}
          text={'Learn By Stream'}
          direction={'left'}
        />
        <IconButton icon={settingIcon} text={'Settings'} direction={'left'} />
      </div>

      <div className="mx-[-20px] py-2">
        <Divider />
      </div>

      <div className="mt-3 flex flex-col">
        <h5 className="text-[18px] font-[700] font-inter">Recent</h5>
        <div className="flex flex-col gap-2 py-3">
          {displayedData.map((info) => (
            <RecentComponentText
              key={info.id} // Make sure to use a unique key for each item
              HeaderText={`${info.title}`}
              BodyText={`${info.modified}`}
            />
          ))}
        </div>
        {/* Pagination controls */}
        <div className="mt-3 flex flex-row items-center justify-between">
          <div className="">
            <h5 className="text-[11px] font-inter">{`Showing ${itemsPerPage} of ${data.length} items`}</h5>
          </div>
          <div className="flex flex-row">
            {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
              (page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  className={`mx-2 px-3 py-1 text-sm font-inter ${
                    currentPage === page + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } rounded`}
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mx-[-20px] py-2">
        <Divider />
      </div>

      <div className="mt-3 cursor-pointer text-center text-[20px] font-[400] font-inter">
        <h5>See all</h5>
      </div>
    </div>
  );
};

export default SectionA;
