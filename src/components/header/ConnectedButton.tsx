import { useEffect, useState } from "react";

import { ScaleLoader } from "react-spinners";

function ConnectedButton() {
  // generate numbers betwwen 1-99 and add 0 if less than 10 and change every 3 seconds

  const [randomDatalink, setRandomDatalink] = useState<string>("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const randomDatalink =
        randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`;
      setRandomDatalink(randomDatalink);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-start rounded-md border-monarchPrimary border">
      <ScaleLoader color="#22b4be" width={4} height={16} />
      <div className="flex items-center justify-center text-white p-2">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        <div className="uppercase text-2xs text-monarch font-bold">
          Datalink{" "}
          <span className="text-2xs text-gray-400"> {randomDatalink}</span>
        </div>
      </div>
    </div>
  );
}

export default ConnectedButton;
