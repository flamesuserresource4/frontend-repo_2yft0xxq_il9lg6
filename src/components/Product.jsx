import React from 'react';

const steps = [
  { title: 'Ingest', desc: 'Securely connect storage or drag-and-drop documents.' },
  { title: 'Understand', desc: 'Classify, read, and extract structured fields.' },
  { title: 'Validate', desc: 'Apply checks, flag anomalies, and confirm provenance.' },
  { title: 'Export', desc: 'Deliver clean data to PMS/ERP with an audit trail.' }
];

const Product = () => {
  return (
    <section id="product" className="w-full bg-[#f7f7f5] py-16 text-[#0a0a0a]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-medium" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>A precise, quiet pipeline</h2>
          <a href="#demo" className="text-sm text-black/60 hover:text-black" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>Book a walkthrough</a>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/10 bg-white p-6">
              <div className="text-sm font-medium" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{s.title}</div>
              <p className="mt-2 text-sm text-black/60" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
