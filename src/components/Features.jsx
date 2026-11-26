const FEATURES = [
  {
    icon: '🤖',
    title: 'Built for Revit',
    body: 'Not a generic chatbot. RVT Saber is designed around Revit questions, with answers written as step-by-step ribbon and dialog walkthroughs.',
  },
  {
    icon: '⚡',
    title: 'Instant Step-by-Step Answers',
    body: 'Ask a question, get a numbered walkthrough. Every answer includes the exact ribbon tab, dialog name, and gotcha to watch for.',
  },
  {
    icon: '🎙️',
    title: 'Voice Input & Readback',
    body: 'Speak your question hands-free. Tap the mic, ask naturally, and hear the answer read aloud — great for keeping eyes on your model.',
  },
  {
    icon: '📚',
    title: 'Structured Learning Path',
    body: 'Work through Core and Advanced lessons for 11 disciplines. Track your progress and build real competency one lesson at a time.',
  },
  {
    icon: '🗂️',
    title: 'Full Q&A History',
    body: 'Every conversation is saved. Search back through past answers so you never have to ask the same question twice.',
  },
  {
    icon: '🌐',
    title: '11 Disciplines Covered',
    body: 'Architecture, Structure, Electrical, HVAC, Mechanical, Plumbing, Civil & Site, BIM Management, Dynamo, pyRevit, Families, and more.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      {/* Section header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
          Features
        </p>
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Everything a BIM Pro Needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Built specifically for Revit professionals — not watered-down general AI.
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(f => (
          <div
            key={f.title}
            className="card-glow card-glow-hover rounded-2xl border border-border bg-card p-6 transition-all"
          >
            <div className="mb-4 text-3xl">{f.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
          </div>
        ))}
      </div>

      {/* Plan summary */}
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <p className="mb-1 text-sm font-bold text-white">Free</p>
          <p className="text-sm leading-relaxed text-slate-400">
            20 AI turns a month on the standard model, with threading, history, and the full discipline library.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan/60 bg-card p-6 shadow-[0_0_40px_#00EEFF18]">
          <p className="mb-1 text-sm font-bold text-white">Pro · $9.99/mo</p>
          <p className="text-sm leading-relaxed text-slate-400">
            Unlimited turns, smart AI routing with Claude Sonnet for complex questions, and smart scripting and API help.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <p className="mb-1 text-sm font-bold text-white">Expert · $19.99/mo</p>
          <p className="text-sm leading-relaxed text-slate-400">
            The advanced model on every question, full scripting and API help, and a 2M token monthly cap.
          </p>
        </div>
      </div>
    </section>
  );
}
