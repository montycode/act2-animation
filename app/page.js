import ArtistImg from "@/public/img/artist.jpg";
import Cover from "@/public/img/concert-bg.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#23002E] to-[#001F3F] text-white flex flex-col items-center justify-between pb-10 rounded-tl-lg">
      {/* Imagen superior */}
      <div className="relative w-full h-1/3">
        <Image
          src={Cover}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <button className="absolute top-4 left-4 text-white text-2xl">←</button>
        <button className="absolute top-4 right-4 text-white text-2xl">
          ...
        </button>
      </div>

      {/* Tarjeta con imagen del artista */}
      <div className="mt-8 flex flex-col items-center">
        <Image
          src={ArtistImg}
          alt="Song Cover"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <h2 className="mt-4 text-xl font-semibold">Arabella</h2>
        <p className="text-sm text-gray-300">Artic Monkeys</p>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between w-3/4 mt-6 text-xl text-gray-400">
        <button >
    <svg id="search-icon" class="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        </button>
        <button>📤</button>
        <button>🔄</button>
        <button>🔊</button>
      </div>

      {/* Barra de progreso */}
      <div className="w-3/4 mt-4">
        <div className="w-full h-1 bg-gray-700 rounded">
          <div className="h-1 bg-pink-500 rounded" style={{ width: "40%" }} />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1:24</span>
          <span>3:20</span>
        </div>
      </div>

      {/* Botón central grande */}
      <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
        ▶️
      </button>
    </div>
  );
}
