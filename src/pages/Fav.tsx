import { TbPlayerPlayFilled } from "react-icons/tb";
import { usePlayer } from "../store/UsePlayer";

export default function Home() {
  const player = usePlayer();

  const filteredData = player.favorites.filter(
    (item) =>
      item.name.toLowerCase().includes(player.search.toLowerCase()) ||
      item.auth.toLowerCase().includes(player.search.toLowerCase())
  );

  return (
    <div className="w-full pt-24 pl-52 pr-2 ">
      <div className="mb-25 grid grid-cols-6 gap-4 justify-between rounded-lg shadow-md p-5">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className=" group flex flex-col items-center w-40 shadow p-2 rounded-xl bg-gray-200 relative transition-transform hover:scale-105"
            onClick={() => {
              player.setSelectedMusic(item);
            }}
          >
            <img
              src={`img/${item.img}`}
              alt=""
              className="w-32 h-32 rounded-xl mb-4"
            />
            <p>{item.name}</p>
            <p>{item.auth}</p>
            <div className="bg-blue-400 w-max h-max text-white rounded-full p-2 hover:bg-blue-500 transition-colors absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <TbPlayerPlayFilled />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
