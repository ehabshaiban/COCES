// Home page specific enhancements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy-coupon]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.copyCoupon;
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code);
        if (window.salla?.notify) {
          salla.notify.success(salla.lang.get('lino.copied') || 'تم نسخ الكود!');
        }
      } catch (e) {}
    });
  });
});
