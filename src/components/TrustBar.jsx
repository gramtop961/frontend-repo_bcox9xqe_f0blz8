import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustItem = ({ title, subtitle }) => (
  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
    <div>
      <p className="font-medium text-white">{title}</p>
      <p className="text-sm text-white/70">{subtitle}</p>
    </div>
  </div>
);

const TrustBar = () => {
  return (
    <section className="w-full bg-[#0b0f17] py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <TrustItem title="Passkeys + Face/Touch ID" subtitle="Native biometrics across web and mobile." />
          <TrustItem title="Privacy-first" subtitle="No passwords, no secrets at rest. Minimal PII." />
          <TrustItem title="Compliance-ready" subtitle="SOC 2 Type II, GDPR, and SSO support." />
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
