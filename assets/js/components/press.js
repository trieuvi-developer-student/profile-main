/**
 * assets/js/components/press.js
 * Block "Xuất hiện trên báo chí" - liên kết tới bài viết truyền thông
 * nhắc đến Dori. Dữ liệu lấy từ assets/js/data.js (export const press).
 */
import { escapeHtml } from '../utils.js';

export function renderPressSection(press) {
  if (!press || !press.url) return '';

  return `
    <a class="press-card glass-hover btn-ripple animate-slide-up" href="${escapeHtml(press.url)}" target="_blank" rel="noopener noreferrer">
      <span class="press-card__badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M7 8h6M7 12h10M7 16h10"/>
          <path d="M17 8h.01"/>
        </svg>
      </span>

      <span class="press-card__body">
        <span class="press-card__label">Xuất hiện trên báo chí</span>
        <span class="press-card__title">${escapeHtml(press.title)}</span>
        <span class="press-card__source">${escapeHtml(press.source)}</span>
      </span>

      <span class="press-card__arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </span>
    </a>
  `;
}
