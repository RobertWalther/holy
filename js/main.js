// ── nav scroll behavior ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── burger toggle ──
const burger = document.getElementById('burger');
const overlay = document.getElementById('navOverlay');

function openNav() {
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  overlay.classList.contains('open') ? closeNav() : openNav();
});
overlay.querySelectorAll('.nav-overlay__link, .nav-overlay__cta').forEach(el => {
  el.addEventListener('click', closeNav);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
