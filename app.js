/* ==========================================================================
   minisupermarket Application Logic
   ========================================================================== */

// 1. Mock Database of Premium Products (Default Fallback)
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

let products = [];
try {
  const savedProducts = localStorage.getItem('ms-products');
  if (savedProducts) {
    products = JSON.parse(savedProducts);
  } else {
    products = defaultProducts;
    localStorage.setItem('ms-products', JSON.stringify(defaultProducts));
  }
  if (!Array.isArray(products) || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem('ms-products', JSON.stringify(defaultProducts));
  }
} catch (e) {
  console.warn("localStorage 'ms-products' read error, using defaultProducts fallback.", e);
  products = defaultProducts;
}

// 2. State Variables
let settings = {
  freeShippingMin: 399,
  deliveryFee: 49,
  taxRate: 8,
  bannerActive: true,
  bannerText: "⚡ Welcome to minisupermarket.in! Use coupon MINI10 for 10% off your purchase.",
  bannerBgColor: "#10b981",
  bannerTextColor: "#ffffff"
};

try {
  const savedSettings = localStorage.getItem('ms-settings');
  if (savedSettings) {
    settings = { ...settings, ...JSON.parse(savedSettings) };
  } else {
    localStorage.setItem('ms-settings', JSON.stringify(settings));
  }
} catch (e) {
  console.warn("localStorage 'ms-settings' read error, using fallback.", e);
}

let cart = [];
let wishlist = [];
let selectedCategory = 'all';
let searchQuery = '';
let activePromoCode = null;
let deliveryStatusTimer = null;

try {
  const savedCart = localStorage.getItem('ms-cart');
  cart = savedCart ? JSON.parse(savedCart) : [];
  if (!Array.isArray(cart)) cart = [];
} catch (e) {
  console.warn("localStorage 'ms-cart' read error, defaulting to empty.", e);
  cart = [];
}

try {
  const savedWishlist = localStorage.getItem('ms-wishlist');
  wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
  if (!Array.isArray(wishlist)) wishlist = [];
} catch (e) {
  console.warn("localStorage 'ms-wishlist' read error, defaulting to empty.", e);
  wishlist = [];
}

try {
  activePromoCode = localStorage.getItem('ms-promo') || null;
} catch (e) {
  console.warn("localStorage 'ms-promo' read error, defaulting to null.", e);
  activePromoCode = null;
}

// Categories configuration
const categories = [
  { id: 'all', name: 'All Products', icon: 'all' },
  { id: 'fruits-veggies', name: 'Fruits & Veggies', icon: 'fruits' },
  { id: 'dairy-eggs', name: 'Dairy & Eggs', icon: 'dairy' },
  { id: 'bakery', name: 'Bakery', icon: 'bakery' },
  { id: 'beverages', name: 'Beverages', icon: 'beverages' },
  { id: 'snacks', name: 'Snacks & Honey', icon: 'snacks' }
];

// 3. Dom Selection Elements
const productsGrid = document.getElementById('products-grid-container');
const categoryFilters = document.getElementById('category-filters-container');
const searchInput = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const logoRefresh = document.getElementById('logo-refresh');
const navLinks = document.querySelectorAll('.nav-link');

const themeToggle = document.getElementById('theme-toggle');

const wishlistToggle = document.getElementById('wishlist-toggle-btn');
const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistClose = document.getElementById('wishlist-drawer-close');
const wishlistCountBadge = document.getElementById('wishlist-count-badge');
const wishlistContent = document.getElementById('wishlist-drawer-content');
const wishlistCountSpan = document.getElementById('wishlist-drawer-count');

const cartToggle = document.getElementById('cart-toggle-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartClose = document.getElementById('cart-drawer-close');
const cartCountBadge = document.getElementById('cart-count-badge');
const cartContent = document.getElementById('cart-drawer-content');
const cartCountSpan = document.getElementById('cart-drawer-count');
const cartDrawerFooter = document.getElementById('cart-drawer-footer');

const backdrop = document.getElementById('drawer-backdrop');

const modalBackdrop = document.getElementById('modal-backdrop');
const detailsModal = document.getElementById('details-modal');
const detailsClose = document.getElementById('details-modal-close');
const detailsContent = document.getElementById('details-modal-content');

const checkoutModal = document.getElementById('checkout-modal');
const checkoutClose = document.getElementById('checkout-modal-close');
const checkoutStartBtn = document.getElementById('checkout-start-btn');
const checkoutFinalTotal = document.getElementById('checkout-final-total');
const checkoutProgressBar = document.getElementById('checkout-progress-bar');
const checkoutCloseBtn = document.getElementById('checkout-close-btn');

// Promo items
const promoInput = document.getElementById('promo-code-input');
const promoApply = document.getElementById('promo-code-apply');

// Cart Summary items
const summarySubtotal = document.getElementById('summary-subtotal');
const summaryDiscountRow = document.getElementById('summary-discount-row');
const summaryDiscount = document.getElementById('summary-discount');
const summaryDelivery = document.getElementById('summary-delivery');
const summaryTax = document.getElementById('summary-tax');
const summaryTotal = document.getElementById('summary-total');

// Toast Notification
const toastContainer = document.getElementById('toast-container');

// ==========================================================================
// Initialization & Startup
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories();
  renderProducts();
  updateCartBadges();
  updateWishlistBadges();
  setupEventListeners();
  setupScrollReveal();
  renderAnnouncementBanner();

  // Google Auth Init
  initGoogleAuth();
  renderUserAuthUI();
  setupUserMenuEvents();
});

