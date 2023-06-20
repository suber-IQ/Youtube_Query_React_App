import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

interface Video {
      videoId: string;
      thumbnails: { url: string }[];
      lengthSeconds?: number;
      title: string;
      descriptionSnippet?: string;
      author?: {
        avatar: { url: string }[];
        title: string;
        badges: { type: string }[];
      };
      stats?: {
        views: number;
      };
      publishedTimeText?: string;
}

interface SearchResultProps {
  contents: {
    type: string;
    video: Video;
    // Add other properties of the content
  }[];
}

const SearchResult: React.FC = () => {
  const [result, setResult] = useState<SearchResultProps["contents"]>();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root")?.classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res: SearchResultProps) => {
      // console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item?.video;
            return (
              <SearchResultVideoCard
                key={video?.videoId}
                video={video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
