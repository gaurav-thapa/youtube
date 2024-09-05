import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Suggestions from "./Suggestions";
import { useEffect, useState } from "react";
import { getVideoInfoURL } from "../../utils/constants";

export default function Watch() {
  const { id } = useParams();
  const mostPopularVideos = useSelector((store) => store.mostPopularVideos);
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    async function getVideoInfo() {
      const res = await fetch(getVideoInfoURL(id));
      const data = await res.json();
      setCurrentVideo(data.items[0]);
      // console.log(data.items[0]);
    }
    getVideoInfo();
    }, [id]);
  return (
    <div className="p-10 dark:bg-black dark:text-white px-14 pt-5 flex flex-col lg:flex-row gap-4 overflow-auto">
      <div className="basis-8/12">
        <iframe
          className="w-full aspect-video rounded-3xl"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {currentVideo && (
          <div className="">
            <div className="font-bold text-xl my-2">
              {currentVideo.snippet.title}
            </div>
            <div>
              <div className="flex items-center justify-evenly text-nowrap m-4">
              <div>{currentVideo.snippet.channelTitle}</div>
                <div className="bg-gray-200 p-2 px-4 rounded-3xl dark:bg-gray-800">{parseInt(currentVideo.statistics.viewCount).toLocaleString()} Views</div>
                <div className="bg-gray-200 p-2 px-4 rounded-3xl dark:bg-gray-800">
                  <i className="bi bi-hand-thumbs-up"></i>{" "}
                  {parseInt(currentVideo.statistics.likeCount).toLocaleString()}
                </div>
                <div className="bg-gray-200 dark:bg-gray-800 p-2 px-4 rounded-3xl">Uploaded - {new Date(currentVideo.snippet.publishedAt).toDateString()}</div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-xl">
              <div className="line-clamp-3 text-sm">
                {currentVideo.snippet.description}
              </div>
            </div>
            <div className="h-10"></div>
          </div>
        )}
      </div>
      <div className="basis-4/12 ">
        <Suggestions mostPopularVideos={mostPopularVideos} />
      </div>
    </div>
  );
}
