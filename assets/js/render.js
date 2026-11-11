/**
 * assets/js/render.js
 * Điểm khởi tạo chính (ES module). Nạp dữ liệu từ data.js, gọi từng
 * component template và mount vào các điểm neo (#app-...) trong index.html.
 * Đây là phần thay thế cho index.php + includes/*.php của bản PHP trước đây.
 */
import { profile, social, payment, utilities, posts, press } from './data.js';
import { renderNavbar } from './components/navbar.js';
import { renderDrawer } from './components/drawer.js';
import { renderHero } from './components/hero.js';
import { renderPressSection } from './components/press.js';
import { renderTabbar } from './components/tabbar.js';
import { renderTerminal } from './components/terminal.js';
import { renderSocialSection } from './components/social.js';
import { renderPaymentSection } from './components/payment.js';
import { renderUtilitiesSection } from './components/utilities.js';
import { renderPostsSection } from './components/posts.js';
import { renderFooter } from './components/footer.js';

function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderPage() {
  document.title = `${profile.name} — Personal Profile`;

  mount('app-navbar', renderNavbar(profile));
  mount('app-hero', renderHero(profile, social));
  mount('app-press', renderPressSection(press));
  mount('app-tabbar', renderTabbar());
  mount('app-terminal', renderTerminal(profile));
  mount('app-social', renderSocialSection(profile, social));
  mount('app-payment', renderPaymentSection(payment));
  mount('app-utilities', renderUtilitiesSection(utilities));
  mount('app-posts', renderPostsSection(posts));
  mount('app-footer', renderFooter(profile));
  mount('app-drawer', renderDrawer(profile, social));
}

document.addEventListener('DOMContentLoaded', renderPage);
