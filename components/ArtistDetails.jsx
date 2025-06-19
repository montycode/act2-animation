"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ArtistDetails({ coverImage, songTitle, artistName }) {
  return (
    <div className="mt-8 flex flex-col items-center text-center text-white">
      <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
        <AvatarImage src={coverImage} alt={`${artistName} - ${songTitle}`} />
        <AvatarFallback>{artistName.charAt(0) ?? "AM"} </AvatarFallback>
      </Avatar>
      <h2 className="mt-4 text-xl font-semibold">{songTitle}</h2>
      <p className="text-sm text-gray-300">{artistName}</p>
    </div>
  );
}
