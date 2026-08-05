/* ============================================
   Quotation & Invoice Workbench - App Logic
   ============================================ */

// ============ i18n Translations ============
const I18N = {
  zh: {
    appTitle: '报价单与发票工作台',
    appSubtitle: 'Quotation & Invoice Workbench',
    tab_seller: '卖方信息',
    tab_buyer: '买方信息',
    tab_products: '产品明细',
    tab_payment: '收款信息',
    tab_generate_invoice: '生成发票',
    tab_generate_quotation: '生成报价单',
    tab_generate_delivery: '生成送货单',
    // Seller
    seller_title: '卖方信息',
    seller_desc: '管理多个卖方（供应商）信息��保存后可用于生成报价单和发票',
    seller_add: '+ 添加卖方',
    seller_edit: '编辑卖方',
    seller_logo: '公司LOGO',
    seller_logo_upload: '点击上传LOGO',
    seller_logo_hint: '支持 PNG/JPG，建议尺寸 300×100',
    seller_logo_remove: '移除LOGO',
    seller_name: '公司名称',
    seller_name_ph: '请输入公司名称',
    seller_address: '公司地址',
    seller_address_ph: '请输入公司地址',
    seller_email: '电子邮箱',
    seller_email_ph: 'example@company.com',
    seller_phone: '联系电话',
    seller_phone_ph: '+62 xxx xxxx xxxx',
    seller_legal_rep: '法人名称',
    seller_legal_rep_ph: '请输入法人名称',
    seller_payment_info: '收款银行信息',
    seller_empty: '暂无卖方信息，请点击「添加卖方」',
    // Buyer
    buyer_title: '买方信息',
    buyer_desc: '管理买方（客户）信息列表',
    buyer_add: '+ 添加买方',
    buyer_edit: '编辑买方',
    buyer_name: '公司名称',
    buyer_name_ph: '请输入买方公司名称',
    buyer_address: '公司地址',
    buyer_address_ph: '请输入买方公司地址',
    buyer_empty: '暂无买方信息，请点击「添加买方」',
    // Products
    product_title: '产品明细',
    product_desc: '管理产品信息列表，用于生成报价单和发票',
    product_add: '+ 添加产品',
    product_edit: '编辑产品',
    product_name: '产品名称',
    product_name_ph: '请输入产品名称',
    product_model: '型号',
    product_model_ph: '请输入型号',
    product_qty: '数量',
    product_unit: '单位',
    product_unit_price: '未含税单价',
    product_total_price: '未含税总价',
    product_empty: '暂无产品信息，请点击「添加产品」',
    product_import_desc: '两种添加方式：单个产品点「添加产品」加入产品列表；上传 Excel 会按一票货生成一条「汇总」记录，勾选后自动把全部货物填入发票/报价单。',
    product_download_template: '下载Excel模板',
    product_upload_excel: '上传Excel',
    product_template_file: '产品明细模板.xlsx',
    product_import_success: '成功导入',
    product_import_skipped: '行已跳过（名称为空）',
    product_import_fail: 'Excel 解析失败，请检查文件格式',
    product_import_no_col: '未找到「产品名称」列，请使用下载的模板',
    product_bundle: '汇总',
    product_bundle_items: '项',
    product_bundle_rename: '重命名',
    product_bundle_default: 'Excel汇总',
    product_import_bundle: '已生成一票货汇总',
    product_select_sets: '份',
    // Payment
    payment_title: '收款信息',
    payment_desc: '管理收款银行账户信息，保存后自动应用到生成的发票和报价单',
    payment_add: '+ 添加收款账户',
    payment_edit: '编辑收款账户',
    payment_bank: '银行名称',
    payment_bank_ph: '请输入银行名称',
    payment_account_no: '账号',
    payment_account_no_ph: '请输入银行账号',
    payment_account_name: '账户名称',
    payment_account_name_ph: '请输入账户名称',
    payment_swift: 'SWIFT Code',
    payment_swift_ph: '请输入SWIFT代码',
    payment_notes_label: '备注',
    payment_notes_ph: '备注信息...',
    payment_empty: '暂无收款信息，请点击「添加收款账户」',
    // Generate Invoice
    gen_invoice_title: '生成形式发票',
    gen_invoice_desc: '选择卖方、买方和产品，自动计算价格并生成PDF格式发票',
    gen_quotation_title: '生成报价单',
    gen_quotation_desc: '选择卖方、买方和产品，自动计算价格并生成PDF格式报价单',
    gen_doc_info: '单据信息',
    gen_invoice_no: '发票编号',
    gen_invoice_order_ref: '订单号/合同号',
    gen_invoice_order_ref_ph: '选填，如 PO2026-001',
    gen_po_contract_label: 'Po No./Contract No.',
    gen_quotation_no: '报价单编号',
    gen_date: '日期',
    gen_select_seller: '选择卖方',
    gen_select_buyer: '选择买方',
    gen_delivery_address: '送货地址',
    gen_select_payment: '收款账户',
    gen_currency: '货币',
    gen_tax_rate: '税率 (%)',
    gen_select_products: '选择产品',
    gen_summary: '价格汇总',
    gen_invoice_preview: '发票预览',
    gen_quotation_preview: '报价单预览',
    gen_generate_pdf: '生成 PDF',
    gen_seal_sign: '公章与签名',
    gen_seal: '公司公章',
    gen_seal_hint: '点击上传公章图片',
    gen_clear_seal: '清除公章',
    gen_signature: '签名',
    gen_sign_hint: '点击上传签名图片',
    gen_clear_sign: '清除签名',
    // Delivery Note
    gen_delivery_title: '生成送货单',
    gen_delivery_desc: '选择发货方、收货方和产品，生成PDF格式送货单',
    gen_delivery_no: '送货单编号',
    gen_delivery_preview: '送货单预览',
    gen_delivery_notes: '备注',
    delivery_notes_ph: '备注信息...',
    delivery_address_ph: '请输入送货地址...',
    gen_ship_from: '发货地址（卖方）',
    gen_ship_to: '收货地址（买方）',
    delivery_ship_from_ph: '请输入发货地址...',
    delivery_ship_to_ph: '请输入收货地址...',
    gen_no_seller: '请先在「卖方信息」中添加并保��卖方信息',
    gen_no_buyer: '请选择买方',
    gen_no_products: '请至少选择一个产品',
    gen_no_buyer_data: '请先在「买方信息」中添加买方',
    gen_no_product_data: '请先在「产品明细」中添加��品',
    gen_no_seller_data: '请先在「卖方信息」中添加卖方',
    gen_no_payment_data: '请先在「收款信息」中添加收款账户',
    gen_pdf_success: 'PDF已生成下载！',
    gen_generating: '正在生成PDF...',
    // History
    tab_history: '历史文档',
    history_title: '历史文档',
    history_desc: '查看、搜索和下载已生成的所有发票和报价单',
    history_empty: '暂无历史文档，生成发票或报价单后自动保存',
    history_search_ph: '搜索编号、买方名称...',
    history_filter_all: '全部',
    history_filter_invoice: '发票',
    history_filter_quotation: '报价单',
    history_filter_delivery: '送货单',
    history_filter_summary: '汇总单',
    history_download: '下载PDF',
    history_delete: '删除',
    history_clear: '清空全部',
    history_confirm_clear: '确认清空全部历史文档？此操作不可恢复。',
    history_saved: '文档已保存到历史记录',
    history_export_excel: '导出Excel',
    history_date_from: '开始日期',
    history_date_to: '结束日期',
    // Common
    save: '保存',
    cancel: '取消',
    edit: '编辑',
    delete: '删除',
    common_actions: '操作',
    saved: '已保存',
    confirm_delete: '确认删除？',
    exportData: '导出数据',
    importData: '导入数据',
    import_success: '数据导入成功！',
    import_error: '导入失败：文件格式不正确',
  },
  en: {
    appTitle: 'Quotation & Invoice Workbench',
    appSubtitle: '报价单与发票工作台',
    tab_seller: 'Seller',
    tab_buyer: 'Buyer',
    tab_products: 'Products',
    tab_payment: 'Payment',
    tab_generate_invoice: 'Invoice',
    tab_generate_quotation: 'Quotation',
    tab_generate_delivery: 'Delivery',
    seller_title: 'Seller Information',
    seller_desc: 'Manage multiple seller (supplier) profiles for quotations and invoices.',
    seller_add: '+ Add Seller',
    seller_edit: 'Edit Seller',
    seller_logo: 'Company Logo',
    seller_logo_upload: 'Click to upload logo',
    seller_logo_hint: 'PNG/JPG, recommended 300x100',
    seller_logo_remove: 'Remove Logo',
    seller_name: 'Company Name',
    seller_name_ph: 'Enter company name',
    seller_address: 'Company Address',
    seller_address_ph: 'Enter company address',
    seller_email: 'Email',
    seller_email_ph: 'example@company.com',
    seller_phone: 'Phone',
    seller_phone_ph: '+62 xxx xxxx xxxx',
    seller_legal_rep: 'Legal Representative',
    seller_legal_rep_ph: 'Enter legal representative name',
    seller_payment_info: 'Bank Account Information',
    seller_empty: 'No sellers yet. Click "Add Seller" to create one.',
    buyer_title: 'Buyer Information',
    buyer_desc: 'Manage buyer (customer) information list.',
    buyer_add: '+ Add Buyer',
    buyer_edit: 'Edit Buyer',
    buyer_name: 'Company Name',
    buyer_name_ph: 'Enter buyer company name',
    buyer_address: 'Company Address',
    buyer_address_ph: 'Enter buyer company address',
    buyer_empty: 'No buyers yet. Click "Add Buyer" to create one.',
    product_title: 'Product Details',
    product_desc: 'Manage product list for quotations and invoices.',
    product_add: '+ Add Product',
    product_edit: 'Edit Product',
    product_name: 'Product Name',
    product_name_ph: 'Enter product name',
    product_model: 'Model',
    product_model_ph: 'Enter model',
    product_qty: 'Qty',
    product_unit: 'Unit',
    product_unit_price: 'Unit Price (excl. tax)',
    product_total_price: 'Amount (excl. tax)',
    product_empty: 'No products yet. Click "Add Product" to create one.',
    product_import_desc: 'Two ways: click "Add Product" for a single item (adds to the list); upload an Excel file to create one "summary" entry per shipment — selecting it auto-fills all its goods into the Invoice/Quotation.',
    product_download_template: 'Download Excel Template',
    product_upload_excel: 'Upload Excel',
    product_template_file: 'Product_Template.xlsx',
    product_import_success: 'Imported',
    product_import_skipped: 'rows skipped (empty name)',
    product_import_fail: 'Failed to parse Excel. Check the file format.',
    product_import_no_col: 'Could not find a "Product Name" column. Please use the downloaded template.',
    product_bundle: 'BUNDLE',
    product_bundle_items: 'items',
    product_bundle_rename: 'Rename',
    product_bundle_default: 'Excel Bundle',
    product_import_bundle: 'Created one-shipment summary',
    product_select_sets: 'Sets',
    payment_title: 'Payment Information',
    payment_desc: 'Manage bank account details for payment. Saved data auto-applies to invoices and quotations.',
    payment_add: '+ Add Account',
    payment_edit: 'Edit Account',
    payment_bank: 'Bank Name',
    payment_bank_ph: 'Enter bank name',
    payment_account_no: 'Account No.',
    payment_account_no_ph: 'Enter account number',
    payment_account_name: 'Account Name',
    payment_account_name_ph: 'Enter account holder name',
    payment_swift: 'SWIFT Code',
    payment_swift_ph: 'Enter SWIFT code',
    payment_notes_label: 'Notes',
    payment_notes_ph: 'Additional notes...',
    payment_empty: 'No payment info yet. Click "Add Account" to create one.',
    gen_invoice_title: 'Generate Proforma Invoice',
    gen_invoice_desc: 'Select seller, buyer and products, auto-calculate and generate PDF invoice.',
    gen_quotation_title: 'Generate Quotation',
    gen_quotation_desc: 'Select seller, buyer and products, auto-calculate and generate PDF quotation.',
    gen_doc_info: 'Document Info',
    gen_invoice_no: 'Invoice No.',
    gen_invoice_order_ref: 'Order / Contract No.',
    gen_invoice_order_ref_ph: 'Optional, e.g. PO2026-001',
    gen_po_contract_label: 'Po No./Contract No.',
    gen_quotation_no: 'Quotation No.',
    gen_date: 'Date',
    gen_select_seller: 'Select Seller',
    gen_select_buyer: 'Select Buyer',
    gen_delivery_address: 'Delivery Address',
    gen_select_payment: 'Payment Account',
    gen_currency: 'Currency',
    gen_tax_rate: 'Tax Rate (%)',
    gen_select_products: 'Select Products',
    gen_summary: 'Price Summary',
    gen_invoice_preview: 'Invoice Preview',
    gen_quotation_preview: 'Quotation Preview',
    gen_generate_pdf: 'Generate PDF',
    gen_seal_sign: 'Seal & Signature',
    gen_seal: 'Company Seal',
    gen_seal_hint: 'Click to upload seal image',
    gen_clear_seal: 'Clear Seal',
    gen_signature: 'Signature',
    gen_sign_hint: 'Click to upload signature image',
    gen_clear_sign: 'Clear Signature',
    // Delivery Note
    gen_delivery_title: 'Generate Delivery Note',
    gen_delivery_desc: 'Select shipper, receiver and products to generate PDF delivery note.',
    gen_delivery_no: 'Delivery Note No.',
    gen_delivery_preview: 'Delivery Note Preview',
    gen_delivery_notes: 'Notes',
    delivery_notes_ph: 'Additional notes...',
    delivery_address_ph: 'Enter delivery address...',
    gen_ship_from: 'Ship From (Seller)',
    gen_ship_to: 'Ship To (Buyer)',
    delivery_ship_from_ph: 'Enter ship-from address...',
    delivery_ship_to_ph: 'Enter ship-to address...',
    gen_no_seller: 'Please fill and save seller info in "Seller" tab first',
    gen_no_buyer: 'Please select a buyer',
    gen_no_products: 'Please select at least one product',
    gen_no_buyer_data: 'Please add buyers in "Buyer" tab first',
    gen_no_product_data: 'Please add products in "Products" tab first',
    gen_no_seller_data: 'Please add sellers in "Seller" tab first',
    gen_no_payment_data: 'Please add payment info in "Payment" tab first',
    gen_pdf_success: 'PDF generated and downloaded!',
    gen_generating: 'Generating PDF...',
    tab_history: 'History',
    history_title: 'Document History',
    history_desc: 'View, search and download all generated invoices and quotations.',
    history_empty: 'No documents yet. Generated invoices/quotations are saved automatically.',
    history_search_ph: 'Search by number, buyer name...',
    history_filter_all: 'All',
    history_filter_invoice: 'Invoice',
    history_filter_quotation: 'Quotation',
    history_filter_delivery: 'Delivery',
    history_filter_summary: 'Summary',
    history_download: 'Download PDF',
    history_delete: 'Delete',
    history_clear: 'Clear All',
    history_confirm_clear: 'Clear all document history? This cannot be undone.',
    history_saved: 'Document saved to history.',
    history_export_excel: 'Export Excel',
    history_date_from: 'Start date',
    history_date_to: 'End date',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    common_actions: 'Actions',
    saved: 'Saved',
    confirm_delete: 'Confirm delete?',
    exportData: 'Export',
    importData: 'Import',
    import_success: 'Data imported successfully!',
    import_error: 'Import failed: invalid file format',
  }
};

