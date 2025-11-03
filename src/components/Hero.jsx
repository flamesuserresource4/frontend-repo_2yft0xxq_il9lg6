import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, FileSearch, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Top Bar / Brand */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#D4AF37] to-[#8A6F20]" />
          <div className="text-lg font-semibold tracking-[0.18em] text-white">LAIKS</div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#product" className="text-sm text-white/80 transition hover:text-white">Product</a>
          <a href="#features" className="text-sm text-white/80 transition hover:text-white">Capabilities</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#8A6F20] px-4 py-2 text-sm font-medium text-black shadow-lg shadow-[#D4AF37]/20"
          >
            Book a demo
          </a>
        </div>
      </div>

      {/* Content + 3D */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-24 pt-4 md:grid-cols-2 md:gap-6 md:pb-28">
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield size={14} className="text-[#D4AF37]" />
            Made for Luxembourg compliance
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Bureaucracy, accelerated.
            <span className="block bg-gradient-to-r from-[#D4AF37] to-[#8A6F20] bg-clip-text text-transparent">
              Precision AI for fiduciaries.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-white/70">
            LAIKS (Luxembourg AI Key Solutions) autonomously sorts, reads, and analyses documents end‑to‑end —
            delivering regulatory‑grade accuracy with boutique discretion.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#8A6F20] px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-[#D4AF37]/25"
            >
              Request private demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <FileSearch size={16} className="text-[#D4AF37]" />
              <span className="text-sm">OCR + understanding</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#D4AF37]" />
              <span className="text-sm">GDPR-first design</span>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[560px]">
          {/* Soft glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60" style={{
            background: 'radial-gradient(60% 60% at 70% 30%, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0) 60%)'
          }} />
          {/* 3D Scene */}
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'conic-gradient(from 120deg, #D4AF37, transparent 40%)' }}
        />
        <div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, #8A6F20, transparent 60%)' }}
        />
      </div>
    </section>
  );
};

export default Hero;
