/**
 * assets/js/components/posts.js
 */
import { escapeHtml } from '../utils.js';

export function renderPostsSection(posts) {
  const body = posts.length
    ? `<div class="post-list">
        ${posts
          .map(
            (post) => `
          <a class="post-card glass-hover" href="${escapeHtml(post.url)}">
            <div class="post-card__title">${escapeHtml(post.title)}</div>
            <div class="post-card__excerpt">${escapeHtml(post.excerpt)}</div>
          </a>`
          )
          .join('')}
      </div>`
    : `<div class="empty-state">Chưa có bài đăng nào. Quay lại sau nhé.</div>`;

  return `
    <div class="section-head">
      <span class="section-head__icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
      </span>
      <div>
        <div class="section-head__title">Bài đăng</div>
        <div class="section-head__subtitle">Nội dung mới nhất từ Dori</div>
      </div>
    </div>
    ${body}
  `;
}
