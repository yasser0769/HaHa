// Back to top button behavior
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Light/Dark mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('dark', savedTheme === 'dark');
  toggle.textContent = savedTheme === 'dark' ? '☾' : '☀';
}
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
  toggle.textContent = newTheme === 'dark' ? '☾' : '☀';
  localStorage.setItem('theme', newTheme);
});
