import React, { useState } from 'react';

import notfollow from '../../../assets/Icons/notfollow.svg';
import following from '../../../assets/Icons/following.svg';
import { cn } from '../../../utils';

interface FollowButtonProps {
  className?: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ className }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div
      className={cn(
        'flex h-10 w-[8rem] cursor-pointer items-center justify-center gap-2 rounded-3xl border-[1.4px]  font-bold transition-all duration-200 hover:opacity-90',
        className,
        isFollowing ? 'bg-darkerBlue text-white border-darkerBlue' : 'bg-white text-[#333] border-[#333] hover:border-[0px] hover:bg-[#DEF3FF]'
      )}
      onClick={handleFollow}
    >
      <span>{isFollowing ? 'Following' : 'Follow'}</span>
    </div>
  );
};

export default FollowButton;