// Theme Toggle logic
function initTheme() {
  let storedTheme = 'light';
  try {
    storedTheme = localStorage.getItem('ms-theme') || 'light';
  } catch (e) {
    console.warn("localStorage 'ms-theme' read error.", e);
  }
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);
}

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === 'dark' 
    ? `<svg class="theme-moon" style="width: 20px; height: 20px;"><use href="#icon-moon"></use></svg>`
    : `<svg class="theme-sun" style="width: 20px; height: 20px;"><use href="#icon-sun"></use></svg>`;
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('ms-theme', nextTheme);
  } catch (e) {
    console.warn("localStorage 'ms-theme' write error.", e);
  }
  updateThemeIcon(nextTheme);
  showToast(`Switched to ${nextTheme} mode`, 'success');
});

// ==========================================================================
// Rendering Elements
// ==========================================================================

// Render Category Pills
function renderCategories() {
  categoryFilters.innerHTML = categories.map(cat => {
    const isActive = cat.id === selectedCategory ? 'active' : '';
    // Select correct symbol representation
    let svgIcon = 'leaf';
    if (cat.id === 'fruits-veggies') svgIcon = 'leaf';
    else if (cat.id === 'dairy-eggs') svgIcon = 'leaf';
    else if (cat.id === 'bakery') svgIcon = 'leaf';
    else if (cat.id === 'beverages') svgIcon = 'leaf';
    else if (cat.id === 'snacks') svgIcon = 'leaf';

    return `
      <button class="category-pill ${isActive}" data-id="${cat.id}">
        <svg><use href="#icon-${svgIcon}"></use></svg>
        ${cat.name}
      </button>
    `;
  }).join('');

  // Add click events to pills
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const clickedBtn = e.currentTarget;
      selectedCategory = clickedBtn.getAttribute('data-id');
      
      // Update UI active states
      document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
      clickedBtn.classList.add('active');

      renderProducts();
    });
  });
}

// Render Products Grid
function renderProducts() {
  // Filter products by selected category and search string
  const filtered = products.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <svg style="width: 60px; height: 60px; fill: none; stroke: currentColor; stroke-width: 2;"><use href="#icon-search"></use></svg>
        <h3>No groceries found</h3>
        <p>Try checking your spelling or filter another organic category.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const hasDiscount = p.oldPrice !== null;
    const isFav = wishlist.includes(p.id) ? 'active' : '';
    const isOutOfStock = p.stock !== undefined && p.stock === 0;

    let badgeHTML = '';
    if (isOutOfStock) {
      badgeHTML = `<span class="card-badge" style="background: var(--danger); color: #fff;">Sold Out</span>`;
    } else if (p.badge) {
      badgeHTML = `<span class="card-badge ${p.badge.toLowerCase().includes('organic') ? 'organic' : ''}">${p.badge}</span>`;
    }

    const oldPriceHTML = hasDiscount ? `<span class="price-old">₹${p.oldPrice.toFixed(2)}</span>` : '';
    const addBtnHTML = isOutOfStock
      ? `<button class="add-cart-btn out-of-stock-btn" disabled style="background: var(--text-tertiary); color: #fff; cursor: not-allowed; box-shadow: none;">Sold Out</button>`
      : `<button class="add-cart-btn" data-id="${p.id}"><svg><use href="#icon-plus"></use></svg>Add</button>`;

    return `
      <article class="product-card reveal ${isOutOfStock ? 'card-out-of-stock' : ''}" data-product-id="${p.id}">
        ${badgeHTML}
        <button class="favorite-btn ${isFav}" data-id="${p.id}" aria-label="Add to Wishlist">
          <svg style="width: 18px; height: 18px;"><use href="#icon-heart"></use></svg>
        </button>
        
        <div class="product-img-wrap" onclick="openDetails(${p.id})">
          <img src="${p.image}" alt="${p.title}" class="product-image" loading="lazy">
        </div>
        
        <div class="product-meta">
          <span class="product-weight">${p.weight}</span>
          <div class="product-rating">
            <svg><use href="#icon-star"></use></svg>
            ${p.rating} <span>(${p.reviews})</span>
          </div>
        </div>
        
        <h3 class="product-title" onclick="openDetails(${p.id})">${p.title}</h3>
        <p class="product-desc">${p.description}</p>
        
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">₹${p.price.toFixed(2)}</span>
            ${oldPriceHTML}
          </div>
          ${addBtnHTML}
        </div>
      </article>
    `;
  }).join('');

  // Re-bind click events for card buttons
  setupProductCardEvents();
  setupScrollReveal();
}

