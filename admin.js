/* ==========================================================================
   minisupermarket Seller Hub Controller
   ========================================================================== */

// Fallback Default Products database matching app.js
const defaultProducts = [
  {
    id: 1,
    title: "Organic Red Strawberries",
    category: "fruits-veggies",
    price: 249.00,
    oldPrice: 349.00,
    weight: "450g",
    rating: 4.8,
    reviews: 128,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=600",
    description: "Sweet, juicy organic strawberries hand-picked at peak ripeness. Grown without synthetic pesticides, perfect for healthy snacking, fresh salads, or blending into rich morning smoothies.",
    nutrition: { calories: "144 kcal", carbs: "35g", protein: "3g", fat: "0.5g" }
  },
  {
    id: 2,
    title: "Fresh Haas Avocados",
    category: "fruits-veggies",
    price: 180.00,
    oldPrice: null,
    weight: "3 Units",
    rating: 4.9,
    reviews: 86,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600",
    description: "Rich, creamy Haas avocados selected for optimal ripeness. Perfect for making authentic guacamole, slicing onto sourdough toast, or adding to fresh green salads.",
    nutrition: { calories: "320 kcal", carbs: "17g", protein: "4g", fat: "29g" }
  },
  {
    id: 3,
    title: "Pure Organic Honey",
    category: "snacks",
    price: 299.00,
    oldPrice: 399.00,
    weight: "350g",
    rating: 4.7,
    reviews: 95,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    description: "100% pure raw wildflower honey sourced from local sustainable apiaries. Rich in natural antioxidants and enzymes, making it the perfect natural sweetener for tea or toast.",
    nutrition: { calories: "304 kcal", carbs: "82g", protein: "0.3g", fat: "0g" }
  },
  {
    id: 4,
    title: "Fresh Whole Milk 3.5%",
    category: "dairy-eggs",
    price: 75.00,
    oldPrice: null,
    weight: "1 Litre",
    rating: 4.6,
    reviews: 210,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",
    description: "Premium pasteurized whole milk with 3.5% fat from pasture-raised grass-fed cows. High in calcium and vitamin D, delivering a rich, creamy flavor.",
    nutrition: { calories: "150 kcal", carbs: "12g", protein: "8g", fat: "8g" }
  },
  {
    id: 5,
    title: "Free Range Large Eggs",
    category: "dairy-eggs",
    price: 99.00,
    oldPrice: 120.00,
    weight: "12 Units",
    rating: 4.9,
    reviews: 312,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&q=80&w=600",
    description: "Farm fresh brown eggs from cage-free hens raised on a healthy grain diet. Featuring thick shells and deep golden yolks ideal for baking and breakfast dishes.",
    nutrition: { calories: "70 kcal/egg", carbs: "0.6g", protein: "6g", fat: "5g" }
  },
  {
    id: 6,
    title: "Artisan Sourdough Bread",
    category: "bakery",
    price: 149.00,
    oldPrice: 199.00,
    weight: "600g",
    rating: 4.8,
    reviews: 145,
    badge: "Baked Fresh",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600",
    description: "Traditionally fermented sourdough loaf with a blistered crisp crust and a soft, tangy, airy interior. Baked early every morning using organic unbleached wheat flour.",
    nutrition: { calories: "250 kcal/100g", carbs: "52g", protein: "8g", fat: "1g" }
  },
  {
    id: 7,
    title: "Triple Chocolate Cookies",
    category: "bakery",
    price: 120.00,
    oldPrice: null,
    weight: "300g",
    rating: 4.7,
    reviews: 82,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
    description: "Delectable, chewy bakery-style cookies packed with premium milk, dark, and white chocolate chunks. Freshly baked with real cream butter and pure cane sugar.",
    nutrition: { calories: "480 kcal/100g", carbs: "60g", protein: "5g", fat: "24g" }
  },
  {
    id: 8,
    title: "Japanese Ceremonial Matcha",
    category: "beverages",
    price: 799.00,
    oldPrice: 999.00,
    weight: "50g",
    rating: 4.9,
    reviews: 174,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&q=80&w=600",
    description: "First-harvest ceremonial grade matcha green tea powder stoneground in Uji, Japan. Delivers a smooth, velvety umami flavor without any bitterness. Perfect for traditional tea whisking or iced lattes.",
    nutrition: { calories: "3 kcal/g", carbs: "0.4g", protein: "0.3g", fat: "0g" }
  },
  {
    id: 9,
    title: "Cold Brew Craft Coffee",
    category: "beverages",
    price: 150.00,
    oldPrice: null,
    weight: "330ml",
    rating: 4.5,
    reviews: 67,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    description: "Smooth, low-acid cold brew coffee steeped for 18 hours in filtered mountain water. Brewed from single-origin Arabica beans, offering natural hints of dark cocoa and caramel.",
    nutrition: { calories: "5 kcal", carbs: "1g", protein: "0g", fat: "0g" }
  },
  {
    id: 10,
    title: "Greek Honey Yogurt",
    category: "dairy-eggs",
    price: 120.00,
    oldPrice: 150.00,
    weight: "500g",
    rating: 4.8,
    reviews: 119,
    badge: "Healthy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    description: "Thick, strained Greek style yogurt mixed with sweet organic honey. Packed with live probiotic cultures and protein, representing the ideal healthy fuel for your day.",
    nutrition: { calories: "120 kcal/100g", carbs: "15g", protein: "9g", fat: "3g" }
  },
  {
    id: 11,
    title: "Sea Salt Potato Crisps",
    category: "snacks",
    price: 80.00,
    oldPrice: null,
    weight: "150g",
    rating: 4.4,
    reviews: 58,
    badge: "Snack",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d20?auto=format&fit=crop&q=80&w=600",
    description: "Thick, kettle-cooked potato crisps sprinkled with hand-harvested Mediterranean sea salt. Super crunchy, gluten-free, and fried in pure sunflower oil for clean taste.",
    nutrition: { calories: "520 kcal/100g", carbs: "58g", protein: "6g", fat: "30g" }
  },
  {
    id: 12,
    title: "Organic Bunch Bananas",
    category: "fruits-veggies",
    price: 60.00,
    oldPrice: 80.00,
    weight: "1 Bunch",
    rating: 4.8,
    reviews: 203,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600",
    description: "Sweet, nutrient-rich bananas imported from organic certified family orchards. Fully loaded with potassium, vitamin B6, and natural fiber.",
    nutrition: { calories: "105 kcal/banana", carbs: "27g", protein: "1.3g", fat: "0.3g" }
  }
];

