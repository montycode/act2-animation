import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundColor: "#020618",
      }}
    >
      <div className="flex justify-center items-center lg:py-0 h-full">
        <div className="px-4 flex justify-center items-center text-white-800 w-full">
          <div className="sm:w-5/6 bg-transparent  grid place-items-center my-8 py-8 px-4 md:px-24 lg:px-72">
            <object
              type="image/svg+xml"
              data={`/img/404.svg`}
              className="w-[100%] h-[100%] cursor-pointer"
            >
              SVG no soportado.
            </object>{" "}
            <h1
              className="text-center font-bold text-white-800 text-xl lg:text-2xl pt-12 lg:pt-8"
              style={{
                color: "#ffffff",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                }}
              >
                ¡EL DIAAABLO ESTO ES UN 404!{" "}
              </span>
              <br></br>NO HAY CANCIONES O DISCOS PARA VER AQUÍ
            </h1>
            <p
              className="py-6 md:py-8 text-gray-800 text-center"
              style={{
                color: "#ffffff",
              }}
            >
              La página que estás buscando ya no está disponible o no existe.
            </p>
            <Link
              href="/"
              className="font-bold text-center bg-gradient-to-l from-indigo-500 to-purple-600  text-white border rounded-md py-4 px-8 w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 mt-6"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
