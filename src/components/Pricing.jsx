const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get started with 20 questions a month.',
    cta: 'Launching soon',
    highlighted: false,
    features: [
      '20 AI turns per month',
      'Standard AI model',
      'Concise responses',
      'Threading and Q&A history',
      'All 11 discipline Q&A categories',
      'Full learning library (read)',
      'Voice input & voice readback',
    ],
    missing: [
      'Unlimited turns',
      'Smart AI routing',
      'Deep responses',
      'Scripting & API help',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Smart routing, unlimited turns.',
    cta: 'Launching soon',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited turns',
      'Smart AI routing (Claude Sonnet for complex questions)',
      'Deep responses',
      'Smart scripting & API help',
      'Threading and Q&A history',
      '300K tokens per month',
      'All 11 discipline Q&A categories',
      'Full learning library with progress tracking',
      'Voice input & voice readback',
      'Priority response speed',
      'New disciplines as they launch',
    ],
    missing: [
      'Advanced model on every question',
    ],
  },
  {
    name: 'Expert',
    price: '$19.99',
    period: 'per month',
    description: 'Always Sonnet, 2M token cap.',
    cta: 'Launching soon',
    highlighted: false,
    features: [
      'Unlimited turns',
      'Advanced AI model (Claude Sonnet) on every question',
      'Deep responses',
      'Full scripting & API help',
      'Threading and Q&A history',
      '2M tokens per month',
      'All 11 discipline Q&A categories',
      'Full learning library with progress tracking',
      'Voice input & voice readback',
      'Priority response speed',
      'New disciplines as they launch',
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-bg via-card/20 to-bg py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
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
        <div className="flex flex-col items-stretch gap-6 lg:flex-row">
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

              <div
                aria-disabled="true"
                className={`block rounded-xl py-3.5 text-center text-sm font-bold opacity-60 ${
                  plan.highlighted
                    ? 'bg-cyan text-black'
                    : 'border border-border text-white'
                }`}
              >
                {plan.cta}
              </div>
            </div>
          ))}
        </div>

        {/* Token cap note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Token caps are soft limits. Past the cap, answers use the standard model instead of being blocked.
        </p>

        {/* Platform status (apps not yet live) */}
        <div className="mt-10 text-center text-sm text-slate-500">
          <span>Launching soon on iOS and Android</span>
        </div>
      </div>
    </section>
  );
}
