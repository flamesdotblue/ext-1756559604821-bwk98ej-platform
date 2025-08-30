import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 shadow-lg" />
              <span className="text-sm font-semibold tracking-wide text-white/90">Neon Helix Labs</span>
            </div>
            <nav className="hidden gap-6 text-sm text-white/70 md:flex">
              <a href="#platform" className="hover:text-white">Platform</a>
              <a href="#tech" className="hover:text-white">Technology</a>
              <a href="#security" className="hover:text-white">Security</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#get-started" className="rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-white/90">Request Demo</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
