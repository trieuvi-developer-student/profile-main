/**
 * assets/js/utils.js
 * Hàm tiện ích dùng chung cho các component template.
 */

export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

export function formatNumber(n) {
  return Number(n || 0).toLocaleString('vi-VN');
}

/**
 * Trả về markup <img> có ảnh dự phòng (fallback) khi file chưa tồn tại,
 * tương đương cơ chế file_exists() từng dùng ở bản PHP — nhưng ở phía
 * client nên dùng sự kiện onerror thay vì kiểm tra trước khi render.
 */
export function imgWithFallback({ src, alt, imgClass = '', fallbackHtml = '' }) {
  return `
    <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" class="${imgClass}"
         onerror="this.style.display='none'; this.nextElementSibling && (this.nextElementSibling.style.display='flex');">
    <span class="img-fallback" style="display:none;">${fallbackHtml}</span>
  `;
}
