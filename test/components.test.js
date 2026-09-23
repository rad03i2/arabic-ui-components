const test = require('node:test');
const assert = require('node:assert/strict');
const ui = require('../components.js');

test('exports stable version', () => assert.equal(ui.VERSION, '1.0.0'));
test('escapeHTML protects generated markup', () => assert.equal(ui.escapeHTML('<script>"x" & y</script>'), '&lt;script&gt;&quot;x&quot; &amp; y&lt;/script&gt;'));
test('statCard renders Arabic and escapes values', () => {
  const html = ui.statCard({label:'المستخدمون', value:'<10>', hint:'نشط'});
  assert.match(html, /المستخدمون/); assert.match(html, /&lt;10&gt;/); assert.doesNotMatch(html, /<10>/);
});
test('alertBox restricts type and escapes user content', () => {
  const html = ui.alertBox({title:'تنبيه', message:'<img src=x>', type:'unknown', dismissible:true});
  assert.match(html, /aui-alert--info/); assert.match(html, /&lt;img src=x&gt;/); assert.match(html, /data-aui-dismiss/);
});
test('danger alert uses alert role', () => assert.match(ui.alertBox({title:'خطأ', message:'تعذر الحفظ', type:'danger'}), /role="alert"/));
