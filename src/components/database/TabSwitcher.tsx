import { useState } from "react";
import TabButton from "../common/TabButton";

function TabSwitcher() {
  const [selectedTab, setSelectedTab] = useState("titans"); // ['titans', 'personnel'
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-center overflow-hidden w-full m-4">
        <TabButton
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabName="titans"
          tabLabel="Titans"
        />
        <TabButton
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabName="personnel"
          tabLabel="Personnel"
        />
      </div>
    </div>
  );
}

export default TabSwitcher;
