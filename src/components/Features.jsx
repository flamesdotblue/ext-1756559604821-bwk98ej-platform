import React from 'react';
import { Shield, Zap, Database, Cpu } from 'lucide-react';

const features = [
  {
    id: 'accuracy',
    title: 'Signal-to-Insight Accuracy',
    description:
      'End-to-end calibration and consensus calling for confident variant detection, even in complex genomic regions.',
    icon: Shield,
    accent: 'from-fuchsia-400 to-pink-400',
  },
  {
    id: 'speed',
    title: 'Real-Time Throughput',
    description:
      'Streamed basecalling and adaptive sampling deliver actionable results in minutes, not days.',
    icon: Zap,
    accent: 'from-cyan-400 to-sky-400',
  },
  {
    id: 'data',
    title: 'Unified Data Fabric',
    description:
      'Lossless compression and schema-validated metadata make petabyte-scale genomics manageable and reproducible.',
    icon: Database,
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    id: 'ai',
    title: 'AI-Enhanced Discovery',
    description:
      'Transformer models trained on multimodal signals amplify sensitivity across SNVs, indels, and SVs.',
    icon: Cpu,
    accent: 'from-violet-400 to-indigo-400',
  },
];

export default function Features() {
  return (
    <section id="platform" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          A platform engineered for precision at scale
        </h2>
        <p className="mt-3 text-base text-white/70">
          Designed with clinical rigor and researcher flexibility—secure, fast, and interoperable.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ id, title, description, icon: Icon, accent }) => (
          <div
            key={id}
            className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-sm transition hover:border-white/20"
          >
            <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-black shadow-lg`}>
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{description}</p>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </div>
        ))}
      </div>

      <div id="tech" className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Sequencing pipeline</h3>
          <p className="mt-2 text-sm text-white/70">
            From raw electrical signals to annotated variants, our pipeline ensures traceability at every step.
          </p>
          <ol className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-fuchsia-500/20 text-fuchsia-300 ring-1 ring-fuchsia-400/40 flex items-center justify-center">1</span>
              Signal ingestion and denoising
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/40 flex items-center justify-center">2</span>
              Streaming basecalling with adaptive sampling
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40 flex items-center justify-center">3</span>
              Consensus assembly and error correction
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/40 flex items-center justify-center">4</span>
              Variant calling and annotation
            </li>
          </ol>
        </div>
        <div id="security" className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <h3 className="text-xl font-semibold">Security & compliance</h3>
          <p className="mt-2 text-sm text-white/70">
            Enterprise-grade encryption, audit trails, and access controls aligned to HIPAA, GDPR, and SOC 2.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              <p className="font-medium">End-to-end encryption</p>
              <p className="mt-1 text-white/60">At-rest and in-transit with rotation</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              <p className="font-medium">Granular RBAC</p>
              <p className="mt-1 text-white/60">Project, sample, and dataset scopes</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              <p className="font-medium">Immutable logs</p>
              <p className="mt-1 text-white/60">Signed, searchable events</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              <p className="font-medium">Private cloud</p>
              <p className="mt-1 text-white/60">Bring-your-own VPC support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
