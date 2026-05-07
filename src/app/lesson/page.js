"use client";

import { useState } from "react";
import DataJson from "../../utils/data.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    item.first_name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
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
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-pink-500 transition"
              >
                {item.label}
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
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
            {["Home", "Users", "About", "Contact", "Weather"].map((item) => (
              <p key={item} className="py-1">
                {item}
              </p>
            ))}
          </div>
        )}
      </header>

      {/* ── SEARCH ── */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-2 w-full rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ── USERS GRID ── */}
      <div className="px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-pink-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* MAIN IMAGE WITH HOVER */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.first_name}
                className="h-32 w-full object-cover transition duration-300 hover:scale-110"
                onError={(e) => (e.currentTarget.src = "/fallback.png")}
              />
            </div>

            <div className="p-3">
              {/* NAME + TYPE */}
              <div className="flex justify-between items-center">
                <p className="font-bold">{item.first_name}</p>
                <span className="text-xs bg-purple-200 px-2 rounded">
                  {item.type}
                </span>
              </div>

              {/* INFO */}
              <p className="text-xs mt-2"><b>Email:</b> {item.email}</p>
              <p className="text-xs"><b>Age:</b> {item.age}</p>
              <p className="text-xs">Point: {item.point}</p>
              <p className="text-xs">Country: {item.country}</p>

              {/* SUB IMAGES WITH HOVER */}
              <div className="grid grid-cols-2 gap-1 mt-2">
                {item.item?.map((subItem) => (
                  <div key={subItem.id} className="overflow-hidden rounded">
                    <img
                      src={subItem.image}
                      alt={subItem.name}
                      className="h-16 w-full object-cover transition duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-3 bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}