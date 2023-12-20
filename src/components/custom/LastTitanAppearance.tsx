import { ClockLoader } from "react-spinners";

type Props = {
  showDate?: boolean;
};

function LastTitanAppearance({ showDate = true }: Readonly<Props>) {
  const getCurrentDate = () => {
    // date format: 2021-09-01
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex items-center justify-start rounded-md border-monarchPrimary border px-1">
      <ClockLoader color="#22b4be" size={20} />
      <div className="flex items-center justify-center text-white p-2">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        <div className="uppercase text-2xs text-monarch font-bold">
          <span className="text-2xs text-gray-400">
            {showDate ? getCurrentDate() : "0 y 4 m 7 d"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LastTitanAppearance;
