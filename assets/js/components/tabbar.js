/**
 * assets/js/components/tabbar.js
 * Thanh tab dạng chữ, đồng bộ trạng thái với navbar icon qua assets/js/tabbar.js (delegation)
 */

export function renderTabbar() {
  return `
    <button class="tabbar__btn is-active" type="button" data-tab-target="personal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
      Cá nhân
    </button>
    <button class="tabbar__btn" type="button" data-tab-target="payment">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
      Thanh toán
    </button>
    <button class="tabbar__btn" type="button" data-tab-target="utilities">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2z"/></svg>
      Tiện ích
    </button>
    <button class="tabbar__btn" type="button" data-tab-target="posts">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
      Bài đăng
    </button>
  `;
}
