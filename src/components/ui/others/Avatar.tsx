import React from 'react'
import image from '../../../assets/human.jpg'


interface AvatarProps {
    size: number
}

const Avatar: React.FC<AvatarProps> = ({
    size
}) => {
    return (
        <div className={`rounded-full overflow-hidden`}
            style={{
                width: size + "px",
                height: size + "px",
            }}>
            <img src={image} alt="avatar image" className='w-full h-full object-cover object-center' />
        </div>
    )
}

export default Avatar