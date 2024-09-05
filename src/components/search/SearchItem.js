import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ vid }) => {
  const navigate = useNavigate();
  const id = vid.id.videoId;
  const data = vid.snippet
  const { title, description, thumbnails, channelTitle } = data;
  const { url } = thumbnails.default;
  const imageURL = url.replace(
    "default.jpg",
    "hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPeNx9hiSD07HEhVM4SqAxgSB2nQ"
  );

  const onWatchHandler = () => {
    navigate('/watch/'+id);
  }
  return (
    <div onClick={onWatchHandler} className="hover:cursor-pointer flex flex-col md:flex-row gap-4">
      <div className="basis-2/5">
        <img src={imageURL} className=" rounded-3xl text-nowrap" alt={title} />
      </div>
      <div className="basis-3/5">
        <div className="text-lg line-clamp-2" dangerouslySetInnerHTML={{__html:title}}></div>
        <div className="text-xs my-4">{channelTitle}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export default SearchItem;
// https://i.ytimg.com/vi/9VKVw7eTb5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPeNx9hiSD07HEhVM4SqAxgSB2nQ
// https://i.ytimg.com/vi/9VKVw7eTb5g/hqdefault.jpg
