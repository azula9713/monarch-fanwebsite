import { Title } from "../common";

type Props = {
  sectionTitle: string;
  sectionContent: string;
};

function AboutSection({ sectionTitle, sectionContent }: Readonly<Props>) {
  return (
    <div className="w-full flex flex-col items-center my-4">
      <Title title={sectionTitle} />
      <p className="text-gray-400 text-justify leading-5 lg:text-lg font-oxanium mt-4">
        {sectionContent}
      </p>
    </div>
  );
}

export default AboutSection;
