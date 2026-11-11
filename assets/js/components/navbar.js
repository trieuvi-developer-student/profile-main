/**
 * assets/js/components/navbar.js
 * Navbar dạng pill nổi: avatar + tên brand, capsule 4 icon điều hướng,
 * avatar user (trigger mở drawer).
 */
import { escapeHtml } from '../utils.js';

export function renderNavbar(profile) {
  return `
    <div class="navbar__brand">
      <img class="navbar__brand-avatar" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.name)}"
           onerror="this.src='assets/images/icons/avatar-placeholder.svg'">
      <span class="navbar__brand-name">${escapeHtml(profile.name)}</span>
    </div>

    <nav class="navbar__nav" aria-label="Điều hướng chính">
      <button class="navbar__nav-btn is-active" type="button" data-tab-target="personal" title="Cá nhân">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
        <span class="navbar__nav-label">Cá nhân</span>
      </button>
      <button class="navbar__nav-btn" type="button" data-tab-target="payment" title="Thanh toán">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
        <span class="navbar__nav-label">Thanh toán</span>
      </button>
      <button class="navbar__nav-btn" type="button" data-tab-target="utilities" title="Tiện ích">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2z"/></svg>
        <span class="navbar__nav-label">Tiện ích</span>
      </button>
      <button class="navbar__nav-btn" type="button" data-tab-target="posts" title="Bài đăng">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        <span class="navbar__nav-label">Bài đăng</span>
      </button>
    </nav>

    <button class="navbar__user" type="button" data-drawer-trigger aria-haspopup="true" aria-expanded="false" title="Menu">
      <img class="navbar__user-avatar" src="${escapeHtml(profile.avatar)}" alt="User"
           onerror="this.src='assets/images/icons/avatar-placeholder.svg'">
      <span class="navbar__user-dot"></span>
    </button>
  `;
}
