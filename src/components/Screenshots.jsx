import { useRef, useState, useEffect, useCallback } from 'react';

// ─── Carousel items ───────────────────────────────────────────────────────────
// type: 'screenshot' | 'video'
// For videos: set youtubeId to the 11-char YouTube video ID once you have it,
//             e.g. youtubeId: 'dQw4w9WgXcQ'
//             Leave null to show the placeholder card.

const ITEMS = [
  // ── Screenshots ─────────────────────────────────────────────────────────────
  {
    type: 'screenshot',
    label: 'Ask the Sensei',
    desc: 'Type or speak any Revit question and get a step-by-step expert answer in seconds.',
    screen: <HomeScreen />,
  },
  {
    type: 'screenshot',
    label: 'Pro Chat',
    desc: 'Unlimited multi-turn conversations with full context memory.',
    screen: <ChatScreen />,
  },
  {
    type: 'screenshot',
    label: 'Learning Path',
    desc: 'Guided Core and Advanced lessons across 11 disciplines.',
    screen: <LearnScreen />,
  },
  {
    type: 'screenshot',
    label: 'Q&A History',
    desc: 'Every answer saved — search back through past questions anytime.',
    screen: <HistoryScreen />,
  },

  // ── YouTube Shorts ───────────────────────────────────────────────────────────
  // Replace youtubeId: null with your 11-char video ID once published.
  {
    type: 'video',
    label: 'Voice Input Demo',
    desc: 'See how to ask questions hands-free using the mic button.',
    youtubeId: null,
  },
  {
    type: 'video',
    label: 'Learning Path Walkthrough',
    desc: 'A quick tour of the structured lesson library for one discipline.',
    youtubeId: null,
  },
  {
    type: 'video',
    label: 'Pro Chat in Action',
    desc: 'Watch a multi-turn Pro conversation solve a complex Revit problem.',
    youtubeId: null,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Screenshots() {
  const trackRef = useRef(null);
  const [active, setActive]     = useState(0);
  const [canPrev, setCanPrev]   = useState(false);
  const [canNext, setCanNext]   = useState(true);
  const total = ITEMS.length;

  // Keep active dot in sync when user manually scrolls
  const syncActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const itemW = el.scrollWidth / total;
    const idx   = Math.round(el.scrollLeft / itemW);
    setActive(Math.min(Math.max(idx, 0), total - 1));
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, [total]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncActive, { passive: true });
    return () => el.removeEventListener('scroll', syncActive);
  }, [syncActive]);

  const scrollTo = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const itemW = el.scrollWidth / total;
    el.scrollTo({ left: itemW * idx, behavior: 'smooth' });
    setActive(idx);
  };

  const prev = () => scrollTo(Math.max(active - 1, 0));
  const next = () => scrollTo(Math.min(active + 1, total - 1));

  return (
    <section id="screenshots" className="overflow-hidden bg-gradient-to-b from-bg via-card/30 to-bg py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
            In Action
          </p>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            See It Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Screenshots and short videos of RVT Saber in the hands of real BIM professionals.
          </p>
        </div>

        {/* ── Carousel track ── */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-2 text-slate-300 shadow-lg transition hover:border-cyan/40 hover:text-cyan disabled:opacity-20 sm:flex"
          >
            <ChevronLeft />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Next"
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-2 text-slate-300 shadow-lg transition hover:border-cyan/40 hover:text-cyan disabled:opacity-20 sm:flex"
          >
            <ChevronRight />
          </button>

          {/* Scrollable row */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex flex-shrink-0 snap-center flex-col items-center gap-4 text-center"
                style={{ width: 'clamp(220px, 60vw, 260px)' }}
              >
                {item.type === 'screenshot'
                  ? <ScreenshotFrame screen={item.screen} />
                  : <VideoFrame item={item} />
                }
                <h3 className="text-base font-bold text-white">{item.label}</h3>
                <p className="max-w-[220px] text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 bg-cyan'
                  : item.type === 'video'
                    ? 'w-2 bg-slate-600 hover:bg-slate-400'
                    : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-5 flex justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full border border-border bg-card" />
            Screenshots
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            Short videos
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Screenshot phone frame ───────────────────────────────────────────────────

function ScreenshotFrame({ screen }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] border-4 border-border bg-bg shadow-2xl shadow-black/60">
      <div className="mx-auto h-6 w-24 rounded-b-2xl bg-[#0D1124]" />
      <div className="h-[440px] overflow-hidden">{screen}</div>
      <div className="flex justify-center py-3">
        <div className="h-1 w-20 rounded-full bg-border" />
      </div>
    </div>
  );
}

// ─── Video card ───────────────────────────────────────────────────────────────
// Shows a YouTube Shorts embed if youtubeId is set,
// otherwise renders a placeholder card with a "Coming Soon" badge.

function VideoFrame({ item }) {
  const aspectW = 'w-full';
  // Shorts are 9:16 — match the phone frame height (440px) with full width
  const frameH  = 440 + 6 + 6 + 24 + 20; // mirror ScreenshotFrame total height ≈ 496px

  if (item.youtubeId) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/60"
        style={{ height: frameH }}
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
          title={item.label}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Placeholder
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/60"
      style={{ height: frameH }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg,#2A3050 0,#2A3050 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,#2A3050 0,#2A3050 1px,transparent 1px,transparent 32px)',
        }}
      />

      {/* YouTube icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#EF4444">
          <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.6 5 12 5 12 5s-4.6 0-7 .1c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.2.8C6.4 19 12 19 12 19s4.6 0 7-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.4l5.5 2.6-5.5 2.5z"/>
        </svg>
      </div>

      <span className="mb-1 text-sm font-semibold text-white">{item.label}</span>
      <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-0.5 text-xs font-semibold text-red-400">
        Coming Soon
      </span>
    </div>
  );
}

// ─── Arrow icons ──────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ── Inline placeholder screens ────────────────────────────────────────────── */

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-[#070B18] px-3 py-4 text-left">
      <div className="mb-4 flex flex-col items-center pt-2">
        <span className="text-2xl">⚔</span>
        <span className="text-sm font-extrabold tracking-wide text-cyan">RVT Saber</span>
        <span className="text-[9px] text-slate-500">Your Revit Sensei</span>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-1">
        {['Arch', 'Struct', 'Elec', 'HVAC', 'Mech', 'Plumb'].map(c => (
          <div key={c} className="rounded-lg bg-card px-1 py-1.5 text-center text-[8px] font-semibold text-slate-300 border border-border">
            {c}
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[10px] text-slate-600 text-center px-4">Ask any Revit question and get an expert answer</p>
      </div>
      <div className="mt-auto flex items-center gap-1 rounded-xl border border-border bg-card px-2 py-2">
        <span className="flex-1 text-[9px] text-slate-500">Ask anything about Revit…</span>
        <div className="h-5 w-5 rounded-full bg-cyan flex-shrink-0" />
      </div>
    </div>
  );
}

function ChatScreen() {
  const msgs = [
    { role: 'user', text: 'How do I create a curtain wall with custom mullions?' },
    { role: 'ai', text: '1. Architecture → Wall → Curtain Wall\n2. Edit Type → Mullion profile\n3. Set spacing rule' },
    { role: 'user', text: 'Where do I change the mullion profile family?' },
    { role: 'ai', text: 'In the Type Properties under Vertical/Horizontal Mullion — click the family dropdown.' },
  ];
  return (
    <div className="flex h-full flex-col bg-[#070B18] px-2 py-3 text-left">
      <div className="mb-2 text-center text-[9px] font-bold text-cyan">Pro Chat</div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-xl px-2 py-1.5 text-[8px] leading-tight ${
            m.role === 'user' ? 'ml-auto bg-cyan text-black' : 'bg-card text-slate-300 border border-border'
          }`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1 rounded-xl border border-border bg-card px-2 py-1.5">
        <span className="flex-1 text-[8px] text-slate-500">Continue…</span>
        <div className="h-4 w-4 rounded-full bg-cyan flex-shrink-0" />
      </div>
    </div>
  );
}

function LearnScreen() {
  const tiers = [
    { label: 'Core', lessons: ['Walls & Curtain Walls', 'Floors & Ceilings', 'Roofs'] },
    { label: 'Advanced', lessons: ['Massing & Adaptive', 'Linked Models'] },
  ];
  return (
    <div className="flex h-full flex-col bg-[#070B18] px-2 py-3 text-left">
      <div className="mb-2 text-center text-[9px] font-bold text-cyan">Architecture</div>
      {tiers.map(t => (
        <div key={t.label} className="mb-3">
          <p className="mb-1 text-[8px] font-bold uppercase tracking-wider text-slate-500">{t.label}</p>
          {t.lessons.map((l, i) => (
            <div key={i} className="mb-1 flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5">
              <div className={`h-3 w-3 flex-shrink-0 rounded-full border ${i === 0 ? 'bg-cyan border-cyan' : 'border-slate-600'}`} />
              <span className="text-[8px] text-slate-300 leading-tight">{l}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function HistoryScreen() {
  const entries = [
    { q: 'How do I mirror a wall without mirroring the hosted elements?', a: 'Use Mirror → Pick Axis, then uncheck "Copy" for the hosted families…' },
    { q: 'What is the difference between a Group and an Assembly?', a: 'Groups are for repeated design elements inside one model; Assemblies…' },
    { q: 'How do I set up a sheet index schedule?', a: 'View → Schedules → Sheet List — add fields: Sheet Number, Name…' },
  ];
  return (
    <div className="flex h-full flex-col bg-[#070B18] px-2 py-3 text-left overflow-hidden">
      <div className="mb-2 text-center text-[9px] font-bold text-cyan">Q&A History</div>
      <div className="flex flex-col gap-2 overflow-hidden">
        {entries.map((e, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-2">
            <p className="text-[8px] font-semibold text-cyan leading-tight mb-1">{e.q}</p>
            <p className="text-[7.5px] text-slate-400 leading-tight line-clamp-2">{e.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
