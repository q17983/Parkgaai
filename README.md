# MeterMap HK — 香港咪錶即時地圖

> A production-ready Progressive Web App for real-time Hong Kong smart parking meter discovery. Better than HKeMeter.

---

## 🚀 Quick Deploy (5 minutes to live)

### Prerequisites
- [GitHub account](https://github.com)
- [Vercel account](https://vercel.com) (free)
- A custom domain (optional but recommended, e.g. `metermap.hk`)

---

### Step 1 — Push to GitHub

```bash
cd /Users/sai/hk-meter-app
git init
git add .
git commit -m "Initial release: MeterMap HK v7"
git remote add origin https://github.com/YOUR_USERNAME/metermap-hk.git
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"** → select your `metermap-hk` repo
3. Framework preset: **Other** (no framework)
4. Root directory: `/` (leave default)
5. Click **Deploy**

Vercel automatically reads `vercel.json` — the CORS rewrites are applied instantly.

### Step 3 — Custom Domain (optional)

In Vercel dashboard → Settings → Domains → Add `metermap.hk` or your chosen domain.

### Step 4 — PWA Icons

Generate proper icons at [realfavicongenerator.net](https://realfavicongenerator.net) or [maskable.app](https://maskable.app) and place:
- `/icons/icon-192.png` (192×192 px)
- `/icons/icon-512.png` (512×512 px)

Until then, the app works without them — install prompt simply won't show a custom icon.

---

## 📁 Project Structure

```
hk-meter-app/
├── index.html       ← Main PWA (single-file app)
├── manifest.json    ← PWA manifest (installability)
├── sw.js            ← Service worker (offline + caching)
├── vercel.json      ← CORS proxy + security headers
├── icons/
│   ├── icon-192.png ← PWA icon (generate this)
│   └── icon-512.png ← PWA icon (generate this)
└── README.md
```

---

## ✅ What's Fixed vs. v6.2 Proto

| Issue | v6.2 | v7 (This Build) |
|---|---|---|
| CORS proxy | ❌ `cors-anywhere.herokuapp.com` (unstable) | ✅ Vercel edge rewrite |
| Google Maps URL | ❌ Wrong domain (`googleusercontent.com`) | ✅ `maps.google.com/maps?daddr=` |
| localStorage cache | ❌ Never expires → stale data | ✅ 24-hour TTL with version key |
| PWA support | ❌ None | ✅ Manifest + service worker + install banner |
| Near Me GPS | ❌ None | ✅ One-tap geolocation |
| Dark mode | ❌ None | ✅ Toggle with dark map tiles |
| District jump | ❌ None | ✅ 13 districts quick-select |
| Cost calculator | ❌ None | ✅ Built into every popup |
| Loading UI | ❌ Silent failures | ✅ Animated overlay with status text |
| Error handling | ❌ None | ✅ Retry + error states |
| Stats bar | ❌ None | ✅ Live vacant/total count |
| Security headers | ❌ None | ✅ Via vercel.json |

---

## 🗺️ Data Sources

| Feed | URL | Refresh |
|---|---|---|
| Meter locations (static) | `data.gov.hk/td/psiparkingspaces/spaceinfo/parkingspaces.csv` | 24hr client cache |
| Live occupancy | `data.gov.hk/td/psiparkingspaces/occupancystatus/occupancystatus.csv` | Every 60 seconds |

Both routes are proxied through Vercel rewrites (`/api/spaces`, `/api/occupancy`) to eliminate CORS errors.

---

## 🧩 Tech Stack

| Layer | Technology |
|---|---|
| Map rendering | [Leaflet.js](https://leafletjs.com) 1.9.4 + Canvas renderer |
| Clustering | [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) |
| CSV parsing | [PapaParse](https://papaparse.com) 5.4.1 |
| Styling | [Tailwind CSS](https://tailwindcss.com) (CDN) |
| Map tiles | OpenStreetMap (inverted for dark mode) |
| Geocoding | [Nominatim](https://nominatim.org) (free, no API key) |
| Hosting | [Vercel](https://vercel.com) (free tier) |
| PWA | Web App Manifest + Service Worker |

---

## 🔮 Roadmap (Next Features)

### Tier 2 — Growth (Month 1–2)
- [ ] Heatmap mode: district-level vacancy colour overlay
- [ ] Time-of-day patterns: "This street is usually busy at 8pm"
- [ ] Share a spot: shareable URL per meter/street
- [ ] Offline mode: serve stale data when network is unavailable

### Tier 3 — Moat (Month 3+)
- [ ] Arrival time planner: "Will this be metered at 7:30pm?"
- [ ] Saved routes: set home/work, auto-show nearby meters
- [ ] Community trust score: sensor reliability rating per meter
- [ ] Telegram / WhatsApp alert bot
- [ ] Public JSON API for developers

---

## 🏆 Competitive Advantage vs. Alternatives

| Feature | HKeMeter (Official) | killbillhk.com | findmeter.app | **MeterMap HK** |
|---|---|---|---|---|
| Real-time sensor data | ✅ | ✅ | ✅ | ✅ |
| Smart clustering | ❌ | Unknown | Unknown | ✅ Green/Red |
| Background push alerts | ❌ Manual only | Unknown | Unknown | ✅ Auto |
| Street-level grouping | ❌ Per meter ID | Unknown | Unknown | ✅ |
| GPS "Near Me" | ❌ | Unknown | Unknown | ✅ |
| District quick-jump | ❌ | Unknown | Unknown | ✅ 13 districts |
| Cost estimator | ❌ | Unknown | Unknown | ✅ Built-in |
| Sensor fault crowdsourcing | ❌ | Unknown | Unknown | ✅ |
| PWA / Installable | ❌ (native app) | Unknown | Unknown | ✅ |
| Dark mode | ❌ | Unknown | Unknown | ✅ |
| No login required | ❌ Required | Unknown | ✅ | ✅ |
| Bilingual EN/TC | Partial | 中文 only | Unknown | ✅ Full |

---

## 📄 License

MIT — free to use, modify, and deploy. Attribution appreciated but not required.

---

*Built on HK Government Open Data (data.gov.hk). Not affiliated with the Hong Kong Transport Department.*
# parkgaai