// 1. Data Store Arrays (Safe try/catch)
let products = [];
let orders = [];

function loadData() {
  // Load Products
  try {
    const savedProducts = localStorage.getItem('ms-products');
    if (savedProducts) {
      products = JSON.parse(savedProducts);
    } else {
      products = defaultProducts;
      localStorage.setItem('ms-products', JSON.stringify(defaultProducts));
    }
    // Initialize stock key on default products if missing
    products.forEach(p => {
      if (p.stock === undefined) {
        // Generate random realistic stocks between 8 and 80
        p.stock = Math.floor(Math.random() * 72) + 8;
      }
    });
    localStorage.setItem('ms-products', JSON.stringify(products));
  } catch (e) {
    console.warn("Storage error reading products", e);
    products = defaultProducts;
  }

  // Load Orders
  try {
    const savedOrders = localStorage.getItem('ms-orders');
    orders = savedOrders ? JSON.parse(savedOrders) : [];
  } catch (e) {
    console.warn("Storage error reading orders", e);
    orders = [];
  }
}

// Write helper functions
function saveProducts() {
  try {
    localStorage.setItem('ms-products', JSON.stringify(products));
  } catch (e) {
    console.warn("Storage write error for products", e);
  }
}

function saveOrders() {
  try {
    localStorage.setItem('ms-orders', JSON.stringify(orders));
  } catch (e) {
    console.warn("Storage write error for orders", e);
  }
}

