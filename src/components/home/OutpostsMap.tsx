import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import worldMapJSON from "../../data/features.json";
import outpostsJSON from "../../data/outposts.json";
import CustomMarker from "../custom/CustomMarker";

function OutpostsMap() {
  return (
    <div className="w-full lg:w-[66%] lg:h-[800px] h-full lg:flex lg:items-center lg:justify-start border-2 border-monarchPrimary rounded-lg bg-black bg-opacity-25">
      <ComposableMap projection="geoEqualEarth" className="w-full h-full">
        <ZoomableGroup center={[0, 0]} zoom={1.1}>
          <Geographies geography={worldMapJSON}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={-1}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                  {outpostsJSON.map((outpost) => (
                    <CustomMarker outpost={outpost} key={outpost.location} />
                  ))}
                </>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default OutpostsMap;
