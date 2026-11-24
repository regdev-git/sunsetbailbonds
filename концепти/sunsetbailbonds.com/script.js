// ==========================================================================
// SUNSET BAIL BONDS — INTERACTION LOGIC (VARIANTS 1 AND 2 ONLY)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;

  // Variant Switching (1 and 2)
  const variantBtns = document.querySelectorAll('.variant-btn');
  variantBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-v');
      htmlEl.setAttribute('data-variant', v);
      
      variantBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Theme Toggling (Light / Dark)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
  });

  // Language Switcher (EN / ES)
  const langEN = document.getElementById('langEN');
  const langES = document.getElementById('langES');

  function updateLanguage(lang) {
    if (lang === 'EN') {
      langEN.classList.add('active');
      langES.classList.remove('active');
    } else {
      langES.classList.add('active');
      langEN.classList.remove('active');
    }

    const translatableEls = document.querySelectorAll('[data-en][data-es]');
    translatableEls.forEach(el => {
      const text = lang === 'EN' ? el.getAttribute('data-en') : el.getAttribute('data-es');
      if (text) {
        el.textContent = text;
      }
    });
  }

  langEN.addEventListener('click', () => updateLanguage('EN'));
  langES.addEventListener('click', () => updateLanguage('ES'));
});
