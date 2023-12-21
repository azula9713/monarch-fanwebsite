import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

import { Title } from "../common";
import { ShowGalleryItem } from "../custom";

import { rawShowData, showPosters } from "../../constants/Shows";

import "../../assets/css/ShowGallery.css";

function ShowGallery() {
  const [shows, setShows] = useState(showPosters);

  const [showData, setShowData] = useState(rawShowData);

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      setShows((prevShows) => {
        const lastShow = prevShows[prevShows.length - 1];
        return [lastShow, ...prevShows.slice(0, prevShows.length - 1)];
      });

      setShowData((prevShowData) => {
        const lastShowData = prevShowData[prevShowData.length - 1];
        return [
          lastShowData,
          ...prevShowData.slice(0, prevShowData.length - 1),
        ];
      });
    } else {
      setShows((prevShows) => {
        const firstShow = prevShows[0];
        return [...prevShows.slice(1), firstShow];
      });

      setShowData((prevShowData) => {
        const firstShowData = prevShowData[0];
        return [...prevShowData.slice(1), firstShowData];
      });
    }
  };

  return (
    <div className="w-full px-2 lg:px-8 py-2 lg:py-4 xxs:space-y-4">
      <Title title="Get into Monsterverse" />
      <div className="h-[95dvh] grid place-items-start overflow-hidden">
        <div className="relative w-full h-full shadow-lg">
          <ul className="slider">
            {shows.map((show, index) => (
              <ShowGalleryItem
                image={show}
                key={show}
                showData={showData[index]}
              />
            ))}
          </ul>
          <nav className="absolute bottom-[6rem] lg:bottom-[8rem] left-1/2 z-10 select-none transform translate-x-[-50%]">
            <ArrowLeftCircleIcon
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => handleSlide("left")}
            />
            <ArrowRightCircleIcon
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => handleSlide("right")}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ShowGallery;
