function escHtml(s){ if(s===null||s===undefined) return ''; return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
const t=(k)=>k;
function fmtNum(n){ return Number(n).toFixed(2); }
const bundle = { id:'b1', type:'bundle', name:'Excel汇总 2026-08-05', items:[{name:'A',quantity:2,unitPrice:10}] };
const nameHtml = `📦 ${escHtml(bundle.name)} <span class="bundle-badge">${t('product_bundle')}</span>`;
console.log('BUNDLE nameHtml =', nameHtml);
const bundle2 = { id:'b2', type:'bundle', items:[{name:'A',quantity:2,unitPrice:10}] };
const nameHtml2 = `📦 ${escHtml(bundle2.name)} <span class="bundle-badge">BUNDLE</span>`;
console.log('EMPTY name =', JSON.stringify(nameHtml2));
