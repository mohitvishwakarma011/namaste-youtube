import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useGetComments from "../hooks/useGetComments";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const commentsData = useGetComments(videoId);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full grid grid-flow-col">
      {/* Video player Container*/}
      <div className="ms-16 col-span-6 ">
        <iframe
          className="w-full rounded-lg shadow-lg"

          height="450"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer/>
      </div>
      <LiveChat/>
    </div>
  );
};

export default WatchPage;
