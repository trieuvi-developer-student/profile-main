/**
 * assets/js/components/drawer.js
 * Menu popup dạng kính mờ (glass) hiện ra khi bấm avatar user.
 */
import { escapeHtml } from '../utils.js';

export function renderDrawer(profile, social) {
  const quickLinks = social.quickLinks
    .map(
      (link) => `
      <a class="drawer__item" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        <img src="${escapeHtml(link.icon)}" alt="${escapeHtml(link.name)}">
        ${escapeHtml(link.name)}
      </a>`
    )
    .join('');

  return `
    <div class="drawer glass-dark animate-scale-in">
      <div class="drawer__header">
        <img class="drawer__header-avatar" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.name)}"
             onerror="this.src='assets/images/icons/avatar-placeholder.svg'">
        <div>
          <div class="drawer__header-name">${escapeHtml(profile.name)}</div>
          <div class="drawer__header-username">${escapeHtml(profile.username)}</div>
        </div>
      </div>

      <div class="drawer__list">
        <button class="drawer__item" type="button" data-tab-target="personal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
          Cá nhân
        </button>
        <button class="drawer__item" type="button" data-tab-target="payment">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
          Thanh toán
        </button>
        <button class="drawer__item" type="button" data-tab-target="posts">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
          Bài đăng
        </button>
        <button class="drawer__item" type="button" data-tab-target="utilities">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2z"/></svg>
          Tiện ích
        </button>
        ${quickLinks}
      </div>
    </div>
  `;
}
