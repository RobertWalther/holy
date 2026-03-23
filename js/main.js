// ── nav scroll behavior ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ── nav CTA: show when hero yellow button leaves viewport ──
const heroCta = document.querySelector('.hero__actions .btn-yellow');
if (heroCta) {
  const ctaObserver = new IntersectionObserver((entries) => {
    nav.classList.toggle('cta-visible', !entries[0].isIntersecting);
  }, { threshold: 0 });
  ctaObserver.observe(heroCta);
}

// ── js class (enables reveal animations) ──
document.documentElement.classList.replace('no-js', 'js');

// ── scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));
