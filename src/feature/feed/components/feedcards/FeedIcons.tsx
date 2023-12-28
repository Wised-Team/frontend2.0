import like from '../../../../assets/Icons/icon/like.svg';
import dislike from '../../../../assets/Icons/icon/dislike.svg';
import comment from '../../../../assets/Icons/icon/comments.svg';
import send from '../../../../assets/Icons/icon/Send.svg';
import FeedButton from './FeedButton';
import { useState } from 'react';

// These Utility buttons need refactoring because some will call the api's and some will just perfrom the triggering actions so we need to take care of this behaviour.

const FeedIcons = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);
  const handleLiked = () => {
    setLiked((prev) => !prev);
  };

  const handleDisliked = () => {
    setDisliked((prev) => !prev);
  };

  return (
    <div className="mt-[1rem] flex items-center gap-6">
      <div className="flex items-center gap-2">
        <FeedButton
          clickedIcon={like}
          isClicked={liked}
          icon={like}
          handleClick={handleLiked}
        />
        {111}
      </div>
      <div className="flex items-center gap-2">
        <FeedButton
          clickedIcon={dislike}
          isClicked={disliked}
          icon={dislike}
          handleClick={handleDisliked}
        />
        {111}
      </div>
      <div className="flex items-center gap-2">
        <FeedButton icon={comment} handleClick={handleLiked} />
        {111}
      </div>
      <div className="flex items-center gap-2">
        <FeedButton icon={send} handleClick={handleLiked} />
        {111}
      </div>
    </div>
  );
};

export default FeedIcons;
