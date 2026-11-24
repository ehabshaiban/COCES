document.addEventListener('DOMContentLoaded', () => {
  // 1) Dark / Light Theme Toggle
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('lino_theme') || 'light';

  const applyTheme = (mode) => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('lino_theme', mode);
    if (themeIcon) {
      themeIcon.className = mode === 'dark' ? 'sicon-sun text-xl' : 'sicon-moon text-xl';
    }
  };
  applyTheme(savedTheme);
  themeBtn?.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  // 2) Offer Countdown Timer
  document.querySelectorAll('[data-lino-countdown]').forEach((box) => {
    const rawDate = box.dataset.linoCountdown;
    const endTime = rawDate ? new Date(rawDate).getTime() : Date.now() + 3 * 864e5;
    const pad = (n) => String(n).padStart(2, '0');

    const tick = () => {
      let diff = Math.max(0, endTime - Date.now());
      const d = Math.floor(diff / 864e5); diff -= d * 864e5;
      const h = Math.floor(diff / 36e5);  diff -= h * 36e5;
      const m = Math.floor(diff / 6e4);   diff -= m * 6e4;
      const s = Math.floor(diff / 1e3);
      const elD = box.querySelector('[data-cd="d"]');
      const elH = box.querySelector('[data-cd="h"]');
      const elM = box.querySelector('[data-cd="m"]');
      const elS = box.querySelector('[data-cd="s"]');
      if (elD) elD.textContent = pad(d);
      if (elH) elH.textContent = pad(h);
      if (elM) elM.textContent = pad(m);
      if (elS) elS.textContent = pad(s);
    };
    tick();
    setInterval(tick, 1000);
  });

  // 3) FAQ Accordion
  document.querySelectorAll('.faq__q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const panel = item.querySelector('.faq__a');
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen);
      if (panel) {
        panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0';
      }
    });
  });

  // 4) Sticky Header & Back-to-Top FAB
  const header = document.getElementById('siteHeader');
  const fabTop = document.getElementById('fabTop');
  const onScroll = () => {
    header?.classList.toggle('is-stuck', window.scrollY > 8);
    fabTop?.classList.toggle('is-visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  fabTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 5) Salla Wishlist Live Counter Sync
  if (window.salla?.wishlist?.event) {
    salla.wishlist.event.onAdded(() => updateWishBadge(1));
    salla.wishlist.event.onRemoved(() => updateWishBadge(-1));
  }
  function updateWishBadge(delta) {
    const el = document.getElementById('linoWishCount');
    if (!el) return;
    const next = Math.max(0, (parseInt(el.textContent || '0', 10) || 0) + delta);
    el.textContent = next || '';
  }
});
