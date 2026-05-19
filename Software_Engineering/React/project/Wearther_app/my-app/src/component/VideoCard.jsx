import React from 'react'

const VideoCard = ({image, name, owner}) => {

    return (
        <div className='border-2 border-black w-fit'>
            <img src={image} className='w-[200px]' alt=''/>
            <p>{name}</p>
            <p>{owner}</p>
        </div>
    )
}

export default VideoCard