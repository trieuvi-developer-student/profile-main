/**
 * assets/js/dropdown.js
 * Điều khiển mở/đóng menu popup (drawer). Dùng event delegation trên
 * document để không phụ thuộc thời điểm render.js chèn HTML vào trang.
 */

(function () {
  document.addEventListener('click', function (e) {
    const overlay = document.querySelector('[data-drawer-overlay]');
    if (!overlay) return;

    const trigger = e.target.closest('[data-drawer-trigger]');
    if (trigger) {
      e.stopPropagation();
      const isOpen = overlay.classList.contains('is-open');
      overlay.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      return;
    }

    // Bấm ra ngoài overlay (nền mờ) hoặc bấm 1 mục trong drawer -> đóng lại
    if (e.target === overlay || e.target.closest('.drawer__item')) {
      overlay.classList.remove('is-open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    const overlay = document.querySelector('[data-drawer-overlay]');
    if (overlay) overlay.classList.remove('is-open');
  });
})();
