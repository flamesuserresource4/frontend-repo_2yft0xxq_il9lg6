import React from 'react';

const CTA = () => {
  return (
    <section id="demo" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Discretion. Accuracy. Speed.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Partner with LAIKS to elevate your document operations. By invitation only — request a private demo in Luxembourg or online.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:contact@laiks.lu?subject=Demo%20request"
            className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#8A6F20] px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-[#D4AF37]/25"
          >
            Request demo
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact us
          </a>
        </div>

        <div className="pointer-events-none mx-auto mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div id="contact" className="mx-auto mt-8 max-w-xl text-sm text-white/60">
          <p>
            LAIKS — Luxembourg AI Key Solutions
            <br />
            Grand Duchy of Luxembourg
          </p>
          <p className="mt-2">contact@laiks.lu</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
