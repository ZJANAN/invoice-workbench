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
  bankName: 'BCA', accountNo: '1234567890', accountName: 'PT. Sumber Makmur', swiftCode: 'CENAIDJA', branchName: 'KCU Sudirman',
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
  ['Contract No. label (header is English-only)', html.includes('Contract No.:')],
  ['Party A block', html.includes('Party A / 甲方 (Seller)')],
  ['Party B block', html.includes('Party B / 乙方 (Buyer)')],
  ['Party A name', html.includes('PT. Sumber Makmur')],
  ['Party B name', html.includes('CV. Mitra Sejati')],
  ['Payment Information block', html.includes('Payment Information')],
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
  // 甲/乙两栏必须结构一致：各有一个等高签章占位区，否则加章后两栏会错行
  ['[contract] both parties have one equal seal placeholder', (() => {
    const block = html.slice(html.indexOf('invoice-signature contract-sign'));
    return (block.match(/class="invoice-seal-sign-area"/g) || []).length === 2;
  })()],
  ['[contract] both parties keep equal seal placeholders when a seal is added', (() => {
    const h = sandbox.buildDocumentHTML(seller, buyer, products, {
      total, dpp, ppn, grand, invNo: 'CT-1', invDate: '2026-09-01', notes: '', payment: seller,
      type: 'contract', seal: 'data:image/png;base64,SEAL', signature: 'data:image/png;base64,SIGN', taxRate,
    });
    const block = h.slice(h.indexOf('invoice-signature contract-sign'));
    return (block.match(/class="invoice-seal-sign-area"/g) || []).length === 2
      && block.includes('class="seal-img"')
      && block.includes('class="sign-img"');
  })()],
  ['Product row 1', html.includes('Hydraulic Pump HP-200')],
  ['Product row 2', html.includes('螺杆空压机')],
  // 合同条款区
  ['Contract clauses section', html.includes('合同条款 / Contract Terms &amp; Conditions') || html.includes('合同条款 / Contract Terms & Conditions')],
  ['Clause Art. 1 present', html.includes('The undersigned Seller and Buyer agree following transaction')],
  ['Clause Art. 5 default (zh)', html.includes('结算方式：送至现场前付款至100%')],
  ['Clause Art. 5 default (en)', html.includes('with the payment 100% before delivery to the site')],
  ['Clause Art. 7 present', html.includes('each party holds one, becomes effective since being signed')],
];

// 第五条可编辑：传入 contractArt5 覆盖后，应显示自定义内容而非默认值
const htmlEdited = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'CTR-2026-0002', invDate: '2026-09-01',
  payment: seller, type: 'contract', seal: '', signature: '', taxRate,
  contractArt5: '分两期付款：签约付50%，到货付50%。\nPayment in two installments: 50% on signing, 50% on delivery.',
});
checks.push(
  ['Art.5 editable: shows override (zh)', htmlEdited.includes('分两期付款：签约付50%，到货付50%')],
  ['Art.5 editable: shows override (en)', htmlEdited.includes('Payment in two installments')],
  ['Art.5 editable: default text gone', !htmlEdited.includes('结算方式：送至现场前付款至100%')],
  ['Art.5 editable: other clauses intact', htmlEdited.includes('The undersigned Seller and Buyer agree following transaction')],
);

// ---- Payment Information: shows on invoice AND contract even if only SWIFT is set ----
const swiftOnlySeller = { id: 's2', name: 'PT. Swift Only', swiftCode: 'CENAIDJAXX' };
const invoiceSwiftHtml = sandbox.buildDocumentHTML(swiftOnlySeller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'INV-2026-0001', invDate: '2026-09-01',
  payment: swiftOnlySeller, type: 'invoice', seal: '', signature: '', taxRate,
});
const contractSwiftHtml = sandbox.buildDocumentHTML(swiftOnlySeller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'CTR-2026-0003', invDate: '2026-09-01',
  payment: swiftOnlySeller, type: 'contract', seal: '', signature: '', taxRate,
});
checks.push(
  ['Invoice: Payment Info shows with SWIFT only', invoiceSwiftHtml.includes('Payment Information') && invoiceSwiftHtml.includes('CENAIDJAXX')],
  ['Contract: Payment Information shows with SWIFT only', contractSwiftHtml.includes('Payment Information') && contractSwiftHtml.includes('CENAIDJAXX')],
  ['Payment Info: Branch Name shown', html.includes('Branch Name:') && html.includes('KCU Sudirman')],
);


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
  ['[regression] quotation Notes block', qtnHtml.includes('>Notes / 备注<')],
  ['[regression] quotation validity clause', qtnHtml.includes('Quotation Validity: 7 days')],
);

