// ==========================================================================
// SUNSET BAIL BONDS — SHARED CONTROLLER (6 COLOR WHEEL PALETTES + THEME)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;

  // 1. Color Wheel Palette Switcher (6 Colors: lime, amber, blue, orange, teal, purple)
  const savedColor = localStorage.getItem('sunset_color') || 'lime';
  htmlEl.setAttribute('data-color', savedColor);
  
  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    const colorVal = dot.getAttribute('data-c');
    if (colorVal === savedColor) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }

    dot.addEventListener('click', () => {
      const selectedColor = dot.getAttribute('data-c');
      htmlEl.setAttribute('data-color', selectedColor);
      localStorage.setItem('sunset_color', selectedColor);

      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // 2. Theme Toggling (Light / Dark)
  const savedTheme = localStorage.getItem('sunset_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('sunset_theme', newTheme);
    });
  }

  // 3. Language Switcher (EN / ES)
  const langEN = document.getElementById('langEN');
  const langES = document.getElementById('langES');

  function updateLanguage(lang) {
    if (lang === 'EN') {
      if (langEN) langEN.classList.add('active');
      if (langES) langES.classList.remove('active');
    } else {
      if (langES) langES.classList.add('active');
      if (langEN) langEN.classList.remove('active');
    }

    const translatableEls = document.querySelectorAll('[data-en][data-es]');
    translatableEls.forEach(el => {
      const text = lang === 'EN' ? el.getAttribute('data-en') : el.getAttribute('data-es');
      if (text) {
        el.textContent = text;
      }
    });
  }

  if (langEN && langES) {
    langEN.addEventListener('click', () => updateLanguage('EN'));
    langES.addEventListener('click', () => updateLanguage('ES'));
  }
});
