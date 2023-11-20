import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utilities/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchToggle=useSelector((store)=>store.vsearch);
  const searchedVidoes=useSelector((store)=>store.vidoes)
  console.log(searchToggle);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    
    setVideos(json);
    if (videos.length === 0) setVideos(json?.items);


  };
  if (videos.length === 0) return "Empty";
  if(!searchToggle)
  {
    <VideoCard  info={searchedVidoes[0]} />
  }

  return (
    <div className="flex flex-wrap m-5">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v='+ video.id} >
        <VideoCard  info={video} /> </Link>
      ))}
        
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  );
};

export default VideoContainer;
