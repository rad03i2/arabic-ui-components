# Security / الأمان

This library has no network access, telemetry, storage, or runtime dependencies. The JavaScript HTML-generating helpers escape supplied text before interpolation. Applications remain responsible for validating their own input and for applying an appropriate Content Security Policy. Do not pass generated HTML from untrusted third-party extensions into the DOM outside the provided escaping boundary.

هذه المكتبة لا تجري اتصالات شبكية ولا تجمع بيانات ولا تستخدم تخزينًا أو اعتماديات وقت تشغيل. دوال توليد HTML تهرّب النصوص المدخلة قبل دمجها. يبقى التطبيق المستضيف مسؤولًا عن التحقق من مدخلاته وتطبيق سياسة CSP مناسبة.

For security reports, open a GitHub security advisory when available rather than publishing exploit details in a public issue.
