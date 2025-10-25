import React, { useState } from 'react';
import { Copy, Check, Github } from 'lucide-react';

const Snippet = ({ label, code, language }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0e1421]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
        <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
        <button onClick={copy} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition hover:bg-white/10">
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-auto p-4 text-sm leading-relaxed text-white/80">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const CodeBlocks = () => {
  const quickStart = `// 1. Install
npm i @ghostauth/sdk

// 2. One-line init
import { auth } from '@ghostauth/sdk'
auth.init({ projectId: 'gh_123', passkeys: true })

// 3. Trigger sign-in anywhere
const user = await auth.signIn()`;

  const nodeSnippet = `import express from 'express'
import { webhook } from '@ghostauth/sdk/server'

const app = express()
app.post('/auth/webhook', webhook({ secret: process.env.GHOST_SECRET }))
app.listen(3000)`;

  const pythonSnippet = `from fastapi import FastAPI, Request
from ghostauth import verify_webhook

app = FastAPI()

@app.post('/auth/webhook')
async def auth_webhook(req: Request):
    payload = await req.body()
    verify_webhook(payload, secret=os.environ['GHOST_SECRET'])
    return { 'ok': True }`;

  return (
    <section id="docs" className="relative w-full bg-[#090d14] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-['Mona_Sans',Inter] text-3xl font-bold">Build in minutes</h2>
            <p className="mt-2 max-w-2xl text-white/70">Use our SDKs to add biometrics in one line. Keep your stack. Own your UX.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Snippet label="JavaScript • 6 lines" code={quickStart} language="ts" />
          <div className="grid gap-6">
            <Snippet label="Node server" code={nodeSnippet} language="ts" />
            <Snippet label="Python (FastAPI)" code={pythonSnippet} language="py" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeBlocks;
