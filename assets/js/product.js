// Single product page hooks
document.addEventListener('DOMContentLoaded', () => {
  if (window.salla?.product?.event) {
    salla.product.event.onPriceUpdated((res) => {
      // Price automatically handled by Twilight components
    });
  }
});
