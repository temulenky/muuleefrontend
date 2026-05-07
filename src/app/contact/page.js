"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/potato.logo.avif"
              alt="Potato logo"
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-pink-200"
            />
            <span className="text-xl font-bold text-gray-800">potato</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Users", href: "/lesson" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Weather", href: "/weather" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-gray-600 hover:text-pink-500 transition font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm text-white bg-pink-400 rounded-lg hover:bg-pink-500 shadow">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
            {["Home", "Services", "About Us", "Contact", "FAQ"].map((item) => (
              <a key={item} href="#" className="block py-2 text-gray-700">
                {item}
              </a>
            ))}

            <div className="flex gap-2">
              <button className="flex-1 py-2 border rounded-lg text-pink-500">
                Sign in
              </button>
              <button className="flex-1 py-2 bg-pink-400 text-white rounded-lg">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── HEADER TEXT ── */}
      <section className="mt-10 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Get in touch with us
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          If you need help or have a question, were here for you
        </p>
      </section>

      {/* ── CARDS ── */}
      <section className="mt-10 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            city: "San Francisco",
            email: "sanfrancisco@flowbase.com",
            link: "https://maps.google.com",
          },
          {
            city: "Paris",
            email: "paris@flowbase.com",
            link: "https://maps.google.com",
          },
          {
            city: "Egypt",
            email: "egypt@flowbase.com",
            link: "https://maps.google.com",
          },
        ].map((item) => (
          <div
            key={item.city}
            className="bg-pink-200 rounded-2xl p-6 max-w-sm mx-auto w-full shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="font-bold text-xl">{item.city}</h3>
            <hr className="my-4 border-pink-300" />

            <p className="text-gray-700 text-sm">{item.email}</p>
            <p className="text-gray-700 text-sm mt-2">(415) 931-1616</p>

            <a
              href={item.link}
              target="_blank"
              className="block mt-5 text-center border border-black rounded-xl bg-white py-2 hover:bg-gray-100"
            >
              View location
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}