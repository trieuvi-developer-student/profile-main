/**
 * Khu vực tiện ích. Music Player mở workspace riêng thay vì điều hướng ra ngoài.
 */
import { escapeHtml } from '../utils.js';

export function renderUtilitiesSection(utilities) {
  const otherCards = utilities.map((item) => `
    <a class="utility-card glass-hover" href="${escapeHtml(item.url)}">
      <span class="utility-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg></span>
      ${escapeHtml(item.name)}
    </a>`).join('');

  return `
    <div class="section-head">
      <span class="section-head__icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2z"/></svg></span>
      <div><div class="section-head__title">Tiện ích</div><div class="section-head__subtitle">Những trải nghiệm nhỏ được Dori xây dựng</div></div>
    </div>
    <div class="utility-grid">
      <button class="utility-card utility-card--music glass-hover" type="button" data-open-music>
        <span class="utility-card__icon utility-card__icon--music"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>
        <span class="utility-card__copy"><strong>Music Player</strong><small>Nghe playlist của Dori</small></span>
        <svg class="utility-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      ${otherCards}
    </div>
  `;
}
