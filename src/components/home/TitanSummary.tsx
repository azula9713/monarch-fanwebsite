import { useEffect, useState } from "react";

import { IBaseTitan } from "../../interfaces/ITitan";
import { useSelectedOutpostStore } from "../../store";
import { DataField, WindowHeader } from "../common";
import { MonarchFolder } from "../custom";

import TitansData from "../../data/titans.json";

export default function TitanSummary() {
  const selectedOutpost = useSelectedOutpostStore(
    (state) => state.selectedOutpost
  );

  const placeHolderImage = "/Monarch-placeholder.jpg";

  const [titan, setTitan] = useState<IBaseTitan>({} as IBaseTitan);

  const getTitanImage = () => {
    let titanImage = placeHolderImage;
    if (titan && titan.images.length > 0 && titan.images[0] !== "") {
      titanImage = titan.images[0];
    }

    return titanImage;
  };

  useEffect(() => {
    if (selectedOutpost) {
      const titan = TitansData.find(
        (titan) => titan.outpostId === selectedOutpost.id
      );
      if (titan) {
        setTitan(titan);
      } else {
        setTitan({} as IBaseTitan);
      }
    }
  }, [selectedOutpost]);

  if (selectedOutpost === null) {
    return (
      <div className="w-full lg:w-[33%] h-full lg:flex lg:items-start lg:justify-center px-1 md:px-2 lg:px-4">
        <div className="w-full h-full bg-black bg-opacity-25 rounded-lg border-2 border-monarchPrimary">
          <WindowHeader
            title="No Outpost Selected"
            logoIsInverted
            logoSize="xs"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[33%] lg:h-[800px] h-full px-1 md:px-2 lg:px-4 bg-black bg-opacity-25 rounded-lg border-2 border-monarchPrimary">
      <WindowHeader
        title={`${selectedOutpost.name} | ${selectedOutpost.location}`}
        logoIsInverted
        logoSize="xs"
        closeBtnAction={() => {
          useSelectedOutpostStore.setState({ selectedOutpost: null });
        }}
      />
      {titan.name && (
        <div className="flex flex-col items-start justify-center space-y-2 p-2">
          {/* image */}
          <div className="w-full h-[200px] lg:h-[350px] bg-monarchSecondary">
            <img
              src={getTitanImage()}
              alt={selectedOutpost.name}
              className="w-full h-full object-cover"
              style={{
                filter: titan ? "none" : "grayscale(1)",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="bg-monarchSecondary xxs:text-xl md:text-3xl font-oxanium text-white uppercase font-bold tracking-wider px-2 w-full">
            Titan Statistics
          </div>
          <div className="flex flex-col items-start justify-center space-y-2 p-2 font-oxanium">
            <DataField propTitle="Monarch Designation" propValue={titan.name} />
            <DataField
              propTitle="Classification"
              propValue={titan.classification}
            />
            <DataField propTitle="Species" propValue={titan.species} />
            <DataField propTitle="Height" propValue={titan.height} />
            {titan.tail !== null && (
              <DataField propTitle="Tail" propValue={titan.tail} />
            )}
            {titan.wingspan !== null && (
              <DataField propTitle="Wingspan" propValue={titan.wingspan} />
            )}
            <DataField
              propTitle="Behaviour"
              propValue={titan.behavior}
              valueColor={
                titan.behavior === "Destroyer"
                  ? "red"
                  : titan.behavior === "Protector"
                  ? "green"
                  : "gray"
              }
            />
          </div>
          <div className="bg-monarchSecondary xxs:text-xl md:text-3xl font-oxanium text-white uppercase font-bold tracking-wider px-2 w-full">
            Classified Archives
          </div>
          <div className="flex items-start justify-center space-x-2 lg:space-x-4 px-2 font-oxanium w-full">
            <MonarchFolder icon="folder1" folderTitle="Details" />
            <MonarchFolder icon="folder1" folderTitle="Operations" />
            {titan.images.length > 0 && (
              <MonarchFolder icon="folder1" folderTitle="Gallery" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
