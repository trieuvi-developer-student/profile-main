/**
 * assets/js/components/payment.js
 * Section Thanh toán (Donate): box nội dung chuyển khoản + danh sách
 * card ngân hàng (Techcombank, Vietcombank, ZaloPay).
 * Toàn bộ dữ liệu lấy từ assets/js/data.js — sửa số tài khoản/QR/logo ở đó.
 */
import { escapeHtml } from '../utils.js';

function renderBankCard(bank) {
  return `
    <div class="bank-card glass-hover animate-slide-up">
      <div class="bank-card__head">
        <div class="bank-card__logo">
          <img src="${escapeHtml(bank.logo)}" alt="${escapeHtml(bank.name)}">
        </div>
        <div class="bank-card__info">
          <div class="bank-card__label">Ngân hàng / Ví</div>
          <div class="bank-card__name">${escapeHtml(bank.name)}</div>
        </div>
      </div>

      <div class="bank-card__body">
        <div class="bank-card__details">
          <div class="bank-card__holder">
            Chủ tài khoản
            <strong>${escapeHtml(bank.holder)}</strong>
          </div>

          <div class="bank-card__label">${escapeHtml(bank.accountLabel)}</div>
          <div class="bank-card__account-row">
            <span class="bank-card__account">${escapeHtml(bank.account)}</span>
            <button class="copy-btn btn-ripple" type="button" data-copy="${escapeHtml(bank.account)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
              <span data-copy-label>Copy</span>
            </button>
          </div>
        </div>

        <div class="bank-card__qr">
          <img src="${escapeHtml(bank.qr)}" alt="QR ${escapeHtml(bank.name)}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span class="bank-card__qr-fallback" style="display:none;">QR sẽ cập nhật sau</span>
        </div>
      </div>

      <div class="bank-card__actions">
        <a class="bank-card__transfer-btn btn-ripple" href="${bank.transferUrl ? escapeHtml(bank.transferUrl) : '#'}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          Chuyển khoản ngay
        </a>
      </div>
    </div>
  `;
}

export function renderPaymentSection(payment) {
  const bankCards = payment.banks.map(renderBankCard).join('');

  return `
    <div class="section-head">
      <span class="section-head__icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
      </span>
      <div>
        <div class="section-head__title">Chuyển khoản tài khoản</div>
        <div class="section-head__subtitle">Ủng hộ / Donate cho Dori</div>
      </div>
    </div>

    <div class="transfer-box animate-slide-up">
      <div class="transfer-box__label">NỘI DUNG CHUYỂN KHOẢN</div>
      <div class="transfer-box__row">
        <span class="transfer-box__content">${escapeHtml(payment.transferContent)}</span>
        <button class="copy-btn btn-ripple" type="button" data-copy="${escapeHtml(payment.transferContent)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
          <span data-copy-label>Sao chép</span>
        </button>
      </div>
    </div>

    <div class="bank-list" style="margin-top: 16px;">
      ${bankCards}
    </div>
  `;
}
