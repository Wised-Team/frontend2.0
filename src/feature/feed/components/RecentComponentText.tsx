import React from 'react';
import Divider from '../../../components/ui/others/Divider';

const RecentComponentText: React.FC<{
  HeaderText: string;
  BodyText: string;
}> = ({ HeaderText, BodyText }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-[0.4px]">
      <h5 className="gap-[0.2px] text-[15px] font-bold font-inter">
        {HeaderText}
      </h5>
      <h5 className="text-[11px] font-inter">{BodyText}</h5>
      <Divider />
    </div>
  );
};

export default RecentComponentText;
