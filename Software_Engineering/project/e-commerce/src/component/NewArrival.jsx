import React from "react";
import playstation5 from "../assets/image/playstation5.png";
import womenCollections from "../assets/image/new-arrival-woman.jpg";
import perfume from "../assets/image/gucci-perfume.png";
import speakers from "../assets/image/speakers.png";
import Card from "./NewArrivalCard";

const NewArrival = () => {
  return (
    <div className="my-10 w-full">
      {/* Featured Section */}
      <div className="flex items-center gap-x-5">
        <div className="h-[2.5rem] w-[1.25rem] bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-semibold text-[16px]">
          Featured
        </span>
      </div>
      <h1 className="font-semibold text-[2.25rem]">New Arrival</h1>
      {/* New Arrival Section */}
      <div className="min-h-[37.5rem] grid grid-cols-2 gap-10 w-full gap-x-10 mt-15">
        {/* Card 1 */}
          <Card imgsrc={playstation5} title={"PlayStaion 5"} description={"Black and White of the PS5 coming out on sale"} />
        {/* Card 2 */}
        <div className="grid grid-rows-2  h-full gap-y-10">

            <Card imgsrc={womenCollections} title={"Women's Collection"} description={"Featured women collections that give you another vibe"} flip={"scale-x-[-1]"}/>
          <div className="grid grid-cols-2 gap-x-10">
            <Card imgsrc={speakers} title={"Speakers"} description={"Amazon wireless speakers"} />
            <Card imgsrc={perfume} title={"Perfume"} description={"GUCCI INTENSE OUD EDP"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
