import React from 'react';
import { Shield, FileCheck2, Gauge, Languages } from 'lucide-react';

const features = [
  {
    icon: FileCheck2,
    title: 'Autonomous document operations',
    desc: 'Intake, sort, classify and extract data across invoices, statements, KYC packs, and legal docs — with human-level accuracy.'
  },
  {
    icon: Shield,
    title: 'Regulatory-grade audit trail',
    desc: 'Immutable logs, versioned outputs, and reasoned decisions aligned with Luxembourg and EU regulatory expectations.'
  },
  {
    icon: Gauge,
    title: 'Throughput without compromise',
    desc: 'Parallel processing and adaptive queues deliver speed at scale while preserving precision and control.'
  },
  {
    icon: Languages,
    title: 'Luxembourg-first localization',
    desc: 'Native handling of FR/EN/DE/LU content, financial nomenclature, and cross-border document formats.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Engineered for fiduciaries</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Replace manual document handling with a precision system that understands your work, your obligations, and your clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#8A6F20] text-black">
                <f.icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
