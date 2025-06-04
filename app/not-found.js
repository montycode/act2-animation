import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/404-bg.jpg')",
      }}
    >
      <div className="flex justify-center items-center lg:py-0 h-full">
        <div className="px-4 flex justify-center items-center text-gray-800 w-full">
          <div className="sm:w-5/6 bg-white border rounded-md grid place-items-center my-8 py-8 px-4 md:px-24 lg:px-72">
            <Image src="/img/404.png" alt="404" width={220} height={110} />
            <h1 className="text-center font-bold text-gray-800 text-xl lg:text-2xl pt-12 lg:pt-8">
              OOPS, PAGE NOT FOUND
            </h1>
            <p className="py-6 md:py-8 text-gray-800 text-center">
              The page you are looking for might have been removed, has its name
              changed, or is temporarily unavailable.
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
