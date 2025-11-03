import React from 'react';
import { FileSearch, Workflow, Database, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: 'Ingest & recognize',
    desc: 'Drag-and-drop or connect secure storage. OCR and layout parsing recognize tables, stamps, signatures, and annexes.'
  },
  {
    icon: Workflow,
    title: 'Classify & extract',
    desc: 'Models tuned for fiduciary workflows identify document types, capture required fields, and flag anomalies.'
  },
  {
    icon: Database,
    title: 'Validate & export',
    desc: 'Schema validation, transformations, and export to your PMS/ERP with audit anchors and provenance.'
  },
  {
    icon: CheckCircle2,
    title: 'Review & approve',
    desc: 'Human-in-the-loop views consolidate context and suggested actions for swift resolution where needed.'
  }
];

const Product = () => {
  return (
    <section id="product" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">From paper to structured truth</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A modern pipeline that respects confidentiality while delivering the speed your clients expect.
            </p>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-2 text-sm font-medium text-[#D4AF37] hover:bg-white/10"
          >
            Book a private walkthrough
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#D4AF37]">
                <s.icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="border-b border-white/10 px-4 py-2 text-xs text-white/60">Sample export (JSON)</div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-white/80">
{`{
  "document_type": "invoice",
  "issuer": "ACME S.A.",
  "amount": 12840.55,
  "currency": "EUR",
  "due_date": "2025-11-30",
  "line_items": [
    { "description": "Advisory services", "qty": 1, "unit": "package", "total": 12840.55 }
  ],
  "validation": {
    "checks": ["VAT_number_format", "sum_matches_total", "signature_detected"],
    "status": "passed"
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Product;
