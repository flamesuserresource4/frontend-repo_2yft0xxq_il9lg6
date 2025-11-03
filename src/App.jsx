import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Product from './components/Product';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Features />
      <Product />
      <CTA />
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} LAIKS — Luxembourg AI Key Solutions. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
