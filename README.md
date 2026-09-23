# Arabic UI Components

A dependency-free, RTL-first CSS + JavaScript component kit for building clear, accessible Arabic web interfaces. It is intentionally small: copy two files into a project and use semantic HTML classes, with optional JavaScript helpers for generated cards, alerts, dismiss actions, and responsive navigation.

**Author:** Radwan Abdulhadi Ahmed · رضوان عبدالهادي أحمد · GitHub: @rad03i2

## Why it exists

Arabic interfaces are often treated as mirrored afterthoughts. This project starts with `dir="rtl"`, CSS logical properties, Arabic-friendly spacing, responsive behavior, keyboard-visible focus states, and a compact token system that can be themed without a framework.

## Key features

- RTL-first navigation, cards, statistics, buttons, badges, alerts, forms and responsive tables.
- Light/dark theme tokens through CSS custom properties and `data-aui-theme`.
- Responsive navigation with an accessible `aria-expanded` toggle.
- Visible keyboard focus and reduced-motion awareness.
- Logical CSS properties such as `margin-inline`, `border-inline-start`, and `text-align:start`.
- Safe JavaScript render helpers that HTML-escape supplied text.
- No runtime dependencies, network calls, telemetry, cookies, build step, or framework lock-in.
- CommonJS export for tests/Node plus `window.ArabicUI` in browsers.

## Preview

Open `index.html` directly in a modern browser. The included showcase demonstrates the navigation, theme switch, statistic cards, alerts, form controls, badges and responsive table. For project screenshots, capture this showcase at desktop and mobile widths; no generated screenshot is committed so the repository does not present stale UI imagery.

## Requirements & installation

Runtime: any modern browser with CSS custom properties. JavaScript tests require Node.js 18+.

```bash
git clone https://github.com/rad03i2/arabic-ui-components.git
cd arabic-ui-components
```

No `npm install` is required. Copy `styles.css` and, when behavior/helpers are needed, `components.js` into your project:

```html
<html lang="ar" dir="rtl" data-aui-theme="light">
<link rel="stylesheet" href="styles.css">
<body class="aui-app">...</body>
<script src="components.js"></script>
<script>ArabicUI.init();</script>
```

## Usage

```html
<div class="aui-grid">
  <article class="aui-card">
    <span class="aui-badge">جديد</span>
    <h2>بطاقة عربية</h2>
    <p class="aui-muted">محتوى واضح يدعم الاتجاه من اليمين إلى اليسار.</p>
    <button class="aui-btn aui-btn--primary">متابعة</button>
  </article>
</div>
```

Generate content safely when data comes from JavaScript:

```js
const html = ArabicUI.statCard({
  label: 'المستخدمون', value: '1,240', hint: 'هذا الشهر', icon: '◈'
});
document.querySelector('#stats').insertAdjacentHTML('beforeend', html);
ArabicUI.init();
```

`alertBox({title, message, type, dismissible})` supports `info`, `success`, `warning`, and `danger`. `escapeHTML(value)` is exported for text escaping. `init(root)` wires dismiss buttons and responsive menus and is idempotent for already initialized controls.

## Configuration / theming

Override tokens after `styles.css` rather than editing component rules:

```css
:root {
  --aui-primary: #6d28d9;
  --aui-radius: 1rem;
  --aui-font: "Noto Sans Arabic", Tahoma, sans-serif;
}
```

Set `data-aui-theme="dark"` on `<html>` for the bundled dark theme. The kit does not download fonts; host any chosen font according to its license.

## Project structure

