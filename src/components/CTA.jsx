import React from 'react';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full overflow-hidden bg-[#0a0f18] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),rgba(2,6,23,0.9))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg backdrop-blur-lg md:flex-row md:text-left">
          <div>
            <h3 className="font-['Mona_Sans',Inter] text-2xl font-bold">Ship passwordless today</h3>
            <p className="mt-2 max-w-2xl text-white/70">Drop-in biometrics, strong security, and a delightful sign-in in under 10 minutes.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400">
              <div className="inline-flex items-center gap-2"><Rocket className="h-4 w-4" />Start free</div>
            </a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/90 transition hover:bg-white/10">Contact sales</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} GhostAuth — Secure, passwordless authentication.</p>
      </div>
    </section>
  );
};

export default CTA;
