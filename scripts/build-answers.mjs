// Builds static answer pages from content/answers/*.md into dist/answers/.
// Only pages with `reviewed: true` in their frontmatter are published.
// Also writes dist/sitemap.xml, dist/robots.txt, and the /answers/ index.
// Run after `vite build` (see the "build" script in package.json).

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'content', 'answers');
const OUT = join(ROOT, 'dist');
const ANSWERS_OUT = join(OUT, 'answers');
const SITE = 'https://rvt-saber.app';

const esc = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function parse(file) {
  const raw = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${file}`);
  const meta = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, '$1');
  }
  return { meta, body: match[2] };
}

const STYLE = `
  *{box-sizing:border-box}
  body{margin:0;background:#070B18;color:#E2E8F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.7}
  a{color:#00EEFF}
  header,footer{padding:20px 24px;border-bottom:1px solid #2A3050}
  footer{border-top:1px solid #2A3050;border-bottom:none;font-size:12px;color:#6B7280;margin-top:48px}
  .wrap{max-width:760px;margin:0 auto;padding:32px 24px}
  .brand{color:#00EEFF;font-weight:800;text-decoration:none;letter-spacing:.5px}
  h1{font-size:2rem;line-height:1.25;margin:8px 0 12px;color:#fff}
  h2{font-size:1.3rem;margin:32px 0 8px;color:#fff}
  .meta{color:#9CA3AF;font-size:14px;margin-bottom:24px}
  pre{background:#131825;border:1px solid #2A3050;border-radius:8px;padding:16px;overflow-x:auto;font-size:13px}
  code{font-family:Consolas,monospace}
  table{border-collapse:collapse;width:100%;margin:16px 0}
  th,td{border:1px solid #2A3050;padding:8px;text-align:left;font-size:14px}
  .cta{background:#1A1F35;border:1px solid #2A3050;border-radius:12px;padding:20px;margin-top:40px}
  .list a{display:block;padding:14px 0;border-bottom:1px solid #2A3050;text-decoration:none}
  .list p{margin:4px 0 0;color:#9CA3AF;font-size:14px}
`;

function shell({ title, description, canonical, body, jsonLd }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)} | RVT Saber</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${esc(canonical)}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <style>${STYLE}</style>
  ${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>
<body>
  <header><a class="brand" href="/">⚔ RVT Saber</a></header>
  <main class="wrap">${body}</main>
  <footer class="wrap">
    <p>© ${new Date().getFullYear()} RVT Saber. Not affiliated with Autodesk, Inc. Revit® is a registered trademark of Autodesk.</p>
  </footer>
</body>
</html>`;
}

function answerPage(slug, meta, html) {
  const canonical = `${SITE}/answers/${slug}.html`;
  const body = `
    <p class="meta"><a href="/answers/">All Revit answers</a> · Last reviewed ${esc(meta.updated)}</p>
    <h1>${esc(meta.title)}</h1>
    ${html}
    <div class="cta">
      <strong>Have a different Revit question?</strong>
      <p>RVT Saber answers Revit, Dynamo, pyRevit, and family questions step by step. The apps are launching soon on iOS and Android.</p>
      <p><a href="/#pricing">See plans</a></p>
    </div>`;
  return shell({
    title: meta.title,
    description: meta.description,
    canonical,
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: meta.title,
      description: meta.description,
      dateModified: meta.updated,
      url: canonical,
      publisher: { '@type': 'Organization', name: 'RVT Saber', url: SITE },
    },
  });
}

function indexPage(pages) {
  const items = pages.map(p => `
    <a href="/answers/${esc(p.slug)}.html"><strong>${esc(p.meta.title)}</strong>
      <p>${esc(p.meta.description)}</p></a>`).join('');
  return shell({
    title: 'Revit Answers',
    description: 'Step-by-step answers to common Revit, Dynamo, and pyRevit questions.',
    canonical: `${SITE}/answers/`,
    body: `<h1>Revit Answers</h1>
      <p>Step-by-step answers to common Revit, Dynamo, and pyRevit questions.</p>
      <div class="list">${items}</div>`,
  });
}

function sitemap(pages) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    `${SITE}/`,
    `${SITE}/answers/`,
    ...pages.map(p => `${SITE}/answers/${p.slug}.html`),
  ];
  const entries = urls.map(u => `  <url><loc>${esc(u)}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  const files = readdirSync(SRC).filter(f => f.endsWith('.md')).sort();
  const all = await Promise.all(files.map(async f => {
    const { meta, body } = parse(join(SRC, f));
    return { slug: f.replace(/\.md$/, ''), meta, html: await marked.parse(body) };
  }));
  const published = all.filter(p => p.meta.reviewed === 'true');
  const skipped = all.length - published.length;

  mkdirSync(ANSWERS_OUT, { recursive: true });
  for (const p of published) {
    writeFileSync(join(ANSWERS_OUT, `${p.slug}.html`), answerPage(p.slug, p.meta, p.html));
  }
  writeFileSync(join(ANSWERS_OUT, 'index.html'), indexPage(published));
  writeFileSync(join(OUT, 'sitemap.xml'), sitemap(published));
  writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

  console.log(`answers: ${published.length} published, ${skipped} skipped (not reviewed)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