// Bind product action events (cart additions, favorites)
function setupProductCardEvents() {
  // Add to Cart Buttons
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.hasAttribute('disabled')) return;
      e.stopPropagation();
      const pId = parseInt(btn.getAttribute('data-id'));
      const product = products.find(p => p.id === pId);
      
      // Select product card image for parabolic path
      const card = btn.closest('.product-card');
      const cardImg = card.querySelector('.product-image');
      
      addToCart(product, 1);
      
      // Trigger Flight Animation
      triggerFlyAnimation(cardImg, btn);
    });
  });

  // Favorite Heart Buttons
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = parseInt(btn.getAttribute('data-id'));
      toggleWishlist(pId, btn);
    });
  });
}

// ==========================================================================
// Parabolic Fly-to-Cart Animation
// ==========================================================================
function triggerFlyAnimation(imageElement, triggerButton) {
  if (!imageElement) return;

  // 1. Get viewport positions
  const imgRect = imageElement.getBoundingClientRect();
  const cartBtn = document.getElementById('cart-toggle-btn');
  const cartRect = cartBtn.getBoundingClientRect();

  // 2. Create flying elements
  const flyContainer = document.createElement('div');
  flyContainer.className = 'fly-container';
  flyContainer.style.left = `${imgRect.left}px`;
  flyContainer.style.top = `${imgRect.top}px`;

  const flyImg = document.createElement('img');
  flyImg.src = imageElement.src;
  flyImg.className = 'fly-image';
  flyImg.style.width = `${imgRect.width}px`;
  flyImg.style.height = `${imgRect.height}px`;

  flyContainer.appendChild(flyImg);
  document.body.appendChild(flyContainer);

  // 3. Calculate target translation distances
  // Adjust targets to hit the center of the cart icon badge
  const startX = imgRect.left + imgRect.width / 2;
  const startY = imgRect.top + imgRect.height / 2;
  const endX = cartRect.left + cartRect.width / 2;
  const endY = cartRect.top + cartRect.height / 2;

  const diffX = endX - startX;
  const diffY = endY - startY;

  // 4. Forces reflow to register initial styles
  flyContainer.offsetWidth;

  // 5. Apply transitions and dynamic cubic-bezier translates
  // Container moves linearly on the X-axis
  // Image handles the parabolic jump curve on the Y-axis
  flyContainer.style.transform = `translate3d(${diffX}px, 0, 0)`;
  flyImg.style.transform = `translate3d(0, ${diffY}px, 0) scale(0.12) rotate(120deg)`;

  // 6. Complete animation sequence
  flyContainer.addEventListener('transitionend', () => {
    flyContainer.remove();
    
    // Pulse cart badge on header
    cartBtn.classList.add('pulse-cart');
    cartBtn.style.transform = 'scale(1.2) translateY(-2px)';
    setTimeout(() => {
      cartBtn.style.transform = '';
      cartBtn.classList.remove('pulse-cart');
    }, 300);
  });
}

// ==========================================================================
// Cart State Management
// ==========================================================================
function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.product.id === product.id);
  const currentQty = existing ? existing.quantity : 0;
  const targetQty = currentQty + quantity;

  let freshProducts = products;
  try {
    const saved = localStorage.getItem('ms-products');
    if (saved) freshProducts = JSON.parse(saved);
  } catch (e) {
    console.warn(e);
  }

  const freshProduct = freshProducts.find(p => p.id === product.id) || product;
  const maxStock = freshProduct.stock !== undefined ? freshProduct.stock : 999;

  if (targetQty > maxStock) {
    showToast(`Sorry, only ${maxStock} units of ${product.title} are in stock.`, 'warning');
    if (existing) {
      existing.quantity = maxStock;
    } else if (maxStock > 0) {
      cart.push({ product, quantity: maxStock });
    }
  } else {
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    showToast(`Added ${product.title} to cart`, 'success');
  }

  saveCart();
  updateCartBadges();
  renderCartItems();
}

function toggleWishlist(productId, heartButton) {
  const index = wishlist.indexOf(productId);
  const product = products.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    heartButton.classList.remove('active');
    showToast(`Removed ${product.title} from favorites`, 'warning');
  } else {
    wishlist.push(productId);
    heartButton.classList.add('active');
    showToast(`Saved ${product.title} to favorites`, 'success');
  }

  saveWishlist();
  updateWishlistBadges();
  renderWishlistItems();
}

function saveCart() {
  try {
    localStorage.setItem('ms-cart', JSON.stringify(cart));
  } catch (e) {
    console.warn("localStorage 'ms-cart' write error.", e);
  }
}

function saveWishlist() {
  try {
    localStorage.setItem('ms-wishlist', JSON.stringify(wishlist));
  } catch (e) {
    console.warn("localStorage 'ms-wishlist' write error.", e);
  }
}

function updateCartBadges() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadge.innerText = count;
  cartCountSpan.innerText = count;

  // Toggle badge display
  cartCountBadge.style.display = count > 0 ? 'flex' : 'none';
}

function updateWishlistBadges() {
  const count = wishlist.length;
  wishlistCountBadge.innerText = count;
  wishlistCountSpan.innerText = count;

  wishlistCountBadge.style.display = count > 0 ? 'flex' : 'none';
}

