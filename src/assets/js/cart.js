// Cart page submit binding
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('cart-submit');
  submitBtn?.addEventListener('click', () => {
    if (window.salla?.cart) {
      salla.cart.submit();
    }
  });
});