```text
.
├── index.html              # live component showcase
├── styles.css              # tokens and component styles
├── components.js           # optional behavior/render helpers
├── test/components.test.js # Node built-in tests
├── package.json            # metadata and scripts
├── .github/workflows/ci.yml
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

## Testing

```bash
npm test
npm run check
```

Tests exercise exports, escaping, Arabic rendering, alert type fallback and danger semantics. CI runs both commands on Node 18, 20 and 22. Visual/browser accessibility regression testing is not automated yet, so UI changes should also be reviewed manually with keyboard navigation and narrow viewports.

## Security & privacy

The library is local-only: no telemetry, tracking, storage, API keys or network requests. Render helpers escape text inputs before producing markup. This is not a complete sanitization layer for arbitrary HTML; applications should not bypass escaping with untrusted markup and should use an appropriate Content Security Policy. See `SECURITY.md`.

## Limitations

This is a focused CSS/vanilla-JS kit, not React/Vue components or a full design-system platform. It does not include icons, date pickers, modal focus trapping, localization/pluralization, package-registry publishing, automated visual regression, or legacy-browser support. CSS `color-mix()` is used for a few progressive visual effects, so older browsers may omit those effects while core layout remains usable.

## Optional roadmap

Possible future additions are an accessible dialog component with focus management, browser-based accessibility tests, and npm package publishing. These are optional extensions; the current components work without them.

## Contributing

See `CONTRIBUTING.md`. Preserve RTL behavior, semantics, keyboard access and the dependency-free runtime. Add tests for JavaScript behavior and keep examples synchronized with the implementation.

## License

MIT © 2026 Radwan Abdulhadi Ahmed. See `LICENSE`.

## Author

**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **@rad03i2**

---

# المكونات العربية للواجهات

حزمة خفيفة من CSS وJavaScript، تبدأ من دعم **RTL** لبناء واجهات ويب عربية واضحة وقابلة للوصول. لا تحتاج إلى إطار عمل أو اعتماديات أو عملية بناء؛ يمكن نسخ `styles.css` و`components.js` واستخدامهما مباشرة.

**المؤلف:** Radwan Abdulhadi Ahmed · رضوان عبدالهادي أحمد · GitHub: @rad03i2

## لماذا هذا المشروع؟

كثير من الواجهات العربية تُبنى بتحويل واجهة LTR بعد اكتمالها. هذه الحزمة تبدأ من `dir="rtl"` وتستخدم خصائص CSS المنطقية، ومسافات مناسبة، وتركيزًا مرئيًا للوحة المفاتيح، وتصميمًا متجاوبًا، ومتغيرات تصميم يمكن تخصيصها بسهولة.

## الميزات الرئيسية

- شريط تنقل، بطاقات، إحصاءات، أزرار، شارات، تنبيهات، حقول نماذج وجداول متجاوبة.
- مظهر فاتح وداكن عبر `data-aui-theme` ومتغيرات CSS.
- قائمة تنقل متجاوبة تستخدم `aria-expanded`.
- حالات تركيز واضحة ودعم تفضيل تقليل الحركة.
- استخدام `margin-inline` و`border-inline-start` و`text-align:start` لدعم الاتجاه بشكل صحيح.
- دوال JavaScript تهرّب النص قبل توليد HTML.
- بلا اعتماديات وقت تشغيل أو اتصالات شبكة أو تتبع أو ملفات تعريف ارتباط.

## المعاينة

افتح `index.html` مباشرة في متصفح حديث. الصفحة تعرض المكونات الفعلية، وتبديل المظهر، والتنبيهات، والنموذج، والجدول المتجاوب. عند الحاجة إلى صور للمشروع يُنصح بتصوير هذه الصفحة بحجمي سطح المكتب والهاتف حتى تعكس النسخة الحالية.

## المتطلبات والتثبيت

يعمل المشروع في المتصفحات الحديثة. تحتاج الاختبارات فقط إلى Node.js 18 أو أحدث.

```bash
git clone https://github.com/rad03i2/arabic-ui-components.git
cd arabic-ui-components
```

لا تحتاج إلى `npm install`. أضف الملفات مباشرة:

```html
<html lang="ar" dir="rtl" data-aui-theme="light">
<link rel="stylesheet" href="styles.css">
<body class="aui-app">...</body>
<script src="components.js"></script>
<script>ArabicUI.init();</script>
```

## مثال استخدام

```html
<article class="aui-card">
  <span class="aui-badge">جديد</span>
  <h2>بطاقة عربية</h2>
  <button class="aui-btn aui-btn--primary">متابعة</button>
</article>
```

ويمكن إنشاء بطاقة من JavaScript عبر `ArabicUI.statCard(...)` أو تنبيه عبر `ArabicUI.alertBox(...)`. الدالة `ArabicUI.init()` تربط أزرار الإغلاق والقائمة المتجاوبة، ويمكن استدعاؤها مجددًا دون تكرار ربط العناصر التي جُهزت مسبقًا.

## التخصيص

يمكن تغيير متغيرات التصميم بعد تحميل `styles.css`:

```css
:root {
  --aui-primary: #6d28d9;
  --aui-radius: 1rem;
  --aui-font: "Noto Sans Arabic", Tahoma, sans-serif;
}
```

لتفعيل الوضع الداكن ضع `data-aui-theme="dark"` على عنصر `<html>`. لا تقوم الحزمة بتنزيل خطوط من الإنترنت.

## بنية المشروع

`index.html` للمعرض، و`styles.css` للتصميم، و`components.js` للسلوك والدوال المساعدة، و`test/` للاختبارات، و`.github/workflows/ci.yml` للتحقق المستمر، إضافة إلى ملفات الترخيص والأمان والمساهمة.

## الاختبارات

```bash
npm test
npm run check
```

تغطي الاختبارات التصدير، وتهريب HTML، والنص العربي، وأنواع التنبيهات ودلالة تنبيه الخطر. يعمل CI على Node 18 و20 و22. اختبار المظهر وإمكانية الوصول داخل المتصفح ليس آليًا حاليًا، لذلك يجب مراجعة تغييرات الواجهة يدويًا بلوحة المفاتيح وعلى شاشة ضيقة.

## الأمان والخصوصية

لا توجد اتصالات شبكة أو telemetry أو تخزين أو مفاتيح API. الدوال المساعدة تهرّب النص قبل إدخاله في القوالب، لكنها ليست أداة لتعقيم HTML عشوائي؛ يجب عدم إدخال HTML غير موثوق خارج هذا المسار، ويُنصح باستخدام CSP مناسبة. التفاصيل في `SECURITY.md`.

## القيود

المشروع حزمة CSS وJavaScript أصلية وليس مكتبة React/Vue أو منصة Design System كاملة. لا يحتوي حاليًا على منتقي تاريخ أو إدارة تركيز لنافذة Modal أو نظام ترجمة وجموع أو أيقونات أو نشر على npm أو اختبارات بصرية آلية، ولا يستهدف المتصفحات القديمة جدًا.

## التطوير الاختياري

يمكن مستقبلًا إضافة Dialog متاح مع إدارة التركيز، واختبارات وصول داخل المتصفح، ونشر الحزمة على npm. هذه إضافات اختيارية وليست مطلوبة لاستخدام المكونات الحالية.

## المساهمة والترخيص

راجع `CONTRIBUTING.md` قبل المساهمة، وحافظ على RTL والدلالات والوصول بلوحة المفاتيح. المشروع مرخص تحت MIT لعام 2026؛ راجع `LICENSE`.

## المؤلف

**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **@rad03i2**