// Render cart sidebar contents
function renderCartItems() {
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="drawer-empty">
        <svg style="width: 50px; height: 50px; fill: none; stroke: currentColor; stroke-width: 2;"><use href="#icon-cart"></use></svg>
        <h4>Your cart is empty</h4>
        <p>Fill it with fresh, organic products from our catalog!</p>
        <button class="browse-btn" id="cart-empty-browse-btn">Browse Shop</button>
      </div>
    `;
    cartDrawerFooter.style.display = 'none';

    // Click behavior for empty browse
    const browse = document.getElementById('cart-empty-browse-btn');
    if (browse) {
      browse.addEventListener('click', () => {
        closeAllDrawers();
      });
    }
    return;
  }

  cartDrawerFooter.style.display = 'flex';
  cartContent.innerHTML = cart.map(item => {
    const itemTotal = item.product.price * item.quantity;
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.product.image}" alt="${item.product.title}">
        </div>
        <div class="cart-item-detail">
          <h4 class="cart-item-title">${item.product.title}</h4>
          <span class="cart-item-weight">${item.product.weight}</span>
          <div class="cart-item-footer">
            <span class="cart-item-price">₹${itemTotal.toFixed(2)}</span>
            
            <div class="quantity-controls">
              <button class="qty-btn" onclick="adjustCartQty(${item.product.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="adjustCartQty(${item.product.id}, 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.product.id})" aria-label="Remove item">
          <svg style="width: 16px; height: 16px;"><use href="#icon-close"></use></svg>
        </button>
      </div>
    `;
  }).join('');

  calculateCartTotals();
}

// Global functions for inline HTML events
window.adjustCartQty = function(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  let freshProducts = products;
  try {
    const saved = localStorage.getItem('ms-products');
    if (saved) freshProducts = JSON.parse(saved);
  } catch (e) {
    console.warn(e);
  }

  const freshProduct = freshProducts.find(p => p.id === productId);
  const maxStock = freshProduct && freshProduct.stock !== undefined ? freshProduct.stock : 999;

  if (delta > 0 && item.quantity + delta > maxStock) {
    showToast(`Sorry, only ${maxStock} units of ${item.product.title} are in stock.`, 'warning');
    item.quantity = maxStock;
  } else {
    item.quantity += delta;
  }

  if (item.quantity <= 0) {
    removeCartItem(productId);
    return;
  }

  saveCart();
  updateCartBadges();
  renderCartItems();
};

window.removeCartItem = function(productId) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  cart = cart.filter(i => i.product.id !== productId);
  saveCart();
  updateCartBadges();
  renderCartItems();
  showToast(`Removed ${item.product.title} from cart`, 'warning');
};

// Fetch active promo codes
function getPromoDiscountPercent(code) {
  if (!code) return 0;
  try {
    const savedCoupons = JSON.parse(localStorage.getItem('ms-coupons')) || [];
    const coupon = savedCoupons.find(c => c.code.toUpperCase() === code.toUpperCase() && c.status === 'Active');
    return coupon ? coupon.discount / 100 : 0;
  } catch (e) {
    console.warn("localStorage coupons read error", e);
  }
  // Fallback default
  if (code === 'MINI10') return 0.10;
  return 0;
}

// Calculate pricing details
function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Promo code
  const discountPercent = getPromoDiscountPercent(activePromoCode);
  let discount = 0;
  if (discountPercent > 0) {
    discount = subtotal * discountPercent;
    summaryDiscountRow.style.display = 'flex';
    summaryDiscount.innerText = `-₹${discount.toFixed(2)}`;
  } else {
    summaryDiscountRow.style.display = 'none';
  }

  // Delivery parameters from settings
  const freeShippingThreshold = settings.freeShippingMin !== undefined ? settings.freeShippingMin : 399;
  const deliveryFee = settings.deliveryFee !== undefined ? settings.deliveryFee : 49.00;
  const taxRate = settings.taxRate !== undefined ? settings.taxRate / 100 : 0.08;

  // Delivery calculation
  const delivery = subtotal >= freeShippingThreshold ? 0 : deliveryFee;
  
  // Tax calculation
  const tax = subtotal * taxRate;

  // Final Total
  const finalTotal = subtotal - discount + delivery + tax;

  // Render to DOM
  summarySubtotal.innerText = `₹${subtotal.toFixed(2)}`;
  summaryDelivery.innerText = delivery === 0 ? 'FREE' : `₹${delivery.toFixed(2)}`;
  summaryTax.innerText = `₹${tax.toFixed(2)}`;
  summaryTotal.innerText = `₹${finalTotal.toFixed(2)}`;
  
  // Store checkout total
  checkoutFinalTotal.innerText = finalTotal.toFixed(2);
}