// Order module smoke test
const orderHtml = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'ORD-2026-0001', invDate: '2026-09-01', notes: 'Order remark',
  payment: seller, type: 'order', seal: '', signature: '', taxRate,
});
checks.push(
  ['[order] title', orderHtml.includes('PURCHASE ORDER')],
  ['[order] Order No. label is bilingual', orderHtml.includes('Order No. / 订单号:')],
  ['[order] two-party layout (no Bill To)', !orderHtml.includes('Bill To') && orderHtml.includes('SUPPLIER/供应商') && orderHtml.includes('CONSIGNEE/收货方')],
  ['[order] Payment Information removed', !orderHtml.includes('Payment Information')],
  ['[order] supply note shown', orderHtml.includes('Please supply the following items')],
  ['[order] dual signature (consignee + supplier, not contract)', orderHtml.includes('CONSIGNEE/收货方') && orderHtml.includes('SUPPLIER/供应商') && !orderHtml.includes('contract-sign')],
  ['[order] no contract clauses', !orderHtml.includes('合同条款')],
  ['[order] docTypeLabel', sandbox.docTypeLabel('order') === 'PURCHASE ORDER'],
  ['[order] notes rendered in preview', sandbox.buildDocumentHTML(seller, buyer, products, {
    total, dpp, ppn, grand, invNo: 'ORD-1', invDate: '2026-09-01', notes: '验货后付款 / pay after inspection', payment: seller, type: 'order', seal: '', signature: '', taxRate,
  }).includes('验货后付款 / pay after inspection')],
  ['[order] consignee shows only name (no Address/Email/Phone)', (function(){
    const h = sandbox.buildDocumentHTML(seller, buyer, products, {
      total, dpp, ppn, grand, invNo: 'ORD-1', invDate: '2026-09-01', notes: '', payment: seller, type: 'order', seal: '', signature: '', taxRate,
    });
    const ci = h.indexOf('CONSIGNEE/收货方');
    const tail = h.slice(ci, ci + 400);
    return tail.includes('invoice-party-name') && !tail.includes('Address:') && !tail.includes('Email:') && !tail.includes('Phone:');
  })()],
  ['[order] seal image rendered when provided', sandbox.buildDocumentHTML(seller, buyer, products, {
    total, dpp, ppn, grand, invNo: 'ORD-1', invDate: '2026-09-01', notes: '', payment: seller, type: 'order', seal: 'data:image/png;base64,SEAL', signature: 'data:image/png;base64,SIGN', taxRate,
  }).includes('data:image/png;base64,SEAL')],
  ['[order] dual signature uses aligned order-sign class', (function(){
    const h = sandbox.buildDocumentHTML(seller, buyer, products, {
      total, dpp, ppn, grand, invNo: 'ORD-1', invDate: '2026-09-01', notes: '', payment: seller, type: 'order', seal: 'data:image/png;base64,SEAL', signature: '', taxRate,
    });
    return h.includes('invoice-signature order-sign') && (h.match(/invoice-signature-box/g) || []).length >= 2;
  })()],
  ['[order] updatePreviewForMode routes order to renderOrderPreview', (function(){
    const src = sandbox.updatePreviewForMode.toString();
    return src.includes("'order'") && src.includes('renderOrderPreview');
  })()],
);

