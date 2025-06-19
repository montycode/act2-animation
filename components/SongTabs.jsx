// components/SongTabs.jsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SongTabs() {
  return (
    <Tabs defaultValue="song" className="w-full max-w-md mt-4 px-4">
      <TabsList className="grid w-full grid-cols-3 bg-gradient-to-l from-[#001F3F]/90 to-[#001F3F]/95 backdrop-blur">
        {[
          { value: "song", label: "Canción" },
          { value: "lyrics", label: "Letra" },
          { value: "comments", label: "Comentarios" },
        ].map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="data-[state=active]:bg-pink-500 data-[state=active]:text-white font-bold text-slate-400"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent
        value="song"
        className="text-center text-sm mt-2 text-gray-300"
      >
        Reproduciendo desde el álbum &quot;AM&quot;
      </TabsContent>
      <TabsContent
        value="lyrics"
        className="text-center text-sm mt-2 text-gray-300"
      >
        Letra no disponible
      </TabsContent>
      <TabsContent
        value="comments"
        className="text-center text-sm mt-2 text-gray-300"
      >
        🎷 Esta canción me transporta... ¿A ti?
      </TabsContent>
    </Tabs>
  );
}
