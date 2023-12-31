import { Marker } from "react-simple-maps";

import IOutpost from "../../interfaces/IOutpost";
import { useSelectedOutpostStore } from "../../store";

import { lightGray, monarchPrimary } from "../../constants/Colors";

type Props = {
  outpost: IOutpost;
};

function CustomMarker({ outpost }: Readonly<Props>) {
  const [selectedOutpost, setSelectedOutpost] = useSelectedOutpostStore(
    (state) => [state.selectedOutpost, state.setSelectedOutpost]
  );

  const handleClick = (outpost: IOutpost) => {
    setSelectedOutpost(outpost);
  };

  return (
    <Marker
      coordinates={[outpost.coordinates.lng, outpost.coordinates.lat]}
      key={outpost.location}
      onClick={() => {
        handleClick(outpost);
      }}
    >
      <svg
        className="cursor-pointer"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        stroke={selectedOutpost?.id === outpost.id ? monarchPrimary : lightGray}
        key={outpost.location}
      >
        <path d="M12 5.32l6 3.37v6.62l-6 3.37-6-3.37V8.69l6-3.37m9 11.18c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94z" />
      </svg>

      <text
        textAnchor="middle"
        x={outpost.markerOffset}
        y={-1}
        style={{
          fontFamily: "Oxanium",
          fill: selectedOutpost?.id === outpost.id ? monarchPrimary : "white",
          fontSize: "10px",
        }}
      >
        {outpost.name}
      </text>
    </Marker>
  );
}

export default CustomMarker;