// Render wishlist items
function renderWishlistItems() {
  if (wishlist.length === 0) {
    wishlistContent.innerHTML = `
      <div class="drawer-empty">
        <svg style="width: 50px; height: 50px; fill: none; stroke: var(--danger); stroke-width: 2;"><use href="#icon-heart"></use></svg>
        <h4>No favorites saved</h4>
        <p>Click the heart icon on any card to add it to your wishlist.</p>
        <button class="browse-btn" id="wishlist-empty-browse-btn">Browse Shop</button>
      </div>
    `;

    const browse = document.getElementById('wishlist-empty-browse-btn');
    if (browse) {
      browse.addEventListener('click', () => {
        closeAllDrawers();
      });
    }
    return;
  }

  const items = products.filter(p => wishlist.includes(p.id));
  wishlistContent.innerHTML = items.map(p => {
    return `
      <div class="wishlist-item animate-in">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="wishlist-item-detail">
          <h4 class="cart-item-title" style="margin-bottom: 0.15rem;">${p.title}</h4>
          <span class="cart-item-weight" style="margin-bottom: 0.25rem;">${p.weight}</span>
          <span class="cart-item-price" style="display: block;">₹${p.price.toFixed(2)}</span>
        </div>
        <button class="wishlist-to-cart" onclick="moveWishlistToCart(${p.id})" aria-label="Add to cart">
          <svg><use href="#icon-plus"></use></svg>
        </button>
        <button class="cart-item-remove" onclick="removeWishlistItem(${p.id})" aria-label="Remove item">
          <svg style="width: 16px; height: 16px;"><use href="#icon-close"></use></svg>
        </button>
      </div>
    `;
  }).join('');
}

window.moveWishlistToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, 1);
  // Optional: remove from wishlist upon adding to cart
  // wishlist = wishlist.filter(id => id !== productId);
  // saveWishlist();
  // updateWishlistBadges();
  // renderWishlistItems();
};

window.removeWishlistItem = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  wishlist = wishlist.filter(id => id !== productId);
  saveWishlist();
  updateWishlistBadges();
  renderWishlistItems();
  
  // Update heart active class on active card if showing
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    const heart = card.querySelector('.favorite-btn');
    if (heart) heart.classList.remove('active');
  }

  showToast(`Removed ${product.title} from favorites`, 'warning');
};

// Apply promo code dynamically
promoApply.addEventListener('click', () => {
  const code = promoInput.value.trim().toUpperCase();
  let couponsList = [];
  try {
    const saved = localStorage.getItem('ms-coupons');
    if (saved) {
      couponsList = JSON.parse(saved);
    } else {
      couponsList = [
        { code: 'MINI10', discount: 10, status: 'Active' },
        { code: 'SUPER20', discount: 20, status: 'Active' }
      ];
      localStorage.setItem('ms-coupons', JSON.stringify(couponsList));
    }
  } catch (e) {
    console.warn(e);
    couponsList = [{ code: 'MINI10', discount: 10, status: 'Active' }];
  }

  const match = couponsList.find(c => c.code.toUpperCase() === code && c.status === 'Active');
  if (match) {
    activePromoCode = match.code;
    try {
      localStorage.setItem('ms-promo', match.code);
    } catch (e) {
      console.warn("localStorage 'ms-promo' write error.", e);
    }
    showToast(`Promo code ${match.code} applied (${match.discount}% Off)!`, 'success');
    calculateCartTotals();
  } else {
    showToast('Invalid or inactive promo code.', 'danger');
  }
});

