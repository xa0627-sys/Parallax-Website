(function () {
  const LOCALE = 'zh'; // 預設中文
  const LOCALE_PATH = 'locales/' + LOCALE + '.json';  // 拿掉前面的斜線

  try { document.documentElement.lang = 'zh-Hant'; } catch (e) { }

  function get(obj, path, def) {
    if (!obj) return def;
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : def, obj);
  }

  function applyTranslations(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = get(dict, key, null);
      if (val !== null && val !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.placeholder) el.placeholder = val;
          else el.value = val;
        } else if (el.getAttribute('data-i18n-attr')) {
          const attr = el.getAttribute('data-i18n-attr');
          el.setAttribute(attr, val);
        } else {
          el.textContent = val;
        }
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = get(dict, key, null);
      if (val !== null && val !== undefined) el.innerHTML = val;
    });

    const docTitleKey = document.documentElement.getAttribute('data-i18n-title');
    if (docTitleKey) {
      const t = get(dict, docTitleKey, null);
      if (t) document.title = t;
    }
  }

  fetch(LOCALE_PATH, {cache: 'no-store'}).then(resp => {
    if (!resp.ok) throw new Error('no locale');
    return resp.json();
  }).then(dict => {
    applyTranslations(dict);
  }).catch(err => {
    console.warn('Localization: failed to load', LOCALE_PATH, err);
  });
})();
