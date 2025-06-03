import { LuGithub } from "react-icons/lu";
import { usePlayer } from "../store/UsePlayer";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
export default function Header() {
  const player = usePlayer();
  const location = useLocation();

  useEffect(() => {
    player.setSearch("");
  }, [location.pathname]);

  return (
    <div>
      <div className="z-50	 ml-[200px] w-[calc(100%-200px)]  p-5 fixed flex items-center justify-between bg-white shadow-md">
        <div>
          <input
            onChange={(e) => {
              player.setSearch(e.target.value);
            }}
            value={player.search}
            type="text"
            placeholder="Search"
            className="w-100 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            aria-label="Search"
          />
        </div>
        <div className="border border-gray-300 p-2 rounded-3xl">
          <LuGithub />
        </div>
      </div>
    </div>
  );
}
