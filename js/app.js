// ==========================================================================
// AMAZON-GRADE SOLUTION PLATFORM APPLICATION LOGIC
// Dynamic Rendering | Search & Filters | Interactive Quotation & Demo Modal
// ==========================================================================

// State Management
let currentCategory = 'all';
let currentSearchTerm = '';
let currentSort = 'popular';
let selectedDemoId = 'csc-03'; // Default as seen in Image 2
let selectedFeatures = new Set(['feat-base', 'feat-catalog', 'feat-whatsapp', 'feat-domain', 'feat-seo', 'feat-support']);

// Audio Haptic Click Effect (Apple/Linear Grade Luxury Feel)
const playSoftClick = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {
    // Audio context may be restricted by autoplay policy
  }
};

// --------------------------------------------------------------------------
// 1. INITIALIZATION ON DOM LOAD
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderSolutionsGrid();
  renderQuotationFeatures();
  calculateQuotationTotal();
  updateClientDetails();
  calculateROI();

  // Attach soft click to all glass buttons
  document.querySelectorAll('.btn-glass, .cat-pill, .matcher-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => playSoftClick());
  });
});

// --------------------------------------------------------------------------
// 2. DYNAMIC SOLUTIONS CATALOG RENDERING
// --------------------------------------------------------------------------
function renderSolutionsGrid() {
  const gridContainer = document.getElementById('solutionsGrid');
  if (!gridContainer) return;

  // Filter Data
  let filtered = SOLUTIONS_DATA.filter(item => {
    const matchCat = (currentCategory === 'all' || item.category === currentCategory);
    const searchLow = currentSearchTerm.toLowerCase().trim();
    const matchSearch = !searchLow || 
      item.title.toLowerCase().includes(searchLow) ||
      item.tagline.toLowerCase().includes(searchLow) ||
      item.categoryName.toLowerCase().includes(searchLow) ||
      item.problemSolved.toLowerCase().includes(searchLow) ||
      item.tags.some(t => t.toLowerCase().includes(searchLow));
    return matchCat && matchSearch;
  });

  // Sort Data
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Count Badge
  const countBadge = document.getElementById('resultsCountBadge');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} समाधान उपलब्ध`;
  }

  // Handle Empty State
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px dashed #CBD5E1;">
        <span style="font-size: 2.5rem;">🔍</span>
        <h3 style="margin-top: 0.5rem; color: var(--text-dark);">क्षमा करें, कोई मिलता-जुलता डेमो नहीं मिला!</h3>
        <p style="margin-top: 0.25rem; font-size: 0.9rem;">आप अपनी पसंद के किसी भी कस्टम बिज़नेस के लिए हमसे सीधे WhatsApp पर संपर्क कर सकते हैं।</p>
        <button class="btn-glass btn-glass-green" onclick="resetFilters();" style="margin-top: 1rem;">
          🔄 सभी डेमो वापस देखें
        </button>
      </div>
    `;
    return;
  }

  // Render Cards
  gridContainer.innerHTML = filtered.map(item => `
    <article class="solution-card ${item.badge ? 'featured' : ''}" data-id="${item.id}">
      
      <!-- Media Thumbnail -->
      <div class="card-media-wrap">
        <img src="${item.image}" alt="${item.title}" class="card-media-img" loading="lazy">
        <span class="card-badge ${item.badgeColor === 'amber' ? 'badge-amber' : ''}">
          ⭐ ${item.badge || 'Verified'}
        </span>
      </div>

      <!-- Card Body -->
      <div class="card-body">
        
        <div class="card-tags">
          ${item.tags.slice(0, 3).map(tag => `<span class="tag-pill tag-accent">${tag}</span>`).join('')}
        </div>

        <div class="card-category-lbl">${item.categoryName}</div>
        <h3 class="card-title-text">${item.title}</h3>
        
        <!-- The Problem Solved Highlight -->
        <div class="card-problem-highlight">
          <strong>💡 समाधान:</strong> ${item.problemSolved}
        </div>

        <!-- Price Box -->
        <div class="card-price-box">
          <div>
            <span class="current-price">₹${item.price.toLocaleString('en-IN')}</span>
            <span class="original-price">₹${item.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div style="font-size: 0.75rem; font-weight: 700; color: #10B981; background: #ECFDF5; padding: 0.2rem 0.5rem; border-radius: 4px;">
            ⚡ ${item.deliveryDays} में रेडी
          </div>
        </div>

        <!-- Card Action Buttons with Glass & Light Waves -->
        <div class="card-actions-grid">
          <button class="btn-glass btn-glass-amber" onclick="openDemoById('${item.id}');">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            डेमो देखें
          </button>

          <button class="btn-glass btn-glass-outline" onclick="selectDemoInQuote('${item.id}');">
            📋 कोटेशन
          </button>
        </div>

      </div>

    </article>
  `).join('');
}

