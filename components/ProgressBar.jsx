"use client";

import { Slider } from "@/components/ui/slider";

export default function ProgressBar({
  progress = 0,
  maxProgress = 100,
  onSeek,
  currentTime = "00:00",
  duration = "00:00",
}) {
  return (
    <div className="w-11/12 sm:w-3/4 mt-4">
      <Slider
        value={[progress]}
        max={maxProgress}
        step={1}
        onValueChange={([val]) => onSeek(val)}
        className="rounded-full"
      />
      <div className="flex justify-between text-xs text-white mt-1">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}
