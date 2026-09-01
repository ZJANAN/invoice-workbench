// Smoke test: load js/app.js in a minimal fake DOM and build a CONTRACT document.
const fs = require('fs');
const vm = require('vm');

const sandbox = {};
sandbox.window = sandbox;
sandbox.console = console;
sandbox.localStorage = {
  _d: {},
  getItem(k) { return Object.prototype.hasOwnProperty.call(this._d, k) ? this._d[k] : null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; },
};
sandbox.document = {
  readyState: 'loading', // prevents init() from running
  documentElement: {},
  querySelectorAll: () => [],
  getElementById: () => null,
  addEventListener: () => {},
  createElement: () => ({ style: {}, appendChild() {} }),
};
sandbox.Image = function () {};
sandbox.FileReader = function () {};
sandbox.Blob = function () {};
sandbox.URL = { createObjectURL: () => '', revokeObjectURL: () => {} };
sandbox.setTimeout = setTimeout;

vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('js/app.js', 'utf8'), sandbox, { filename: 'app.js' });

const seller = {
  id: 's1', name: 'PT. Sumber Makmur', address: 'Jl. Sudirman No. 12, Jakarta',
  email: 'sales@makmur.co.id', phone: '+62 21 555 0100', legalRep: 'Budi Santoso',
  bankName: 'BCA', accountNo: '1234567890', accountName: 'PT. Sumber Makmur', swiftCode: 'CENAIDJA',
};
const buyer = { id: 'b1', name: 'CV. Mitra Sejati', address: 'Jl. Thamrin 8, Surabaya', npwp: '01.234.567.8-901.000' };
const products = [
  { id: 'p1', name: 'Hydraulic Pump HP-200', model: 'HP-200', quantity: 3, unit: 'set', unitPrice: 12500000 },
  { id: 'p2', name: 'Air Compressor 螺杆空压机', model: 'AC-50', quantity: 2, unit: 'pcs', unitPrice: 8750000 },
];

const total = products.reduce((s, p) => s + p.quantity * p.unitPrice, 0);
const taxRate = 11;
const dpp = total * taxRate / (taxRate + 1);
const ppn = total * taxRate / 100;
const grand = total + ppn;

const html = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'CTR-2026-0001', invDate: '2026-09-01',
  notes: 'Delivery within 30 days after signing.',
  payment: seller, type: 'contract', seal: '', signature: '', taxRate,
});

const checks = [
  ['SALES CONTRACT title', html.includes('SALES CONTRACT')],
  ['Contract No. label', html.includes('Contract No.:')],
  ['Party A block', html.includes('Party A / 甲方 (Seller)')],
  ['Party B block', html.includes('Party B / 乙方 (Buyer)')],
  ['Party A name', html.includes('PT. Sumber Makmur')],
  ['Party B name', html.includes('CV. Mitra Sejati')],
  ['Payment Terms block', html.includes('Payment Terms / 付款条款')],
  ['Custom notes rendered', html.includes('Delivery within 30 days after signing.')],
  ['PPN 12% label (rate 11)', html.includes('PPN 12%')],
  ['DPP LAINNYA label', html.includes('DPP LAINNYA 11/12')],
  ['Dual signature area', html.includes('invoice-signature contract-sign')],
  // 签章区必须是 甲方在左、乙方在右（取签章区块子串后比较出现顺序）
  ['Party A left / Party B right', (() => {
    const block = html.slice(html.indexOf('invoice-signature contract-sign'));
    const a = block.indexOf('Party A / 甲方 (Seller)');
    const b = block.indexOf('Party B / 乙方 (Buyer)');
    return a > -1 && b > -1 && a < b;
  })()],
  ['Product row 1', html.includes('Hydraulic Pump HP-200')],
  ['Product row 2', html.includes('螺杆空压机')],
];

// ---- Online history viewer: rebuild a saved document from its stored ids ----
// `state` is a top-level const in app.js, so it lives in the context's global lexical
// scope rather than on the sandbox object — read it back with a tiny script.
const appState = vm.runInContext('state', sandbox);
appState.sellers.push(seller);
appState.buyers.push(buyer);
appState.products.push(...products);

const savedDoc = {
  id: 'd1', type: 'contract', docNo: 'CTR-2026-0001', date: '2026-09-01',
  sellerId: 's1', buyerId: 'b1', productIds: ['p1', 'p2'],
  currency: 'USD', taxRate: 11, total, dpp, ppn, grand,
  sellerName: seller.name, buyerName: buyer.name, seal: '', signature: '',
};
const histHtml = sandbox.buildHistoryDocHTML(savedDoc);

checks.push(
  ['[history] rebuilds contract', histHtml.includes('SALES CONTRACT')],
  ['[history] doc no preserved', histHtml.includes('CTR-2026-0001')],
  ['[history] products restored', histHtml.includes('Hydraulic Pump HP-200')],
  // 关键：必须用存档里的货币(USD)，而不是当前页签下拉框的现值(IDR)
  ['[history] uses SAVED currency USD', histHtml.includes('$ ') && !histHtml.includes('Rp')],
  ['[history] type label', sandbox.docTypeLabel('contract') === 'CONTRACT'],
);

// Regression: invoice & quotation must render exactly as before
const invHtml = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'INV-2026-0001', invDate: '2026-09-01', orderRef: 'PO2026-001',
  payment: seller, type: 'invoice', seal: '', signature: '', taxRate,
});
const qtnHtml = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'QTN-2026-0001', invDate: '2026-09-01', notes: 'Hello',
  payment: seller, type: 'quotation', seal: '', signature: '', taxRate,
});

checks.push(
  ['[regression] invoice title', invHtml.includes('>INVOICE<')],
  ['[regression] invoice Bill To', invHtml.includes('Bill To')],
  ['[regression] invoice Payment Information', invHtml.includes('Payment Information')],
  ['[regression] invoice no dual sign', !invHtml.includes('contract-sign')],
  ['[regression] quotation title', qtnHtml.includes('>QUOTATION<')],
  ['[regression] quotation Notes block', qtnHtml.includes('>Notes<')],
  ['[regression] quotation validity clause', qtnHtml.includes('Quotation Validity: 7 days')],
);

let ok = true;
for (const [name, pass] of checks) {
  if (!pass) ok = false;
  console.log((pass ? 'PASS' : 'FAIL') + '  ' + name);
}

// Verify the calculation matches the invoice formula
console.log('\n-- calculation --');
console.log('total', total, '| dpp', Math.round(dpp), '| ppn', Math.round(ppn), '| grand', Math.round(grand));
console.log('\nRESULT:', ok ? 'ALL PASS' : 'HAS FAILURES');
process.exit(ok ? 0 : 1);