// --------------------------------------------------------------------------
// 3. SEARCH & CATEGORY FILTER HANDLERS
// --------------------------------------------------------------------------
function handleSearch() {
  const input = document.getElementById('searchInput');
  if (input) {
    currentSearchTerm = input.value;
    renderSolutionsGrid();
  }
}

function handleCategoryFilter(val) {
  currentCategory = val;
  // Sync Pill Buttons
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  renderSolutionsGrid();
}

function filterByPill(cat, btn) {
  currentCategory = cat;
  // Update Active Pill Class
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Sync Dropdown Select
  const select = document.getElementById('searchCategorySelect');
  if (select) select.value = cat;

  renderSolutionsGrid();
  
  // Smooth scroll down to catalog if on mobile
  const catalog = document.getElementById('catalogSection');
  if (catalog && window.innerWidth < 768) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSort(sortVal) {
  currentSort = sortVal;
  renderSolutionsGrid();
}

function resetFilters() {
  currentCategory = 'all';
  currentSearchTerm = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const select = document.getElementById('searchCategorySelect');
  if (select) select.value = 'all';
  document.querySelectorAll('.cat-pill').forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });
  renderSolutionsGrid();
}

// --------------------------------------------------------------------------
// 4. INTERACTIVE PROBLEM -> SOLUTION MATCHER
// --------------------------------------------------------------------------
function switchMatcherTab(catKey, btn) {
  document.querySelectorAll('.matcher-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const matchData = BUSINESS_SOLUTIONS_MAP[catKey];
  if (!matchData) return;

  const badgeElem = document.getElementById('matchBadge');
  const painElem = document.getElementById('matchPain');
  const solElem = document.getElementById('matchSolution');
  const salesElem = document.getElementById('matchSales');
  const demoBtn = document.getElementById('matchDemoBtn');

  if (badgeElem) badgeElem.textContent = matchData.badge;
  if (painElem) painElem.textContent = matchData.pain;
  if (solElem) solElem.textContent = matchData.solution;
  if (salesElem) salesElem.textContent = matchData.expectedSales;

  if (demoBtn) {
    demoBtn.setAttribute('onclick', `openDemoById('${matchData.demoId}')`);
  }
}

// --------------------------------------------------------------------------
// 5. INTERACTIVE QUOTATION BUILDER (IMAGE 2 REPLICA)
// --------------------------------------------------------------------------
function renderQuotationFeatures() {
  const container = document.getElementById('featuresConfigList');
  if (!container) return;

  container.innerHTML = QUOTATION_FEATURES.map(feat => {
    const isChecked = selectedFeatures.has(feat.id);
    const isLocked = feat.locked;

    return `
      <div class="feature-toggle-row">
        <label class="feature-info" style="cursor: ${isLocked ? 'default' : 'pointer'};">
          <input 
            type="checkbox" 
            class="feature-checkbox" 
            id="chk-${feat.id}" 
            ${isChecked ? 'checked' : ''} 
            ${isLocked ? 'disabled' : ''} 
            onchange="toggleFeature('${feat.id}', this.checked);"
          >
          <div>
            <div class="feature-title">
              ${feat.name}
              ${feat.originalVal ? `<span style="font-size:0.75rem; color:#10B981; font-weight:800; background:#ECFDF5; padding:0.1rem 0.4rem; border-radius:4px; margin-left:0.35rem;">मुफ्त शामिल (FREE)</span>` : ''}
            </div>
            <div class="feature-desc">${feat.desc}</div>
          </div>
        </label>

        <div class="feature-cost">
          ${feat.price === 0 ? '<span style="color:#10B981;">₹ 0</span>' : `+ ₹ ${feat.price.toLocaleString('en-IN')}`}
        </div>
      </div>
    `;
  }).join('');
}

function toggleFeature(featId, isChecked) {
  playSoftClick();
  if (isChecked) {
    selectedFeatures.add(featId);
  } else {
    selectedFeatures.delete(featId);
  }
  calculateQuotationTotal();
}

function calculateQuotationTotal() {
  let total = 0;
  QUOTATION_FEATURES.forEach(feat => {
    if (selectedFeatures.has(feat.id)) {
      total += feat.price;
    }
  });

  const totalText = document.getElementById('totalAmountText');
  if (totalText) {
    totalText.textContent = `₹ ${total.toLocaleString('en-IN')}`;
  }
}

function updateClientDetails() {
  const name = document.getElementById('inputClientName')?.value || 'दीपक हाड़ा';
  const biz = document.getElementById('inputBusinessName')?.value || 'बालाजी ऑनलाइन सेंटर';
  const city = document.getElementById('inputCity')?.value || 'रतलाम (म.प्र.)';
  const phone = document.getElementById('inputPhone')?.value || '+91 98765 43210';

  if (document.getElementById('displayClientName')) document.getElementById('displayClientName').textContent = name;
  if (document.getElementById('displayBusinessName')) document.getElementById('displayBusinessName').textContent = biz;
  if (document.getElementById('displayLocation')) document.getElementById('displayLocation').textContent = city;
  if (document.getElementById('displayPhone')) document.getElementById('displayPhone').textContent = phone;
}

function selectDemoInQuote(demoId) {
  playSoftClick();
  selectedDemoId = demoId;
  const demo = SOLUTIONS_DATA.find(d => d.id === demoId);
  if (!demo) return;

  if (document.getElementById('displayDemoTitle')) document.getElementById('displayDemoTitle').textContent = demo.title;
  if (document.getElementById('displayDemoDesc')) document.getElementById('displayDemoDesc').textContent = demo.tagline;
  const thumb = document.getElementById('displayDemoThumb');
  if (thumb && demo.image) {
    thumb.src = demo.image;
  }

  // Scroll to Quotation Builder
  const quoteSection = document.getElementById('quotationSection');
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function openSelectedDemoModal() {
  openDemoById(selectedDemoId);
}

// WhatsApp Share of Itemized Quotation
function shareQuotationOnWhatsApp() {
  playSoftClick();
  const name = document.getElementById('displayClientName')?.textContent || 'दीपक हाड़ा';
  const biz = document.getElementById('displayBusinessName')?.textContent || 'बालाजी ऑनलाइन सेंटर';
  const city = document.getElementById('displayLocation')?.textContent || 'रतलाम (म.प्र.)';
  const demo = SOLUTIONS_DATA.find(d => d.id === selectedDemoId);
  const demoTitle = demo ? demo.title : 'वेबसाइट समाधान';

  let featList = [];
  let total = 0;
  QUOTATION_FEATURES.forEach(f => {
    if (selectedFeatures.has(f.id)) {
      featList.push(`• ${f.name} (${f.price === 0 ? 'FREE' : '₹' + f.price})`);
      total += f.price;
    }
  });

  const msg = `*🚀 WEBSITE QUOTATION - MOHIT JAIN DESIGNS*
----------------------------------------
*क्लाइंट नाम:* ${name}
*दुकान/बिज़नेस:* ${biz} (${city})
*चुना हुआ डेमो:* ${demoTitle}
----------------------------------------
*शामिल फीचर्स:*
${featList.join('\n')}
----------------------------------------
*कुल राशि:* ₹${total.toLocaleString('en-IN')}
*डिलीवरी समय:* 24 से 48 घंटे (1 माह VIP सपोर्ट फ्री)
----------------------------------------
नमस्ते मोहित जी, मुझे यह कोटेशन पसंद आया है। कृपया इसे प्रोसेस करें।`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
}

// Printable PDF Quotation
function printQuotationPDF() {
  playSoftClick();
  window.print();
}

function requestCustomChanges() {
  playSoftClick();
  const msg = encodeURIComponent("नमस्ते मोहित जी, मुझे अपनी वेबसाइट कोटेशन में कुछ कस्टम बदलाव करवाने हैं। कृपया मुझसे संपर्क करें।");
  window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
}

// --------------------------------------------------------------------------
// 6. INTERACTIVE LIVE DEMO SIMULATOR MODAL (DESKTOP & MOBILE VIEWS)
// --------------------------------------------------------------------------
function openDemoById(demoId) {
  playSoftClick();
  const demo = SOLUTIONS_DATA.find(d => d.id === demoId) || SOLUTIONS_DATA[0];
  selectedDemoId = demo.id;

  const modal = document.getElementById('demoModal');
  const titleElem = document.getElementById('modalDemoTitle');
  const tagElem = document.getElementById('modalDemoTag');
  const innerContent = document.getElementById('simulatedInnerContent');

  if (titleElem) titleElem.textContent = `${demo.title} (लाइव प्रीव्यू)`;
  if (tagElem) tagElem.textContent = `${demo.categoryName} • 24 घंटे में लाइव`;

  // Render Authentic Full-Length Demo Webpage inside modal
  if (innerContent) {
    innerContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 0.85rem; background: #FFFBEB; padding: 0.55rem 0.85rem; border-radius: var(--radius-md); border: 1px solid #FDE68A; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
        <span style="font-size: 0.85rem; font-weight: 800; color: #92400E;">
          🌟 ${demo.title} — संपूर्ण लाइव डिज़ाइन (स्क्रॉल करके देखें):
        </span>
        <a href="https://wa.me/919876543210?text=नमस्ते%20मोहित%20जी,%20मुझे%20${encodeURIComponent(demo.title)}%20वेबसाइट%20बनवानी%20है।" target="_blank" class="btn-glass btn-glass-green" style="padding:0.3rem 0.75rem; font-size:0.75rem;">
          💬 यह डिज़ाइन ऑर्डर करें
        </a>
      </div>

      <div style="width: 100%; display: flex; justify-content: center; background: #FFFFFF; border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 10px 35px rgba(0,0,0,0.12);">
        <img src="${demo.image}" alt="${demo.title}" style="width: 100%; height: auto; display: block;">
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
}

function closeDemoModal() {
  playSoftClick();
  const modal = document.getElementById('demoModal');
  if (modal) modal.classList.remove('open');
}

function setDemoDevice(mode) {
  playSoftClick();
  const screen = document.getElementById('simulatedScreen');
  const btnDesk = document.getElementById('btnDeviceDesktop');
  const btnMob = document.getElementById('btnDeviceMobile');

  if (mode === 'mobile') {
    if (screen) screen.classList.add('mode-mobile');
    if (btnMob) btnMob.classList.add('active');
    if (btnDesk) btnDesk.classList.remove('active');
  } else {
    if (screen) screen.classList.remove('mode-mobile');
    if (btnDesk) btnDesk.classList.add('active');
    if (btnMob) btnMob.classList.remove('active');
  }
}

function applyDemoToQuoteFromModal() {
  closeDemoModal();
  selectDemoInQuote(selectedDemoId);
}

// --------------------------------------------------------------------------
// 7. INTERACTIVE ROI CALCULATOR
// --------------------------------------------------------------------------
function calculateROI() {
  const profitPerCust = parseInt(document.getElementById('roiProfitPerCustomer')?.value || 400);
  const dailyOrders = parseInt(document.getElementById('roiDailyOrders')?.value || 4);

  const profitDisplay = document.getElementById('roiProfitDisplay');
  const ordersDisplay = document.getElementById('roiOrdersDisplay');
  const totalGainElem = document.getElementById('roiTotalMonthlyGain');
  const paybackElem = document.getElementById('roiPaybackDays');

  if (profitDisplay) profitDisplay.textContent = `₹${profitPerCust} प्रति ग्राहक`;
  if (ordersDisplay) ordersDisplay.textContent = `${dailyOrders} ग्राहक रोज़ाना`;

  const monthlyGain = profitPerCust * dailyOrders * 30;
  if (totalGainElem) totalGainElem.textContent = `₹ ${monthlyGain.toLocaleString('en-IN')}`;

  // Average website price: 12,000
  const daysToRecover = Math.max(3, Math.round(12000 / (profitPerCust * dailyOrders)));
  if (paybackElem) paybackElem.textContent = `सिर्फ ${daysToRecover} से ${daysToRecover + 3} दिनों`;
}
