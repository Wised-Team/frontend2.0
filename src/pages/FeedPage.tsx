import { sharuk } from '../assets';
import { ImageIcon } from '../components';
import Catergories from '../components/Catergories';
import PersonaIcon from '../components/PersonaIcon';
import SortBy from '../components/SortBy';

import arrow from '../assets/Icons/arrow.svg';

const FeedPage = () => {
  return (
    <div className="flex flex-col px-6 py-7">
      <div className="flex items-center justify-between">
        <div className="flex w-[60%] items-center">
          <Catergories />
          <div className="mx-2 cursor-pointer rounded-xl bg-[#DEF3FF] px-3 py-4 font-bold text-[#1DA1F2]">
            <ImageIcon
              url={arrow}
              wt="12px"
              ht="12px"
              classname=" rotate-[-90deg]"
            />
          </div>
        </div>
        <div>
          <SortBy />
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
