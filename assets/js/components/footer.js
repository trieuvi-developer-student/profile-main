/**
 * assets/js/components/footer.js
 */
import { escapeHtml } from '../utils.js';

export function renderFooter(profile) {
  const year = new Date().getFullYear();
  return `
    &copy; ${year} <strong>${escapeHtml(profile.name)}</strong>
    &nbsp;Made with <span class="heart">&hearts;</span> in Vietnam
  `;
}
