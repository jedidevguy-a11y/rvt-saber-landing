const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Brand */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">⚔</span>
              <span className="text-lg font-extrabold tracking-wide text-cyan">RVT Saber</span>
            </div>
            <p className="max-w-xs text-sm text-slate-500">
              Expert AI answers for Revit, Dynamo, pyRevit, ACC, Civil & more.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">App</p>
              <a href="#features"     className="hover:text-cyan transition-colors">Features</a>
              <a href="#screenshots"  className="hover:text-cyan transition-colors">Screenshots</a>
              <a href="#pricing"      className="hover:text-cyan transition-colors">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Legal</p>
              {/* These point to in-app routes; link to app deep links or hosted HTML as needed */}
              <a href="/privacy"  className="hover:text-cyan transition-colors">Privacy Policy</a>
              <a href="/terms"    className="hover:text-cyan transition-colors">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Contact</p>
              <a href="mailto:service@rvt-saber.app" className="hover:text-cyan transition-colors">Support</a>
              <a href="mailto:privacy@rvt-saber.app" className="hover:text-cyan transition-colors">Privacy</a>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <p>© {YEAR} RVT Saber. All rights reserved.</p>
          <p>
            Not affiliated with Autodesk, Inc.{' '}
            Revit® is a registered trademark of Autodesk.
          </p>
        </div>
      </div>
    </footer>
  );
}
