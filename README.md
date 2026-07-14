# Clear Path Mentorship — Website

A calm, professional website for **Clear Path Mentorship** — the counseling &
mentorship practice of **Dr. Lilian Ugwu**. Tagline: *Support. Growth. Clarity.*

It's built with plain **HTML, CSS, and JavaScript** — no frameworks, no build
step. That means it's free to host, easy to edit, and will keep working for years.

> **A note on content:** the words and testimonials are a thoughtful starting
> point. Real client testimonials, Dr. Ugwu's photos, and her booking-calendar
> link still need to be added — see **[To finish before launch](#to-finish-before-launch)**.

---

## Pages

| File | What it is |
|------|------------|
| `index.html` | Home — welcome, services overview, approach, testimonials |
| `about.html` | About Dr. Lilian Ugwu — bio, approach, what to expect |
| `services.html` | Services — counseling, mentorship, workshops, consultations + FAQ |
| `plans.html` | Subscription plans ($0 / $49 / $99 / $199) and one-time add-ons |
| `booking.html` | Booking — Calendly placeholder + a working request form |
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

### 1. Add Dr. Ugwu's photos  ← needed
There are two photo spots with placeholders (search the HTML for `PHOTO:`):
- **Home hero** (`index.html`) — a warm candid photo
- **About page** (`about.html`) — a clear portrait / headshot

To add a photo:
1. Put the image in the `assets/` folder (e.g. `assets/lilian-portrait.jpg`).
2. Replace the `<div class="photo-placeholder">…</div>` block with:
   ```html
   <img src="assets/lilian-portrait.jpg" alt="Dr. Lilian Ugwu" />
   ```

### 2. Connect the booking calendar  ← needed
`booking.html` has a placeholder where a **Calendly / Acuity** calendar will go.
When Dr. Ugwu shares her booking link, replace the `calendar-embed` block with the
embed code from her account (there are step-by-step comments in the file). Until
then, the request form below it works immediately.

### 3. Make the forms send email  ← needed
The **Contact** and **Booking** forms are pre-wired for the free
[Formspree](https://formspree.io) service:
1. Sign up at [formspree.io](https://formspree.io) with the email that should
   **receive** enquiries.
2. Create a form; Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `contact.html` and `booking.html`, find `data-endpoint="https://formspree.io/f/YOUR_FORM_ID"`
   and replace `YOUR_FORM_ID` with your real code.

Until this is done, the forms show a friendly "email us directly" message.

### 4. Real details to confirm
- **Email** — the placeholder is `hello@clearpathmentorship.com`. Replace it
  everywhere with Dr. Ugwu's real address (find-and-replace across all files).
- **Phone** — set to `+1 (619) 792-3662` (already applied).
- **Social links** — the footer `href="#"` links (Instagram / LinkedIn / Facebook)
  point nowhere yet; add her real profiles or remove the ones she doesn't use.
- **Testimonials** — replace the sample quotes on the Home page with real client
  feedback (with permission).

---

## Colours & fonts

Open `css/styles.css` and edit the values at the top under `:root` — `--primary`
(calm blue-teal), `--accent` (sage green), `--bg` (soft neutral), etc. Change
those few lines and the whole site re-themes.

---

## Putting it online (free)

### Option A — GitHub Pages
1. Push these files to the default branch.
2. On GitHub: **Settings → Pages**, set **Source** to "Deploy from a branch",
   pick the branch and `/ (root)`, and **Save**.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Option B — Netlify (drag & drop)
Sign up at [netlify.com](https://netlify.com), drag this folder onto the deploy
area (or connect the repo), and you get a live URL instantly. Add a custom domain
(e.g. `clearpathmentorship.com`) later from any registrar.

---

## Accessibility & quality notes

- Responsive on phones, tablets, and desktops.
- Keyboard-navigable, with visible focus outlines and screen-reader labels.
- Respects "reduce motion" system settings.
- Includes a clear safety disclaimer (counseling/mentorship is not emergency care).

With warmth — good luck to Dr. Ugwu and Clear Path Mentorship. 🌿
