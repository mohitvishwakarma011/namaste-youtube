import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useGetComments from "../hooks/useGetComments";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const commentsData = useGetComments(videoId);

  console.log(commentsData);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full grid grid-flow-col">
      <div className="ms-16 col-span-6 shadow-lg">
        <iframe
          className="w-full rounded-lg "

          height="450"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ms-5 me-16 col-span-4 rounded-lg shadow-lg">
        SideVideoContainer
      </div>
    </div>
  );
};

export default WatchPage;
