"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm text-black">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/potato.logo.avif"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-pink-200"
            />
            <span className="font-bold text-lg">potato</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Users", href: "/lesson" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Weather", href: "/weather" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-pink-500">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm text-white bg-pink-400 rounded-lg hover:bg-pink-500">
              Sign up
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white">
            {["Home", "Users", "About", "Contact", "Weather"].map((item) => (
              <p key={item} className="py-2">{item}</p>
            ))}
          </div>
        )}
      </header>

      {/* ── MAIN WEATHER UI ── */}
      <div className="flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full md:w-[80px] bg-[#1e293b] flex md:flex-col justify-around md:justify-start items-center py-4 md:py-6 md:space-y-10">
          <div>💨</div>
          <div>weather</div>
          <div>cities</div>
          <div>map</div>
          <div>settings</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-8 flex flex-col lg:flex-row gap-6">
          
          {/* Left */}
          <div className="flex-1 space-y-6">
            <input
              type="text"
              placeholder="Search for cities"
              className="w-full p-3 rounded-xl bg-[#1e293b] outline-none"
            />

            {/* Current Weather */}
            <div className="bg-[#1e293b] rounded-2xl p-6 flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Madrid</h1>
                <p className="text-gray-400 mb-4">Chance of rain: 0%</p>
                <h2 className="text-4xl md:text-6xl font-bold">31°</h2>
              </div>
              <div className="text-6xl md:text-8xl">☀️</div>
            </div>

            {/* Forecast */}
            <div className="bg-[#1e293b] rounded-2xl p-4 md:p-6">
              <h3 className="mb-4 text-gray-300">TODAY'S FORECAST</h3>
              <div className="flex overflow-x-auto gap-4">
                {[
                  { time: "6AM", temp: "25°", icon: "☁️" },
                  { time: "9AM", temp: "28°", icon: "🌤️" },
                  { time: "12PM", temp: "33°", icon: "☀️" },
                  { time: "3PM", temp: "34°", icon: "☀️" },
                  { time: "6PM", temp: "32°", icon: "☀️" },
                  { time: "9PM", temp: "30°", icon: "🌥️" },
                ].map((item, i) => (
                  <div key={i} className="text-center min-w-[80px]">
                    <p className="text-gray-400 text-sm">{item.time}</p>
                    <div className="text-xl">{item.icon}</div>
                    <p>{item.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Air */}
            <div className="bg-[#1e293b] rounded-2xl p-6 grid grid-cols-2 gap-4">
              <div><p className="text-gray-400">Real Feel</p><p className="font-bold">30°</p></div>
              <div><p className="text-gray-400">Wind</p><p className="font-bold">0.2 km/h</p></div>
              <div><p className="text-gray-400">Rain</p><p className="font-bold">0%</p></div>
              <div><p className="text-gray-400">UV</p><p className="font-bold">3</p></div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[320px] bg-[#1e293b] rounded-2xl p-6">
            <h3 className="mb-4 text-gray-300">7-DAY FORECAST</h3>

            {[
              { day: "Today", icon: "☀️", temp: "36/22" },
              { day: "Tue", icon: "☀️", temp: "37/21" },
              { day: "Wed", icon: "☀️", temp: "37/21" },
              { day: "Thu", icon: "☁️", temp: "37/21" },
              { day: "Fri", icon: "☁️", temp: "37/21" },
              { day: "Sat", icon: "🌧️", temp: "37/21" },
              { day: "Sun", icon: "⛈️", temp: "37/21" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-700 last:border-none">
                <p>{item.day}</p>
                <span>{item.icon}</span>
                <p>{item.temp}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}