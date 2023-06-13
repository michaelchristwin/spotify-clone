"use client";

import useGetSongsById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

function Player() {
  const player = usePlayer();
  const { song } = useGetSongsById(player.activeid);
  const songurl = useLoadSongUrl(song!);

  if (!song || !songurl || !player.activeid) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songurl} song={song} songUrl={songurl} />
    </div>
  );
}

export default Player;
