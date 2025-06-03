import { MdOutlineFavorite } from "react-icons/md";

import { FaMusic } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
export default function Sidebar() {
  const location = useLocation();

  return (
    <div>
      <div className="shadow w-50 h-screen fixed p-5 ">
        <div className="text-sm text-gray-400 font-light p-2">MENU</div>
        <Link
          to="/"
          className={`flex items-center gap-2 hover:bg-gray-300 text-gray-600 p-2 rounded-md ${
            location.pathname === "/" ? "bg-gray-300" : ""
          }`}
        >
          <FaMusic /> <span>Explore</span>
        </Link>
        <div className="text-sm text-gray-400 font-light p-2">LIBRARY</div>
        <Link
          to="/fav"
          className={`flex items-center gap-2 hover:bg-gray-300 text-gray-600 p-2 rounded-md ${
            location.pathname === "/fav" ? "bg-gray-300" : ""
          }`}
        >
          <MdOutlineFavorite /> <span>Favorites</span>
        </Link>
      </div>
    </div>
  );
}
