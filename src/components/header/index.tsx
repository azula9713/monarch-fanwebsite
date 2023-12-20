import { Bars3Icon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

import { navPaths } from "../../constants/Navigation";
import Logo from "../common/Logo";
import ConnectedButton from "./ConnectedButton";
import LastTitanAppearance from "./LastTitanAppearance";

function Header() {
  return (
    <nav className="flex items-center justify-between w-full lg:sticky lg:top-0 md:left-0 lg:right-0 bg-monarch text-white px-4 py-2 lg:py-4 shadow-md z-50">
      <div className="w-full flex items-center justify-start lg:hidden">
        <NavLink to="/" className="cursor-pointer">
          <Logo isInverted={true} size="sm" />
        </NavLink>
      </div>
      <div className="lg:hidden">
        <Bars3Icon className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* tablet and upwards */}
      <div className="hidden w-full lg:flex items-center justify-center">
        <div className="w-full flex items-center justify-start space-x-2">
          <ConnectedButton />
          <LastTitanAppearance />
        </div>
        <div className="w-full flex items-center justify-center">
          <NavLink to="/" className="cursor-pointer">
            <Logo isInverted={true} size="md" />
          </NavLink>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="flex space-x-4 items-center justify-end w-full">
            {navPaths.map((path) => (
              <li key={path.name}>
                <NavLink
                  to={path.path}
                  className="text-lg md:text-xl hover:text-monarch hover:underline transition-all duration-300 ease-in-out"
                >
                  {path.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
