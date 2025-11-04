import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full bg-white text-[#0a0a0a]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm tracking-[0.22em]">LAIKS</div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#product" className="text-black/60 hover:text-black">Product</a>
          <a href="#features" className="text-black/60 hover:text-black">Capabilities</a>
          <a href="#contact" className="text-black/60 hover:text-black">Contact</a>
        </nav>
      </header>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-20 pt-6 md:min-h-[78vh] md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h1 className="text-balance text-4xl font-medium leading-tight md:text-5xl" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
            Quiet document intelligence.
            <span className="block text-black/60">Autonomous handling for fiduciaries in Luxembourg.</span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-black/60" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
            Sort. Read. Analyse. Validate. A precise system that works quietly in the background and elevates your practice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-medium text-white"
              style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}
            >
              Request private demo
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black/80 hover:text-black"
              style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="order-1 h-[360px] w-full md:order-2 md:h-[520px]">
          <Spline
            scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
