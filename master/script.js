// простая логика меню, smooth scroll и имитация отправки формы
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle && navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
      }
    });
  });

  // текущий год в футере
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
});


