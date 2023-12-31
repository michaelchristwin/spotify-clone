"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthmodal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnplay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

function Library({ songs }: LibraryProps) {
  const authModal = useAuthmodal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onPlay = useOnplay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //Check for subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3">
        {songs.map((item) => {
          return (
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