// ==========================================================================
// Details Modal Window
// ==========================================================================
window.openDetails = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const isFav = wishlist.includes(product.id) ? 'active' : '';
  const discountText = product.oldPrice ? `<span class="price-old" style="margin-left: 0.5rem; font-size: 1rem;">₹${product.oldPrice.toFixed(2)}</span>` : '';

  detailsContent.innerHTML = `
    <div class="detail-img-wrap">
      <img src="${product.image}" alt="${product.title}" class="detail-img">
    </div>
    
    <div class="detail-info">
      <span class="detail-tag">${product.badge || 'Fresh'}</span>
      <h2 class="detail-title">${product.title}</h2>
      
      <div class="detail-meta">
        <div class="product-rating" style="font-size: 0.95rem;">
          <svg style="width: 16px; height: 16px;"><use href="#icon-star"></use></svg>
          ${product.rating} <span>(${product.reviews} customer reviews)</span>
        </div>
        <span style="color: var(--text-tertiary);">|</span>
        <span style="font-weight: 700; color: var(--text-secondary);">${product.weight}</span>
      </div>
      
      <p class="detail-desc">${product.description}</p>
      
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem; font-weight: 700; letter-spacing: 0.05em;">Nutrition Information</h4>
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <div class="nutrition-val">${product.nutrition.calories}</div>
          <div class="nutrition-lbl">Calories</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${product.nutrition.carbs}</div>
          <div class="nutrition-lbl">Carbs</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${product.nutrition.protein}</div>
          <div class="nutrition-lbl">Protein</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${product.nutrition.fat}</div>
          <div class="nutrition-lbl">Fat</div>
        </div>
      </div>
      
      <div class="detail-footer">
        <div class="product-price" style="flex: 1;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.15rem;">Price</span>
          <div style="display: flex; align-items: baseline;">
            <span class="price-current" style="font-size: 1.8rem;">₹${product.price.toFixed(2)}</span>
            ${discountText}
          </div>
        </div>
        
        <div class="detail-qty-select">
          <button class="detail-qty-btn" id="modal-qty-minus">-</button>
          <span class="detail-qty-val" id="modal-qty-val">1</span>
          <button class="detail-qty-btn" id="modal-qty-plus">+</button>
        </div>
        
        <button class="detail-add-btn" id="modal-add-to-cart-btn" data-id="${product.id}">
          <svg style="width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2.5;"><use href="#icon-cart"></use></svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;

  // Bind inside modal quantity buttons
  let detailQty = 1;
  const valSpan = document.getElementById('modal-qty-val');
  const addBtn = document.getElementById('modal-add-to-cart-btn');

  document.getElementById('modal-qty-plus').addEventListener('click', () => {
    detailQty++;
    valSpan.innerText = detailQty;
  });

  document.getElementById('modal-qty-minus').addEventListener('click', () => {
    if (detailQty > 1) {
      detailQty--;
      valSpan.innerText = detailQty;
    }
  });

  addBtn.addEventListener('click', () => {
    addToCart(product, detailQty);
    closeAllModals();
  });

  // Open modal screen
  modalBackdrop.classList.add('active');
  detailsModal.style.display = 'block';
  checkoutModal.style.display = 'none';
};

// ==========================================================================
// Checkout Flow Controller
// ==========================================================================
let checkoutStep = 1;

checkoutStartBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  closeAllDrawers();
  openCheckout();
});

function openCheckout() {
  checkoutStep = 1;
  updateCheckoutStepUI();
  renderUserAuthUI(); // Prefill user profile details on checkout open
  modalBackdrop.classList.add('active');
  checkoutModal.style.display = 'block';
  detailsModal.style.display = 'none';
}

function updateCheckoutStepUI() {
  // Hide all panels
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  
  // Show active panel
  document.getElementById(`checkout-panel-${checkoutStep}`).classList.add('active');

  // Update nodes
  for (let i = 1; i <= 3; i++) {
    const node = document.getElementById(`step-node-${i}`);
    node.className = 'step-node';
    if (i < checkoutStep) node.classList.add('completed');
    else if (i === checkoutStep) node.classList.add('active');
  }

  // Update progress bar
  const progressPercent = ((checkoutStep - 1) / 2) * 100;
  checkoutProgressBar.style.width = `${progressPercent}%`;
}

// Step 1 Form Submission
document.getElementById('checkout-panel-1').addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutStep = 2;
  updateCheckoutStepUI();
});

// Step 2 Payment Cards Selection
const paymentCards = document.querySelectorAll('.payment-card');
const creditCardInputs = document.getElementById('credit-card-inputs');
let chosenPayment = 'credit';

paymentCards.forEach(card => {
  card.addEventListener('click', () => {
    paymentCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    
    chosenPayment = card.getAttribute('data-payment');
    if (chosenPayment === 'credit') {
      creditCardInputs.style.display = 'grid';
      setCreditInputsRequired(true);
    } else {
      creditCardInputs.style.display = 'none';
      setCreditInputsRequired(false);
    }
  });
});

function setCreditInputsRequired(isRequired) {
  document.getElementById('card-num').required = isRequired;
  document.getElementById('card-expiry').required = isRequired;
  document.getElementById('card-cvc').required = isRequired;
}

// Step 2 Form Submission
document.getElementById('checkout-panel-2').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Create and save new order in database (localStorage)
  const orderId = 'MS-' + Math.floor(100000 + Math.random() * 900000);
  const shipName = document.getElementById('ship-name').value;
  const shipPhone = document.getElementById('ship-phone').value;
  const shipEmail = document.getElementById('ship-email').value;
  const shipAddress = document.getElementById('ship-address').value;
  const shipCity = document.getElementById('ship-city').value;
  const shipZip = document.getElementById('ship-zip').value;
  
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountPercent = getPromoDiscountPercent(activePromoCode);
  const discount = subtotal * discountPercent;
  const freeShippingThreshold = settings.freeShippingMin !== undefined ? settings.freeShippingMin : 399;
  const deliveryFee = settings.deliveryFee !== undefined ? settings.deliveryFee : 49.00;
  const taxRate = settings.taxRate !== undefined ? settings.taxRate / 100 : 0.08;
  const delivery = subtotal >= freeShippingThreshold ? 0 : deliveryFee;
  const tax = subtotal * taxRate;
  const finalTotal = subtotal - discount + delivery + tax;

  const newOrder = {
    id: orderId,
    customer: {
      name: shipName,
      phone: shipPhone,
      email: shipEmail,
      address: `${shipAddress}, ${shipCity} - ${shipZip}`
    },
    items: cart.map(item => ({
      id: item.product.id,
      title: item.product.title,
      quantity: item.quantity,
      price: item.product.price
    })),
    total: finalTotal,
    status: 'Pending',
    date: new Date().toLocaleString()
  };

  try {
    const existingOrders = JSON.parse(localStorage.getItem('ms-orders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('ms-orders', JSON.stringify(existingOrders));
  } catch (err) {
    console.warn("Failed to save order to localStorage", err);
  }

  // Decrement product stocks based on cart contents
  try {
    const savedProds = JSON.parse(localStorage.getItem('ms-products')) || [];
    cart.forEach(cartItem => {
      const dbProd = savedProds.find(p => p.id === cartItem.product.id);
      if (dbProd) {
        dbProd.stock = Math.max(0, dbProd.stock - cartItem.quantity);
      }
    });
    localStorage.setItem('ms-products', JSON.stringify(savedProds));
    // Update local products reference
    products = savedProds;
  } catch (err) {
    console.warn("Failed to decrement stock on checkout", err);
  }

  // Complete Order UI
  checkoutStep = 3;
  updateCheckoutStepUI();
  
  // Clear cart and triggers final successes
  cart = [];
  saveCart();
  updateCartBadges();
  renderCartItems();
  renderProducts(); // Refresh storefront grid to update stock status
  
  startDeliveryTracker(orderId);
});

// Back from payment button
document.getElementById('payment-back-btn').addEventListener('click', () => {
  checkoutStep = 1;
  updateCheckoutStepUI();
});

// Close checkout success button
checkoutCloseBtn.addEventListener('click', () => {
  closeAllModals();
  clearDeliveryTimer();
});

// Real-time delivery status listener polling localStorage
function startDeliveryTracker(orderId) {
  clearDeliveryTimer();
  
  const step1 = document.getElementById('tracker-step-1');
  const step2 = document.getElementById('tracker-step-2');
  const step3 = document.getElementById('tracker-step-3');
  const step4 = document.getElementById('tracker-step-4');

  function updateTrackerUI(status) {
    step1.className = 'tracker-step completed';
    step2.className = 'tracker-step';
    step3.className = 'tracker-step';
    step4.className = 'tracker-step';

    if (status === 'Pending') {
      step2.className = 'tracker-step active';
    } else if (status === 'Packing') {
      step2.className = 'tracker-step completed';
      step3.className = 'tracker-step active';
    } else if (status === 'Dispatched') {
      step2.className = 'tracker-step completed';
      step3.className = 'tracker-step completed';
      step4.className = 'tracker-step active';
    } else if (status === 'Arrived') {
      step2.className = 'tracker-step completed';
      step3.className = 'tracker-step completed';
      step4.className = 'tracker-step completed';
    }
  }

  // Set initial Pending state
  updateTrackerUI('Pending');

  // Poll localStorage every 2 seconds for status updates from Admin Panel
  deliveryStatusTimer = setInterval(() => {
    try {
      const orders = JSON.parse(localStorage.getItem('ms-orders')) || [];
      const currentOrder = orders.find(o => o.id === orderId);
      if (currentOrder) {
        updateTrackerUI(currentOrder.status);
      }
    } catch (e) {
      console.warn("Failed to read order status during polling", e);
    }
  }, 2000);
}

function clearDeliveryTimer() {
  if (deliveryStatusTimer) {
    clearInterval(deliveryStatusTimer);
    deliveryStatusTimer = null;
  }
}

// ==========================================================================
// Toast floating messages UI
// ==========================================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Icons mapping
  let svgIcon = 'check';
  if (type === 'danger') svgIcon = 'close';
  else if (type === 'warning') svgIcon = 'heart';

  toast.innerHTML = `
    <div class="toast-icon">
      <svg style="width: 18px; height: 18px; fill: currentColor;"><use href="#icon-${svgIcon}"></use></svg>
    </div>
    <span class="toast-msg">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger entering animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Remove toast item after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3200);
}

