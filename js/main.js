// ═══════════════════════════════════════
// EcoTech Youth — Shared JS
// ═══════════════════════════════════════

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// Mark current page active in nav
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
    else a.classList.remove('active');
  });
});
