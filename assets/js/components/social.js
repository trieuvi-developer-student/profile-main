/**
 * assets/js/components/social.js
 * Section "Mạng xã hội" - grid card thống kê (like/follow) + nút Visit.
 */
import { escapeHtml, formatNumber } from '../utils.js';

export function renderSocialSection(profile, social) {
  const cards = social.platforms
    .map(
      (platform) => `
      <div class="social-card glass-hover animate-slide-up">
        <button class="social-card__share" type="button" title="Chia sẻ" data-copy="${escapeHtml(platform.url)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
        </button>

        <div class="social-card__icon">
          <img src="${escapeHtml(platform.icon)}" alt="${escapeHtml(platform.name)}">
        </div>

        <div class="social-card__name">${escapeHtml(platform.name)}</div>

        <div class="social-card__stats">
          <span>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.4-9.5-8.8C.6 8.8 2.3 5 6 5c2 0 3.5 1.1 4.5 2.4a1 1 0 0 0 1.5 0C13 6.1 14.5 5 16.5 5c3.7 0 5.4 3.8 3.5 7.2C19 16.6 12 21 12 21z"/></svg>
            ${formatNumber(platform.likes)}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
            ${formatNumber(platform.follows)}
          </span>
        </div>

        <a class="social-card__visit" href="${escapeHtml(platform.url)}" target="_blank" rel="noopener">
          Visit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
      </div>`
    )
    .join('');

  return `
    <div class="section-head">
      <span class="section-head__icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10z"/></svg>
      </span>
      <div>
        <div class="section-head__title">Mạng xã hội</div>
        <div class="section-head__subtitle">Kết nối với ${escapeHtml(profile.name)}</div>
      </div>
    </div>

    <div class="social-grid">
      ${cards}
    </div>
  `;
}
