import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Product from './components/Product';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
      <Hero />
      <Features />
      <Product />
      <CTA />
      <footer className="border-t border-black/10 bg-white py-6 text-center text-xs text-black/50">
        © {new Date().getFullYear()} LAIKS — Luxembourg AI Key Solutions
      </footer>
    </div>
  );
}

export default App;
