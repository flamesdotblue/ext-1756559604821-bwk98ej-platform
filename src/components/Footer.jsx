import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Neon Helix Labs. All rights reserved.</p>
            <p className="mt-2 text-xs text-white/50">For research use only. Not for use in diagnostic procedures.</p>
          </div>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="mailto:hello@neonhelix.bio" className="hover:text-white">hello@neonhelix.bio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
