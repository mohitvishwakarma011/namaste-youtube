import React from "react";

const SearchCard = ({ data }) => {
  const { videoId } = data.id;
  const { channelTitle, description, title, thumbnails, liveBroadcastContent } =
    data.snippet;

  return (
    <div className="flex mx-4 my-3">
      <div className="w-96 h-64">
        <img
          className="rounded-xl h-64 w-96 object-cover"
          src={thumbnails.high.url}
          alt="Thumbnail"
        ></img>
      </div>
      <div className="ms-3">
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm text-gray-600 my-3">{channelTitle}</p>
        <p className="text-sm text-gray-600 my-3">{description}</p>
        {liveBroadcastContent == "live" ? (
          <p className="bg-red-600 text-sm font-bold text-white w-8 text-center rounded-sm">
            Live
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchCard;
