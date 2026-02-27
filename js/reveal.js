/* reveal.js — intersection observer scroll reveal */

const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
