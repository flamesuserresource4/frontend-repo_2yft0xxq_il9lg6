import React from 'react';

const items = [
  {
    title: 'Autonomous operations',
    desc: 'From intake to extraction and validation, documents move without manual touch.'
  },
  {
    title: 'Regulatory confidence',
    desc: 'Audit-ready logs and controlled outputs aligned with Luxembourg and EU standards.'
  },
  {
    title: 'Discreet by design',
    desc: 'Confidential processing with a clear approval path when human review matters.'
  },
  {
    title: 'Multilingual precision',
    desc: 'FR / EN / DE / LU content understood natively, including financial nomenclature.'
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-16 text-[#0a0a0a]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-medium" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>Built for fiduciaries</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-black/10 bg-white p-6">
              <div className="text-base font-medium" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{it.title}</div>
              <p className="mt-2 text-sm text-black/60" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
