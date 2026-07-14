/* =========================================================
   Rivera Consulting — Site scripts
   Plain vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Mobile navigation toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is tapped (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Current year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Minimum date for booking (today) ---------- */
  var dateInput = document.getElementById("preferred-date");
  if (dateInput) {
    var today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  /* =========================================================
     Form handling
     ---------------------------------------------------------
     How the forms send messages:
     - Each <form> has a data-endpoint attribute.
     - If it still contains "YOUR_FORM_ID", the site is not
       connected to a form service yet, so we fall back to a
       friendly "email us directly" message instead of failing.
     - Once you paste a real Formspree (or similar) endpoint,
       submissions are POSTed as JSON and you get an email.
     See README.md → "Making the forms actually send email".
     ========================================================= */
  function handleForm(form) {
    var endpoint = form.getAttribute("data-endpoint") || "";
    var status = form.querySelector(".form-status");
    var submitBtn = form.querySelector('[type="submit"]');
    var notConnected = endpoint.indexOf("YOUR_FORM_ID") !== -1 || endpoint === "";

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      if (notConnected) {
        showStatus(status, "err",
          "This form isn’t connected to email yet. Please reach us directly at " +
          "<a href=\"mailto:hello@riveraconsulting.com\">hello@riveraconsulting.com</a> " +
          "or call (555) 012-3456. (Site owner: see README to connect the form.)");
        return;
      }

      var original = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending…"; }

      var data = Object.fromEntries(new FormData(form).entries());

      fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            showStatus(status, "ok",
              "Thank you! Your message has been sent. We’ll get back to you within one business day.");
          } else {
            return res.json().then(function (j) {
              throw new Error((j && j.error) || "Submission failed");
            });
          }
        })
        .catch(function () {
          showStatus(status, "err",
            "Sorry, something went wrong. Please email us at " +
            "<a href=\"mailto:hello@riveraconsulting.com\">hello@riveraconsulting.com</a>.");
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = original; }
        });
    });
  }

  function showStatus(el, kind, html) {
    if (!el) return;
    el.className = "form-status show " + kind;
    el.innerHTML = html;
    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.querySelectorAll("form[data-endpoint]").forEach(handleForm);
})();
