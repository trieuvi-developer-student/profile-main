/**
 * assets/js/tabbar.js
 * Điều khiển chuyển đổi giữa các trang con (Cá nhân / Thanh toán / Tiện ích / Bài đăng).
 * Dùng event delegation trên document để hoạt động đúng với mọi nút có
 * data-tab-target, kể cả những nút được render.js chèn vào sau (navbar,
 * tabbar chữ, drawer menu đều dùng chung thuộc tính này).
 */

(function () {
  function activateTab(tabId) {
    document.querySelectorAll('[data-tab-page]').forEach((page) => {
      page.classList.toggle('is-active', page.getAttribute('data-tab-page') === tabId);
    });

    document.querySelectorAll('[data-tab-target]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-tab-target') === tabId);
    });

    const overlay = document.querySelector('[data-drawer-overlay]');
    if (overlay) overlay.classList.remove('is-open');
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-tab-target]');
    if (!btn) return;
    activateTab(btn.getAttribute('data-tab-target'));
  });
})();
