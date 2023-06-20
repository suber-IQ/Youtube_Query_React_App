import { useContext, useEffect } from "react"
import LeftNav from "./LeftNav"
import { Context } from "../context/contextApi"
import VideoCard from "./VideoCard";
import React from "react";

const Feed = () => {
  const { loading, searchResults} = useContext(Context);

  useEffect(() => {
      document.getElementById("root")?.classList.remove("custom-h");
  },[])
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {
            !loading && searchResults.map((item,index: number) => {
              if(item.type !== "video") return false;
              return (
                <React.Fragment key={index + 1}>
                <VideoCard 
                video={item?.video}
                />
                </React.Fragment>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Feed