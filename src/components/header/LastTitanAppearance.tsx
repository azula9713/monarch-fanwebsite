import { ClockLoader } from "react-spinners";

function LastTitanAppearance() {
  return (
    <div className="flex items-center justify-start rounded-md border-monarchPrimary border px-1">
      <ClockLoader color="#22b4be" size={20} />
      <div className="flex items-center justify-center text-white p-2">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        <div className="uppercase text-2xs text-monarch font-bold">
          <span className="text-2xs text-gray-400">0 y 4 m 7 d</span>
        </div>
      </div>
    </div>
  );
}

export default LastTitanAppearance;
