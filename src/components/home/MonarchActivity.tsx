import IActivity from "../../interfaces/IActivity";

type Props = {
  activity: IActivity;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  setImageViewerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MonarchActivity({
  activity,
  setSelectedImage,
  setImageViewerIsOpen,
}: Readonly<Props>) {
  const convertDate = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  };

  return (
    <div className="w-full flex flex-col items-start justify-start my-2 font-oxanium border-2 border-monarchPrimary rounded-lg p-2 relative">
      <div className="w-full flex flex-col md:flex-row">
        <h4 className="text-white md:text-lg lg:text-xl xl:text-2xl lg:w-[66%]">
          {activity.title}
        </h4>
        {activity.image && (
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full md:w-[400px] lg:w-[33%] object-cover rounded-lg mt-2 mb-3"
            onClick={() => {
              setSelectedImage(activity.image as string);
              setImageViewerIsOpen(true);
            }}
            onKeyDown={() => {
              setSelectedImage(activity.image as string);
              setImageViewerIsOpen(true);
            }}
          />
        )}
      </div>
      <p className="text-monarch text-xs mt-1 absolute bottom-0">
        {convertDate(activity.date_published)} |{" "}
        <a
          href={activity.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {activity.author}
        </a>
      </p>
    </div>
  );
}

export default MonarchActivity;
