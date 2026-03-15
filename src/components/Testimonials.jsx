const REVIEWS = [
  {
    name: 'Jordan M.',
    role: 'Senior Architectural Designer',
    stars: 5,
    text: "I've been using Revit for 8 years and still learned new shortcuts from RVT Saber. The step-by-step format is exactly how I think — it doesn't just tell me what to do, it tells me where to click.",
  },
  {
    name: 'Carlos R.',
    role: 'MEP BIM Coordinator',
    stars: 5,
    text: "The HVAC and mechanical lessons are the best I've found anywhere. I recommended it to my whole team. Having voice input means I can ask questions while my hands are on the keyboard.",
  },
  {
    name: 'Priya S.',
    role: 'BIM Manager',
    stars: 5,
    text: "I use it mainly for Dynamo and pyRevit scripting help. It understands BIM context that ChatGPT just doesn't — it knows what an API element is vs. a type vs. a family instance.",
  },
  {
    name: 'Mike T.',
    role: 'Structural Engineer',
    stars: 5,
    text: "Asked it a question about analytical model tolerances at 10 PM before a deadline. Got the exact answer in 20 seconds. That alone was worth the subscription.",
  },
  {
    name: 'Aisha K.',
    role: 'Junior Revit Technician',
    stars: 5,
    text: "The learning path helped me go from beginner to confident in Architecture and Families in about three weeks. The gotchas at the end of each lesson saved me hours of frustration.",
  },
  {
    name: 'Derek W.',
    role: 'Civil & Infrastructure BIM Lead',
    stars: 5,
    text: "Finally — an app that covers Civil & Site properly. The Toposolids and shared coordinates lessons are exactly what I needed. Nothing else on the market touches this.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      {/* Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
          Reviews
        </p>
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Loved by BIM Professionals
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          From junior technicians to senior BIM managers — RVT Saber earns its place in your workflow.
        </p>
      </div>

      {/* Review grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map(r => (
          <div
            key={r.name}
            className="card-glow rounded-2xl border border-border bg-card p-6"
          >
            {/* Stars */}
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: r.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            {/* Quote */}
            <p className="mb-5 text-sm leading-relaxed text-slate-300">
              "{r.text}"
            </p>
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan/20 text-cyan font-bold text-sm border border-cyan/30">
                {r.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{r.name}</p>
                <p className="text-xs text-slate-500">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
