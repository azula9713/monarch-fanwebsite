import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

import { navPaths } from "../../constants/Navigation";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
};

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  pathname,
}: Readonly<Props>) {
  return (
    <motion.div
      className="w-full lg:hidden fixed top-0 bottom-0 right-0 z-50 flex items-start justify-start"
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? "0%" : "100%" }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay  */}
      <div className="w-1/5 md:w-2/5 lg:w-3/5 min-w-[calc(100%-300px)] h-screen bg-black bg-opacity-50" />
      <div className="w-4/5 md:w-3/5 lg:w-2/5 max-w-[300px] h-full bg-monarchSecondary text-teal-500 overflow-x-hidden min-h-screen flex flex-col items-center justify-start z-40 p-4">
        <div className="w-full flex items-center justify-end p-4">
          <XMarkIcon
            className="w-6 h-6 cursor-pointer text-white"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="w-full p-4">
          <ul className="flex flex-col items-start justify-end w-full space-y-8">
            {navPaths.map((path) => (
              <li
                key={path.name}
                className={`text-lg md:text-xl hover:text-monarch hover:underline transition-all duration-300 ease-in-out
                ${pathname === path.path ? "text-monarch" : "text-white"}
                `}
              >
                <NavLink to={path.path}>{path.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
