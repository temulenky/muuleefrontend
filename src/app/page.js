import Image from "next/image";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-pink-100 gap-20 to-sky-100 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-6xl color-white  ">
        Welcome
        </h1>
      </div>
      
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-6">
        
        <div className="flex gap-4">
          
          <a
            href="/contact"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            Contact
          </a>
          <a
            href="/about"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            About
          </a>
          <a
            href="/users"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            Users
          </a>
          <a
            href="/weather"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            Weather
          </a>
        </div>

      </div>

    </div>
  );
}