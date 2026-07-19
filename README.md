# Talk 2 Lilian — Website

A calm, professional website for **Talk 2 Lilian** — the coaching practice of **Lilian Ugwu**. Tagline: *Support. Growth. Clarity.*

It's built with plain **HTML, CSS, and JavaScript** — no frameworks, no build
step. That means it's free to host, easy to edit, and will keep working for years.

> **A note on content:** Lilian Ugwu's photos are in place. Real client testimonials
> and her booking-calendar link still need to be added — see
> **[To finish before launch](#to-finish-before-launch)**.

---

## Pages

| File | What it is |
|------|------------|
| `index.html` | Home — welcome, services overview, approach, testimonials |
| `about.html` | About Lilian Ugwu — bio, approach, what to expect |
| `services.html` | Services — coaching, workshops, consultations + FAQ |
| `plans.html` | Subscription plans ($0 / $49 / $99 / $199) and one-time add-ons |
| `booking.html` | Booking — a request form that emails Lilian |
| `contact.html` | Contact form + email/phone/hours + safety disclaimer |
| `404.html` | Friendly "page not found" page |
| `css/styles.css` | All styling — re-theme via the variables at the top |
| `js/main.js` | Menu, animations, and form handling |
| `assets/favicon.svg` | The browser-tab icon |

*Planned next (not built yet): Blog / Resources and Privacy / Terms pages.*

---

## See it on your computer

Double-click `index.html` to open it in a browser. For forms and menus to behave
exactly as they will online, run a tiny local server instead (optional):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## To finish before launch

### 1. Photos  ✓ done
Lilian Ugwu's photos are in the `assets/` folder and already showing on the site:
- **Home hero** (`index.html`) → `assets/lilian-hero.jpg`
- **About page** (`about.html`) → `assets/lilian-portrait.jpg`

To swap in a different photo later, just replace the file of the same name.

### 2. Booking  ✓ done
`booking.html` uses a simple **request form** — clients pick a service, date, and
time, and the details are emailed to Lilian (once the form is connected in step 3).
No calendar tool or account is required.

### 3. Forms  ✓ connected
The Contact and Booking forms POST to Formspree (form `xgogkjlk`). Submissions are
emailed to whatever inbox is set on that Formspree form. To change the destination,
update it in the Formspree dashboard.

### 4. Real details
- **Email** — set to `hello@talk2lilian.com` (already applied across the site). See
  "Email setup" below for making that address deliver to a Gmail inbox.
- **Phone** — set to `+1 (619) 792-3662` (already applied).
- **Social links** — the footer `href="#"` links (Instagram / LinkedIn / Facebook)
  point nowhere yet; add her real profiles or remove the ones she doesn't use.
- **Testimonials** — replace the sample quotes on the Home page with real client
  feedback (with permission).

### 5. Domain & email setup (needs accounts — not code)
- **Custom domain (`talk2lilian.com`)** — the website files are ready; to
  put them at that address you buy the domain (Namecheap, Cloudflare, Google
  Domains, etc.) and point it at your host (GitHub Pages or Netlify — see below).
  The preview link is a temporary address, not the final domain.
- **Making `hello@talk2lilian.com` arrive in Gmail** — the address lives on the
  `talk2lilian.com` domain, so you first need email hosting for that domain (e.g.
  Google Workspace, Zoho Mail free tier, or your registrar's email + forwarding).
  Then set up **forwarding** so every message to `hello@talk2lilian.com` is copied to
  `uchenna.ogbu@gmail.com`. Optionally add it in Gmail under
  *Settings → Accounts → "Send mail as"* so she can also reply as
  `hello@talk2lilian.com` from Gmail. (Her personal Gmail is kept private — it is only
  the forwarding destination and never shown on the website.)

---

## Colours & fonts

Open `css/styles.css` and edit the values at the top under `:root` — `--primary`
(calm blue-teal), `--accent` (sage green), `--bg` (soft neutral), etc. Change
those few lines and the whole site re-themes.

---

## Putting it online (free) — Netlify

A `netlify.toml` is included, so Netlify knows exactly how to serve the site.
There are two ways to deploy; the **connected** one is recommended because the
site updates itself whenever the repo changes.

### Fastest: instant drag-and-drop
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag the whole project folder onto the page.
3. You get a live URL immediately (sign in with email/GitHub to keep it).
   *Note: this is a one-time snapshot — good for a quick look.*

### Recommended: connect the GitHub repo (auto-updates)
1. Sign up at **[netlify.com](https://app.netlify.com/signup)** (free) and click
   **Add new site → Import an existing project → GitHub**.
2. Authorize Netlify and pick the **`redwood`** repository.
3. Set **Branch to deploy** to `claude/aunt-website-pedenf` (or merge to `main`
   first and deploy `main`). Leave build command empty and publish directory `.`
   — the included `netlify.toml` already sets this. Click **Deploy**.
4. You get a URL like `random-name.netlify.app` in ~30 seconds. Rename it under
   **Site configuration → Change site name**.

### Adding Lilian Ugwu's photos (no coding)
Once connected, add the two photos straight from GitHub's website:
1. On the repo, open the **`assets`** folder → **Add file → Upload files**.
2. Drag in the two images, named exactly `lilian-portrait.jpg` and
   `lilian-hero.jpg`, and click **Commit changes**.
3. Netlify rebuilds automatically and the photos appear on the site.

### The custom domain (`talk2lilian.com`)
Buy the domain at any registrar, then in Netlify go to **Domain management → Add a
domain** and follow the DNS steps. Netlify provides free HTTPS automatically.

### Alternative host — GitHub Pages
Prefer GitHub Pages? On GitHub: **Settings → Pages**, set **Source** to "Deploy
from a branch", pick the branch and `/ (root)`, and **Save**. The site goes live
at `https://<username>.github.io/redwood/`.

---

## Accessibility & quality notes

- Responsive on phones, tablets, and desktops.
- Keyboard-navigable, with visible focus outlines and screen-reader labels.
- Respects "reduce motion" system settings.
- Includes a clear safety disclaimer (coaching is not a substitute for therapy or emergency care).

With warmth — good luck to Lilian Ugwu and Talk 2 Lilian. 🌿
