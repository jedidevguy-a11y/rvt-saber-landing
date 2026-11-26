export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚔</span>
          <span className="text-xl font-extrabold tracking-wide text-cyan">RVT Saber</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 sm:flex">
          <a href="#features"      className="hover:text-cyan transition-colors">Features</a>
          <a href="#screenshots"   className="hover:text-cyan transition-colors">Screenshots</a>
          <a href="#pricing"       className="hover:text-cyan transition-colors">Pricing</a>
        </nav>
        <span className="rounded-lg border border-cyan/40 px-4 py-2 text-sm font-bold text-cyan">
          Coming soon
        </span>
      </header>

      {/* Hero body */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 text-center sm:px-10 sm:pt-24">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
          <span>✦</span>
          <span>AI-Powered BIM Assistant</span>
        </div>

        {/* Headline */}
        <h1 className="cyan-glow mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Your Revit{' '}
          <span className="text-cyan">Sensei</span>
          <br />
          in Your Pocket
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Get instant, expert answers for Revit, Dynamo, pyRevit, ACC, Civil & more.
          Step-by-step guidance from an AI built for Revit workflows. Launching soon
          on iOS and Android.
        </p>

        {/* Store badges (not yet live) */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div
            aria-disabled="true"
            className="flex w-52 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-black opacity-60"
          >
            <AppleIcon />
            <div className="text-left leading-tight">
              <p className="text-[10px] font-medium opacity-70">Coming soon to the</p>
              <p className="text-base font-bold">App Store</p>
            </div>
          </div>
          <div
            aria-disabled="true"
            className="flex w-52 items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-3.5 text-white opacity-60"
          >
            <PlayIcon />
            <div className="text-left leading-tight">
              <p className="text-[10px] font-medium text-slate-400">Coming soon to</p>
              <p className="text-base font-bold">Google Play</p>
            </div>
          </div>
        </div>

        {/* Status line */}
        <div className="mt-12 text-sm text-slate-500">
          <span>Launching soon on iOS &amp; Android</span>
        </div>

        {/* Discipline chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DISCIPLINES.map(d => (
            <span
              key={d}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-slate-400"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const DISCIPLINES = [
  'Architecture', 'Structure', 'Electrical', 'HVAC', 'Mechanical',
  'Plumbing', 'Civil & Site', 'BIM Management', 'Dynamo', 'Families',
];

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.22.74 2.98.8.83-.15 1.62-.85 2.97-.79 1.19.05 2.28.5 3.03 1.47-2.71 1.68-2.27 5.45.17 6.57-.59 1.39-1.14 2.76-2.15 3.83zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}
