/**
 * assets/js/components/hero.js
 * Cover full-width + avatar glow + tên gradient + badge xác minh
 * + username + số lượt xem + nút social nhanh.
 */
import { escapeHtml, formatNumber } from '../utils.js';

export function renderHero(profile, social) {
  const quickLinks = social.quickLinks
    .map(
      (link) => `
      <a class="hero__social-btn glass-dark glass-hover" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        <img src="${escapeHtml(link.icon)}" alt="${escapeHtml(link.name)}">
        ${escapeHtml(link.name)}
      </a>`
    )
    .join('');

  const badge = profile.verified
    ? `
      <span class="hero__badge-wrap" title="Đã xác minh">
        <svg class="hero__badge" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 2.1 3.2-.5 1 3.1 3 1.4-.9 3.1 1.7 2.8-2.4 2.2.3 3.2-3.2.3-1.6 2.8-3-1.2-3 1.2-1.6-2.8-3.2-.3.3-3.2-2.4-2.2 1.7-2.8-.9-3.1 3-1.4 1-3.1 3.2.5L12 2z"/>
          <path d="M9 12.5l2 2 4-4.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>`
    : '';

  return `
    <div class="hero__cover">
      <img src="${escapeHtml(profile.cover)}" alt="Cover"
           onerror="this.style.display='none'">
    </div>

    <div class="hero__content">
      <div class="hero__avatar-wrap">
        <span class="hero__avatar-glow"></span>
        <img class="hero__avatar" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.name)}"
             onerror="this.src='assets/images/icons/avatar-placeholder.svg'">
      </div>

      <div class="hero__name-wrap">
        <h1 class="hero__name">${escapeHtml(profile.name)}</h1>
        ${badge}
      </div>

      <div class="hero__meta">
        <span class="hero__pill glass-dark">${escapeHtml(profile.username)}</span>
        <span class="hero__pill glass-dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
          ${formatNumber(profile.views)}
        </span>
      </div>

      <div class="hero__domain">${escapeHtml(profile.domain)}</div>

      <div class="hero__social">
        ${quickLinks}
      </div>
    </div>
  `;
}