// Product Categories configuration matching app.js
const categories = [
  { id: 'all', name: 'All Products', icon: 'all' },
  { id: 'fruits-veggies', name: 'Fruits & Veggies', icon: 'fruits' },
  { id: 'dairy-eggs', name: 'Dairy & Eggs', icon: 'dairy' },
  { id: 'bakery', name: 'Bakery', icon: 'bakery' },
  { id: 'beverages', name: 'Beverages', icon: 'beverages' },
  { id: 'snacks', name: 'Snacks & Honey', icon: 'snacks' }
];

// Coupons State List
let coupons = [];

// 2. DOM Selection Elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.panel-section');
const viewTitle = document.getElementById('view-title');
const viewSubtitle = document.getElementById('view-subtitle');
const themeToggle = document.getElementById('theme-toggle');

// Dashboard metrics spans
const statSales = document.getElementById('stat-sales');
const statOrders = document.getElementById('stat-orders');
const statLowStock = document.getElementById('stat-low-stock');
const dashboardRecentOrders = document.getElementById('dashboard-recent-orders');
const dashboardLowStockList = document.getElementById('dashboard-low-stock-list');

// Product Manager variables
const addProductBtn = document.getElementById('add-product-btn');
const productSearchInput = document.getElementById('product-search-input');
const productsTableBody = document.getElementById('products-table-body');

// Order Manager variables
const ordersTableBody = document.getElementById('orders-table-body');
const clearOrdersBtn = document.getElementById('clear-orders-btn');

// Form Modal variables
const modalBackdrop = document.getElementById('modal-backdrop');
const productModal = document.getElementById('product-modal');
const productModalClose = document.getElementById('product-modal-close');
const productForm = document.getElementById('product-form');
const formCancelBtn = document.getElementById('form-cancel-btn');
const formSaveBtn = document.getElementById('form-save-btn');
const modalFormTitle = document.getElementById('modal-form-title');
const modalFormDesc = document.getElementById('modal-form-desc');

// Input Form bindings
const formIdInput = document.getElementById('form-product-id');
const formTitleInput = document.getElementById('form-title');
const formCategorySelect = document.getElementById('form-category');
const formPriceInput = document.getElementById('form-price');
const formOldPriceInput = document.getElementById('form-old-price');
const formWeightInput = document.getElementById('form-weight');
const formStockInput = document.getElementById('form-stock');
const formImageInput = document.getElementById('form-image');
const formDescInput = document.getElementById('form-desc');

// Toasts Container
const toastContainer = document.getElementById('toast-container');

// Coupons Dialog Modal bindings
const couponModalBackdrop = document.getElementById('coupon-modal-backdrop');
const couponModal = document.getElementById('coupon-modal');
const couponModalClose = document.getElementById('coupon-modal-close');
const couponForm = document.getElementById('coupon-form');
const couponCancelBtn = document.getElementById('coupon-cancel-btn');
const addCouponBtn = document.getElementById('add-coupon-btn');
const couponsTableBody = document.getElementById('coupons-table-body');

// ==========================================================================
// Initialization & Navigation Toggles
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  loadCoupons();
  initTheme();
  setupNavToggles();
  renderDashboard();
  renderProductsTable();
  renderOrdersTable();
  setupFormBindings();
  setupDashboardQuickLinks();
});

// Sidebar Navigation handles tab toggles
function setupNavToggles() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
      
      // Update sidebar nav states
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update active section visibility
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(`section-${view}`).classList.add('active');

      // Update header headings
      if (view === 'dashboard') {
        viewTitle.innerText = "Dashboard";
        viewSubtitle.innerText = "Overview & Stats";
        renderDashboard(); // refresh stats
      } else if (view === 'products') {
        viewTitle.innerText = "Products Manager";
        viewSubtitle.innerText = "Catalog Inventory";
        renderProductsTable();
      } else if (view === 'orders') {
        viewTitle.innerText = "Customer Orders";
        viewSubtitle.innerText = "Deliveries & Actions";
        renderOrdersTable();
      } else if (view === 'coupons') {
        viewTitle.innerText = "Promo Coupons";
        viewSubtitle.innerText = "Discount Management";
        renderCouponsTable();
      } else if (view === 'customers') {
        viewTitle.innerText = "Customers Directory";
        viewSubtitle.innerText = "Buyer Accounts & Activity";
        renderCustomersDirectory();
      }
    });
  });
}

