import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { usePlayer } from "../store/UsePlayer";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function Player() {
  const player = usePlayer();

  if (!player.selectedMusic) return null;

  return (
    <div className="z-50 bottom-0 bg-white fixed  w-[calc(100%-200px)] ml-[200px] flex   items-center justify-between shadow-lg">
      <div className="bg-white w-[calc(100%-800px)]  flex items-center justify-start gap-10 p-1 ">
        <img
          src={`img/${player.selectedMusic?.img}`}
          className="w-20 h-20 rounded-md"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{player.selectedMusic?.name}</p>
          <p className="text-sm text-gray-600">{player.selectedMusic?.auth}</p>
        </div>
        <div>
          {player.favorites.some(
            (item) => item.id === player.selectedMusic?.id
          ) ? (
            <HiHeart
              className="text-red-500"
              onClick={() => {
                if (player.selectedMusic) {
                  player.removeFromFavorites(player.selectedMusic);
                }
              }}
            />
          ) : (
            <HiOutlineHeart
              className="text-gray-500"
              onClick={() => {
                if (player.selectedMusic) {
                  player.addToFavorites(player.selectedMusic);
                }
              }}
            />
          )}
        </div>
      </div>
      <div className=" w-[calc(100%-300px)] ">
        <AudioPlayer
          autoPlay
          src={`song/${player.selectedMusic?.path}`}
          style={{ boxShadow: "none" }}
        />
      </div>
    </div>
  );
}
