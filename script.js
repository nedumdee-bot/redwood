// Pearlsom Esthetic — interactions

document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a link is tapped
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Booking form (front-end only demo — no backend wired up yet)
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.className = 'form-status';

      if (!form.checkValidity()) {
        status.textContent = 'Please fill in your name, email and a service.';
        status.classList.add('error');
        form.reportValidity();
        return;
      }

      const name = (document.getElementById('name').value || '').trim();
      status.textContent = `Thank you${name ? ', ' + name : ''}! We've received your request and will be in touch soon.`;
      status.classList.add('success');
      form.reset();
    });
  }

  // Gallery category filtering
  const filters = document.getElementById('galleryFilters');
  const grid = document.getElementById('galleryGrid');
  if (filters && grid) {
    const items = Array.from(grid.querySelectorAll('.gallery-item'));
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const filter = btn.dataset.filter;

      filters.querySelectorAll('.filter-btn').forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });

      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !show);
        if (show) {
          // restart the fade-in animation
          item.style.animation = 'none';
          void item.offsetWidth;
          item.style.animation = '';
        }
      });
    });
  }

  // Reveal-on-scroll for cards & sections
  const revealTargets = document.querySelectorAll(
    '.service-card, .about-text, .about-visual, .gallery-item, .section-head, .contact-form'
  );
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
});