// Labels: invoice body is English-only, other types are bilingual; payment field order.
const cntHtml = sandbox.buildDocumentHTML(seller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'CTR-2026-0001', invDate: '2026-09-01', notes: '',
  payment: seller, type: 'contract', seal: '', signature: '', taxRate,
});
const sellerWithNotes = Object.assign({}, seller, { paymentNotes: 'LINE1\nLINE2' });
checks.push(
  ['[labels] invoice body is English-only', !invHtml.includes('买方') && !invHtml.includes('产品描述') && !invHtml.includes('总计') && invHtml.includes('Description')],
  ['[labels] contract body is bilingual', cntHtml.includes('Description / 产品描述') && cntHtml.includes('Total / 总计')],
  ['[labels] quotation body is bilingual', qtnHtml.includes('Description / 产品描述')],
  ['[labels] order body is bilingual', orderHtml.includes('Description / 产品描述')],
  ['[payment] order BANK → Account Name → Account Number → Branch Name', (function(){
    const iBank = invHtml.indexOf('<strong>BANK:</strong>');
    const iName = invHtml.indexOf('<strong>Account Name:</strong>');
    const iNo = invHtml.indexOf('<strong>Account Number:</strong>');
    const iBranch = invHtml.indexOf('<strong>Branch Name:</strong>');
    return iBank > -1 && iBank < iName && iName < iNo && iNo < iBranch;
  })()],
  ['[payment] payment notes keep line breaks', sandbox.buildDocumentHTML(seller, buyer, products, {
    total, dpp, ppn, grand, invNo: 'INV-1', invDate: '2026-09-01', notes: '',
    payment: sellerWithNotes, type: 'invoice', seal: '', signature: '', taxRate,
  }).includes('white-space:pre-wrap')],
);

// Signature area: the printed company name must stay on ONE line (no fixed narrow width),
// and the stamp stays centred above the line.
const longNameSeller = Object.assign({}, seller, { name: 'PT SUNLEVIGO INTERNATIONAL INDONESIA', legalRep: '' });
const longInvHtml = sandbox.buildDocumentHTML(longNameSeller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'INV-1', invDate: '2026-09-01', notes: '',
  payment: seller, type: 'invoice', seal: 'data:image/png;base64,SEAL', signature: '', taxRate,
});
const longQtnHtml = sandbox.buildDocumentHTML(longNameSeller, buyer, products, {
  total, dpp, ppn, grand, invNo: 'QTN-1', invDate: '2026-09-01', notes: '',
  payment: seller, type: 'quotation', seal: '', signature: '', taxRate,
});
const longDlvHtml = sandbox.buildDeliveryHTML(longNameSeller, buyer, products, {
  notes: '', shipFrom: '', shipTo: '', orderRef: '', receiverName: '', receiverPhone: '',
  shipperName: '', shipperPhone: '', seal: 'data:image/png;base64,SEAL', signature: '',
});
const signLines = h => h.match(/<div class="invoice-signature-line"[^>]*>/g) || [];
checks.push(
  ['[signature] invoice signature line has no fixed narrow width', signLines(longInvHtml).length > 0 && signLines(longInvHtml).every(t => !/width:/.test(t)) && longInvHtml.includes('PT SUNLEVIGO INTERNATIONAL INDONESIA')],
  ['[signature] quotation signature line has no fixed narrow width', signLines(longQtnHtml).length > 0 && signLines(longQtnHtml).every(t => !/width:/.test(t))],
  ['[signature] delivery signature lines have no fixed narrow width', signLines(longDlvHtml).length === 2 && signLines(longDlvHtml).every(t => !/width:/.test(t))],
  ['[signature] delivery keeps both columns structurally equal (seal placeholder each)', (longDlvHtml.match(/class="invoice-seal-sign-area"/g) || []).length === 2],
);

