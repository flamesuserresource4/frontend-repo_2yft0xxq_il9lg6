import React from 'react';

const CTA = () => {
  return (
    <section id="demo" className="w-full bg-white py-16 text-[#0a0a0a]">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h3 className="text-2xl font-medium" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>By invitation</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-black/60" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
          Private demos in Luxembourg or online.
        </p>
        <div className="mt-6">
          <a
            href="mailto:contact@laiks.lu?subject=LAIKS%20demo%20request"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-medium text-white"
            style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}
          >
            Request demo
          </a>
        </div>

        <div id="contact" className="mx-auto mt-10 max-w-xl text-xs text-black/60" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
          LAIKS — Luxembourg AI Key Solutions · Grand Duchy of Luxembourg · contact@laiks.lu
        </div>
      </div>
    </section>
  );
};

export default CTA;
