import React, { useEffect, useState } from "react";
import { MOST_POPULAR_VIDEOS_API_LINK } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiData = await fetch(MOST_POPULAR_VIDEOS_API_LINK);
    const jsonData = await apiData.json();
    setVideos(jsonData.items);
  };

  if(videos.length<0) return;

  return (
    <div className="flex flex-wrap content-center">
      {videos.map(video=><Link to={"/watch/?v="+video.id} key={video.id} ><VideoCard  info={video} /></Link>)}
      
    </div>
  );
};

export default VideoContainer;
