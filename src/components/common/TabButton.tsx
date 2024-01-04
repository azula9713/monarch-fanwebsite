type Props = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  tabName: string;
  tabLabel: string;
};

function TabButton({
  selectedTab,
  setSelectedTab,
  tabName,
  tabLabel,
}: Readonly<Props>) {
  return (
    <button
      className={`px-4 py-2 max-w-[200px] min-w-[120px] text-white border-2 border-monarchPrimary font-oxanium font-semibold ${
        selectedTab === tabName ? "bg-monarchPrimary" : ""
      }`}
      onClick={() => setSelectedTab(tabName)}
    >
      {tabLabel}
    </button>
  );
}

export default TabButton;
