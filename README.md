# Rivera Consulting — Website

A clean, fast, multi-page website for a professional-services business.
It's built with plain **HTML, CSS, and JavaScript** — no frameworks, no build
step. That means it's cheap (free) to host, easy to edit, and will keep working
for years.

> **This is a starter you customize.** All the names, text, prices, and contact
> details are friendly placeholders for a fictional "Rivera Consulting / Jane
> Rivera". Follow **[Make it yours](#make-it-yours)** below to turn it into your
> aunt's real website.

---

## Pages

| File | What it is |
|------|------------|
| `index.html` | Home page — hero, services preview, how it works, testimonials |
| `about.html` | About / bio page |
| `services.html` | Services & pricing, plus FAQ |
| `contact.html` | Contact form + email/phone/hours |
| `booking.html` | "Book a call" scheduling request form |
| `404.html` | Friendly "page not found" page |
| `css/styles.css` | All styling (one file, easy to re-theme) |
| `js/main.js` | Menu, animations, and form handling |
| `assets/favicon.svg` | The little icon in the browser tab |

---

## See it on your computer

Just open `index.html` in a web browser by double-clicking it — that's enough to
look around.

For the forms and menus to behave exactly like they will online, run a tiny
local server instead (optional):

```bash
# From inside this folder:
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

---

## Make it yours

You don't need to be a coder. Open the `.html` files in any text editor
(even Notepad or TextEdit) and change the words. Here's the checklist:

### 1. Name, tagline & bio
- **Business name** "Rivera Consulting" appears in the header and footer of every
  page, and in the `<title>` at the top. Find-and-replace it across all files.
- **Her name & story** live in `index.html` (hero) and `about.html`.
- **The logo letter** is the "R" in the little coloured square (search for
  `class="mark"`). Change it to her initial.

### 2. Contact details  ← important
These placeholders appear on several pages — replace **all** of them:
- Email: `hello@riveraconsulting.com`
- Phone: `(555) 012-3456` **and** the link version `+15550123456`
- Hours & area: on `contact.html`
- Social links: the `href="#"` links in every footer (LinkedIn / Instagram /
  Facebook). Paste her real profile URLs, or delete the ones she doesn't use.

### 3. Services & prices
Edit `services.html` — change the service names, descriptions, and the prices
(e.g. `$250`). The home page (`index.html`) also lists three services; keep them
roughly in sync.

### 4. A photo of your aunt
`about.html` has a placeholder panel with her initials. To use a real photo:
1. Put the image in the `assets/` folder (e.g. `assets/jane.jpg`).
2. In `about.html`, find the `<div ... >JR</div>` block and replace it with:
   ```html
   <img src="assets/jane.jpg" alt="Jane Rivera" style="border-radius:12px;" />
   ```

### 5. Re-theme the colours (optional)
Open `css/styles.css` and edit the values at the very top under `:root`
(`--primary`, `--accent`, `--bg`, etc.). Change those few lines and the whole
site updates.

---

## Making the forms actually send email

The **Contact** and **Booking** forms are ready to go, but a static website
can't send email by itself — it needs a free form service to relay messages.
The site is pre-wired for **[Formspree](https://formspree.io)** (free tier is
plenty for a small business):

1. Sign up at [formspree.io](https://formspree.io) with the email address where
   you want to **receive** enquiries.
2. Create a new form — Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
3. In **`contact.html`** and **`booking.html`**, find this line:
   ```html
   <form data-endpoint="https://formspree.io/f/YOUR_FORM_ID" novalidate>
   ```
   and replace `YOUR_FORM_ID` with your real code (e.g. `abcdwxyz`).

That's it — submissions now arrive in your inbox. Until you do this, the forms
show a friendly "please email us directly" message instead of failing silently.

> Any similar service (Getform, Basin, Web3Forms) works the same way — just paste
> its endpoint into the `data-endpoint` attribute.

### Optional: a real booking calendar
If she'd rather let people pick a slot from a live calendar, create a free
[Calendly](https://calendly.com) account and either:
- replace the booking **form** in `booking.html` with your Calendly embed code, or
- point the "Book a call" buttons at your Calendly link.

---

## Putting it online (free)

Because it's just files, hosting is easy and free. Two good options:

### Option A — GitHub Pages (this repo is already on GitHub)
1. Push these files to the repository's default branch.
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to "Deploy from a branch", pick your branch and the `/ (root)`
   folder, and **Save**.
4. After a minute, your site is live at
   `https://<username>.github.io/<repo>/`.

### Option B — Netlify or Cloudflare Pages (drag & drop)
1. Go to [netlify.com](https://netlify.com) (free) and sign up.
2. Drag this whole folder onto the deploy area, or connect the GitHub repo.
3. You get a live URL instantly, and can add a custom domain later.

### A custom domain (e.g. `riveraconsulting.com`)
Buy a domain from any registrar (Namecheap, Cloudflare, Google Domains, etc.),
then follow your host's "custom domain" instructions to point it at the site.

---

## Accessibility & quality notes

- Works on phones, tablets, and desktops (responsive).
- Keyboard-navigable, with visible focus outlines and screen-reader labels.
- Respects "reduce motion" system settings.
- Fast: two small local files plus one web font. No trackers.

Enjoy — and good luck to your aunt's business! 🌱
