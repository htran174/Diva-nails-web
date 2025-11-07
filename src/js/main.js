import Alpine from "alpinejs";
import { BOOKING_ENABLED } from "./config.js";

window.Alpine = Alpine;
Alpine.store('flags', { booking: BOOKING_ENABLED });
Alpine.start();

// simple toggle: add 'hidden' to any [data-booking] when disabled
document.addEventListener('DOMContentLoaded', () => {
  if (!BOOKING_ENABLED) document.querySelectorAll('[data-booking]').forEach(el => el.classList.add('hidden'));
});
