// theme.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.getElementById('Body');

  // Apply saved theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  // Toggle theme and save it
  toggle?.addEventListener('click', () => {
    body.classList.toggle('dark');
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
});
