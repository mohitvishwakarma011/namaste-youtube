import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics} = info;
    const{channelTitle,title,thumbnails} = snippet;

  return (
    <div className='m-2 p-2 shadow-lg rounded-lg w-[22rem]'>
      <img alt="thumbnail" src={thumbnails.medium.url} className='rounded-lg'></img>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
