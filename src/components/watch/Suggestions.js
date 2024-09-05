import React from "react";
import { useNavigate } from "react-router-dom";

const Suggestions = ({mostPopularVideos}) => {
  const navigate = useNavigate();
  const onClickHandler = (id)=>{
    navigate('/youtube/watch/'+id);
  }
  return (
    <>
      <div className="font-bold text-xl mb-3">Most Popular Videos</div>
      <div className="p-3 rounded-2xl border-2 dark:boder-gray-900 overflow-y-auto h-3/4">
        {mostPopularVideos &&
          mostPopularVideos.map((vid) => (
            <div onClick={()=>onClickHandler(vid.id)} className="hover:cursor-pointer flex gap-2 p-1" key={vid.id}>
              <div className="basis-1/6">
                <img
                className="min-w-28"
                  alt={vid.snippet.title}
                  src={vid.snippet.thumbnails.default.url}
                />
              </div>
              <div className="basis-5/6">
                <div className="line-clamp-2 font-bold text-sm">
                  {vid.snippet.title}
                </div>
                <div className="text-xs">{vid.snippet.channelTitle}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Suggestions;
