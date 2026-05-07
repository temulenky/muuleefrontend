"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    { value: "3.5+", label: "Years Experience" },
    { value: "23", label: "Projects Completed" },
    { value: "1.2k", label: "Happy Learners" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans">
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className="rounded-full h-10 w-10 object-cover ring-2 ring-pink-200"
              src="/potato.logo.avif"
              alt="Potato logo"
            />
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              potato
            </span>
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
                className="text-sm text-gray-600 hover:text-pink-500 transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-pink-400 rounded-lg hover:bg-pink-500 transition-colors shadow-sm">
              Sign up
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-pink-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 px-4 pb-4 space-y-2">
            {["Home", "Services", "About Us", "Contact", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm text-gray-700 hover:text-pink-500 font-medium"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-2 text-sm font-semibold text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50">
                Sign in
              </button>
              <button className="flex-1 py-2 text-sm font-semibold text-white bg-pink-400 rounded-lg hover:bg-pink-500">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO / ABOUT SECTION ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left – copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 uppercase tracking-wider">
              <span className="w-8 h-px bg-orange-400 inline-block" />
              How it started
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Our Dream is{" "}
              <span className="text-pink-400">Global Learning</span>{" "}
              Transformation
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
              Our team is made up of experienced professionals who bring
              creativity, expertise, and commitment to every project. We believe
              success comes from collaboration, continuous improvement, and a
              genuine focus on customer satisfaction.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
              Since our founding, our mission has remained the same: provide
              reliable solutions, build lasting relationships, and create real
              value for our community.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="px-6 py-3 text-sm font-semibold text-white bg-pink-400 rounded-xl hover:bg-pink-500 transition-all shadow-md hover:shadow-pink-200">
                Get Started
              </button>
              <button className="px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:border-pink-300 hover:text-pink-500 transition-all">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right – image + stats */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/paris.avif"
                alt="Paris"
                width={640}
                height={400}
                className="w-full object-cover rounded-2xl"
                priority
              />
              {/* subtle overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured Destination</p>
                <p className="text-sm font-bold text-gray-800">Paris, France 🗼</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-pink-50 border border-pink-100 rounded-xl p-4 flex flex-col gap-1 hover:bg-pink-100 transition-colors"
                >
                  <span className="text-2xl font-extrabold text-gray-800">{value}</span>
                  <span className="text-xs text-gray-500 font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── FEATURES STRIP ── */}
      <section className="bg-white border-t border-pink-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🎓", title: "Expert Instructors", desc: "Learn from the best in the field." },
              { icon: "🌍", title: "Global Community", desc: "Connect with learners worldwide." },
              { icon: "🚀", title: "Fast Progress", desc: "Structured paths for real results." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-pink-50 transition-colors">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-base font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/potato.logo.avif" className="h-7 w-7 rounded-full opacity-80" alt="logo" />
            <span className="text-white font-semibold text-sm">potato</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Potato. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
