import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By creating an account or using RVT Saber, you agree to these Terms of Service. If you do not agree, please do not use the app. We reserve the right to update these terms at any time with notice provided in the app.',
  },
  {
    title: '2. Description of Service',
    body: `RVT Saber is an AI-powered assistant specializing in Autodesk Revit, Dynamo, pyRevit, and related AEC software. We offer:

• Free Tier: Up to 20 AI queries per month, single-turn Q&A only.

• Pro Tier ($9.99/month): Unlimited queries, multi-turn conversations, and access to Claude Sonnet (a more capable AI model).`,
  },
  {
    title: '3. Account Registration',
    body: `You must:

• Provide accurate and complete registration information
• Keep your password secure and confidential
• Notify us immediately of any unauthorized account access
• Be at least 13 years of age to create an account

You are responsible for all activity that occurs under your account.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You agree not to:

• Use the service for any unlawful purpose
• Attempt to reverse-engineer, scrape, or extract data from the service
• Submit content that is harmful, abusive, or violates third-party rights
• Circumvent usage limits or access controls
• Resell or redistribute AI responses as your own product without attribution

We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: '5. AI-Generated Content Disclaimer',
    body: `RVT Saber provides AI-generated answers for informational purposes only.

• Responses may contain errors, outdated information, or inaccuracies.
• Do not rely solely on AI responses for safety-critical engineering decisions.
• Always verify important information against official Autodesk documentation.
• We are not responsible for decisions made based on AI-generated content.`,
  },
  {
    title: '6. Subscriptions and Billing',
    body: `Pro subscriptions are billed monthly at $9.99/month.

• Subscriptions renew automatically until cancelled.
• You may cancel at any time; access continues until the end of the billing period.
• Refunds are handled in accordance with App Store / Google Play policies.
• We reserve the right to change pricing with 30 days' notice.

In-app purchases are processed by Apple App Store or Google Play. Their terms apply.`,
  },
  {
    title: '7. Intellectual Property',
    body: `• RVT Saber, its logo, and branding are our intellectual property.
• AI responses are generated dynamically and are not owned by us or you.
• You retain ownership of the questions you submit.
• You grant us a license to process your inputs to provide the service.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by law:

• The service is provided "as is" without warranties of any kind.
• We are not liable for indirect, incidental, or consequential damages.
• Our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim.
• We do not guarantee uninterrupted or error-free service.`,
  },
  {
    title: '9. Termination',
    body: 'We may suspend or terminate your account if you violate these terms, for extended inactivity, or if we discontinue the service. You may delete your account at any time from the Profile screen. Upon termination, your data is deleted per our Privacy Policy.',
  },
  {
    title: '10. Governing Law',
    body: 'These terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration rather than in court, except where prohibited by law.',
  },
  {
    title: '11. Contact',
    body: 'Questions about these terms:\n\nEmail: legal@rvt-saber.app\nApp: RVT Saber',
  },
];

export default function Terms() {
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
        <h1 className="mb-1 text-4xl font-black text-cyan">Terms of Service</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: February 28, 2026</p>

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
