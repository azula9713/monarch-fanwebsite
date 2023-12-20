import { Title } from "../common";
import TimelineSection from "./TimelineSection";

import MUTAImage from "../../assets/images/MUTA.png";
import TimelineData from "../../data/monarchTimeline.json";

function Timeline() {
  return (
    <div className="w-full items-center justify-center flex flex-col mt-12">
      <Title title="Monarch Timeline" />
      <section className="w-full items-center justify-center flex flex-col text-white mt-4">
        <div className="mx-auto flex flex-col items-start md:flex-row w-full sticky">
          <div className="w-full sticky">
            <div className="relative flex-wrap overflow-hidden h-full w-full">
              <div className="absolute h-full left-1/2 right-1/2 border-2 border-monarchPrimary rounded-md" />
              {TimelineData.map((data) => {
                return (
                  <TimelineSection
                    key={data.id}
                    year={data.year}
                    title={data.title}
                    description={data.description}
                    textSide={data.textSide as "left" | "right"}
                  />
                );
              })}
            </div>
            <img className="mx-auto " src={MUTAImage} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
