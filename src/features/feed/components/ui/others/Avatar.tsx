import React from 'react';
import { Ellipse } from '../../../../../assets';


interface AvatarProps {
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
  return (
    <div
      className={`overflow-hidden rounded-full`}
      style={{
        width: size + 'px',
        height: size + 'px',
      }}
    >
      <img
        src={Ellipse}
        alt="avatar image"
        className="h-full w-full object-cover object-center "
      />
    </div>
  );
};

export default Avatar;