// ============ State ============
let lang = 'zh';
const state = {
  sellers: [],
  buyers: [],
  products: [],
  savedDocuments: [],
  invoiceSelectedProducts: new Set(),
  quotationSelectedProducts: new Set(),
  deliverySelectedProducts: new Set(),
  invoiceQuantities: {},  // productId -> qty override
  quotationQuantities: {}, // productId -> qty override
  deliveryQuantities: {},  // productId -> qty override for delivery
  sealData: {},          // mode -> base64 (invoice/quotation/delivery)
  signatureData: {},     // mode -> base64 (invoice/quotation/delivery)
  modalLogoData: '', // temp logo for seller modal
};

// ============ Storage Keys ============
const SK = {
  sellers: 'pi_sellers_v2',
  buyers: 'pi_buyers_v2',
  products: 'pi_products_v2',
  savedDocuments: 'pi_saved_documents',
  lang: 'pi_lang',
  invCounter: 'pi_inv_counter',
  quotCounter: 'pi_quot_counter',
  dnCounter: 'pi_dn_counter',
};

// ============ Storage ============
function saveAll() {
  localStorage.setItem(SK.sellers, JSON.stringify(state.sellers));
  localStorage.setItem(SK.buyers, JSON.stringify(state.buyers));
  localStorage.setItem(SK.products, JSON.stringify(state.products));
  localStorage.setItem(SK.savedDocuments, JSON.stringify(state.savedDocuments));
  localStorage.setItem(SK.lang, lang);
  localStorage.setItem('pi_seal_data', JSON.stringify(state.sealData));
  localStorage.setItem('pi_signature_data', JSON.stringify(state.signatureData));
}

function loadAll() {
  try {
    // Load seal/signature data
    const savedSeal = localStorage.getItem('pi_seal_data');
    if (savedSeal) try { state.sealData = JSON.parse(savedSeal); } catch(e) {}
    const savedSign = localStorage.getItem('pi_signature_data');
    if (savedSign) try { state.signatureData = JSON.parse(savedSign); } catch(e) {}
    // Migrate old single-seller format
    const oldSeller = localStorage.getItem('pi_seller');
    if (oldSeller) {
      const s = JSON.parse(oldSeller);
      if (s && s.name) {
        state.sellers = [{ id: uid(), logo: s.logo || '', name: s.name, address: s.address || '', email: s.email || '', phone: s.phone || '', legalRep: s.legalRep || '' }];
      }
      localStorage.removeItem('pi_seller');
    }
    // Migrate old terms/paymentInfos into first seller
    const oldPaymentInfos = localStorage.getItem('pi_payment_infos');
    const oldTerms = localStorage.getItem('pi_terms');
    let pmtMigrated = null;
    if (oldPaymentInfos) {
      try { const arr = JSON.parse(oldPaymentInfos); if (arr.length > 0) pmtMigrated = arr[0]; } catch(e) {}
      localStorage.removeItem('pi_payment_infos');
    }
    if (oldTerms) {
      try { const t = JSON.parse(oldTerms); if (t && (t.terms || t.notes)) { pmtMigrated = pmtMigrated || {}; pmtMigrated.notes = [t.terms, t.notes].filter(Boolean).join('\n'); } } catch(e) {}
      localStorage.removeItem('pi_terms');
    }

    const sl = localStorage.getItem(SK.sellers);
    if (sl) state.sellers = JSON.parse(sl);
    if (pmtMigrated && state.sellers.length > 0) {
      if (!state.sellers[0].bankName) state.sellers[0].bankName = pmtMigrated.bankName || '';
      if (!state.sellers[0].accountNo) state.sellers[0].accountNo = pmtMigrated.accountNo || '';
      if (!state.sellers[0].accountName) state.sellers[0].accountName = pmtMigrated.accountName || '';
      if (!state.sellers[0].swiftCode) state.sellers[0].swiftCode = pmtMigrated.swiftCode || '';
      if (!state.sellers[0].paymentNotes) state.sellers[0].paymentNotes = pmtMigrated.notes || '';
    }
    const b = localStorage.getItem(SK.buyers);
    if (b) state.buyers = JSON.parse(b);
    const p = localStorage.getItem(SK.products);
    if (p) state.products = JSON.parse(p);
    const sd = localStorage.getItem(SK.savedDocuments);
    if (sd) state.savedDocuments = JSON.parse(sd);
    const l = localStorage.getItem(SK.lang);
    if (l) lang = l;
  } catch(e) { console.error('Load error:', e); }
}

// ============ i18n ============
function t(key) {
  return (I18N[lang] && I18N[lang][key]) || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.getElementById('langToggle').textContent = lang === 'zh' ? 'English' : '中文';
}

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  localStorage.setItem(SK.lang, lang);
  applyI18n();
  renderAll();
}

// ============ Helpers ============
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function fmtNum(n, currencyElId) {
  const num = Number(n) || 0;
  return num.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtCurrency(amount, currencyElOrStr) {
  let currency;
  if (typeof currencyElOrStr === 'string' && currencyElOrStr && currencyElOrStr.length <= 5) {
    // Passed a currency code string directly (e.g., from history)
    currency = currencyElOrStr;
  } else {
    const el = currencyElOrStr ? document.getElementById(currencyElOrStr) : null;
    currency = el ? el.value : 'IDR';
  }
  const symbols = { IDR: 'Rp', USD: '$', CNY: '\u00A5', EUR: '\u20AC', SGD: 'S$' };
  const sym = symbols[currency] || '';
  return sym + ' ' + fmtNum(amount);
}

function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, duration);
}

function genDocNo(prefix, counterKey) {
  const counter = parseInt(localStorage.getItem(counterKey) || '0') + 1;
  localStorage.setItem(counterKey, counter.toString());
  const year = new Date().getFullYear();
  return `${prefix}-${year}-${String(counter).padStart(4, '0')}`;
}

function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============ Tab Navigation ============
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === 'tab-' + tabName);
  });
  if (tabName === 'generate-invoice') renderGenerateInvoiceTab();
  if (tabName === 'generate-quotation') renderGenerateQuotationTab();
  if (tabName === 'generate-delivery') renderGenerateDeliveryTab();
  if (tabName === 'history') renderHistoryTab();
}

function getActiveTab() {
  const active = document.querySelector('.tab-btn.active');
  return active ? active.dataset.tab : 'seller';
}

