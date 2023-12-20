import React from "react";

import { AboutSection, Timeline } from "../components/about";
import BaseLayout from "../layouts/BaseLayout";

import AboutData from "../data/aboutData.json";

function About() {
  return (
    <BaseLayout>
      <div className="w-full flex flex-col items-center justify-start px-6 py-4 max-w-[1000px]">
        {AboutData.map((data) => {
          if (data.sectionTitle === "Our History") {
            return (
              <React.Fragment key={data.id}>
                <AboutSection
                  sectionTitle={data.sectionTitle}
                  sectionContent={data.sectionContent}
                />
                <Timeline />
              </React.Fragment>
            );
          } else {
            // Render other AboutSections
            return (
              <AboutSection
                key={data.id}
                sectionTitle={data.sectionTitle}
                sectionContent={data.sectionContent}
              />
            );
          }
        })}
      </div>
    </BaseLayout>
  );
}

export default About;
