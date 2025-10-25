import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0b0f17] text-white">
      <div className="absolute inset-0 opacity-70">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),rgba(59,130,246,0.15)_40%,transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 md:flex-row md:gap-10 md:pt-24">
        <div className="z-10 w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            Built for devs • SOC2-ready
          </div>
          <h1 className="mt-5 font-['Mona_Sans',Inter,ui-sans-serif] text-5xl font-extrabold tracking-tight sm:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Passwordless, biometric logins with a single line of code. Delight users, reduce fraud, and ship secure auth in minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400">
              <Rocket className="h-4 w-4" />
              Get started
            </a>
            <a href="#docs" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/90 transition hover:bg-white/10">
              <Lock className="h-4 w-4 text-sky-300" />
              View docs
            </a>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70 shadow-lg backdrop-blur">
            <span className="text-emerald-400">npm</span> i @ghostauth/sdk
            <span className="ml-2 rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">one line</span>
          </div>
        </div>

        <div className="relative mt-10 h-[420px] w-full md:mt-0 md:h-[560px] md:w-1/2">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
