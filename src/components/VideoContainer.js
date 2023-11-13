// import React, { useEffect, useState } from 'react'
// import { YOUTUBE_VIDEOS_API } from '../utilities/constants';
// import VideoCard from './VideoCard';

const VideoContainer = () => {

    // const [videos,setVideos]=useState([]);

    // useEffect(()=>{
    //     getVideos();
    // })

    // const getVideos=async()=>{
    //     const data=await fetch(YOUTUBE_VIDEOS_API);
    //     const json=await data.json();
    //   //  console.log(json);
    //     setVideos(json?.items);
    //     console.log(videos)
    

  return (
    <div className='flex flex-wrap m-5'>
    {/* {videos.map((video)=>(<VideoCard  key={video?.id} videoList={video} />))} */}
      
    </div>
  )
}

export default VideoContainer
