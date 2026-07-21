// Lourdes Abdillah — Portfolio — main.js
// Handles the mobile navigation toggle (all pages) and the
// hero "role rotator" on the home page.

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- hero role rotator (home page only) ---------- */
  const roleWord = document.getElementById('roleWord');
  const roleDot = document.getElementById('roleDot');

  if (roleWord && roleDot) {
    const roles = [
      { word: 'promo', dot: 'pink' },
      { word: 'danseres', dot: '' },
      { word: 'developer', dot: 'teal' },
    ];
    let i = 0;

    const setRole = (index) => {
      const r = roles[index];
      roleWord.style.opacity = 0;
      window.setTimeout(() => {
        roleWord.textContent = r.word;
        roleDot.className = 'dot' + (r.dot ? ' ' + r.dot : '');
        roleWord.style.opacity = 1;
      }, 180);
    };

    roleWord.style.transition = 'opacity 0.18s ease';
    setRole(0);

    window.setInterval(() => {
      i = (i + 1) % roles.length;
      setRole(i);
    }, 2200);
  }
});
