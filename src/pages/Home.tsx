import {
  MonarchActivities,
  MonarchOutposts,
  ShowGallery,
} from "../components/home";
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
