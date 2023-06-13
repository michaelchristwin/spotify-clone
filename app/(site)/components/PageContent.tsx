"use client";

import SongItem from "@/components/SongItem";
import useOnplay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

function PageContent({ songs }: PageContentProps) {
  const onPlay = useOnplay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs available.</div>;
  }
  return (
    <div className="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((item) => {
        return (
          <SongItem
            key={item.id}
            onClick={(id: string) => onPlay(id)}
            data={item}
          />
        );
      })}
    </div>
  );
}

export default PageContent;
