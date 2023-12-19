import MonarchActivities from "../components/home/MonarchActivities";
import MonarchOutposts from "../components/home/MonarchOutposts";
import ShowGallery from "../components/home/ShowGallery";
import BaseLayout from "../layouts/BaseLayout";

function Home() {
  return (
    <BaseLayout>
      <MonarchOutposts />
      <ShowGallery />
      <MonarchActivities />
    </BaseLayout>
  );
}

export default Home;
