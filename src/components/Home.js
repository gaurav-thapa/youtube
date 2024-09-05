import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import { GET_YOUTUBE_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { mostPopularVideosActions } from "../utils/store/mostPopularVideosSlice";
export default function Home() {
  const mostPopularVideos = useSelector((store) => store.mostPopularVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getVideos() {
      try {
        const response = await fetch(GET_YOUTUBE_VIDEOS);
        if (!response.ok) {
          console.error("could not fetch videos");
          return;
        }
        const resData = await response.json();
        dispatch(mostPopularVideosActions.addVideos(resData.items));
      } catch (error) {
        console.log(error);
      }
    }
    if (!mostPopularVideos) {
      getVideos();
    }
  }, [mostPopularVideos]);
  // console.log('mpv - ', mostPopularVideos);
  return (
    <div className="flex overflow-hidden">
      <Navbar />
      <div className="overflow-y-auto p-4 dark:bg-black text-white">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {mostPopularVideos &&
            mostPopularVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
}
