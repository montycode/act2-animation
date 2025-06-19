// components/MediaControls.jsx

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

export default function MediaControls() {
  const controls = [
    { icon: "arrows", label: "Aleatorio" },
    { icon: "share", label: "Compartir" },
    { icon: "repeat", label: "Repetir" },
    { icon: "speaker", label: "Volumen" },
  ];

  return (
    <div className="flex items-center justify-between w-11/12 sm:w-3/4 mt-4 text-xl text-gray-400">
      {controls.map(({ icon, label }) => (
        <Tooltip key={icon}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] bg-transparent hover:bg-fuchsia-300/15 transition-colors duration-200 cursor-pointer"
            >
              <object
                type="image/svg+xml"
                data={`/img/${icon}.svg`}
                className="w-[30px] h-[30px] cursor-pointer"
              >
                SVG no soportado.
              </object>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
