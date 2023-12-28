import like from '../../../../assets/Icons/icon/like.svg'
import dislike from '../../../../assets/Icons/icon/dislike.svg'
import comment from '../../../../assets/Icons/icon/comments.svg'
import send from '../../../../assets/Icons/icon/Send.svg'
import FeedButton from './FeedButton'
import { useState } from 'react'


const FeedIcons = () => {

    const [liked, setLiked] = useState<boolean>(false);

    const handleLiked = () => {
        setLiked(true);
    }

    return (
        <div className='flex items-center gap-6 mt-[1rem]'>
            <div className='flex items-center gap-2'>
                <FeedButton clickedIcon={like} isClicked={liked} unClickedIcon={like} handleClick={handleLiked} />
                {111}
            </div>
            <div className='flex items-center gap-2'>
                <FeedButton clickedIcon={dislike} isClicked={liked} unClickedIcon={dislike} handleClick={handleLiked} />
                {111}
            </div>
            <div className='flex items-center gap-2'>
                <FeedButton clickedIcon={comment} isClicked={liked} unClickedIcon={comment} handleClick={handleLiked} />
                {111}
            </div>
            <div className='flex items-center gap-2'>
                <FeedButton clickedIcon={send} isClicked={liked} unClickedIcon={send} handleClick={handleLiked} />
                {111}
            </div>
        </div>
    )
}

export default FeedIcons