function setupDashboardQuickLinks() {
  document.getElementById('goto-orders-btn').addEventListener('click', () => {
    document.querySelector('.nav-item[data-view="orders"]').click();
  });
  document.getElementById('goto-products-btn').addEventListener('click', () => {
    document.querySelector('.nav-item[data-view="products"]').click();
  });
}

// Light / Dark Theme toggle configuration
function initTheme() {
  let storedTheme = 'dark'; // Admin panel defaults to sleek dark mode
  try {
    storedTheme = localStorage.getItem('ms-admin-theme') || 'dark';
  } catch (e) {
    console.warn("localStorage read error", e);
  }
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);
}

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === 'light' 
    ? `<svg class="theme-moon" style="width: 20px; height: 20px;"><use href="#icon-moon"></use></svg>`
    : `<svg class="theme-sun" style="width: 20px; height: 20px;"><use href="#icon-sun"></use></svg>`;
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('ms-admin-theme', nextTheme);
  } catch (e) {
    console.warn("localStorage write error", e);
  }
  updateThemeIcon(nextTheme);
  showToast(`Switched workspace to ${nextTheme} theme`, 'success');
});

// ==========================================================================
// Dashboard Calculations Rendering
// ==========================================================================
function renderDashboard() {
  loadData(); // reload arrays to get storefront checkouts

  // 1. Total revenue
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  statSales.innerText = `₹${revenue.toFixed(2)}`;

  // 2. Orders count
  statOrders.innerText = orders.length;

  // 3. Low stock count (threshold is < 15)
  const lowStockProducts = products.filter(p => p.stock < 15);
  statLowStock.innerText = lowStockProducts.length;

  // 4. Render Recent Orders (limit 5)
  if (orders.length === 0) {
    dashboardRecentOrders.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-tertiary);">No checkout orders placed yet.</td></tr>`;
  } else {
    // Sort orders by date/time (newest first)
    const sortedOrders = [...orders].reverse().slice(0, 5);
    dashboardRecentOrders.innerHTML = sortedOrders.map(o => {
      let statusClass = 'pending';
      if (o.status === 'Packing') statusClass = 'packing';
      else if (o.status === 'Dispatched') statusClass = 'dispatched';
      else if (o.status === 'Arrived') statusClass = 'arrived';

      return `
        <tr>
          <td style="font-weight: 700;">${o.id}</td>
          <td>${o.customer.name}</td>
          <td>${o.date.split(",")[0]}</td>
          <td style="font-weight: 800;">₹${o.total.toFixed(2)}</td>
          <td><span class="badge ${statusClass}">${o.status}</span></td>
        </tr>
      `;
    }).join('');
  }

  // 5. Render Low Stock alert items (limit 5)
  if (lowStockProducts.length === 0) {
    dashboardLowStockList.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--primary); font-weight: 600;">✅ All stock levels healthy!</td></tr>`;
  } else {
    const listLimit = lowStockProducts.slice(0, 5);
    dashboardLowStockList.innerHTML = listLimit.map(p => {
      const stockBadge = p.stock === 0 ? 'stock-empty' : 'stock-low';
      return `
        <tr>
          <td style="font-weight: 600;">${p.title}</td>
          <td><span class="badge ${stockBadge}">${p.stock} units left</span></td>
          <td style="text-transform: capitalize;">${p.category.replace("-", " & ")}</td>
        </tr>
      `;
    }).join('');
  }

  // 6. Render Category Performance Bars
  renderCategorySalesPerformance();
}