// ==========================================================================
// Side Drawers & Event Bindings
// ==========================================================================
function setupEventListeners() {
  // Drawer Toggles
  cartToggle.addEventListener('click', () => {
    closeAllDrawers();
    cartDrawer.classList.add('active');
    backdrop.classList.add('active');
    renderCartItems();
  });

  cartClose.addEventListener('click', closeAllDrawers);

  wishlistToggle.addEventListener('click', () => {
    closeAllDrawers();
    wishlistDrawer.classList.add('active');
    backdrop.classList.add('active');
    renderWishlistItems();
  });

  wishlistClose.addEventListener('click', closeAllDrawers);

  backdrop.addEventListener('click', closeAllDrawers);

  // Search function bindings
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  searchBtn.addEventListener('click', () => {
    renderProducts();
    // Scroll down to products grid
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Modal Closures
  detailsClose.addEventListener('click', closeAllModals);
  checkoutClose.addEventListener('click', () => {
    closeAllModals();
    clearDeliveryTimer();
  });
  
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeAllModals();
      clearDeliveryTimer();
    }
  });

  // Logo home navigation
  logoRefresh.addEventListener('click', (e) => {
    e.preventDefault();
    selectedCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    
    // Update pills styling
    document.querySelectorAll('.category-pill').forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-id') === 'all') b.classList.add('active');
    });

    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Navigation shop link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const type = link.getAttribute('data-nav');
      if (type === 'all') {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        selectedCategory = 'all';
        renderProducts();
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }
    });
  });
}

function closeAllDrawers() {
  cartDrawer.classList.remove('active');
  wishlistDrawer.classList.remove('active');
  backdrop.classList.remove('active');
}

function closeAllModals() {
  modalBackdrop.classList.remove('active');
  setTimeout(() => {
    detailsModal.style.display = 'none';
    checkoutModal.style.display = 'none';
  }, 400);
}

// ==========================================================================
// Scroll Reveal Observers
// ==========================================================================
function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    elements.forEach(el => el.classList.add('revealed'));
  }
}

// ==========================================================================
// Google Authentication & User Profile Manager
// ==========================================================================

