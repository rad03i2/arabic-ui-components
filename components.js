/* Arabic UI Components — dependency-free RTL helpers.
 * Author: Radwan Abdulhadi Ahmed (@rad03i2)
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.ArabicUI = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VERSION = '1.0.0';
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function statCard({ label, value, hint = '', icon = '' }) {
    return `<article class="aui-card aui-stat" dir="rtl"><div class="aui-stat__icon" aria-hidden="true">${escapeHTML(icon)}</div><div><p class="aui-stat__label">${escapeHTML(label)}</p><strong class="aui-stat__value">${escapeHTML(value)}</strong>${hint ? `<p class="aui-stat__hint">${escapeHTML(hint)}</p>` : ''}</div></article>`;
  }

  function alertBox({ title, message, type = 'info', dismissible = false }) {
    const allowed = ['info','success','warning','danger'];
    const kind = allowed.includes(type) ? type : 'info';
    return `<div class="aui-alert aui-alert--${kind}" role="${kind === 'danger' ? 'alert' : 'status'}" dir="rtl"><div><strong>${escapeHTML(title)}</strong><p>${escapeHTML(message)}</p></div>${dismissible ? '<button class="aui-alert__close" type="button" data-aui-dismiss aria-label="إغلاق">×</button>' : ''}</div>`;
  }

  function init(root = document) {
    root.documentElement?.setAttribute('dir', root.documentElement.getAttribute('dir') || 'rtl');
    root.querySelectorAll('[data-aui-dismiss]').forEach(btn => {
      if (btn.dataset.auiReady) return;
      btn.dataset.auiReady = 'true';
      btn.addEventListener('click', () => btn.closest('.aui-alert')?.remove());
    });
    root.querySelectorAll('[data-aui-menu-button]').forEach(btn => {
      if (btn.dataset.auiReady) return;
      btn.dataset.auiReady = 'true';
      const id = btn.getAttribute('aria-controls');
      const menu = id && root.getElementById(id);
      if (!menu) return;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        menu.hidden = open;
      });
    });
  }

  return { VERSION, escapeHTML, statCard, alertBox, init };
});
