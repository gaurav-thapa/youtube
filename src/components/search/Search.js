import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResultsURL } from "../../utils/constants";
import SearchItem from "./SearchItem";
import Navbar from "../navbar/Navbar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  // console.log(searchTerm);
  const [searchData, setSearchData] = useState([]);

  const getData = async () => {
    const res = await fetch(getSearchResultsURL(searchTerm));
    const data = await res.json();
    // console.log(data);
    const videos = data.items.filter(
      (item) => item.id.kind === "youtube#video"
    );
    setSearchData(videos);
  };
  useEffect(() => {
    getData();
  }, [searchTerm]);
  return (
    <div className="flex overflow-hidden">
      <Navbar />
      <div className="overflow-y-auto px-4 md:px-16 py-10 dark:bg-black dark:text-white">
        <div className="w-full flex flex-col gap-6 md:gap-3">
          {searchData.map((vid) => (
            <SearchItem key={vid.id.videoId} vid={vid} />
          ))}
        </div>
      </div>
    </div>
  );
}
