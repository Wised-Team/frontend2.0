import React from 'react';
import image from '../../../assets/human.jpg';

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
        src={image}
        alt="avatar image"
        className="h-full w-full object-cover object-center "
      />
    </div>
  );
};

export default Avatar;
