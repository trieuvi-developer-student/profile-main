/**
 * assets/js/main.js
 * Hiệu ứng ripple cho mọi nút có class .btn-ripple, kể cả nút được
 * render.js chèn vào sau (dùng event delegation).
 */

(function () {
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.btn-ripple');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const dot = document.createElement('span');

    dot.className = 'ripple-dot';
    dot.style.width = dot.style.height = size + 'px';
    dot.style.left = (e.clientX - rect.left - size / 2) + 'px';
    dot.style.top = (e.clientY - rect.top - size / 2) + 'px';

    target.appendChild(dot);
    window.setTimeout(() => dot.remove(), 500);
  });
})();