// ==========================================================================
// Products Manager Render & CRUD
// ==========================================================================
function renderProductsTable() {
  const query = productSearchInput.value.trim().toLowerCase();
  
  const filtered = products.filter(p => {
    return p.title.toLowerCase().includes(query) || 
           p.category.toLowerCase().includes(query) || 
           p.description.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    productsTableBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-tertiary);">No products match search criteria.</td></tr>`;
    return;
  }

  productsTableBody.innerHTML = filtered.map(p => {
    let stockBadge = 'stock-ok';
    if (p.stock === 0) stockBadge = 'stock-empty';
    else if (p.stock < 15) stockBadge = 'stock-low';

    return `
      <tr>
        <td><img src="${p.image}" alt="${p.title}" class="table-img"></td>
        <td style="font-weight: 700; color: var(--text-primary);">${p.title}</td>
        <td style="text-transform: capitalize;">${p.category.replace("-", " & ")}</td>
        <td style="font-weight: 800; color: var(--primary);">₹${p.price.toFixed(2)}</td>
        <td>${p.weight}</td>
        <td><span class="badge ${stockBadge}">${p.stock} units</span></td>
        <td>⭐ ${p.rating} <span style="color: var(--text-tertiary); font-size: 0.8rem;">(${p.reviews})</span></td>
        <td>
          <div class="table-actions">
            <button class="btn-icon edit" onclick="quickRestockProduct(${p.id})" style="background-color: rgba(46, 204, 113, 0.15); color: #2ecc71;" aria-label="Quick Restock +50">
              <svg style="width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <button class="btn-icon edit" onclick="openEditModal(${p.id})" aria-label="Edit Product">
              <svg style="width: 16px; height: 16px; fill: currentColor;"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button class="btn-icon delete" onclick="deleteProduct(${p.id})" aria-label="Delete Product">
              <svg style="width: 16px; height: 16px; fill: currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Bind live search
productSearchInput.addEventListener('input', renderProductsTable);

// Bind Modals elements
function setupFormBindings() {
  // Add product button triggers modal
  addProductBtn.addEventListener('click', () => {
    openAddModal();
  });

  productModalClose.addEventListener('click', closeProductModal);
  formCancelBtn.addEventListener('click', closeProductModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeProductModal();
  });

  // Coupon Modals triggers
  if (addCouponBtn) {
    addCouponBtn.addEventListener('click', openAddCouponModal);
  }
  if (couponModalClose) {
    couponModalClose.addEventListener('click', closeCouponModal);
  }
  if (couponCancelBtn) {
    couponCancelBtn.addEventListener('click', closeCouponModal);
  }
  if (couponModalBackdrop) {
    couponModalBackdrop.addEventListener('click', (e) => {
      if (e.target === couponModalBackdrop) closeCouponModal();
    });
  }
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveCouponForm();
    });
  }

  // Submit Modal Save
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveProductForm();
  });
}

function openAddModal() {
  productForm.reset();
  formIdInput.value = "";
  modalFormTitle.innerText = "Add New Product";
  modalFormDesc.innerText = "Create a new product listing in your catalog database";
  modalBackdrop.classList.add('active');
}

window.openEditModal = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  // Populate inputs
  formIdInput.value = p.id;
  formTitleInput.value = p.title;
  formCategorySelect.value = p.category;
  formPriceInput.value = p.price;
  formOldPriceInput.value = p.oldPrice || "";
  formWeightInput.value = p.weight;
  formStockInput.value = p.stock || 0;
  formImageInput.value = p.image;
  formDescInput.value = p.description;

  modalFormTitle.innerText = "Edit Product Details";
  modalFormDesc.innerText = `Updating profile for "${p.title}" (ID: ${p.id})`;
  modalBackdrop.classList.add('active');
};

function closeProductModal() {
  modalBackdrop.classList.remove('active');
}

// Save Product logic (Add / Edit)
function saveProductForm() {
  const idVal = formIdInput.value;
  const title = formTitleInput.value.trim();
  const category = formCategorySelect.value;
  const price = parseFloat(formPriceInput.value);
  const oldPriceVal = formOldPriceInput.value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const weight = formWeightInput.value.trim();
  const stock = parseInt(formStockInput.value);
  const image = formImageInput.value.trim();
  const description = formDescInput.value.trim();

  if (idVal) {
    // EDIT MODE
    const pId = parseInt(idVal);
    const index = products.findIndex(p => p.id === pId);
    if (index > -1) {
      products[index] = {
        ...products[index],
        title,
        category,
        price,
        oldPrice,
        weight,
        stock,
        image,
        description
      };
      saveProducts();
      showToast(`Updated product "${title}" successfully`, 'success');
    }
  } else {
    // ADD MODE
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: newId,
      title,
      category,
      price,
      oldPrice,
      weight,
      rating: 5.0, // Default for new products
      reviews: 0,
      badge: "New",
      stock,
      image,
      description,
      nutrition: { calories: "N/A", carbs: "N/A", protein: "N/A", fat: "N/A" } // Defaults
    };
    products.push(newProduct);
    saveProducts();
    showToast(`Added product "${title}" to shop catalog`, 'success');
  }

  closeProductModal();
  renderProductsTable();
}

window.deleteProduct = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  if (confirm(`Are you sure you want to permanently delete "${p.title}"?`)) {
    products = products.filter(prod => prod.id !== productId);
    saveProducts();
    renderProductsTable();
    showToast(`Removed product "${p.title}" from catalog database`, 'danger');
  }
};

// ==========================================================================
// Orders Manager Render & Status updates
// ==========================================================================
function renderOrdersTable() {
  if (orders.length === 0) {
    ordersTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-tertiary);">No client orders placed yet.</td></tr>`;
    return;
  }

  // Render orders newest first
  ordersTableBody.innerHTML = [...orders].reverse().map(o => {
    // Render options tags with active selection
    const statuses = ['Pending', 'Packing', 'Dispatched', 'Arrived'];
    const optionsHTML = statuses.map(s => {
      const selected = o.status === s ? 'selected' : '';
      return `<option value="${s}" ${selected}>${s}</option>`;
    }).join('');

    // Compile items list string
    const itemsList = o.items.map(item => `${item.title} (x${item.quantity})`).join(', ');

    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${o.id}</td>
        <td>
          <div style="font-weight: 700;">${o.customer.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${o.customer.phone}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${o.customer.address}">${o.customer.address}</div>
        </td>
        <td>${o.date}</td>
        <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsList}">${itemsList}</td>
        <td style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">₹${o.total.toFixed(2)}</td>
        <td>
          <span class="badge ${o.status.toLowerCase()}">${o.status}</span>
        </td>
        <td>
          <select class="status-select" onchange="updateOrderStatus('${o.id}', this)">
            ${optionsHTML}
          </select>
        </td>
      </tr>
    `;
  }).join('');
}

window.updateOrderStatus = function(orderId, selectElement) {
  const nextStatus = selectElement.value;
  const index = orders.findIndex(o => o.id === orderId);
  if (index > -1) {
    orders[index].status = nextStatus;
    saveOrders();
    renderOrdersTable();
    showToast(`Order ${orderId} status set to "${nextStatus}"`, 'success');
  }
};

clearOrdersBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear the entire customer order history?")) {
    orders = [];
    saveOrders();
    renderOrdersTable();
    showToast("Cleared customer order history database", "danger");
  }
});

// ==========================================================================
// Toast floating alerts UI
// ==========================================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Icon selections
  let svgIcon = 'check';
  if (type === 'danger') svgIcon = 'close';
  else if (type === 'warning') svgIcon = 'alert';

  toast.innerHTML = `
    <div class="toast-icon">
      <svg style="width: 18px; height: 18px; fill: currentColor;"><use href="#icon-${svgIcon}"></use></svg>
    </div>
    <span class="toast-msg">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger visual entry
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Auto clean up after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3000);
}

// ==========================================================================
// RESTOCK & CATEGORY PERFORMANCE & CUSTOMERS & COUPONS LOGIC
// ==========================================================================

window.quickRestockProduct = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (prod) {
    prod.stock = (prod.stock || 0) + 50;
    saveProducts();
    renderProductsTable();
    showToast(`Restocked 50 units of "${prod.title}" (New Stock: ${prod.stock})`, 'success');
  }
};

function renderCategorySalesPerformance() {
  loadData();
  const salesByCategory = {};
  categories.forEach(c => {
    if (c.id !== 'all') salesByCategory[c.id] = 0;
  });

  let totalSales = 0;
  orders.forEach(order => {
    order.items.forEach(item => {
      const prod = products.find(p => p.id === item.id);
      const categoryId = prod ? prod.category : 'fruits-veggies'; // default fallback
      if (salesByCategory[categoryId] !== undefined) {
        const itemRevenue = item.price * item.quantity;
        salesByCategory[categoryId] += itemRevenue;
        totalSales += itemRevenue;
      }
    });
  });

  const chartContainer = document.getElementById('category-sales-bars');
  if (!chartContainer) return;

  if (totalSales === 0) {
    chartContainer.innerHTML = `<div style="text-align: center; color: var(--text-tertiary); padding: 1.5rem 0;">No sales data available. Category share will populate as checkouts occur.</div>`;
    return;
  }

  const sortedCategories = Object.keys(salesByCategory).map(key => {
    const catConfig = categories.find(c => c.id === key) || { name: key };
    const revenue = salesByCategory[key];
    const percent = totalSales > 0 ? (revenue / totalSales) * 100 : 0;
    return { id: key, name: catConfig.name, revenue, percent };
  }).sort((a, b) => b.revenue - a.revenue);

  chartContainer.innerHTML = sortedCategories.map(cat => {
    return `
      <div class="sales-bar-row" style="margin-bottom: 1.25rem;">
        <div class="sales-bar-info" style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">
          <span style="color: var(--text-primary); text-transform: capitalize;">${cat.name}</span>
          <span style="color: var(--text-secondary);">₹${cat.revenue.toFixed(2)} (${cat.percent.toFixed(0)}%)</span>
        </div>
        <div class="sales-bar-bg" style="width: 100%; height: 8px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;">
          <div class="sales-bar-fill" style="width: ${cat.percent}%; height: 100%; background: var(--primary); border-radius: var(--radius-full); transition: width 0.8s ease;"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCustomersDirectory() {
  loadData();
  const tbody = document.getElementById('customers-table-body');
  if (!tbody) return;

  const customersMap = {};

  orders.forEach(o => {
    const email = o.customer.email ? o.customer.email.toLowerCase() : 'unknown@example.com';
    const name = o.customer.name || 'Guest User';
    const totalSpend = o.total;
    const date = o.date;

    if (!customersMap[email]) {
      customersMap[email] = {
        name: name,
        email: email,
        lastOrderDate: date,
        ordersCount: 1,
        totalSpend: totalSpend
      };
    } else {
      customersMap[email].ordersCount += 1;
      customersMap[email].totalSpend += totalSpend;
      customersMap[email].lastOrderDate = date;
    }
  });

  try {
    const savedUser = localStorage.getItem('ms-user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user && user.email) {
        const email = user.email.toLowerCase();
        if (!customersMap[email]) {
          customersMap[email] = {
            name: user.name,
            email: email,
            lastOrderDate: 'Never (Registered)',
            ordersCount: 0,
            totalSpend: 0
          };
        }
      }
    }
  } catch (e) {
    console.warn(e);
  }

  const customersList = Object.values(customersMap);

  if (customersList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-tertiary);">No customer records found.</td></tr>`;
    return;
  }

  customersList.sort((a, b) => b.totalSpend - a.totalSpend);

  tbody.innerHTML = customersList.map(c => {
    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${c.name}</td>
        <td>${c.email}</td>
        <td>${c.lastOrderDate}</td>
        <td style="font-weight: 600;">${c.ordersCount} orders</td>
        <td style="font-weight: 800; color: var(--primary);">₹${c.totalSpend.toFixed(2)}</td>
      </tr>
    `;
  }).join('');
}

function loadCoupons() {
  try {
    const savedCoupons = localStorage.getItem('ms-coupons');
    if (savedCoupons) {
      coupons = JSON.parse(savedCoupons);
    } else {
      coupons = [
        { id: 1, code: 'MINI10', discount: 10, status: 'Active' },
        { id: 2, code: 'SUPER20', discount: 20, status: 'Active' }
      ];
      localStorage.setItem('ms-coupons', JSON.stringify(coupons));
    }
  } catch (e) {
    console.warn("Storage error reading coupons", e);
    coupons = [];
  }
}

function saveCoupons() {
  try {
    localStorage.setItem('ms-coupons', JSON.stringify(coupons));
  } catch (e) {
    console.warn("Storage write error for coupons", e);
  }
}

function renderCouponsTable() {
  loadCoupons();
  const tbody = document.getElementById('coupons-table-body');
  if (!tbody) return;

  if (coupons.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-tertiary);">No promo coupons created yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = coupons.map(c => {
    const statusClass = c.status === 'Active' ? 'badge arrived' : 'badge stock-empty';
    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${c.code}</td>
        <td style="font-weight: 800; color: var(--primary);">${c.discount}% Off</td>
        <td><span class="${statusClass}">${c.status}</span></td>
        <td>
          <div class="table-actions">
            <button class="btn-icon edit" onclick="openEditCouponModal(${c.id})" aria-label="Edit Coupon">
              <svg style="width: 16px; height: 16px; fill: currentColor;"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button class="btn-icon delete" onclick="deleteCoupon(${c.id})" aria-label="Delete Coupon">
              <svg style="width: 16px; height: 16px; fill: currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddCouponModal() {
  couponForm.reset();
  document.getElementById('form-coupon-id').value = "";
  document.getElementById('coupon-modal-title').innerText = "Create Promo Coupon";
  document.getElementById('coupon-modal-desc').innerText = "Define a new active discount coupon for the store checkout";
  couponModalBackdrop.classList.add('active');
}

window.openEditCouponModal = function(couponId) {
  const c = coupons.find(coup => coup.id === couponId);
  if (!c) return;

  document.getElementById('form-coupon-id').value = c.id;
  document.getElementById('coupon-code').value = c.code;
  document.getElementById('coupon-discount').value = c.discount;
  document.getElementById('coupon-status').value = c.status;

  document.getElementById('coupon-modal-title').innerText = "Edit Promo Coupon";
  document.getElementById('coupon-modal-desc').innerText = `Update settings for coupon code "${c.code}"`;
  couponModalBackdrop.classList.add('active');
};

function closeCouponModal() {
  couponModalBackdrop.classList.remove('active');
}

function saveCouponForm() {
  const idVal = document.getElementById('form-coupon-id').value;
  const code = document.getElementById('coupon-code').value.trim().toUpperCase();
  const discount = parseInt(document.getElementById('coupon-discount').value);
  const status = document.getElementById('coupon-status').value;

  if (idVal) {
    const cId = parseInt(idVal);
    const index = coupons.findIndex(c => c.id === cId);
    if (index > -1) {
      coupons[index] = { ...coupons[index], code, discount, status };
      saveCoupons();
      showToast(`Updated coupon code ${code} successfully`, 'success');
    }
  } else {
    const newId = coupons.length > 0 ? Math.max(...coupons.map(c => c.id)) + 1 : 1;
    const newCoupon = { id: newId, code, discount, status };
    coupons.push(newCoupon);
    saveCoupons();
    showToast(`Created new promo coupon code ${code} (${discount}% Off)`, 'success');
  }

  closeCouponModal();
  renderCouponsTable();
}

window.deleteCoupon = function(couponId) {
  const c = coupons.find(coup => coup.id === couponId);
  if (!c) return;

  if (confirm(`Are you sure you want to permanently delete coupon "${c.code}"?`)) {
    coupons = coupons.filter(coup => coup.id !== couponId);
    saveCoupons();
    renderCouponsTable();
    showToast(`Removed coupon code "${c.code}"`, 'danger');
  }
};

