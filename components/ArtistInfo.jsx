import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import React from "react";

const ArtistInfo = ({ info }) => {
  return (
    <div className="absolute top-4 right-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white text-2xl">
            ...
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-b from-[#23002E]/90 to-[#001F3F]/95 text-white border-none p-4">
          <h3 className="text-lg font-bold mb-2">Sobre el artista</h3>
          <p>{info}</p>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ArtistInfo;
