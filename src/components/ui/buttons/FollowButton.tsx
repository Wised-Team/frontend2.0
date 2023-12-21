import React, { useState } from 'react';

import notfollow from '../../../assets/Icons/notfollow.svg';
import following from '../../../assets/Icons/following.svg';
import { cn } from '../../../utils';

interface FollowButtonProps {
  className?: string;
}

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div
      className={cn(
        'flex h-10 w-[8rem] cursor-pointer items-center justify-center gap-2 rounded-3xl border-[2px] border-darkerBlue font-bold transition-all duration-200 hover:opacity-90',
        isFollowing ? 'bg-darkerBlue text-white' : 'bg-white text-darkerBlue'
      )}
      onClick={handleFollow}
    >
      <span>{isFollowing ? 'Following' : 'Follow'}</span>
      <img src={isFollowing ? following : notfollow} />
    </div>
  );
};

export default FollowButton;
