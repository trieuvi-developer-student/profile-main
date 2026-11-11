/**
 * assets/js/copy-clipboard.js
 * Xử lý mọi nút "Sao chép / Copy" trong trang thông qua thuộc tính data-copy.
 */

(function () {
  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Copy thất bại:', err);
    }
    document.body.removeChild(textarea);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    fallbackCopy(text);
    return Promise.resolve();
  }

  function showFeedback(btn) {
    const label = btn.querySelector('[data-copy-label]');
    const originalText = label ? label.textContent : null;

    btn.classList.add('is-copied');
    if (label) label.textContent = 'Đã copy';

    window.setTimeout(() => {
      btn.classList.remove('is-copied');
      if (label && originalText) label.textContent = originalText;
    }, 1600);
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;

    const text = btn.getAttribute('data-copy');
    if (!text) return;

    copyText(text).then(() => showFeedback(btn));
  });
})();