// ============ Seller Tab (Multi) ============
function renderSellerTab() {
  const list = document.getElementById('sellerList');
  const empty = document.getElementById('sellerEmpty');
  if (state.sellers.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = state.sellers.map(s => `
    <div class="info-card">
      <div class="info-card-left">
        ${s.logo ? `<img src="${s.logo}" class="info-card-logo" alt="logo">` : '<div class="info-card-logo-placeholder">🏢</div>'}
        <div class="info-card-body">
          <div class="info-card-name">${escHtml(s.name)}</div>
          <div class="info-card-detail">
            ${s.address ? `<span>${escHtml(s.address)}</span>` : ''}
            ${s.email ? `<span>${escHtml(s.email)}</span>` : ''}
            ${s.phone ? `<span>${escHtml(s.phone)}</span>` : ''}
            ${s.legalRep ? `<span>法人: ${escHtml(s.legalRep)}</span>` : ''}
            ${s.bankName ? `<span>银行: ${escHtml(s.bankName)} ${s.accountNo || ''}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="table-actions">
        <button class="btn-icon edit" onclick="openSellerModal('${s.id}')">${t('edit')}</button>
        <button class="btn-icon delete" onclick="deleteSeller('${s.id}')">${t('delete')}</button>
      </div>
    </div>
  `).join('');
}

function openSellerModal(id) {
  const modal = document.getElementById('sellerModal');
  const title = document.getElementById('sellerModalTitle');
  state.modalLogoData = '';

  if (id) {
    title.textContent = t('seller_edit');
    const s = state.sellers.find(s => s.id === id);
    if (s) {
      document.getElementById('sellerEditId').value = s.id;
      document.getElementById('sellerName').value = s.name || '';
      document.getElementById('sellerAddress').value = s.address || '';
      document.getElementById('sellerEmail').value = s.email || '';
      document.getElementById('sellerPhone').value = s.phone || '';
      document.getElementById('sellerLegalRep').value = s.legalRep || '';
      document.getElementById('sellerBankName').value = s.bankName || '';
      document.getElementById('sellerAccountNo').value = s.accountNo || '';
      document.getElementById('sellerAccountName').value = s.accountName || '';
      document.getElementById('sellerSwift').value = s.swiftCode || '';
      document.getElementById('sellerPaymentNotes').value = s.paymentNotes || '';
      state.modalLogoData = s.logo || '';
      updateModalLogo();
    }
  } else {
    title.textContent = t('seller_add');
    document.getElementById('sellerEditId').value = '';
    document.getElementById('sellerName').value = '';
    document.getElementById('sellerAddress').value = '';
    document.getElementById('sellerEmail').value = '';
    document.getElementById('sellerPhone').value = '';
    document.getElementById('sellerLegalRep').value = '';
    document.getElementById('sellerBankName').value = '';
    document.getElementById('sellerAccountNo').value = '';
    document.getElementById('sellerAccountName').value = '';
    document.getElementById('sellerSwift').value = '';
    document.getElementById('sellerPaymentNotes').value = '';
    state.modalLogoData = '';
    updateModalLogo();
  }
  modal.style.display = 'flex';
}

function updateModalLogo() {
  const preview = document.getElementById('modalLogoPreview');
  const placeholder = document.getElementById('modalLogoPlaceholder');
  const removeBtn = document.getElementById('modalRemoveLogoBtn');
  if (state.modalLogoData) {
    preview.src = state.modalLogoData;
    preview.style.display = 'block';
    placeholder.style.display = 'none';
    removeBtn.style.display = 'inline-block';
  } else {
    preview.style.display = 'none';
    placeholder.style.display = 'flex';
    removeBtn.style.display = 'none';
  }
}

function handleModalLogoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    if (file.size > 2 * 1024 * 1024) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const maxW = 400;
        const scale = Math.min(1, maxW / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        state.modalLogoData = canvas.toDataURL('image/png');
        updateModalLogo();
      };
      img.src = ev.target.result;
    } else {
      state.modalLogoData = ev.target.result;
      updateModalLogo();
    }
  };
  reader.readAsDataURL(file);
}

function saveSeller() {
  const id = document.getElementById('sellerEditId').value;
  const name = document.getElementById('sellerName').value.trim();
  const address = document.getElementById('sellerAddress').value.trim();
  const email = document.getElementById('sellerEmail').value.trim();
  const phone = document.getElementById('sellerPhone').value.trim();
  const legalRep = document.getElementById('sellerLegalRep').value.trim();
  const bankName = document.getElementById('sellerBankName').value.trim();
  const accountNo = document.getElementById('sellerAccountNo').value.trim();
  const accountName = document.getElementById('sellerAccountName').value.trim();
  const swiftCode = document.getElementById('sellerSwift').value.trim();
  const paymentNotes = document.getElementById('sellerPaymentNotes').value.trim();

  if (!name) {
    showToast(t('seller_name') + ' ' + (lang === 'zh' ? '不能为空' : 'is required'));
    return;
  }

  if (id) {
    const s = state.sellers.find(s => s.id === id);
    if (s) {
      s.name = name; s.address = address; s.email = email; s.phone = phone; s.legalRep = legalRep;
      s.logo = state.modalLogoData;
      s.bankName = bankName; s.accountNo = accountNo; s.accountName = accountName; s.swiftCode = swiftCode; s.paymentNotes = paymentNotes;
    }
  } else {
    state.sellers.push({ id: uid(), logo: state.modalLogoData, name, address, email, phone, legalRep, bankName, accountNo, accountName, swiftCode, paymentNotes });
  }
  saveAll();
  closeModal('sellerModal');
  renderSellerTab();
  showToast(t('saved'));
}

function deleteSeller(id) {
  if (!confirm(t('confirm_delete'))) return;
  state.sellers = state.sellers.filter(s => s.id !== id);
  saveAll();
  renderSellerTab();
}

// ============ Buyer Tab ============
function renderBuyerTab() {
  const list = document.getElementById('buyerList');
  const empty = document.getElementById('buyerEmpty');
  if (state.buyers.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = state.buyers.map(b => `
    <div class="info-card">
      <div class="info-card-left">
        <div class="info-card-body">
          <div class="info-card-name">${escHtml(b.name)}</div>
          <div class="info-card-detail">
            ${b.address ? `<span>Address: ${escHtml(b.address)}</span>` : ''}
            ${b.npwp ? `<span>NPWP: ${escHtml(b.npwp)}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="table-actions">
        <button class="btn-icon edit" onclick="openBuyerModal('${b.id}')">${t('edit')}</button>
        <button class="btn-icon delete" onclick="deleteBuyer('${b.id}')">${t('delete')}</button>
      </div>
    </div>
  `).join('');
}

function openBuyerModal(id) {
  const modal = document.getElementById('buyerModal');
  const title = document.getElementById('buyerModalTitle');
  if (id) {
    title.textContent = t('buyer_edit');
    const b = state.buyers.find(b => b.id === id);
    if (b) {
      document.getElementById('buyerEditId').value = b.id;
      document.getElementById('buyerName').value = b.name || '';
      document.getElementById('buyerAddress').value = b.address || '';
      document.getElementById('buyerNpwp').value = b.npwp || '';
    }
  } else {
    title.textContent = t('buyer_add');
    document.getElementById('buyerEditId').value = '';
    document.getElementById('buyerName').value = '';
    document.getElementById('buyerAddress').value = '';
    document.getElementById('buyerNpwp').value = '';
  }
  modal.style.display = 'flex';
}

function saveBuyer() {
  const id = document.getElementById('buyerEditId').value;
  const name = document.getElementById('buyerName').value.trim();
  const address = document.getElementById('buyerAddress').value.trim();
  const npwp = document.getElementById('buyerNpwp').value.trim();
  if (!name) { showToast(t('buyer_name') + ' ' + (lang === 'zh' ? '不能为空' : 'is required')); return; }
  if (id) {
    const b = state.buyers.find(b => b.id === id);
    if (b) { b.name = name; b.address = address; b.npwp = npwp; }
  } else {
    state.buyers.push({ id: uid(), name, address, npwp });
  }
  saveAll();
  closeModal('buyerModal');
  renderBuyerTab();
  showToast(t('saved'));
}

function deleteBuyer(id) {
  if (!confirm(t('confirm_delete'))) return;
  state.buyers = state.buyers.filter(b => b.id !== id);
  saveAll();
  renderBuyerTab();
}

// ============ Products Tab ============
function renderProductsTab() {
  const tbody = document.getElementById('productTableBody');
  const empty = document.getElementById('productEmpty');
  const table = document.getElementById('productTable');
  if (state.products.length === 0) {
    table.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  table.style.display = 'table';
  empty.style.display = 'none';
  tbody.innerHTML = state.products.map((p, i) => {
    if (p && p.type === 'bundle') {
      const items = p.items || [];
      const bundleTotal = items.reduce((s, it) => s + (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0), 0);
      const detailRows = items.map((it, j) => `
        <tr>
          <td>${j + 1}</td>
          <td>${escHtml(it.name)}</td>
          <td>${escHtml(it.model || '-')}</td>
          <td>${it.quantity}</td>
          <td>${escHtml(it.unit || '-')}</td>
          <td>${fmtNum(it.unitPrice)}</td>
          <td>${fmtNum((Number(it.quantity) || 0) * (Number(it.unitPrice) || 0))}</td>
        </tr>`).join('');
      return `
        <tr class="bundle-row">
          <td>${i + 1}</td>
          <td>
            <div class="bundle-name">
              <span class="bundle-toggle" id="bt-${p.id}" onclick="toggleBundleDetail('${p.id}')">▸</span>
              <input class="bundle-name-input" value="${escHtml(p.name)}"
                onchange="renameBundleInline('${p.id}', this.value)"
                onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
                onclick="event.stopPropagation()" title="${t('product_bundle_rename')}" />
              <span class="bundle-badge">${t('product_bundle')}</span>
            </div>
          </td>
          <td colspan="4" class="bundle-summary">${items.length} ${t('product_bundle_items')} · ${fmtNum(bundleTotal)}</td>
          <td class="bundle-total">${fmtNum(bundleTotal)}</td>
          <td>
            <div class="table-actions">
              <button class="btn-icon edit" onclick="renameBundle('${p.id}')">${t('product_bundle_rename')}</button>
              <button class="btn-icon delete" onclick="deleteProduct('${p.id}')">${t('delete')}</button>
            </div>
          </td>
        </tr>
        <tr class="bundle-detail-row" id="bd-${p.id}" style="display:none">
          <td colspan="8">
            <table class="data-table bundle-detail-table">
              <thead>
                <tr>
                  <th>#</th><th>${t('product_name')}</th><th>${t('product_model')}</th>
                  <th>${t('product_qty')}</th><th>${t('product_unit')}</th>
                  <th>${t('product_unit_price')}</th><th>${t('product_total_price')}</th>
                </tr>
              </thead>
              <tbody>${detailRows}</tbody>
            </table>
          </td>
        </tr>`;
    }
    return `
      <tr>
        <td>${i + 1}</td><td>${escHtml(p.name)}</td><td>${escHtml(p.model || '-')}</td>
        <td>${p.quantity}</td><td>${escHtml(p.unit || '-')}</td>
        <td>${fmtNum(p.unitPrice)}</td><td>${fmtNum(p.quantity * p.unitPrice)}</td>
        <td>
          <div class="table-actions">
            <button class="btn-icon edit" onclick="openProductModal('${p.id}')">${t('edit')}</button>
            <button class="btn-icon delete" onclick="deleteProduct('${p.id}')">${t('delete')}</button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

function openProductModal(id) {
  const modal = document.getElementById('productModal');
  const title = document.getElementById('productModalTitle');
  if (id) {
    title.textContent = t('product_edit');
    const p = state.products.find(p => p.id === id);
    if (p) {
      document.getElementById('productEditId').value = p.id;
      document.getElementById('productName').value = p.name || '';
      document.getElementById('productModel').value = p.model || '';
      document.getElementById('productQty').value = p.quantity || 1;
      document.getElementById('productUnit').value = p.unit || 'pcs';
      document.getElementById('productUnitPrice').value = p.unitPrice || 0;
      document.getElementById('productTotalPrice').value = fmtNum((p.quantity || 0) * (p.unitPrice || 0));
    }
  } else {
    title.textContent = t('product_add');
    document.getElementById('productEditId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productModel').value = '';
    document.getElementById('productQty').value = '1';
    document.getElementById('productUnit').value = 'pcs';
    document.getElementById('productUnitPrice').value = '0';
    document.getElementById('productTotalPrice').value = '0.00';
  }
  modal.style.display = 'flex';
}

function updateProductTotal() {
  const qty = parseFloat(document.getElementById('productQty').value) || 0;
  const up = parseFloat(document.getElementById('productUnitPrice').value) || 0;
  document.getElementById('productTotalPrice').value = fmtNum(qty * up);
}

function saveProduct() {
  const id = document.getElementById('productEditId').value;
  const name = document.getElementById('productName').value.trim();
  const model = document.getElementById('productModel').value.trim();
  const quantity = parseFloat(document.getElementById('productQty').value) || 0;
  const unit = document.getElementById('productUnit').value.trim();
  const unitPrice = parseFloat(document.getElementById('productUnitPrice').value) || 0;
  if (!name) { showToast(t('product_name') + ' ' + (lang === 'zh' ? '不能为空' : 'is required')); return; }
  if (id) {
    const p = state.products.find(p => p.id === id);
    if (p) { p.name = name; p.model = model; p.quantity = quantity; p.unit = unit; p.unitPrice = unitPrice; }
  } else {
    state.products.push({ id: uid(), name, model, quantity, unit, unitPrice });
  }
  saveAll();
  closeModal('productModal');
  renderProductsTab();
  showToast(t('saved'));
}

function deleteProduct(id) {
  if (!confirm(t('confirm_delete'))) return;
  state.products = state.products.filter(p => p.id !== id);
  state.invoiceSelectedProducts.delete(id);
  state.quotationSelectedProducts.delete(id);
  state.deliverySelectedProducts.delete(id);
  saveAll();
  renderProductsTab();
}

// Expand a bundle's contained items (product tab).
function toggleBundleDetail(id) {
  const row = document.getElementById('bd-' + id);
  const arrow = document.getElementById('bt-' + id);
  if (!row) return;
  const hidden = row.style.display === 'none';
  row.style.display = hidden ? 'table-row' : 'none';
  if (arrow) arrow.textContent = hidden ? '▾' : '▸';
}

// Rename a bundle summary (product tab).
function renameBundle(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  const name = window.prompt(lang === 'zh' ? '请输入汇总名称' : 'Enter summary name', p.name || '');
  if (name && name.trim()) {
    p.name = name.trim();
    saveAll();
    renderProductsTab();
  }
}

// Rename a bundle inline from the editable input in the product list.
function renameBundleInline(id, val) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  const name = (val || '').trim();
  if (name) {
    p.name = name;
    saveAll();
  }
  renderProductsTab();
}

// Flatten the selected products into invoice/quotation/delivery line items.
// A bundle expands into one row per contained item, multiplied by its "sets"
// value (stored in the mode's quantities override map). Singular products pass
// through unchanged.
function flattenProducts(products, multMap) {
  const out = [];
  for (const p of products) {
    if (!p) continue;
    if (p.type === 'bundle') {
      const mult = (multMap && multMap[p.id] !== undefined) ? Math.max(1, parseInt(multMap[p.id]) || 1) : 1;
      for (const it of (p.items || [])) {
        out.push({
          name: it.name,
          model: it.model,
          quantity: (Number(it.quantity) || 0) * mult,
          unit: it.unit,
          unitPrice: Number(it.unitPrice) || 0
        });
      }
    } else {
      const qty = (multMap && multMap[p.id] !== undefined)
        ? Math.max(1, parseInt(multMap[p.id]) || 1)
        : (p.quantity || 0);
      out.push({
        name: p.name,
        model: p.model,
        quantity: qty,
        unit: p.unit,
        unitPrice: p.unitPrice
      });
    }
  }
  return out;
}

// ============ Product Excel Template & Bulk Import ============
function downloadProductTemplate() {
  if (typeof XLSX === 'undefined') {
    showToast('Error: Excel library not loaded. Please refresh.', 5000);
    return;
  }
  const headers = ['产品名称', '型号', '数量', '单位', '未含税单价'];
  // a few empty example rows so users see the layout (empty name => skipped on import)
  const data = [headers, ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']];
  const ws = XLSX.utils.aoa_to_sheet(data);
  ws['!cols'] = [{ wch: 24 }, { wch: 16 }, { wch: 10 }, { wch: 10 }, { wch: 14 }];

  const instr = [
    ['填写说明 / Instructions'],
    ['产品名称 (Product Name) — 必填 / required'],
    ['型号 (Model) — 选填 / optional'],
    ['数量 (Quantity) — 必填，填数字 / required, number'],
    ['单位 (Unit) — 选填，如 pcs/set/kg / optional'],
    ['未含税单价 (Unit Price, excl. tax) — 必填，填数字 / required, number'],
    ['请勿修改表头行；名称列为空的行将被忽略。'],
    ['Do not modify the header row; rows with empty name are ignored.']
  ];
  const wsInstr = XLSX.utils.aoa_to_sheet(instr);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '产品明细');
  XLSX.utils.book_append_sheet(wb, wsInstr, '填写说明');
  XLSX.writeFile(wb, t('product_template_file'));
}

function mapProductColumns(header) {
  const find = (candidates) => {
    for (let i = 0; i < header.length; i++) {
      const h = String(header[i] || '').toLowerCase();
      if (candidates.some(c => h.includes(c.toLowerCase()))) return i;
    }
    return -1;
  };
  return {
    name: find(['产品名称', 'product name', 'name']),
    model: find(['型号', 'model']),
    qty: find(['数量', 'quantity', 'qty']),
    unit: find(['单位', 'unit']),
    unitPrice: find(['未含税单价', '单价', 'unit price', 'price']),
  };
}

function handleProductFileUpload(file) {
  if (typeof XLSX === 'undefined') {
    showToast('Error: Excel library not loaded. Please refresh.', 5000);
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      // prefer the sheet whose header contains a product-name column
      let targetName = wb.SheetNames[0];
      for (const name of wb.SheetNames) {
        const h = XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, raw: false })[0] || [];
        if (mapProductColumns(h).name >= 0) { targetName = name; break; }
      }
      const ws = wb.Sheets[targetName];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
      if (!rows.length) { showToast(t('product_import_fail'), 5000); return; }
      const col = mapProductColumns(rows[0]);
      if (col.name < 0) { showToast(t('product_import_no_col'), 5000); return; }

      let added = 0, skipped = 0;
      const parsed = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const name = String(row[col.name] ?? '').trim();
        if (!name) { skipped++; continue; }
        const model = String(row[col.model] ?? '').trim();
        const quantity = parseFloat(String(row[col.qty] ?? '').replace(/,/g, '')) || 0;
        const unit = String(row[col.unit] ?? '').trim() || 'pcs';
        const unitPrice = parseFloat(String(row[col.unitPrice] ?? '').replace(/,/g, '')) || 0;
        parsed.push({ name, model, quantity, unit, unitPrice });
        added++;
      }

      if (parsed.length === 0) {
        showToast(lang === 'zh' ? '没有有效产品行（名称为空）' : 'No valid product rows (empty name)', 5000);
        return;
      }
      // Excel upload = one shipment ("一票货") -> produce a SINGLE summary entry
      // (a "bundle") in the product list. The bundle is selectable; when chosen in
      // the Invoice / Quotation interface, all its goods auto-fill the line items.
      if (skipped) {
        showToast(`${lang === 'zh' ? '已忽略' : 'Ignored'} ${skipped} ${t('product_import_skipped')}`, 3000);
      }
      const dateStr = new Date().toISOString().slice(0, 10);
      const bundle = {
        id: uid(),
        type: 'bundle',
        name: `${t('product_bundle_default')} ${dateStr}`,
        items: parsed
      };
      state.products.push(bundle);
      saveAll();
      renderProductsTab();
      const msg = `${t('product_import_bundle')}（${parsed.length} ${t('product_bundle_items')}）`;
      showToast(msg, 4000);
    } catch (err) {
      console.error('Product Excel import error:', err);
      showToast(t('product_import_fail'), 5000);
    }
  };
  reader.readAsArrayBuffer(file);
}

// ============ Generate Invoice Tab ============
function renderGenerateInvoiceTab() {
  const noField = document.getElementById('invoiceNo');
  if (!noField.value) noField.value = genDocNo('INV', SK.invCounter);
  const dateField = document.getElementById('invoiceDate');
  if (!dateField.value) dateField.value = new Date().toISOString().slice(0, 10);

  populateSelect('invoiceSellerSelect', state.sellers, 'gen_no_seller_data');
  populateSelect('invoiceBuyerSelect', state.buyers, 'gen_no_buyer_data');

  renderProductSelectList('invoiceProductSelectList', 'invoiceProductSelectEmpty', state.invoiceSelectedProducts, 'invoice');
  restoreSealSignPreview('invoice');
  renderInvoicePreview();
}

function populateSelect(elId, items, emptyKey) {
  const sel = document.getElementById(elId);
  if (!sel) return;
  const prevValue = sel.value; // preserve previously selected value
  if (items.length === 0) {
    sel.innerHTML = `<option value="">${t(emptyKey)}</option>`;
  } else {
    sel.innerHTML = `<option value="">-- ${t('gen_select_seller').includes('卖方') ? t('gen_select_seller') : (elId.includes('Seller') ? t('gen_select_seller') : elId.includes('Buyer') ? t('gen_select_buyer') : t('gen_select_payment'))} --</option>` +
      items.map(item => `<option value="${item.id}">${escHtml(item.name || '')}</option>`).join('');
  }
  // restore previous selection if still valid
  if (prevValue && items.some(i => i.id === prevValue)) {
    sel.value = prevValue;
  }
}

function getModeConfig(mode) {
  if (mode === 'delivery') return {
    selectedProducts: state.deliverySelectedProducts,
    quantities: state.deliveryQuantities,
    containerId: 'deliveryProductSelectList',
    emptyId: 'deliveryProductSelectEmpty',
    onUpdate: () => { renderDeliveryPreview(); }
  };
  if (mode === 'invoice') return {
    selectedProducts: state.invoiceSelectedProducts,
    quantities: state.invoiceQuantities,
    containerId: 'invoiceProductSelectList',
    emptyId: 'invoiceProductSelectEmpty',
    onUpdate: () => { updateInvoiceSummary(); renderInvoicePreview(); }
  };
  // quotation
  return {
    selectedProducts: state.quotationSelectedProducts,
    quantities: state.quotationQuantities,
    containerId: 'quotationProductSelectList',
    emptyId: 'quotationProductSelectEmpty',
    onUpdate: () => { updateQuotationSummary(); renderQuotationPreview(); }
  };
}

function renderProductSelectList(containerId, emptyId, selectedSet, mode) {
  const container = document.getElementById(containerId);
  const empty = document.getElementById(emptyId);
  if (state.products.length === 0) {
    container.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  const cfg = getModeConfig(mode);
  container.innerHTML = state.products.map(p => {
    const checked = selectedSet.has(p.id) ? 'checked' : '';
    const isBundle = p && p.type === 'bundle';
    let nameHtml, metaHtml, qtyHtml;
    if (isBundle) {
      const items = p.items || [];
      const count = items.length;
      const bundleTotal = items.reduce((s, it) => s + (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0), 0);
      const sets = cfg.quantities[p.id] !== undefined ? cfg.quantities[p.id] : 1;
      const qty = Math.max(1, parseInt(sets) || 1);
      nameHtml = `📦 ${escHtml(p.name)} <span class="bundle-badge">${t('product_bundle')}</span>`;
      metaHtml = `${count} ${t('product_bundle_items')} &middot; ${fmtNum(bundleTotal)}`;
      qtyHtml = `
        <span class="qty-label">${t('product_select_sets')}:</span>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" onclick="stepProductQty('${p.id}', -1, '${mode}')">&minus;</button>
          <input type="number" class="qty-input" value="${qty}" min="1" step="1"
            onchange="changeProductQty('${p.id}', this.value, '${mode}')"
            onclick="event.stopPropagation()">
          <button type="button" class="qty-btn" onclick="stepProductQty('${p.id}', 1, '${mode}')">+</button>
        </div>
        <span class="qty-total">= ${fmtNum(bundleTotal * qty)}</span>`;
    } else {
      const qty = cfg.quantities[p.id] !== undefined ? cfg.quantities[p.id] : (p.quantity || 0);
      const total = qty * (p.unitPrice || 0);
      nameHtml = escHtml(p.name);
      metaHtml = `${escHtml(p.model || '-')} &middot; ${escHtml(p.unit || '')} &middot; ${fmtNum(p.unitPrice)}`;
      qtyHtml = `
        <span class="qty-label">Qty:</span>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" onclick="stepProductQty('${p.id}', -1, '${mode}')">&minus;</button>
          <input type="number" class="qty-input" value="${qty}" min="1" step="1"
            onchange="changeProductQty('${p.id}', this.value, '${mode}')"
            onclick="event.stopPropagation()">
          <button type="button" class="qty-btn" onclick="stepProductQty('${p.id}', 1, '${mode}')">+</button>
        </div>
        <span class="qty-total">= ${fmtNum(total)}</span>`;
    }
    return `
      <label class="product-select-item ${checked ? 'selected' : ''} ${isBundle ? 'is-bundle' : ''}" data-pid="${p.id}">
        <input type="checkbox" ${checked} onchange="toggleProduct('${p.id}', this.checked, '${mode}')">
        <div class="product-select-info">
          <div class="product-select-name">${nameHtml}</div>
          <div class="product-select-meta">${metaHtml}</div>
        </div>
        <div class="product-select-qty">${qtyHtml}</div>
      </label>
    `;
  }).join('');
}

function getProductQty(product, mode) {
  const cfg = getModeConfig(mode);
  if (cfg.quantities[product.id] !== undefined) return cfg.quantities[product.id];
  return product.quantity || 0;
}

function changeProductQty(id, val, mode) {
  const cfg = getModeConfig(mode);
  const qty = parseInt(val) || 1;
  cfg.quantities[id] = Math.max(1, qty);
  renderProductSelectList(cfg.containerId, cfg.emptyId, cfg.selectedProducts, mode);
  cfg.onUpdate();
}

// Increase/decrease the quantity (or "sets" for a bundle) via +/- buttons.
function stepProductQty(id, delta, mode) {
  const cfg = getModeConfig(mode);
  const p = state.products.find(x => x.id === id);
  const def = (p && p.type === 'bundle') ? 1 : (p ? (p.quantity || 0) : 1);
  const current = cfg.quantities[id] !== undefined ? cfg.quantities[id] : def;
  const next = Math.max(1, (parseInt(current) || 1) + delta);
  cfg.quantities[id] = next;
  renderProductSelectList(cfg.containerId, cfg.emptyId, cfg.selectedProducts, mode);
  cfg.onUpdate();
}

function toggleProduct(id, checked, mode) {
  const cfg = getModeConfig(mode);
  if (checked) cfg.selectedProducts.add(id); else { cfg.selectedProducts.delete(id); delete cfg.quantities[id]; }
  renderProductSelectList(cfg.containerId, cfg.emptyId, cfg.selectedProducts, mode);
  cfg.onUpdate();
}

function updateInvoiceSummary() {
  const selected = state.products.filter(p => state.invoiceSelectedProducts.has(p.id));
  const resolved = flattenProducts(selected, state.invoiceQuantities);
  const total = resolved.reduce((s, p) => s + (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0), 0);
  const taxRate = parseFloat(document.getElementById('invoiceTaxRate').value) || 0;
  const dpp = taxRate > 0 ? total * taxRate / (taxRate + 1) : total;
  const ppn = total * taxRate / 100;
  const grand = total + ppn;
  document.getElementById('invoiceDppLabel').textContent = taxRate > 0 ? `${taxRate}/${taxRate + 1} DPP` : 'DPP';
  document.getElementById('invoicePpnLabel').textContent = `PPN ${taxRate}%`;
  document.getElementById('invoiceSummaryTotal').textContent = fmtCurrency(total, 'invoiceCurrencySelect');
  document.getElementById('invoiceSummaryDpp').textContent = fmtCurrency(dpp, 'invoiceCurrencySelect');
  document.getElementById('invoiceSummaryPpn').textContent = fmtCurrency(ppn, 'invoiceCurrencySelect');
  document.getElementById('invoiceSummaryGrand').textContent = fmtCurrency(grand, 'invoiceCurrencySelect');
}

function renderInvoicePreview() {
  updateInvoiceSummary();
  const preview = document.getElementById('invoicePreview');
  const sellerId = document.getElementById('invoiceSellerSelect').value;
  const buyerId = document.getElementById('invoiceBuyerSelect').value;
  const seller = state.sellers.find(s => s.id === sellerId);
  const buyer = state.buyers.find(b => b.id === buyerId);
  const selected = state.products.filter(p => state.invoiceSelectedProducts.has(p.id));
  const resolved = flattenProducts(selected, state.invoiceQuantities);
  const total = resolved.reduce((s, p) => s + (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0), 0);
  const taxRate = parseFloat(document.getElementById('invoiceTaxRate').value) || 0;
  const dpp = taxRate > 0 ? total * taxRate / (taxRate + 1) : total;
  const ppn = total * taxRate / 100;
  const invNo = document.getElementById('invoiceNo').value;
  const invDate = document.getElementById('invoiceDate').value;
  const orderRef = document.getElementById('invoiceOrderRef') ? document.getElementById('invoiceOrderRef').value : '';
  const payment = seller || null;

  if (!seller && !buyer && state.invoiceSelectedProducts.size === 0) {
    preview.innerHTML = `<div class="invoice-empty-preview">${t('gen_invoice_desc')}</div>`;
    return;
  }
  preview.innerHTML = buildDocumentHTML(seller, buyer, resolved, { total, dpp, ppn, grand: total + ppn, invNo, invDate, orderRef, payment, type: 'invoice', seal: state.sealData['invoice'], signature: state.signatureData['invoice'], taxRate });
}

// ============ Generate Quotation Tab ============
function renderGenerateQuotationTab() {
  const noField = document.getElementById('quotationNo');
  if (!noField.value) noField.value = genDocNo('QTN', SK.quotCounter);
  const dateField = document.getElementById('quotationDate');
  if (!dateField.value) dateField.value = new Date().toISOString().slice(0, 10);

  populateSelect('quotationSellerSelect', state.sellers, 'gen_no_seller_data');
  populateSelect('quotationBuyerSelect', state.buyers, 'gen_no_buyer_data');

  renderProductSelectList('quotationProductSelectList', 'quotationProductSelectEmpty', state.quotationSelectedProducts, 'quotation');
  restoreSealSignPreview('quotation');
  renderQuotationPreview();
}

function updateQuotationSummary() {
  const selected = state.products.filter(p => state.quotationSelectedProducts.has(p.id));
  const resolved = flattenProducts(selected, state.quotationQuantities);
  const total = resolved.reduce((s, p) => s + (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0), 0);
  const taxRate = parseFloat(document.getElementById('quotationTaxRate').value) || 0;
  const dpp = taxRate > 0 ? total * taxRate / (taxRate + 1) : total;
  const ppn = total * taxRate / 100;
  const grand = total + ppn;
  document.getElementById('quotationDppLabel').textContent = taxRate > 0 ? `${taxRate}/${taxRate + 1} DPP` : 'DPP';
  document.getElementById('quotationPpnLabel').textContent = `PPN ${taxRate}%`;
  document.getElementById('quotationSummaryTotal').textContent = fmtCurrency(total, 'quotationCurrencySelect');
  document.getElementById('quotationSummaryDpp').textContent = fmtCurrency(dpp, 'quotationCurrencySelect');
  document.getElementById('quotationSummaryPpn').textContent = fmtCurrency(ppn, 'quotationCurrencySelect');
  document.getElementById('quotationSummaryGrand').textContent = fmtCurrency(grand, 'quotationCurrencySelect');
}

function renderQuotationPreview() {
  updateQuotationSummary();
  const preview = document.getElementById('quotationPreview');
  const sellerId = document.getElementById('quotationSellerSelect').value;
  const buyerId = document.getElementById('quotationBuyerSelect').value;
  const seller = state.sellers.find(s => s.id === sellerId);
  const buyer = state.buyers.find(b => b.id === buyerId);
  const selected = state.products.filter(p => state.quotationSelectedProducts.has(p.id));
  const resolved = flattenProducts(selected, state.quotationQuantities);
  const total = resolved.reduce((s, p) => s + (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0), 0);
  const taxRate = parseFloat(document.getElementById('quotationTaxRate').value) || 0;
  const dpp = taxRate > 0 ? total * taxRate / (taxRate + 1) : total;
  const ppn = total * taxRate / 100;
  const quotNo = document.getElementById('quotationNo').value;
  const quotDate = document.getElementById('quotationDate').value;
  const payment = seller || null;

  if (!seller && !buyer && state.quotationSelectedProducts.size === 0) {
    preview.innerHTML = `<div class="invoice-empty-preview">${t('gen_quotation_desc')}</div>`;
    return;
  }
  preview.innerHTML = buildDocumentHTML(seller, buyer, resolved, { total, dpp, ppn, grand: total + ppn, invNo: quotNo, invDate: quotDate, payment, type: 'quotation', seal: state.sealData['quotation'], signature: state.signatureData['quotation'], taxRate });
}

// ============ Generate Delivery Note Tab ============
function renderGenerateDeliveryTab() {
  const noField = document.getElementById('deliveryNo');
  if (!noField.value) noField.value = genDocNo('DN', SK.dnCounter);
  const dateField = document.getElementById('deliveryDate');
  if (!dateField.value) dateField.value = new Date().toISOString().slice(0, 10);

  populateSelect('deliverySellerSelect', state.sellers, 'gen_no_seller_data');
  populateSelect('deliveryBuyerSelect', state.buyers, 'gen_no_buyer_data');

  renderProductSelectList('deliveryProductSelectList', 'deliveryProductSelectEmpty', state.deliverySelectedProducts, 'delivery');
  restoreSealSignPreview('delivery');
  renderDeliveryPreview();
}

function restoreSealSignPreview(mode) {
  const sealPreview = document.getElementById(mode + 'SealPreview');
  const sealPlaceholder = document.getElementById(mode + 'SealPlaceholder');
  const signPreview = document.getElementById(mode + 'SignPreview');
  const signPlaceholder = document.getElementById(mode + 'SignPlaceholder');
  if (state.sealData[mode] && sealPreview) {
    sealPreview.src = state.sealData[mode];
    sealPreview.style.display = 'block';
    if (sealPlaceholder) sealPlaceholder.style.display = 'none';
  }
  if (state.signatureData[mode] && signPreview) {
    signPreview.src = state.signatureData[mode];
    signPreview.style.display = 'block';
    if (signPlaceholder) signPlaceholder.style.display = 'none';
  }
}

function renderDeliveryPreview() {
  const preview = document.getElementById('deliveryPreview');
  const sellerId = document.getElementById('deliverySellerSelect').value;
  const buyerId = document.getElementById('deliveryBuyerSelect').value;
  const seller = state.sellers.find(s => s.id === sellerId);
  const buyer = state.buyers.find(b => b.id === buyerId);
  const selected = state.products.filter(p => state.deliverySelectedProducts.has(p.id));
  const resolved = flattenProducts(selected, state.deliveryQuantities);
  const notes = document.getElementById('deliveryNotes').value;
  const shipFrom = document.getElementById('deliveryShipFrom').value;
  const shipTo = document.getElementById('deliveryShipTo').value;

  if (!seller && !buyer && state.deliverySelectedProducts.size === 0) {
    preview.innerHTML = `<div class="invoice-empty-preview">${t('gen_delivery_desc')}</div>`;
    return;
  }
  preview.innerHTML = buildDeliveryHTML(seller, buyer, resolved, { notes, shipFrom, shipTo, seal: state.sealData['delivery'], signature: state.signatureData['delivery'] });
}

function buildDeliveryHTML(seller, buyer, products, opts) {
  const logoHTML = (seller && seller.logo)
    ? `<img src="${seller.logo}" class="invoice-logo" alt="logo">`
    : '';

  const companyInfo = seller ? `
    <div>
      <div class="invoice-company-name">${escHtml(seller.name || '')}</div>
      ${seller.address ? `<div class="invoice-company-detail">Address: ${escHtml(seller.address)}</div>` : ''}
      ${seller.email ? `<div class="invoice-company-detail">Email: ${escHtml(seller.email)}</div>` : ''}
      ${seller.phone ? `<div class="invoice-company-detail">Phone: ${escHtml(seller.phone)}</div>` : ''}
    </div>
  ` : '';

  const shipperHTML = seller ? `
    <div class="invoice-party">
      <div class="invoice-party-label">Ship From / 发货方</div>
      <div class="invoice-party-name">${escHtml(seller.name || '')}</div>
      ${opts.shipFrom ? `<div class="invoice-party-detail">${escHtml(opts.shipFrom)}</div>` : (seller.address ? `<div class="invoice-party-detail">Address: ${escHtml(seller.address)}</div>` : '')}
    </div>
  ` : `<div class="invoice-party"><div class="invoice-party-label">Ship From / 发货方</div><div class="invoice-party-detail">&mdash;</div></div>`;

  const receiverHTML = buyer ? `
    <div class="invoice-party">
      <div class="invoice-party-label">Ship To / 收货方</div>
      <div class="invoice-party-name">${escHtml(buyer.name || '')}</div>
      ${opts.shipTo ? `<div class="invoice-party-detail">${escHtml(opts.shipTo)}</div>` : (buyer.address ? `<div class="invoice-party-detail">Address: ${escHtml(buyer.address)}</div>` : '')}
    </div>
  ` : `<div class="invoice-party"><div class="invoice-party-label">Ship To / 收货方</div><div class="invoice-party-detail">&mdash;</div></div>`;

  const productRows = products.map((p, i) => `
    <tr>
      <td class="center">${i + 1}</td>
      <td>${escHtml(p.name)}</td>
      <td>${escHtml(p.model || '-')}</td>
      <td class="center">${p.quantity}</td>
      <td class="center">${escHtml(p.unit || '-')}</td>
    </tr>
  `).join('');

  const productsTable = products.length > 0 ? `
    <table class="invoice-table">
      <thead>
        <tr>
          <th class="center" style="width:30px">#</th>
          <th>Description</th>
          <th style="width:100px">Model</th>
          <th class="center" style="width:60px">Qty</th>
          <th class="center" style="width:60px">Unit</th>
        </tr>
      </thead>
      <tbody>${productRows}</tbody>
    </table>
  ` : '';

  const notesHTML = opts.notes ? `
    <div class="invoice-terms" style="margin-top:24px">
      <div class="invoice-terms-title">Notes</div>
      <div class="invoice-terms-content">${escHtml(opts.notes)}</div>
    </div>
  ` : '';

  const docNo = opts.docNo || (document.getElementById('deliveryNo') ? document.getElementById('deliveryNo').value : '');
  const docDate = opts.docDate || (document.getElementById('deliveryDate') ? document.getElementById('deliveryDate').value : '');
  const dateFormatted = docDate ? new Date(docDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return `
    <div class="invoice-doc" id="invoiceDoc">
      <!-- Header -->
      <div class="invoice-header">
        <div class="invoice-header-left">
          ${logoHTML}
          ${companyInfo}
        </div>
      </div>

      <!-- Document Title -->
      <div style="text-align:center;font-size:26px;font-weight:800;letter-spacing:6px;color:#1e293b;padding:2px 0 10px;border-bottom:3px solid #1e293b;margin-bottom:16px;">DELIVERY NOTE</div>

      <!-- Meta -->
      <div class="invoice-meta">
        <div class="invoice-meta-item">
          <span class="invoice-meta-label">No.:</span>
          <span class="invoice-meta-value">${escHtml(docNo)}</span>
        </div>
        <div class="invoice-meta-item">
          <span class="invoice-meta-label">Date:</span>
          <span class="invoice-meta-value">${dateFormatted}</span>
        </div>
      </div>

      <!-- Parties: Ship From & Ship To -->
      <div class="invoice-parties">
        ${shipperHTML}
        ${receiverHTML}
      </div>

      <!-- Products -->
      ${productsTable}

      <!-- Notes -->
      ${notesHTML}

      <!-- Signature: dual — shipper (seal+signature overlaid) and receiver (signature line only) -->
      <div class="invoice-signature" style="justify-content:space-between;margin-top:80px">
        <div class="invoice-signature-box">
          <div class="invoice-seal-sign-area">
            ${opts.seal ? `<img src="${opts.seal}" class="seal-img" alt="seal">` : ''}
            ${opts.signature ? `<img src="${opts.signature}" class="sign-img" alt="signature">` : ''}
          </div>
          <div class="invoice-signature-line" style="width:220px">
            ${escHtml((seller && seller.name) || '')}
          </div>
          <div class="invoice-signature-sub">Shipper / 发货方</div>
        </div>
        <div class="invoice-signature-box">
          <div style="height:150px"></div>
          <div class="invoice-signature-line" style="width:220px">
            ${escHtml((buyer && buyer.name) || '')}
          </div>
          <div class="invoice-signature-sub">Receiver / 收货方</div>
        </div>
      </div>
    </div>
  `;
}

async function generateDeliveryPDF() {
  if (typeof html2canvas === 'undefined') {
    showToast('Error: html2canvas library not loaded. Please refresh the page.', 6000);
    return;
  }
  if (typeof window.jspdf === 'undefined') {
    showToast('Error: jsPDF library not loaded. Please refresh the page.', 6000);
    return;
  }

  const sellerId = document.getElementById('deliverySellerSelect').value;
  const buyerId = document.getElementById('deliveryBuyerSelect').value;

  if (!sellerId) { showToast(t('gen_no_seller')); switchTab('seller'); return; }
  if (!buyerId) { showToast(t('gen_no_buyer')); return; }
  const selected = state.products.filter(p => state.deliverySelectedProducts.has(p.id));
  if (selected.length === 0) { showToast(t('gen_no_products')); return; }

  showToast(t('gen_generating'), 8000);

  const seller = state.sellers.find(s => s.id === sellerId);
  const buyer = state.buyers.find(b => b.id === buyerId);
  const resolved = flattenProducts(selected, state.deliveryQuantities);
  const notes = document.getElementById('deliveryNotes').value;
  const shipFrom = document.getElementById('deliveryShipFrom').value;
  const shipTo = document.getElementById('deliveryShipTo').value;
  const docNo = document.getElementById('deliveryNo').value;
  const docDate = document.getElementById('deliveryDate').value;

  const html = buildDeliveryHTML(seller, buyer, resolved, { notes, shipFrom, shipTo, seal: state.sealData['delivery'], signature: state.signatureData['delivery'] });

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;left:0;top:0;width:210mm;z-index:-1;';
  container.innerHTML = html;
  document.body.appendChild(container);

  const invoiceDoc = container.querySelector('#invoiceDoc');
  if (!invoiceDoc) {
    document.body.removeChild(container);
    showToast('Error: Could not build document content.', 4000);
    return;
  }

  try {
    const canvas = await html2canvas(invoiceDoc, {
      scale: 2, useCORS: true, allowTaint: true,
      backgroundColor: '#ffffff', logging: false,
    });
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210, margin = 5;
    const imgWidth = pdfWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdfHeight = 297;
    const pageContentHeight = pdfHeight - margin * 2;
    let heightLeft = imgHeight;
    let position = margin;
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageContentHeight;
    while (heightLeft > 0) {
      position -= pageContentHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageContentHeight;
    }
    const fileName = `Delivery_${docNo || 'doc'}.pdf`.replace(/[\\/:*?"<>|]/g, '_');
    pdf.save(fileName);

    // Save to history
    saveDocument({
      id: uid(),
      type: 'delivery',
      docNo: docNo,
      date: docDate,
      sellerId: sellerId,
      buyerId: buyerId,
      productIds: selected.map(p => p.id),
      currency: '',
      total: 0, dpp: 0, ppn: 0, grand: 0,
      sellerName: seller ? seller.name : '',
      buyerName: buyer ? buyer.name : '',
      notes: notes,
      shipFrom: shipFrom,
      shipTo: shipTo,
      seal: state.sealData['delivery'] || '',
      signature: state.signatureData['delivery'] || '',
      createdAt: new Date().toISOString(),
    });

    showToast('PDF downloaded & saved! PDF已下载并保存！', 4000);
  } catch (err) {
    console.error('Delivery PDF generation error:', err);
    showToast('PDF Error: ' + (err.message || 'Unknown error. Check console for details.'), 6000);
  } finally {
    document.body.removeChild(container);
  }
}

// ============ Build Document HTML (shared: invoice & quotation) ============
function buildDocumentHTML(seller, buyer, products, calc) {
  const isQuotation = calc.type === 'quotation';
  const docTitle = isQuotation ? 'QUOTATION' : 'INVOICE';

  const logoHTML = (seller && seller.logo)
    ? `<img src="${seller.logo}" class="invoice-logo" alt="logo">`
    : '';

  const companyInfo = seller ? `
    <div>
      <div class="invoice-company-name">${escHtml(seller.name || '')}</div>
      ${seller.address ? `<div class="invoice-company-detail">Address: ${escHtml(seller.address)}</div>` : ''}
      ${seller.email ? `<div class="invoice-company-detail">Email: ${escHtml(seller.email)}</div>` : ''}
      ${seller.phone ? `<div class="invoice-company-detail">Phone: ${escHtml(seller.phone)}</div>` : ''}
    </div>
  ` : '';

  const buyerHTML = buyer ? `
    <div class="invoice-party">
      <div class="invoice-party-label">Bill To</div>
      <div class="invoice-party-name">${escHtml(buyer.name || '')}</div>
      ${buyer.address ? `<div class="invoice-party-detail">Address: ${escHtml(buyer.address)}</div>` : ''}
      ${buyer.npwp ? `<div class="invoice-party-detail">NPWP: ${escHtml(buyer.npwp)}</div>` : ''}
    </div>
  ` : `<div class="invoice-party"><div class="invoice-party-label">Bill To</div><div class="invoice-party-detail">&mdash;</div></div>`;

  const productRows = products.map((p, i) => `
    <tr>
      <td class="center">${i + 1}</td>
      <td>${escHtml(p.name)}</td>
      <td>${escHtml(p.model || '-')}</td>
      <td class="center">${p.quantity}</td>
      <td class="center">${escHtml(p.unit || '-')}</td>
      <td class="right">${fmtNum(p.unitPrice)}</td>
      <td class="right">${fmtNum((p.quantity || 0) * (p.unitPrice || 0))}</td>
    </tr>
  `).join('');

  const productsTable = products.length > 0 ? `
    <table class="invoice-table">
      <thead>
        <tr>
          <th class="center" style="width:30px">#</th>
          <th>Description</th>
          <th style="width:80px">Model</th>
          <th class="center" style="width:50px">Qty</th>
          <th class="center" style="width:50px">Unit</th>
          <th class="right" style="width:90px">Unit Price</th>
          <th class="right" style="width:100px">Amount</th>
        </tr>
      </thead>
      <tbody>${productRows}</tbody>
    </table>
  ` : '';

  // Payment info from seller
  let paymentHTML = '';
  if (calc.payment && (calc.payment.bankName || calc.payment.accountNo)) {
    const p = calc.payment;
    paymentHTML = `
      <div class="invoice-payment">
        <div class="invoice-payment-title">Payment Information</div>
        <div class="invoice-payment-content">
          ${p.bankName ? `<div><strong>Bank:</strong> ${escHtml(p.bankName)}</div>` : ''}
          ${p.accountNo ? `<div><strong>Account No:</strong> ${escHtml(p.accountNo)}</div>` : ''}
          ${p.accountName ? `<div><strong>Account Name:</strong> ${escHtml(p.accountName)}</div>` : ''}
          ${p.swiftCode ? `<div><strong>SWIFT:</strong> ${escHtml(p.swiftCode)}</div>` : ''}
          ${p.paymentNotes ? `<div style="margin-top:4px;">${escHtml(p.paymentNotes)}</div>` : ''}
        </div>
      </div>
    `;
  }

  const dateFormatted = calc.invDate ? new Date(calc.invDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return `
    <div class="invoice-doc" id="invoiceDoc">
      <!-- Header -->
      <div class="invoice-header">
        <div class="invoice-header-left">
          ${logoHTML}
          ${companyInfo}
        </div>
      </div>

      <!-- Document Title (large) -->
      <div style="text-align:center;font-size:26px;font-weight:800;letter-spacing:6px;color:#1e293b;padding:2px 0 10px;border-bottom:3px solid #1e293b;margin-bottom:16px;">${docTitle}</div>

      <!-- Meta -->
      <div class="invoice-meta">
        <div class="invoice-meta-item">
          <span class="invoice-meta-label">No.:</span>
          <span class="invoice-meta-value">${escHtml(calc.invNo || '')}</span>
          ${calc.orderRef ? `<div class="invoice-meta-sub">${escHtml(t('gen_po_contract_label'))}: ${escHtml(calc.orderRef)}</div>` : ''}
        </div>
        <div class="invoice-meta-item">
          <span class="invoice-meta-label">Date:</span>
          <span class="invoice-meta-value">${dateFormatted}</span>
        </div>
      </div>

      <!-- Parties -->
      <div class="invoice-parties">
        ${buyerHTML}
      </div>

      <!-- Products -->
      ${productsTable}

      <!-- Totals + Payment Info (side by side) -->
      <div class="invoice-totals-payment-wrap">
        ${paymentHTML || '<div></div>'}
        <div class="invoice-totals">
          <div class="invoice-totals-box">
            <div class="invoice-total-row">
              <span>Total</span>
              <span>${fmtCurrency(calc.total, calc.type === 'invoice' ? 'invoiceCurrencySelect' : 'quotationCurrencySelect')}</span>
            </div>
            <div class="invoice-total-row">
              <span>${calc.taxRate && calc.taxRate > 0 ? `${calc.taxRate}/${calc.taxRate + 1} DPP` : 'DPP'}</span>
              <span>${fmtCurrency(calc.dpp, calc.type === 'invoice' ? 'invoiceCurrencySelect' : 'quotationCurrencySelect')}</span>
            </div>
            <div class="invoice-total-row">
              <span>PPN ${calc.taxRate || 0}%</span>
              <span>${fmtCurrency(calc.ppn, calc.type === 'invoice' ? 'invoiceCurrencySelect' : 'quotationCurrencySelect')}</span>
            </div>
            <div class="invoice-total-row grand">
              <span>Grand Total</span>
              <span>${fmtCurrency(calc.grand, calc.type === 'invoice' ? 'invoiceCurrencySelect' : 'quotationCurrencySelect')}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Signature -->
      <div class="invoice-signature">
        <div class="invoice-signature-box">
          ${(calc.seal || calc.signature) ? `
          <div class="invoice-seal-sign-area">
            ${calc.seal ? `<img src="${calc.seal}" class="seal-img" alt="seal">` : ''}
            ${calc.signature ? `<img src="${calc.signature}" class="sign-img" alt="signature">` : ''}
          </div>
          ` : '<div style="height:60px;"></div>'}
          <div class="invoice-signature-line">
            ${escHtml((seller && seller.legalRep) || (seller && seller.name) || '')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============ History Tab ============
function saveDocument(docData) {
  state.savedDocuments.unshift(docData);
  saveAll();
}

function renderHistoryTab() {
  const list = document.getElementById('historyList');
  const empty = document.getElementById('historyEmpty');
  const searchInput = document.getElementById('historySearchInput');
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const filter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
  const dateFrom = document.getElementById('historyDateFrom').value;
  const dateTo = document.getElementById('historyDateTo').value;
  const query = (searchInput.value || '').toLowerCase().trim();

  let docs = state.savedDocuments;
  if (filter !== 'all') {
    docs = docs.filter(d => d.type === filter);
  }
  if (dateFrom) {
    docs = docs.filter(d => d.date && d.date >= dateFrom);
  }
  if (dateTo) {
    docs = docs.filter(d => d.date && d.date <= dateTo);
  }
  if (query) {
    docs = docs.filter(d =>
      (d.docNo && d.docNo.toLowerCase().includes(query)) ||
      (d.buyerName && d.buyerName.toLowerCase().includes(query)) ||
      (d.sellerName && d.sellerName.toLowerCase().includes(query))
    );
  }

  if (docs.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.innerHTML = docs.map(d => {
    const typeBadge = d.type === 'invoice'
      ? '<span class="history-badge invoice">INVOICE</span>'
      : d.type === 'quotation'
        ? '<span class="history-badge quotation">QUOTATION</span>'
        : '<span class="history-badge delivery">DELIVERY</span>';
    const dateStr = d.date ? new Date(d.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—';
    const amountHTML = (d.type === 'delivery') ? '' : `<span class="history-item-amount">${escHtml(fmtCurrency(d.grand, d.currency || 'IDR'))}</span>`;
    const metaLine = `<span>${escHtml(d.sellerName || '—')} &rarr; ${escHtml(d.buyerName || '—')}</span>`;
    return `
      <div class="history-item">
        <div class="history-item-left">
          ${typeBadge}
          <div class="history-item-info">
            <div class="history-item-no">${escHtml(d.docNo || '—')}</div>
            <div class="history-item-meta">
              <span>${dateStr}</span>
              ${metaLine}
              ${amountHTML}
            </div>
          </div>
        </div>
        <div class="history-item-actions">
          <button class="btn btn-sm btn-primary" onclick="downloadHistoryDocument('${d.id}')">${t('history_download')}</button>
          <button class="btn btn-sm btn-outline" onclick="deleteHistoryDocument('${d.id}')">${t('history_delete')}</button>
        </div>
      </div>
    `;
  }).join('');
}

function exportHistoryToExcel() {
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const filter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
  const dateFrom = document.getElementById('historyDateFrom').value;
  const dateTo = document.getElementById('historyDateTo').value;
  const searchInput = document.getElementById('historySearchInput');
  const query = (searchInput.value || '').toLowerCase().trim();

  let docs = state.savedDocuments;
  if (filter !== 'all') docs = docs.filter(d => d.type === filter);
  if (dateFrom) docs = docs.filter(d => d.date && d.date >= dateFrom);
  if (dateTo) docs = docs.filter(d => d.date && d.date <= dateTo);
  if (query) {
    docs = docs.filter(d =>
      (d.docNo && d.docNo.toLowerCase().includes(query)) ||
      (d.buyerName && d.buyerName.toLowerCase().includes(query)) ||
      (d.sellerName && d.sellerName.toLowerCase().includes(query))
    );
  }

  if (docs.length === 0) {
    showToast(lang === 'zh' ? '没有可导出的文档' : 'No documents to export');
    return;
  }

  // Build CSV with BOM for Excel UTF-8 compatibility
  const headers = lang === 'zh'
    ? ['单据类型', '单据编号', '日期', '卖家公司名称', '买家公司名称', '税率(%)', 'Total', 'DPP', 'PPN', 'Grand Total', '货币']
    : ['Type', 'Doc No.', 'Date', 'Seller Company', 'Buyer Company', 'Tax Rate(%)', 'Total', 'DPP', 'PPN', 'Grand Total', 'Currency'];

  const rows = docs.map(d => {
    const typeLabel = d.type === 'invoice' ? 'Invoice' : d.type === 'quotation' ? 'Quotation' : 'Delivery';
    const currency = d.currency || 'IDR';
    return [
      typeLabel,
      d.docNo || '',
      d.date || '',
      d.sellerName || '',
      d.buyerName || '',
      d.taxRate || 11,
      Math.round(d.total || 0),
      Math.round(d.dpp || 0),
      Math.round(d.ppn || 0),
      Math.round(d.grand || 0),
      currency
    ];
  });

  const csvContent = '\uFEFF' + [headers, ...rows]
    .map(row => row.map(cell => {
      const s = String(cell);
      return s.includes(',') || s.includes('"') || s.includes('\n') ? '"' + s.replace(/"/g, '""') + '"' : s;
    }).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `History_Export_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(lang === 'zh' ? `已导出 ${docs.length} 条记录` : `Exported ${docs.length} records`, 4000);
}

async function downloadHistoryDocument(docId) {
  const doc = state.savedDocuments.find(d => d.id === docId);
  if (!doc) { showToast('Document not found'); return; }

  if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    showToast('Library not loaded. Please refresh.', 4000);
    return;
  }

  showToast(t('gen_generating'), 8000);

  const seller = state.sellers.find(s => s.id === doc.sellerId);
  const buyer = state.buyers.find(b => b.id === doc.buyerId);
  const payment = seller || null;
  const products = flattenProducts(state.products.filter(p => doc.productIds.includes(p.id)), null);

  let html;
  if (doc.type === 'delivery') {
    html = buildDeliveryHTML(seller, buyer, products, { notes: doc.notes || '', shipFrom: doc.shipFrom || '', shipTo: doc.shipTo || doc.deliveryAddress || '', docNo: doc.docNo, docDate: doc.date, seal: doc.seal, signature: doc.signature });
  } else {
    html = buildDocumentHTML(seller, buyer, products, {
      total: doc.total, dpp: doc.dpp, ppn: doc.ppn, grand: doc.grand,
      invNo: doc.docNo, invDate: doc.date, orderRef: doc.orderRef || '', payment, type: doc.type,
      seal: doc.seal, signature: doc.signature, taxRate: doc.taxRate || 11
    });
  }

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;left:0;top:0;width:210mm;z-index:-1;';
  container.innerHTML = html;
  document.body.appendChild(container);

  const invoiceDoc = container.querySelector('#invoiceDoc');
  if (!invoiceDoc) {
    document.body.removeChild(container);
    showToast('Error rebuilding document.', 4000);
    return;
  }

  try {
    const canvas = await html2canvas(invoiceDoc, {
      scale: 2, useCORS: true, allowTaint: true,
      backgroundColor: '#ffffff', logging: false,
    });
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210, margin = 5;
    const imgWidth = pdfWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdfHeight = 297;
    const pageContentHeight = pdfHeight - margin * 2;
    let heightLeft = imgHeight;
    let position = margin;
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageContentHeight;
    while (heightLeft > 0) {
      position -= pageContentHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageContentHeight;
    }
    const prefix = doc.type === 'invoice' ? 'Invoice' : doc.type === 'quotation' ? 'Quotation' : doc.type === 'delivery' ? 'Delivery' : 'Summary';
    pdf.save(`${prefix}_${doc.docNo || docId}.pdf`.replace(/[\\/:*?"<>|]/g, '_'));
  } catch (err) {
    showToast('PDF Error: ' + (err.message || 'Unknown'), 6000);
  } finally {
    document.body.removeChild(container);
  }
}

function deleteHistoryDocument(docId) {
  if (!confirm(t('confirm_delete'))) return;
  state.savedDocuments = state.savedDocuments.filter(d => d.id !== docId);
  saveAll();
  renderHistoryTab();
}

// ============ PDF Generation ============
async function generatePDF(mode) {
  // Check if required libraries are loaded
  if (typeof html2canvas === 'undefined') {
    showToast('Error: html2canvas library not loaded. Please refresh the page.', 6000);
    return;
  }
  if (typeof window.jspdf === 'undefined') {
    showToast('Error: jsPDF library not loaded. Please refresh the page.', 6000);
    return;
  }

  const isInvoice = mode === 'invoice';
  const sellerId = document.getElementById(isInvoice ? 'invoiceSellerSelect' : 'quotationSellerSelect').value;
  const buyerId = document.getElementById(isInvoice ? 'invoiceBuyerSelect' : 'quotationBuyerSelect').value;
  const set = isInvoice ? state.invoiceSelectedProducts : state.quotationSelectedProducts;

  if (!sellerId) { showToast(t('gen_no_seller')); switchTab('seller'); return; }
  if (!buyerId) { showToast(t('gen_no_buyer')); return; }
  const selected = state.products.filter(p => set.has(p.id));
  if (selected.length === 0) { showToast(t('gen_no_products')); return; }

  showToast(t('gen_generating'), 8000);

  const seller = state.sellers.find(s => s.id === sellerId);
  const buyer = state.buyers.find(b => b.id === buyerId);
  const payment = seller || null;
  const resolved = flattenProducts(selected, isInvoice ? state.invoiceQuantities : state.quotationQuantities);
  const total = resolved.reduce((s, p) => s + (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0), 0);
  const taxRate = parseFloat(document.getElementById(isInvoice ? 'invoiceTaxRate' : 'quotationTaxRate').value) || 0;
  const dpp = taxRate > 0 ? total * taxRate / (taxRate + 1) : total;
  const ppn = total * taxRate / 100;
  const invNo = document.getElementById(isInvoice ? 'invoiceNo' : 'quotationNo').value;
  const invDate = document.getElementById(isInvoice ? 'invoiceDate' : 'quotationDate').value;
  const orderRef = isInvoice && document.getElementById('invoiceOrderRef') ? document.getElementById('invoiceOrderRef').value : '';
  const currencyEl = document.getElementById(isInvoice ? 'invoiceCurrencySelect' : 'quotationCurrencySelect');
  const currency = currencyEl ? currencyEl.value : 'IDR';

  const html = buildDocumentHTML(seller, buyer, resolved, { total, dpp, ppn, grand: total + ppn, invNo, invDate, orderRef, payment, type: mode, seal: state.sealData[mode], signature: state.signatureData[mode], taxRate });

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;left:0;top:0;width:210mm;z-index:-1;';
  container.innerHTML = html;
  document.body.appendChild(container);

  const invoiceDoc = container.querySelector('#invoiceDoc');
  if (!invoiceDoc) {
    document.body.removeChild(container);
    showToast('Error: Could not build document content.', 4000);
    return;
  }

  try {
    const canvas = await html2canvas(invoiceDoc, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210;
    const imgWidth = pdfWidth - 10;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdfHeight = 297;
    const margin = 5;
    const pageContentHeight = pdfHeight - margin * 2;
    let heightLeft = imgHeight;
    let position = margin;
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageContentHeight;
    while (heightLeft > 0) {
      position -= pageContentHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageContentHeight;
    }
    const prefix = isInvoice ? 'Invoice' : 'Quotation';
    const fileName = `${prefix}_${invNo || seller.name || 'doc'}.pdf`.replace(/[\\/:*?"<>|]/g, '_');
    pdf.save(fileName);

    // Save to history
    saveDocument({
      id: uid(),
      type: mode,
      docNo: invNo,
      date: invDate,
      orderRef: orderRef || '',
      sellerId: sellerId,
      buyerId: buyerId,
      productIds: selected.map(p => p.id),
      currency: currency,
      taxRate: taxRate,
      total, dpp, ppn, grand: total + ppn,
      sellerName: seller ? seller.name : '',
      buyerName: buyer ? buyer.name : '',
      seal: state.sealData[mode] || '',
      signature: state.signatureData[mode] || '',
      createdAt: new Date().toISOString(),
    });

    showToast('PDF downloaded & saved! PDF已下载并保存！', 4000);
  } catch (err) {
    console.error('PDF generation error:', err);
    showToast('PDF Error: ' + (err.message || 'Unknown error. Check console for details.'), 6000);
  } finally {
    document.body.removeChild(container);
  }
}

function generateInvoicePDF() { generatePDF('invoice'); }
function generateQuotationPDF() { generatePDF('quotation'); }

// ============ Data Export/Import ============
function exportData() {
  const data = {
    sellers: state.sellers,
    buyers: state.buyers,
    products: state.products,
    paymentInfos: state.paymentInfos,
    savedDocuments: state.savedDocuments,
    lang: lang,
    exportDate: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workbench_data_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.sellers) state.sellers = data.sellers;
      if (data.buyers) state.buyers = data.buyers;
      if (data.products) state.products = data.products;
      // Migrate old paymentInfos into first seller
      if (data.paymentInfos && data.paymentInfos.length > 0 && state.sellers.length > 0) {
        const pmt = data.paymentInfos[0];
        if (!state.sellers[0].bankName) state.sellers[0].bankName = pmt.bankName || '';
        if (!state.sellers[0].accountNo) state.sellers[0].accountNo = pmt.accountNo || '';
        if (!state.sellers[0].accountName) state.sellers[0].accountName = pmt.accountName || '';
        if (!state.sellers[0].swiftCode) state.sellers[0].swiftCode = pmt.swiftCode || '';
        if (!state.sellers[0].paymentNotes) state.sellers[0].paymentNotes = pmt.notes || '';
      }
      if (data.savedDocuments) state.savedDocuments = data.savedDocuments;
      if (data.lang) lang = data.lang;
      saveAll();
      applyI18n();
      renderAll();
      showToast(t('import_success'));
    } catch(err) { showToast(t('import_error')); }
  };
  reader.readAsText(file);
}

// ============ Modal ============
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
document.addEventListener('mousedown', (e) => {
  if (e.target.classList && e.target.classList.contains('modal-overlay')) {
    e.target.style.display = 'none';
  }
});

// ============ Render All ============
function renderAll() {
  renderSellerTab();
  renderBuyerTab();
  renderProductsTab();
  const active = getActiveTab();
  if (active === 'generate-invoice') renderGenerateInvoiceTab();
  if (active === 'generate-quotation') renderGenerateQuotationTab();
  if (active === 'generate-delivery') renderGenerateDeliveryTab();
  if (active === 'history') renderHistoryTab();
}

// ============ Init ============
function handleSealUpload(input, mode) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    state.sealData[mode] = e.target.result;
    const preview = document.getElementById(mode + 'SealPreview');
    const placeholder = document.getElementById(mode + 'SealPlaceholder');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    updatePreviewForMode(mode);
  };
  reader.readAsDataURL(file);
}

function handleSignUpload(input, mode) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    state.signatureData[mode] = e.target.result;
    const preview = document.getElementById(mode + 'SignPreview');
    const placeholder = document.getElementById(mode + 'SignPlaceholder');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    updatePreviewForMode(mode);
  };
  reader.readAsDataURL(file);
}

function clearSeal(mode) {
  state.sealData[mode] = '';
  const preview = document.getElementById(mode + 'SealPreview');
  const placeholder = document.getElementById(mode + 'SealPlaceholder');
  if (preview) preview.style.display = 'none';
  if (placeholder) placeholder.style.display = 'block';
  updatePreviewForMode(mode);
}

function clearSign(mode) {
  state.signatureData[mode] = '';
  const preview = document.getElementById(mode + 'SignPreview');
  const placeholder = document.getElementById(mode + 'SignPlaceholder');
  if (preview) preview.style.display = 'none';
  if (placeholder) placeholder.style.display = 'block';
  updatePreviewForMode(mode);
}

function updatePreviewForMode(mode) {
  if (mode === 'invoice') renderInvoicePreview();
  else if (mode === 'quotation') renderQuotationPreview();
  else if (mode === 'delivery') renderDeliveryPreview();
}

function init() {
  loadAll();
  applyI18n();
  renderAll();

  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', toggleLang);

  // Seller
  document.getElementById('sellerAddBtn').addEventListener('click', () => openSellerModal());
  document.getElementById('sellerSaveModalBtn').addEventListener('click', saveSeller);
  document.getElementById('modalLogoUploadBox').addEventListener('click', () => { document.getElementById('modalLogoInput').click(); });
  document.getElementById('modalLogoInput').addEventListener('change', handleModalLogoUpload);
  document.getElementById('modalRemoveLogoBtn').addEventListener('click', () => { state.modalLogoData = ''; updateModalLogo(); });

  // Buyer
  document.getElementById('buyerAddBtn').addEventListener('click', () => openBuyerModal());
  document.getElementById('buyerSaveModalBtn').addEventListener('click', saveBuyer);

  // Products
  document.getElementById('productAddBtn').addEventListener('click', () => openProductModal());
  document.getElementById('productTemplateBtn').addEventListener('click', downloadProductTemplate);
  document.getElementById('productUploadBtn').addEventListener('click', () => {
    document.getElementById('productFileInput').click();
  });
  document.getElementById('productFileInput').addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleProductFileUpload(file);
    e.target.value = ''; // allow re-uploading the same file
  });
  document.getElementById('productSaveModalBtn').addEventListener('click', saveProduct);
  document.getElementById('productQty').addEventListener('input', updateProductTotal);
  document.getElementById('productUnitPrice').addEventListener('input', updateProductTotal);

  // Generate Invoice
  document.getElementById('invoiceSellerSelect').addEventListener('change', renderInvoicePreview);
  document.getElementById('invoiceBuyerSelect').addEventListener('change', renderInvoicePreview);
  document.getElementById('invoiceCurrencySelect').addEventListener('change', () => { updateInvoiceSummary(); renderInvoicePreview(); });
  document.getElementById('invoiceTaxRate').addEventListener('input', () => { updateInvoiceSummary(); renderInvoicePreview(); });
  document.getElementById('invoiceNo').addEventListener('input', renderInvoicePreview);
  document.getElementById('invoiceOrderRef').addEventListener('input', renderInvoicePreview);
  document.getElementById('invoiceDate').addEventListener('change', renderInvoicePreview);
  document.getElementById('generateInvoicePdfBtn').addEventListener('click', generateInvoicePDF);

  // Generate Quotation
  document.getElementById('quotationSellerSelect').addEventListener('change', renderQuotationPreview);
  document.getElementById('quotationBuyerSelect').addEventListener('change', renderQuotationPreview);
  document.getElementById('quotationCurrencySelect').addEventListener('change', () => { updateQuotationSummary(); renderQuotationPreview(); });
  document.getElementById('quotationTaxRate').addEventListener('input', () => { updateQuotationSummary(); renderQuotationPreview(); });
  document.getElementById('quotationNo').addEventListener('input', renderQuotationPreview);
  document.getElementById('quotationDate').addEventListener('change', renderQuotationPreview);
  document.getElementById('generateQuotationPdfBtn').addEventListener('click', generateQuotationPDF);

  // Generate Delivery Note
  document.getElementById('deliverySellerSelect').addEventListener('change', (e) => {
    const addrEl = document.getElementById('deliveryShipFrom');
    if (addrEl && !addrEl.value.trim()) {
      const s = state.sellers.find(x => x.id === e.target.value);
      if (s && s.address) addrEl.value = s.address;
    }
    renderDeliveryPreview();
  });
  document.getElementById('deliveryBuyerSelect').addEventListener('change', (e) => {
    const addrEl = document.getElementById('deliveryShipTo');
    if (addrEl && !addrEl.value.trim()) {
      const b = state.buyers.find(x => x.id === e.target.value);
      if (b && b.address) addrEl.value = b.address;
    }
    renderDeliveryPreview();
  });
  document.getElementById('deliveryShipFrom').addEventListener('input', renderDeliveryPreview);
  document.getElementById('deliveryShipTo').addEventListener('input', renderDeliveryPreview);
  document.getElementById('deliveryNo').addEventListener('input', renderDeliveryPreview);
  document.getElementById('deliveryDate').addEventListener('change', renderDeliveryPreview);
  document.getElementById('deliveryNotes').addEventListener('input', renderDeliveryPreview);
  document.getElementById('generateDeliveryPdfBtn').addEventListener('click', generateDeliveryPDF);

  // History
  document.getElementById('historySearchInput').addEventListener('input', renderHistoryTab);
  document.getElementById('historyDateFrom').addEventListener('change', renderHistoryTab);
  document.getElementById('historyDateTo').addEventListener('change', renderHistoryTab);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHistoryTab();
    });
  });
  document.getElementById('historyExportExcelBtn').addEventListener('click', exportHistoryToExcel);
  document.getElementById('historyClearBtn').addEventListener('click', () => {
    if (!confirm(t('history_confirm_clear'))) return;
    state.savedDocuments = [];
    saveAll();
    renderHistoryTab();
  });

  // Export/Import
  document.getElementById('exportDataBtn').addEventListener('click', exportData);
  document.getElementById('importDataBtn').addEventListener('click', () => { document.getElementById('importFileInput').click(); });
  document.getElementById('importFileInput').addEventListener('change', (e) => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = '';
  });
}

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
