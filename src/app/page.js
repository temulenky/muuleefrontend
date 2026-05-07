import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-sky-100 flex flex-col items-center justify-center gap-10 px-4">
      
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-400 text-center">
          Welcome
        </h1>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-6 w-full max-w-md">
        
        <div className="flex flex-wrap justify-center gap-3 w-full">

          <a
            href="/contact"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm text-sm sm:text-base"
          >
            Contact
          </a>

          <a
            href="/about"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm text-sm sm:text-base"
          >
            About
          </a>

          <a
            href="/lesson"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm text-sm sm:text-base"
          >
            Users
          </a>

          <a
            href="/weather"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm text-sm sm:text-base"
          >
            Weather
          </a>

        </div>

      </div>

    </div>
  );
}