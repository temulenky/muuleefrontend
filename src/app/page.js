import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-sky-100 flex items-center justify-center">
      
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-6">
        
        <Image
          src="/nest.jpg"
          alt="Nest"
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />

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
            href="/lesson"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            Lesson
          </a>
          <a
            href="/nemelt"
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
          >
            Nemelt
          </a>
        </div>

      </div>

    </div>
  );
}