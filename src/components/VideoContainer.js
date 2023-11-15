import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utilities/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //  console.log(json);
    setVideos(json);
    if (videos.length === 0) setVideos(json?.items);

    console.log("Fetched Successfully video cards");

    console.log(videos);
  };
  if (videos.length === 0) return "Empty";

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
