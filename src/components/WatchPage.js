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
    <div className=" px-8 relative top-24 w-full flex">
      {/* Video player Container*/}
      <div className=" w-7/12">
        <iframe
          className="w-full rounded-lg shadow-lg"

          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <CommentsContainer/>
      </div>
      <LiveChat/>
    </div>
  );
};

export default WatchPage;
