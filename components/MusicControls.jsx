"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MusicControls({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
}) {
  const buttons = [
    {
      icon: "prev",
      label: "Anterior",
      onClick: onPrev,
    },
    {
      icon: isPlaying ? "pause" : "play",
      label: isPlaying ? "Pausar" : "Reproducir",
      isMain: true,
      onClick: onTogglePlay,
    },
    {
      icon: "next",
      label: "Siguiente",
      onClick: onNext,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      {buttons.map(({ icon, label, onClick, isMain }) => (
        <Tooltip key={icon}>
          <TooltipTrigger asChild>
            {isMain ? (
              <motion.div
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  onClick={onClick}
                  size="icon"
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xl font-bold shadow-lg"
                >
                  {icon === "play" ? <Play /> : <Pause />}
                </Button>
              </motion.div>
            ) : (
              <Button
                onClick={onClick}
                variant="ghost"
                size="icon"
                className="text-white text-2xl"
              >
                {icon === "prev" ? <SkipBack /> : <SkipForward />}
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
