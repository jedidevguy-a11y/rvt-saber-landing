const APP_STORE_URL  = 'https://apps.apple.com/app/rvt-saber/id000000000';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.rvtsaber';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for occasional questions and exploring the learning content.',
    cta: 'Get Started Free',
    ctaHref: APP_STORE_URL,
    highlighted: false,
    features: [
      '20 AI questions per month',
      'All 11 discipline Q&A categories',
      'Full learning library (read)',
      'Voice input & voice readback',
      'Q&A history',
    ],
    missing: [
      'Unlimited questions',
      'Multi-turn Pro chat conversations',
      'Advanced AI model (Claude Sonnet)',
      'Priority response speed',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For professionals who rely on fast, accurate answers every single day.',
    cta: 'Start Pro — $9.99/mo',
    ctaHref: APP_STORE_URL,
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited AI questions',
      'All 11 discipline Q&A categories',
      'Full learning library with progress tracking',
      'Voice input & voice readback',
      'Full Q&A history',
      'Priority response speed',
      'New disciplines as they launch',
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-bg via-card/20 to-bg py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
            Pricing
          </p>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Simple, Honest Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Start free. Upgrade when you're ready for unlimited access.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`relative flex flex-1 flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-cyan/60 bg-card shadow-[0_0_40px_#00EEFF18]'
                  : 'border-border bg-card/60'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 text-xs font-bold text-black">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className="mb-1 text-sm font-semibold text-slate-400">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-slate-500">/{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              </div>

              {/* Feature list */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 flex-shrink-0 text-cyan">✓</span>
                    {f}
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 flex-shrink-0">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block rounded-xl py-3.5 text-center text-sm font-bold transition-opacity hover:opacity-85 ${
                  plan.highlighted
                    ? 'bg-cyan text-black'
                    : 'border border-border text-white hover:border-cyan/40'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <p className="text-sm text-slate-500">Available on</p>
          <div className="flex gap-3">
            <a
              href={APP_STORE_URL}
              className="rounded-lg border border-border bg-card px-4 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan/40"
            >
               iOS (App Store)
            </a>
            <a
              href={PLAY_STORE_URL}
              className="rounded-lg border border-border bg-card px-4 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan/40"
            >
              ▶ Android (Google Play)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
