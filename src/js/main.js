// src/js/main.js
// Use the CDN Alpine that was loaded via <script src="/assets/alpine.min.js">

import { BOOKING_ENABLED } from "./config.js";
import { BIZ } from "./biz-data.js";

// Alpine is global from the CDN build
const A = window.Alpine;

// Set global stores so any component/page can read them
A.store("flags", { booking: BOOKING_ENABLED });
A.store("biz", BIZ);

// Reveal-on-scroll (kept as-is)
document.addEventListener("DOMContentLoaded", () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const els = document.querySelectorAll('[data-reveal]');
  els.forEach(el => el.classList.add('reveal-init'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        e.target.classList.remove('reveal-init');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  els.forEach(el => io.observe(el));
});