function initGoogleAuth() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
    setTimeout(initGoogleAuth, 500);
    return;
  }

  google.accounts.id.initialize({
    client_id: '1035252329388-7mcr680o8a9c3p792q3e92ld9j586616.apps.googleusercontent.com', // Google Workspace Web Client ID
    callback: handleGoogleLoginCallback,
    auto_select: false,
    cancel_on_tap_outside: true
  });

  google.accounts.id.renderButton(
    document.getElementById('google-login-btn'),
    { 
      type: 'standard',
      theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'filled_black' : 'outline',
      size: 'medium',
      text: 'signin_with',
      shape: 'pill',
      logo_alignment: 'left'
    }
  );
}

function decodeGoogleIdToken(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("JWT decoding failed:", error);
    return null;
  }
}

function handleGoogleLoginCallback(response) {
  const payload = decodeGoogleIdToken(response.credential);
  if (payload) {
    const userData = {
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
      googleId: payload.sub
    };

    try {
      localStorage.setItem('ms-user', JSON.stringify(userData));
    } catch (e) {
      console.warn("localStorage 'ms-user' write error", e);
    }

    showToast(`Welcome back, ${userData.name}!`, 'success');
    renderUserAuthUI();
  } else {
    showToast('Google Sign-In failed. Please try again.', 'danger');
  }
}

function renderUserAuthUI() {
  let user = null;
  try {
    const savedUser = localStorage.getItem('ms-user');
    user = savedUser ? JSON.parse(savedUser) : null;
  } catch (e) {
    console.warn("localStorage 'ms-user' read error", e);
  }

  const loginWrap = document.getElementById('google-login-wrap');
  const profileMenu = document.getElementById('user-profile-menu');
  const userAvatar = document.getElementById('user-avatar');
  const userNameDisplay = document.getElementById('user-name-display');
  const userEmailDisplay = document.getElementById('user-email-display');

  if (user && user.email) {
    if (loginWrap) loginWrap.style.display = 'none';
    if (profileMenu) profileMenu.style.display = 'block';
    if (userAvatar) userAvatar.src = user.picture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150';
    if (userNameDisplay) userNameDisplay.innerText = user.name;
    if (userEmailDisplay) userEmailDisplay.innerText = user.email;

    const shipNameInput = document.getElementById('ship-name');
    const shipEmailInput = document.getElementById('ship-email');
    if (shipNameInput && !shipNameInput.value) shipNameInput.value = user.name;
    if (shipEmailInput && !shipEmailInput.value) shipEmailInput.value = user.email;
  } else {
    if (loginWrap) loginWrap.style.display = 'block';
    if (profileMenu) profileMenu.style.display = 'none';
  }
}

function setupUserMenuEvents() {
  const profileToggle = document.getElementById('profile-dropdown-toggle');
  const profileDropdown = document.getElementById('profile-dropdown');
  const logoutBtn = document.getElementById('logout-btn');

  if (profileToggle && profileDropdown) {
    profileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
    });

    profileDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      try {
        localStorage.removeItem('ms-user');
      } catch (e) {
        console.warn("localStorage removeItem error", e);
      }
      showToast('Signed out of Google account successfully.', 'warning');
      renderUserAuthUI();
      
      const shipNameInput = document.getElementById('ship-name');
      const shipEmailInput = document.getElementById('ship-email');
      if (shipNameInput) shipNameInput.value = '';
      if (shipEmailInput) shipEmailInput.value = '';
    });
  }
}

// Render dynamic announcement top banner
function renderAnnouncementBanner() {
  const bar = document.getElementById('announcement-bar');
  if (!bar) return;

  const isClosed = sessionStorage.getItem('ms-banner-closed');
  const header = document.querySelector('.header');

  if (isClosed === 'true' || !settings.bannerActive) {
    bar.style.display = 'none';
    if (header) {
      header.style.top = '0';
    }
    return;
  }

  bar.style.display = 'flex';
  bar.style.justifyContent = 'center';
  bar.style.alignItems = 'center';
  bar.style.position = 'fixed';
  bar.style.top = '0';
  bar.style.left = '0';
  bar.style.width = '100%';
  bar.style.height = '36px';
  bar.style.padding = '0 1rem';
  bar.style.fontSize = '0.85rem';
  bar.style.fontWeight = '700';
  bar.style.textAlign = 'center';
  bar.style.backgroundColor = settings.bannerBgColor || '#10b981';
  bar.style.color = settings.bannerTextColor || '#ffffff';
  bar.style.zIndex = '1001';
  bar.style.letterSpacing = '0.03em';
  bar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';

  bar.innerHTML = `
    <div style="flex: 1; padding-right: 2rem;">${settings.bannerText}</div>
    <button id="close-banner-btn" style="position: absolute; right: 1.2rem; background: none; border: 0; color: inherit; font-size: 1.3rem; cursor: pointer; font-weight: 700; line-height: 1; display: flex; align-items: center; justify-content: center; padding: 4px;" aria-label="Close Announcement">×</button>
  `;

  if (header) {
    header.style.top = '36px';
    header.style.transition = 'top var(--transition-normal)';
  }

  document.getElementById('close-banner-btn').addEventListener('click', () => {
    bar.style.display = 'none';
    sessionStorage.setItem('ms-banner-closed', 'true');
    if (header) {
      header.style.top = '0';
    }
  });
}
