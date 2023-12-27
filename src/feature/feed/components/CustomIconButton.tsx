import React from 'react';
import { ImageIcon } from '../../../components';

const CustomIconButton: React.FC<{
  url: string;
  text?: string;
}> = ({ url, text }) => {
  return (
    <div className="justify-between rounded-md px-2 py-1 text-[15px]">
      <ImageIcon url={url} />
      <h5>{text}</h5>
    </div>
  );
};

export default CustomIconButton;
