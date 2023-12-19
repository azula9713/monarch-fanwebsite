import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Title from "../common/Title";
import ShowGalleryItem from "../custom/ShowGalleryItem";

function ShowGallery() {
  const [shows, setShows] = useState([
    "https://4kwallpapers.com/images/walls/thumbs_3t/13192.jpg",
    "https://r4.wallpaperflare.com/wallpaper/753/208/979/godzilla-godzilla-2014-wallpaper-ee6612133a8f97fcb4cfe4320c76fcfb.jpg",
    "https://images7.alphacoders.com/113/1138319.jpg",
    "https://images2.alphacoders.com/100/1001350.jpg",
    "https://i.redd.it/3gxlgccrjim61.jpg",
  ]);

  const [showData, setShowData] = useState([
    {
      id: 1,
      title: "Monarch Legacy of Monsters",
      description:
        "Set after the battle between Godzilla and the Titans, revealing that monsters are real, follows one family's journey to uncover its buried secrets and a legacy linking them to Monarch.",
    },
    {
      id: 2,
      title: "Godzilla (2014)",
      description:
        "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
    },
    {
      id: 3,
      title: "Kong: Skull Island",
      description:
        "After the Vietnam war, a team of scientists explores an uncharted island in the Pacific, venturing into the domain of the mighty Kong, and must fight to escape a primal Eden.",
    },
    {
      id: 4,
      title: "Godzilla: King of the Monsters",
      description:
        "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
    },
    {
      id: 5,
      title: "Godzilla vs. Kong",
      description:
        "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
    },
  ]);

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
