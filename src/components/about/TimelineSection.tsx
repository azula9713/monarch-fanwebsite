type Props = {
  textSide: "left" | "right";
  title: string;
  year: string;
  description: string;
};

function TimelineSection({
  textSide: side,
  title,
  year,
  description,
}: Readonly<Props>) {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full ${
        side === "right" && "flex-row-reverse"
      }`}
    >
      <div className="order-1 w-5/12" />
      <div className={`order-1 w-5/12 px-1 py-4 text-${side}`}>
        <p className="mb-2 text-xl text-monarch">{year}</p>
        <h4 className="mb-2 font-bold text-lg md:text-2xl flex-wrap">
          {title}
        </h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-oxanium">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TimelineSection;
