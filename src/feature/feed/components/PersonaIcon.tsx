import React from 'react';
import { ImageIcon } from '../../../components';

const PersonaIcon: React.FC<{
  url: string;
}> = ({ url }) => {
  return (
    <div className="rounded-[50px]">
      <ImageIcon url={url} wt="30px" ht="30px" classname="rounded-[50px]" />
    </div>
  );
};

export default PersonaIcon;
