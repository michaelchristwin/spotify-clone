import { Song } from "@/types";
interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

function PlayerContent({ song, songUrl }: PlayerContentProps) {
  return <div>Player Content</div>;
}

export default PlayerContent;
