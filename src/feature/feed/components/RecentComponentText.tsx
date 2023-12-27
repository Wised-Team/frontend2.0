import React from 'react'
import Divider from '../../../components/ui/others/Divider';

const RecentComponentText:React.FC<{
    HeaderText:string;
    BodyText:string;
}> = ({HeaderText, BodyText}) => {
  return (
    <div className='flex flex-col gap-1 cursor-pointer'>
        <h5 className='text-[15px] font-inter font-[500] gap-1'>{HeaderText}</h5>
        <h5 className='text-[11px] font-inter'>{BodyText}</h5>
        <Divider/>
    </div>
  )
}

export default RecentComponentText