import { useEffect, useRef, useState } from "react";

import ArtistDetails from "@/components/ArtistDetails";
import ArtistInfo from "@/components/ArtistInfo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Cover from "@/public/img/concert-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import MediaControls from "./MediaControls";
import MusicControls from "@/components/MusicControls";
import ProgressBar from "@/components/ProgressBar";
import SongTabs from "./SongTabs";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function PlayerCard({ tracks = [] }) {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrack = tracks[currentTrackIndex];

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    if (audioRef.current && currentTrack?.audioSrc) {
      audioRef.current.src = currentTrack.audioSrc;
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error al reproducir:", err.message));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (tracks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#23002E]/90 to-[#001F3F]/95 text-white">
        <h1 className="text-2xl font-bold">No hay pistas disponibles</h1>
      </div>
    );
  }

  return (
    <>
      <TooltipProvider>
        <Card className="relative w-full min-h-screen bg-gradient-to-b from-[#23002E]/90 to-[#001F3F]/95 text-white flex flex-col items-center justify-between border-none overflow-hidden py-0 h-full rounded-none">
          <Image
            src={Cover}
            alt="Background"
            fill
            quality={90}
            priority
            className="object-cover z-0 opacity-30"
          />
          <div className="absolute top-4 left-4">
            <Link href="/test" passHref>
              <Button
                variant="ghost"
                size="icon"
                className="text-white text-2xl"
              >
                ←
              </Button>
            </Link>
          </div>
          <ArtistInfo info={currentTrack.artistInfo} />

          <div
            className="fixed bottom-0 inset-x-0 z-20 
                h-[calc(100vh-15vh)] 
                sm:h-[calc(100vh-30vh)] 
                lg:h-[calc(100vh-25vh)]"
          >
            <Card className="h-full w-full border-none bg-gradient-to-b from-[#23002E]/90 to-[#001F3F]/95 backdrop-blur-md p-4 rounded-2xl overflow-y-scroll flex items-center justify-center">
              <ArtistDetails
                coverImage={currentTrack.cover}
                songTitle={currentTrack.title}
                artistName={currentTrack.artist}
              />

              <SongTabs />

              <MediaControls />

              <ProgressBar
                progress={progress}
                maxProgress={100}
                onSeek={(value) => {
                  const audio = audioRef.current;
                  if (audio?.duration) {
                    audio.currentTime = (value / 100) * audio.duration;
                    setProgress(value);
                  }
                }}
                currentTime={formatTime(currentTime)}
                duration={formatTime(duration)}
              />

              <MusicControls
                isPlaying={isPlaying}
                onTogglePlay={togglePlay}
                onPrev={() => {
                  setCurrentTrackIndex((prev) =>
                    prev === 0 ? tracks.length - 1 : prev - 1
                  );
                }}
                onNext={() => {
                  setCurrentTrackIndex((prev) =>
                    prev === tracks.length - 1 ? 0 : prev + 1
                  );
                }}
              />
            </Card>
          </div>
        </Card>
      </TooltipProvider>
      <audio ref={audioRef} preload="auto">
        <track kind="captions" />
      </audio>
    </>
  );
}
