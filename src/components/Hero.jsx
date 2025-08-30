import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Futuristic DNA sequencing hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.65)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Next‑Gen DNA Sequencing</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Ultra-fast, high-fidelity sequencing powered by real-time signal processing and AI. Illuminate the genome with neon precision.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-white/90">
              Start Free Trial
            </a>
            <a href="#platform" className="rounded-lg border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40">
              Explore Platform
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-white/80">
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">
              <p className="text-2xl font-bold">99.99%</p>
              <p className="text-sm">Base call accuracy</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">
              <p className="text-2xl font-bold">24×</p>
              <p className="text-sm">Throughput gain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
