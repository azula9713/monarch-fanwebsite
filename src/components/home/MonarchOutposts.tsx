import { Title } from "../common";
import OutpostsMap from "./OutpostsMap";
import TitanSummary from "./TitanSummary";

function MonarchOutposts() {
  return (
    <div className="w-full h-full px-2 lg:px-8 pb-2 pt-6 lg:pb-4 lg:pt-12">
      <Title title="Monarch Outposts" />
      <div className="flex flex-col items-start justify-center lg:flex-row lg:justify-between xxs:space-y-4 sm:space-y-0 py-2 lg:py-4">
        <OutpostsMap />
        <TitanSummary />
      </div>
    </div>
  );
}

export default MonarchOutposts;
