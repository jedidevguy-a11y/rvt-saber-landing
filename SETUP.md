# RVT Saber Landing Page — Setup & Deploy

## One-time setup

```bash
cd rvt-saber-landing
npm install
```

## Run locally

```bash
npm run dev
# → http://localhost:5173
```

## Deploy to GitHub Pages (with custom domain rvt-saber.app)

### 1. Create a GitHub repo
Create a new **public** repo at github.com — e.g. `rvt-saber-landing`.

### 2. Push the code
```bash
git init
git add .
git commit -m "Initial landing page"
git remote add origin https://github.com/YOUR_USERNAME/rvt-saber-landing.git
git push -u origin main
```

### 3. Deploy
```bash
npm run deploy
```
This runs `vite build` then `gh-pages -d dist`, pushing the built site to the
`gh-pages` branch automatically.

### 4. Enable GitHub Pages
In your repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`
- Custom domain: `rvt-saber.app`
- Check **Enforce HTTPS**

### 5. Point your DNS to GitHub Pages
At your domain registrar (Namecheap, Cloudflare, etc.) add these records:

| Type  | Name | Value                |
|-------|------|----------------------|
| A     | @    | 185.199.108.153      |
| A     | @    | 185.199.109.153      |
| A     | @    | 185.199.110.153      |
| A     | @    | 185.199.111.153      |
| CNAME | www  | YOUR_USERNAME.github.io |

DNS propagation can take up to 24 hours. GitHub will provision the HTTPS
certificate automatically once DNS is verified.

## Future deploys

Just run `npm run deploy` from the project directory — that's it.

## Update App Store / Play Store URLs

Edit the constant at the top of `src/components/Hero.jsx` and
`src/components/Pricing.jsx`:

```js
const APP_STORE_URL  = 'https://apps.apple.com/app/rvt-saber/id123456789';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.rvtsaber';
```

Then redeploy with `npm run deploy`.

## Add YouTube Shorts

Once you've published a Short, grab the 11-character video ID from the URL:
`https://youtube.com/shorts/dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

Edit `src/components/Screenshots.jsx` and fill in `youtubeId` for the video items:

```js
{ type: 'video', label: 'Voice Input Demo', youtubeId: 'dQw4w9WgXcQ' },
```

The placeholder card disappears automatically and the embed takes its place.
Redeploy with `npm run deploy`.
