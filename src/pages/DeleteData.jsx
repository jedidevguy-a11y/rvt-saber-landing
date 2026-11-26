import { Link } from 'react-router-dom';

const MAILTO_FULL    = 'mailto:privacy@rvt-saber.app?subject=Account%20%26%20Data%20Deletion%20Request&body=Please%20delete%20my%20RVT%20Saber%20account%20and%20all%20associated%20data.%0A%0ARegistered%20email%3A%20';
const MAILTO_PARTIAL = 'mailto:privacy@rvt-saber.app?subject=Partial%20Data%20Deletion%20Request&body=Please%20delete%20the%20following%20data%20from%20my%20RVT%20Saber%20account%20(do%20not%20close%20my%20account)%3A%0A%0ARegistered%20email%3A%20%0A%0AData%20to%20delete%3A%20';

export default function DeleteData() {
  return (
    <div className="min-h-screen bg-bg text-slate-200">
      {/* Nav */}
      <header className="border-b border-border bg-bg/80 px-6 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <span className="text-xl">⚔</span>
          <span className="font-extrabold tracking-wide text-cyan">RVT Saber</span>
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10">
        <h1 className="mb-2 text-4xl font-black text-cyan">Data Deletion</h1>
        <p className="mb-10 text-sm text-slate-500">
          You have the right to delete your data at any time. Choose the option that fits your needs below.
        </p>

        {/* Option 1 — In-app full deletion */}
        <div className="mb-6 rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-lg border border-cyan/30">
              📱
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Delete Account &amp; All Data</h2>
              <p className="text-xs text-slate-500">Instant, no email required</p>
            </div>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            The fastest way to permanently remove your account and every piece of data we hold —
            questions, responses, conversation history, and your profile — is directly inside the app.
          </p>
          <ol className="mb-5 flex flex-col gap-2">
            {[
              'Open RVT Saber on your device',
              'Tap the Profile tab (bottom right)',
              'Scroll to the "Legal & Support" section',
              'Tap "Delete Account"',
              'Confirm when prompted',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan/20 text-[10px] font-bold text-cyan border border-cyan/30">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-xs text-yellow-300">
            Deletion is permanent and cannot be undone. If you have an active Pro subscription,
            cancel it in Apple App Store or Google Play billing settings first to avoid future charges.
          </div>
        </div>

        {/* Option 2 — Email full deletion */}
        <div className="mb-6 rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-lg border border-cyan/30">
              ✉
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Request Deletion by Email</h2>
              <p className="text-xs text-slate-500">If you no longer have access to the app</p>
            </div>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            If you can't access the app, send us an email and we will permanently delete your
            account and all associated data within 30 days.
          </p>
          <a
            href={MAILTO_FULL}
            className="block rounded-xl bg-cyan py-3 text-center text-sm font-bold text-black transition-opacity hover:opacity-85"
          >
            Send Full Deletion Request
          </a>
        </div>

        {/* Option 3 — Partial deletion */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-lg border border-cyan/30">
              🗂
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Request Partial Data Deletion</h2>
              <p className="text-xs text-slate-500">Keep your account, remove specific data</p>
            </div>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-slate-400">
            You can request removal of specific data without closing your account. Examples:
          </p>
          <ul className="mb-5 flex flex-col gap-1.5 text-sm text-slate-400">
            <li className="flex items-center gap-2"><span className="text-cyan">•</span> All Q&amp;A history</li>
            <li className="flex items-center gap-2"><span className="text-cyan">•</span> Specific conversation threads (Pro)</li>
            <li className="flex items-center gap-2"><span className="text-cyan">•</span> Your name or profile information</li>
          </ul>
          <a
            href={MAILTO_PARTIAL}
            className="block rounded-xl border border-border py-3 text-center text-sm font-semibold text-white transition-colors hover:border-cyan/40"
          >
            Send Partial Deletion Request
          </a>
        </div>

        {/* Response time notice */}
        <div className="rounded-2xl border border-border bg-card/50 p-5 text-sm text-slate-400">
          <p className="mb-1 font-semibold text-slate-300">Response time</p>
          In-app deletion is instant. Email requests are processed within <strong className="text-slate-200">30 days</strong>.
          For questions, contact <a href="mailto:privacy@rvt-saber.app" className="text-cyan hover:opacity-80">privacy@rvt-saber.app</a>.
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-sm text-cyan hover:opacity-80 transition-opacity">
            ← Back to RVT Saber
          </Link>
        </div>
      </main>
    </div>
  );
}
