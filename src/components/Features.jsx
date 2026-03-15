const FEATURES = [
  {
    icon: '🤖',
    title: 'AI Trained on BIM',
    body: 'Not a generic chatbot. RVT Saber is tuned on real Revit workflows, Autodesk documentation, and years of BIM professional expertise.',
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
    </section>
  );
}
