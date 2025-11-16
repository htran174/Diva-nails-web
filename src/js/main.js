// src/js/main.js
// Use the CDN Alpine that was loaded via <script src="/assets/alpine.min.js">
import { BOOKING_ENABLED } from "./config.js";
import { BIZ } from "./biz-data.js";

// Alpine is global from the CDN build
const A = window.Alpine;

// Set global stores so any component/page can read them
A.store("flags", { booking: BOOKING_ENABLED });
A.store("biz", BIZ);

document.addEventListener("DOMContentLoaded", () => {
  // Mark that reveal JS is loaded (used by CSS fail-safe)
  document.documentElement.classList.add("has-reveal-js");

  const elements = document.querySelectorAll("[data-reveal], .reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");

      setTimeout(() => {
        el.classList.add("reveal--in");
      }, delay);

      observer.unobserve(el);
    });
  }, { threshold: 0.15 });

  elements.forEach((el) => observer.observe(el));

  // ---- HERO PHONE (homepage) ----
  const heroPhone = document.querySelector("#hero-phone");
  if (heroPhone) {
    // visible text
    heroPhone.textContent = BIZ.phone || "";

    // tap-to-call link
    if (BIZ.phone_link) {
      heroPhone.href = `tel:${BIZ.phone_link}`;
    } else {
      heroPhone.removeAttribute("href");
    }
  }
});

window.Alpine.start();