// Letterhead = top-left company info, English-only on EVERY document type.
const headerOf = h => h.slice(h.indexOf('invoice-doc'), h.indexOf('invoice-doc-title'));
// Meta = the No./Date block right under the big title.
const metaOf = h => h.slice(h.indexOf('invoice-meta'), h.search(/invoice-parties|Ship From \/ 发货方/));
const hasCJK = s => /[\u4e00-\u9fff]/.test(s);
// Title block: English title + optional Chinese subtitle.
const titleOf = h => h.slice(h.indexOf('invoice-doc-title'), h.indexOf('invoice-meta'));
checks.push(
  ['[header] letterhead English-only on every type', [longInvHtml, longQtnHtml, cntHtml, orderHtml, longDlvHtml].every(h => !hasCJK(headerOf(h)))],
  ['[header] letterhead labels English-only', longQtnHtml.includes('Address: ') && longQtnHtml.includes('Email: ') && longQtnHtml.includes('Phone: ')],
  ['[header] parties block keeps its bilingual labels', longQtnHtml.includes('Bill To / 买方') && orderHtml.includes('CONSIGNEE/收货方')],
  ['[header] body table header still bilingual outside the header', longQtnHtml.includes('Description / 产品描述')],
  // Meta No./Date: bilingual on quotation / delivery / order; English-only on invoice / contract.
  ['[meta] quotation No./Date bilingual', metaOf(longQtnHtml).includes('No. / 编号:') && metaOf(longQtnHtml).includes('Date / 日期:')],
  ['[meta] order No./Date bilingual', metaOf(orderHtml).includes('Order No. / 订单号:') && metaOf(orderHtml).includes('Date / 日期:')],
  ['[meta] delivery No./Date bilingual', metaOf(longDlvHtml).includes('Delivery No. / 送货单号:') && metaOf(longDlvHtml).includes('Delivery Date / 送货日期:')],
  ['[meta] invoice meta stays English-only', metaOf(longInvHtml).includes('No.:') && metaOf(longInvHtml).includes('Date:') && !hasCJK(metaOf(longInvHtml))],
  ['[meta] contract meta stays English-only', metaOf(cntHtml).includes('Contract No.:') && !hasCJK(metaOf(cntHtml))],
  // Delivery note fixed note is now bilingual (English line + Chinese line).
  ['[delivery] fixed note is bilingual', longDlvHtml.includes('Please check the quantity and quality upon receipt.') && longDlvHtml.includes('请于收货时核对数量与品质。')],
  // Title: Chinese subtitle ONLY under QUOTATION / DELIVERY NOTE / PURCHASE ORDER.
  ['[title] QUOTATION shows 报价单 below it', titleOf(longQtnHtml).includes('QUOTATION') && titleOf(longQtnHtml).includes('报价单')],
  ['[title] DELIVERY NOTE shows 送货单 below it', titleOf(longDlvHtml).includes('DELIVERY NOTE') && titleOf(longDlvHtml).includes('送货单')],
  ['[title] PURCHASE ORDER shows 订单 below it', titleOf(orderHtml).includes('PURCHASE ORDER') && titleOf(orderHtml).includes('订单')],
  ['[title] INVOICE title stays English-only', titleOf(longInvHtml).includes('INVOICE') && !hasCJK(titleOf(longInvHtml))],
  ['[title] SALES CONTRACT title unchanged (no subtitle)', titleOf(cntHtml).includes('SALES CONTRACT') && !hasCJK(titleOf(cntHtml))],
  // Quotation fixed remarks are bilingual too: each English clause followed by its Chinese line.
  ['[quotation] remarks title bilingual', longQtnHtml.includes('>Notes / 备注<')],
  ['[quotation] validity clause bilingual', longQtnHtml.includes('Quotation Validity: 7 days from the date of quotation.') && longQtnHtml.includes('报价有效期：自报价之日起 7 天。')],
  ['[quotation] pricing clause bilingual', longQtnHtml.includes('The quoted prices are based on the specifications and quantities stated in this quotation.') && longQtnHtml.includes('报价以本报价单所列规格与数量为准。')],
  ['[quotation] payment-terms clause bilingual', longQtnHtml.includes('Payment Terms: As agreed by both parties.') && longQtnHtml.includes('付款条件：由双方协商确定。')],
  ['[quotation] invoice remarks stay English-only', !longInvHtml.includes('报价有效期')],
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
