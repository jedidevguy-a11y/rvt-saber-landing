import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: '1. Introduction',
    body: 'RVT Saber ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the RVT Saber mobile application.',
  },
  {
    title: '2. Information We Collect',
    body: `We collect the following information:

• Account Information: Your name, email address, and password when you register.

• Usage Data: The questions you submit, the AI responses generated, and your subscription tier.

• Device Information: Device type, operating system, and app version for troubleshooting.

• Conversation History: For Pro subscribers, we store your conversation threads to enable multi-turn chat.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use your information to:

• Provide and operate the RVT Saber service
• Process your questions through our AI system
• Track your monthly query usage (Free tier)
• Manage your subscription and billing
• Send transactional emails (password reset, email verification)
• Improve our service and troubleshoot issues`,
  },
  {
    title: '4. Third-Party Service Providers',
    body: `We share your data with the following processors:

• Supabase (supabase.com) — Authentication, database storage, and backend infrastructure. Data may be stored in the United States.

• Anthropic (anthropic.com) — Your questions are sent to Anthropic's Claude AI to generate responses. Anthropic's privacy policy applies to data processed by their API.

• RevenueCat (revenuecat.com) — Subscription and in-app purchase management.

We do not sell your personal data to third parties.`,
  },
  {
    title: '5. Data Retention',
    body: `• Account data is retained until you delete your account.
• Free tier Q&A history is retained for 90 days.
• Pro conversation threads are retained until deleted by you or your account is closed.
• We may retain anonymized usage statistics indefinitely.`,
  },
  {
    title: '6. Your Rights',
    body: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your account and data
• Export your data in a portable format
• Opt out of non-essential communications

To exercise these rights, contact us at privacy@rvt-saber.app.`,
  },
  {
    title: '7. Account & Data Deletion',
    body: `You can permanently delete your account and all associated data directly within the app — no email required.

How to delete your account:

1. Open the Profile tab
2. Scroll to the "Legal & Support" section
3. Tap "Delete Account"
4. Confirm when prompted

What gets deleted immediately:
• Your account credentials and profile
• All questions and AI responses
• All conversation threads (Pro)

Important notes:
• Deletion is permanent and cannot be undone.
• If you have an active Pro subscription, cancel it through your app store billing settings (Apple App Store or Google Play) before deleting your account to avoid future charges. Deleting your RVT Saber account does not automatically cancel an in-app subscription.
• Anonymized, non-identifiable usage statistics may be retained for analytics purposes.`,
  },
  {
    title: '8. Security',
    body: 'We implement industry-standard security measures including encrypted data transmission (TLS), hashed passwords, and row-level security on all database tables. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: "9. Children's Privacy",
    body: 'RVT Saber is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, contact us immediately.',
  },
  {
    title: '10. Changes to This Policy',
    body: 'We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy in the app and updating the "Last updated" date above. Continued use of the app after changes constitutes acceptance.',
  },
  {
    title: '11. Contact Us',
    body: `For privacy-related questions or requests:

Email: privacy@rvt-saber.app
App: RVT Saber
Developer: JediDevGuy`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg text-slate-200">
      {/* Nav */}
      <header className="border-b border-border bg-bg/80 px-6 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <span className="text-xl">⚔</span>
          <span className="font-extrabold tracking-wide text-cyan">RVT Saber</span>
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h1 className="mb-1 text-4xl font-black text-cyan">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: March 14, 2026</p>

        <div className="flex flex-col gap-4">
          {SECTIONS.map(s => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="mb-3 text-base font-bold text-slate-100">{s.title}</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
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
