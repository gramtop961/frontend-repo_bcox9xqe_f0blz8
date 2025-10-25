import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CodeBlocks from './components/CodeBlocks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-white">
      <Hero />
      <TrustBar />
      <CodeBlocks />
      <CTA />
    </div>
  );
}

export default App;
