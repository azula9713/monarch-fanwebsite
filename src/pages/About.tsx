import AboutSection from "../components/about/AboutSection";
import Timeline from "../components/about/Timeline";
import BaseLayout from "../layouts/BaseLayout";

function About() {
  return (
    <BaseLayout>
      <div className="w-full flex flex-col items-center justify-start px-6 py-4 max-w-[1000px]">
        <AboutSection
          sectionTitle="About Monarch"
          sectionContent="Welcome to the not so official Monarch Fan Website, your gateway to the world of Titans and the enigmatic organization studying them. Established in 1946, Monarch stands as a global initiative dedicated to understanding, researching, and safeguarding the coexistence between humanity and the colossal Titans."
        />
        <AboutSection
          sectionTitle="Our Mission"
          sectionContent="Monarch’s mission is to discover the origin and purpose of the Titans, study their secret habitats and behaviors, and protect the world from the god-sized monsters. We strive to answer the mysteries of the Titans, fulfilling a mission our founders dedicated their lives to."
        />
        <AboutSection
          sectionTitle="Our History"
          sectionContent="Monarch was founded in the aftermath of World War II, when William Randa, Keiko Miura and Lee Shaw, discovered evidence of ancient Titans across different cultures and civilizations. Recognizing the need for a specialized organization to study these creatures, Monarch was established with a global network of researchers, scientists, and explorers."
        />
        <Timeline />
      </div>
    </BaseLayout>
  );
}

export default About;
