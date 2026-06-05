// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal-on-scroll: tag the elements we want to animate in
const revealTargets = document.querySelectorAll(
  ".section__head, .work-card, .about__lead, .about__body, .contact"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

// Appointment form (front-end only — no backend yet)
const apptForm = document.getElementById("appt-form");
if (apptForm) {
  apptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("appt-note").hidden = false;
    apptForm.reset();
  });
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => io.observe(el));
