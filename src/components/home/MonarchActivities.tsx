import { useEffect, useState } from "react";

import IActivity, { IRawData } from "../../interfaces/IActivity";
import Title from "../common/Title";
import FullSizeImageViewer from "../custom/FullSizeImageViewer";
import MonarchActivity from "./MonarchActivity";

function MonarchActivities() {
  const rssURL = import.meta.env.VITE_MONARCH_RSS_URL;

  const [rawData, setRawData] = useState<IRawData>({} as IRawData);
  const [activityData, setActivityData] = useState<IActivity[]>([]);
  const [imageViewerIsOpen, setImageViewerIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchRSS = async () => {
      const response = await fetch(rssURL);
      const data = await response.json();

      setRawData(data);
    };

    fetchRSS();
  }, [rssURL]);

  useEffect(() => {
    if (rawData.items) {
      const parseData = () => {
        const items = rawData.items;

        const sanitizedData: IActivity[] = [];

        items.forEach((item) => {
          const authorName = item.authors[0].name;

          const sanitizedItem = {
            id: item.id,
            //   replace all instances of author name: in title with empty string
            title: item.title.replace(`${authorName}: `, ""),
            context: item.content_text,
            date_published: item.date_published,
            url: item.url,
            image: item.image ? item.image : "",
            author: item.authors[0].name,
          };

          sanitizedData.push(sanitizedItem);
        });

        setActivityData(sanitizedData.slice(0, 6));
      };

      parseData();
    }
  }, [rawData]);

  return (
    <div className="w-full flex flex-col items-start justify-start px-2 lg:px-8 py-2 lg:py-4 xxs:space-y-4 sm:space-y-0">
      <Title title="Monarch Tweets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {activityData.map((activity) => (
          <MonarchActivity
            activity={activity}
            key={activity.id}
            setSelectedImage={setSelectedImage}
            setImageViewerIsOpen={setImageViewerIsOpen}
          />
        ))}
      </div>

      {imageViewerIsOpen && (
        <FullSizeImageViewer
          imageUrl={selectedImage}
          closeImageViewer={() => setImageViewerIsOpen(false)}
        />
      )}
    </div>
  );
}

export default MonarchActivities;
