(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const m=[{id:1,title:"Organic Red Strawberries",category:"fruits-veggies",price:249,oldPrice:349,weight:"450g",rating:4.8,reviews:128,badge:"Organic",image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=600",description:"Sweet, juicy organic strawberries hand-picked at peak ripeness. Grown without synthetic pesticides, perfect for healthy snacking, fresh salads, or blending into rich morning smoothies.",nutrition:{calories:"144 kcal",carbs:"35g",protein:"3g",fat:"0.5g"}},{id:2,title:"Fresh Haas Avocados",category:"fruits-veggies",price:180,oldPrice:null,weight:"3 Units",rating:4.9,reviews:86,badge:"Fresh",image:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600",description:"Rich, creamy Haas avocados selected for optimal ripeness. Perfect for making authentic guacamole, slicing onto sourdough toast, or adding to fresh green salads.",nutrition:{calories:"320 kcal",carbs:"17g",protein:"4g",fat:"29g"}},{id:3,title:"Pure Organic Honey",category:"snacks",price:299,oldPrice:399,weight:"350g",rating:4.7,reviews:95,badge:"Organic",image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",description:"100% pure raw wildflower honey sourced from local sustainable apiaries. Rich in natural antioxidants and enzymes, making it the perfect natural sweetener for tea or toast.",nutrition:{calories:"304 kcal",carbs:"82g",protein:"0.3g",fat:"0g"}},{id:4,title:"Fresh Whole Milk 3.5%",category:"dairy-eggs",price:75,oldPrice:null,weight:"1 Litre",rating:4.6,reviews:210,badge:"Fresh",image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",description:"Premium pasteurized whole milk with 3.5% fat from pasture-raised grass-fed cows. High in calcium and vitamin D, delivering a rich, creamy flavor.",nutrition:{calories:"150 kcal",carbs:"12g",protein:"8g",fat:"8g"}},{id:5,title:"Free Range Large Eggs",category:"dairy-eggs",price:99,oldPrice:120,weight:"12 Units",rating:4.9,reviews:312,badge:"Organic",image:"https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&q=80&w=600",description:"Farm fresh brown eggs from cage-free hens raised on a healthy grain diet. Featuring thick shells and deep golden yolks ideal for baking and breakfast dishes.",nutrition:{calories:"70 kcal/egg",carbs:"0.6g",protein:"6g",fat:"5g"}},{id:6,title:"Artisan Sourdough Bread",category:"bakery",price:149,oldPrice:199,weight:"600g",rating:4.8,reviews:145,badge:"Baked Fresh",image:"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600",description:"Traditionally fermented sourdough loaf with a blistered crisp crust and a soft, tangy, airy interior. Baked early every morning using organic unbleached wheat flour.",nutrition:{calories:"250 kcal/100g",carbs:"52g",protein:"8g",fat:"1g"}},{id:7,title:"Triple Chocolate Cookies",category:"bakery",price:120,oldPrice:null,weight:"300g",rating:4.7,reviews:82,badge:"Best Seller",image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",description:"Delectable, chewy bakery-style cookies packed with premium milk, dark, and white chocolate chunks. Freshly baked with real cream butter and pure cane sugar.",nutrition:{calories:"480 kcal/100g",carbs:"60g",protein:"5g",fat:"24g"}},{id:8,title:"Japanese Ceremonial Matcha",category:"beverages",price:799,oldPrice:999,weight:"50g",rating:4.9,reviews:174,badge:"Premium",image:"https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&q=80&w=600",description:"First-harvest ceremonial grade matcha green tea powder stoneground in Uji, Japan. Delivers a smooth, velvety umami flavor without any bitterness. Perfect for traditional tea whisking or iced lattes.",nutrition:{calories:"3 kcal/g",carbs:"0.4g",protein:"0.3g",fat:"0g"}},{id:9,title:"Cold Brew Craft Coffee",category:"beverages",price:150,oldPrice:null,weight:"330ml",rating:4.5,reviews:67,badge:"Fresh",image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",description:"Smooth, low-acid cold brew coffee steeped for 18 hours in filtered mountain water. Brewed from single-origin Arabica beans, offering natural hints of dark cocoa and caramel.",nutrition:{calories:"5 kcal",carbs:"1g",protein:"0g",fat:"0g"}},{id:10,title:"Greek Honey Yogurt",category:"dairy-eggs",price:120,oldPrice:150,weight:"500g",rating:4.8,reviews:119,badge:"Healthy",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",description:"Thick, strained Greek style yogurt mixed with sweet organic honey. Packed with live probiotic cultures and protein, representing the ideal healthy fuel for your day.",nutrition:{calories:"120 kcal/100g",carbs:"15g",protein:"9g",fat:"3g"}},{id:11,title:"Sea Salt Potato Crisps",category:"snacks",price:80,oldPrice:null,weight:"150g",rating:4.4,reviews:58,badge:"Snack",image:"https://images.unsplash.com/photo-1566478989037-eec170784d20?auto=format&fit=crop&q=80&w=600",description:"Thick, kettle-cooked potato crisps sprinkled with hand-harvested Mediterranean sea salt. Super crunchy, gluten-free, and fried in pure sunflower oil for clean taste.",nutrition:{calories:"520 kcal/100g",carbs:"58g",protein:"6g",fat:"30g"}},{id:12,title:"Organic Bunch Bananas",category:"fruits-veggies",price:60,oldPrice:80,weight:"1 Bunch",rating:4.8,reviews:203,badge:"Organic",image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600",description:"Sweet, nutrient-rich bananas imported from organic certified family orchards. Fully loaded with potassium, vitamin B6, and natural fiber.",nutrition:{calories:"105 kcal/banana",carbs:"27g",protein:"1.3g",fat:"0.3g"}}];let n=[],c=[],h="all",k="",E=null,p=null;try{const e=localStorage.getItem("fk-cart");n=e?JSON.parse(e):[],Array.isArray(n)||(n=[])}catch(e){console.warn("localStorage 'fk-cart' read error, defaulting to empty.",e),n=[]}try{const e=localStorage.getItem("fk-wishlist");c=e?JSON.parse(e):[],Array.isArray(c)||(c=[])}catch(e){console.warn("localStorage 'fk-wishlist' read error, defaulting to empty.",e),c=[]}try{E=localStorage.getItem("fk-promo")||null}catch(e){console.warn("localStorage 'fk-promo' read error, defaulting to null.",e),E=null}const se=[{id:"all",name:"All Products",icon:"all"},{id:"fruits-veggies",name:"Fruits & Veggies",icon:"fruits"},{id:"dairy-eggs",name:"Dairy & Eggs",icon:"dairy"},{id:"bakery",name:"Bakery",icon:"bakery"},{id:"beverages",name:"Beverages",icon:"beverages"},{id:"snacks",name:"Snacks & Honey",icon:"snacks"}],x=document.getElementById("products-grid-container"),ae=document.getElementById("category-filters-container"),F=document.getElementById("search-bar"),re=document.getElementById("search-btn"),oe=document.getElementById("logo-refresh"),P=document.querySelectorAll(".nav-link"),Y=document.getElementById("theme-toggle"),ne=document.getElementById("wishlist-toggle-btn"),J=document.getElementById("wishlist-drawer"),ce=document.getElementById("wishlist-drawer-close"),A=document.getElementById("wishlist-count-badge"),H=document.getElementById("wishlist-drawer-content"),le=document.getElementById("wishlist-drawer-count"),de=document.getElementById("cart-toggle-btn"),Q=document.getElementById("cart-drawer"),ue=document.getElementById("cart-drawer-close"),D=document.getElementById("cart-count-badge"),N=document.getElementById("cart-drawer-content"),me=document.getElementById("cart-drawer-count"),O=document.getElementById("cart-drawer-footer"),b=document.getElementById("drawer-backdrop"),v=document.getElementById("modal-backdrop"),$=document.getElementById("details-modal"),ge=document.getElementById("details-modal-close"),pe=document.getElementById("details-modal-content"),C=document.getElementById("checkout-modal"),he=document.getElementById("checkout-modal-close"),fe=document.getElementById("checkout-start-btn"),ve=document.getElementById("checkout-final-total"),ye=document.getElementById("checkout-progress-bar"),we=document.getElementById("checkout-close-btn"),be=document.getElementById("promo-code-input"),ke=document.getElementById("promo-code-apply"),Ee=document.getElementById("summary-subtotal"),M=document.getElementById("summary-discount-row"),Ie=document.getElementById("summary-discount"),Le=document.getElementById("summary-delivery"),Be=document.getElementById("summary-tax"),xe=document.getElementById("summary-total"),$e=document.getElementById("toast-container");document.addEventListener("DOMContentLoaded",()=>{Ce(),Te(),g(),y(),S(),He(),K()});function Ce(){let e="light";try{e=localStorage.getItem("fk-theme")||"light"}catch(t){console.warn("localStorage 'fk-theme' read error.",t)}document.documentElement.setAttribute("data-theme",e),U(e)}function U(e){Y.innerHTML=e==="dark"?'<svg class="theme-moon" style="width: 20px; height: 20px;"><use href="#icon-moon"></use></svg>':'<svg class="theme-sun" style="width: 20px; height: 20px;"><use href="#icon-sun"></use></svg>'}Y.addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("fk-theme",t)}catch(i){console.warn("localStorage 'fk-theme' write error.",i)}U(t),l(`Switched to ${t} mode`,"success")});function Te(){ae.innerHTML=se.map(e=>{const t=e.id===h?"active":"";let i="leaf";return(e.id==="fruits-veggies"||e.id==="dairy-eggs"||e.id==="bakery"||e.id==="beverages"||e.id==="snacks")&&(i="leaf"),`
      <button class="category-pill ${t}" data-id="${e.id}">
        <svg><use href="#icon-${i}"></use></svg>
        ${e.name}
      </button>
    `}).join(""),document.querySelectorAll(".category-pill").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget;h=i.getAttribute("data-id"),document.querySelectorAll(".category-pill").forEach(s=>s.classList.remove("active")),i.classList.add("active"),g()})})}function g(){const e=m.filter(t=>{const i=h==="all"||t.category===h,s=t.title.toLowerCase().includes(k.toLowerCase())||t.description.toLowerCase().includes(k.toLowerCase());return i&&s});if(e.length===0){x.innerHTML=`
      <div class="empty-state">
        <svg style="width: 60px; height: 60px; fill: none; stroke: currentColor; stroke-width: 2;"><use href="#icon-search"></use></svg>
        <h3>No groceries found</h3>
        <p>Try checking your spelling or filter another organic category.</p>
      </div>
    `;return}x.innerHTML=e.map(t=>{const i=t.oldPrice!==null,s=c.includes(t.id)?"active":"",a=t.badge?`<span class="card-badge ${t.badge.toLowerCase().includes("organic")?"organic":""}">${t.badge}</span>`:"",r=i?`<span class="price-old">₹${t.oldPrice.toFixed(2)}</span>`:"";return`
      <article class="product-card reveal" data-product-id="${t.id}">
        ${a}
        <button class="favorite-btn ${s}" data-id="${t.id}" aria-label="Add to Wishlist">
          <svg style="width: 18px; height: 18px;"><use href="#icon-heart"></use></svg>
        </button>
        
        <div class="product-img-wrap" onclick="openDetails(${t.id})">
          <img src="${t.image}" alt="${t.title}" class="product-image" loading="lazy">
        </div>
        
        <div class="product-meta">
          <span class="product-weight">${t.weight}</span>
          <div class="product-rating">
            <svg><use href="#icon-star"></use></svg>
            ${t.rating} <span>(${t.reviews})</span>
          </div>
        </div>
        
        <h3 class="product-title" onclick="openDetails(${t.id})">${t.title}</h3>
        <p class="product-desc">${t.description}</p>
        
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">₹${t.price.toFixed(2)}</span>
            ${r}
          </div>
          <button class="add-cart-btn" data-id="${t.id}">
            <svg><use href="#icon-plus"></use></svg>
            Add
          </button>
        </div>
      </article>
    `}).join(""),Se(),K()}function Se(){document.querySelectorAll(".add-cart-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const i=parseInt(e.getAttribute("data-id")),s=m.find(o=>o.id===i),r=e.closest(".product-card").querySelector(".product-image");T(s,1),qe(r)})}),document.querySelectorAll(".favorite-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const i=parseInt(e.getAttribute("data-id"));Fe(i,e)})})}function qe(e,t){if(!e)return;const i=e.getBoundingClientRect(),s=document.getElementById("cart-toggle-btn"),a=s.getBoundingClientRect(),r=document.createElement("div");r.className="fly-container",r.style.left=`${i.left}px`,r.style.top=`${i.top}px`;const o=document.createElement("img");o.src=e.src,o.className="fly-image",o.style.width=`${i.width}px`,o.style.height=`${i.height}px`,r.appendChild(o),document.body.appendChild(r);const V=i.left+i.width/2,Z=i.top+i.height/2,_=a.left+a.width/2,ee=a.top+a.height/2,te=_-V,ie=ee-Z;r.offsetWidth,r.style.transform=`translate3d(${te}px, 0, 0)`,o.style.transform=`translate3d(0, ${ie}px, 0) scale(0.12) rotate(120deg)`,r.addEventListener("transitionend",()=>{r.remove(),s.classList.add("pulse-cart"),s.style.transform="scale(1.2) translateY(-2px)",setTimeout(()=>{s.style.transform="",s.classList.remove("pulse-cart")},300)})}function T(e,t=1){const i=n.find(s=>s.product.id===e.id);i?i.quantity+=t:n.push({product:e,quantity:t}),L(),y(),w(),l(`Added ${e.title} to cart`,"success")}function Fe(e,t){const i=c.indexOf(e),s=m.find(a=>a.id===e);i>-1?(c.splice(i,1),t.classList.remove("active"),l(`Removed ${s.title} from favorites`,"warning")):(c.push(e),t.classList.add("active"),l(`Saved ${s.title} to favorites`,"success")),G(),S(),q()}function L(){try{localStorage.setItem("fk-cart",JSON.stringify(n))}catch(e){console.warn("localStorage 'fk-cart' write error.",e)}}function G(){try{localStorage.setItem("fk-wishlist",JSON.stringify(c))}catch(e){console.warn("localStorage 'fk-wishlist' write error.",e)}}function y(){const e=n.reduce((t,i)=>t+i.quantity,0);D.innerText=e,me.innerText=e,D.style.display=e>0?"flex":"none"}function S(){const e=c.length;A.innerText=e,le.innerText=e,A.style.display=e>0?"flex":"none"}function w(){if(n.length===0){N.innerHTML=`
      <div class="drawer-empty">
        <svg style="width: 50px; height: 50px; fill: none; stroke: currentColor; stroke-width: 2;"><use href="#icon-cart"></use></svg>
        <h4>Your cart is empty</h4>
        <p>Fill it with fresh, organic products from our catalog!</p>
        <button class="browse-btn" id="cart-empty-browse-btn">Browse Shop</button>
      </div>
    `,O.style.display="none";const e=document.getElementById("cart-empty-browse-btn");e&&e.addEventListener("click",()=>{d()});return}O.style.display="flex",N.innerHTML=n.map(e=>{const t=e.product.price*e.quantity;return`
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${e.product.image}" alt="${e.product.title}">
        </div>
        <div class="cart-item-detail">
          <h4 class="cart-item-title">${e.product.title}</h4>
          <span class="cart-item-weight">${e.product.weight}</span>
          <div class="cart-item-footer">
            <span class="cart-item-price">₹${t.toFixed(2)}</span>
            
            <div class="quantity-controls">
              <button class="qty-btn" onclick="adjustCartQty(${e.product.id}, -1)">-</button>
              <span class="qty-val">${e.quantity}</span>
              <button class="qty-btn" onclick="adjustCartQty(${e.product.id}, 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${e.product.id})" aria-label="Remove item">
          <svg style="width: 16px; height: 16px;"><use href="#icon-close"></use></svg>
        </button>
      </div>
    `}).join(""),X()}window.adjustCartQty=function(e,t){const i=n.find(s=>s.product.id===e);if(i){if(i.quantity+=t,i.quantity<=0){removeCartItem(e);return}L(),y(),w()}};window.removeCartItem=function(e){const t=n.find(i=>i.product.id===e);t&&(n=n.filter(i=>i.product.id!==e),L(),y(),w(),l(`Removed ${t.product.title} from cart`,"warning"))};function X(){const e=n.reduce((r,o)=>r+o.product.price*o.quantity,0);let t=0;E==="FRESH10"?(t=e*.1,M.style.display="flex",Ie.innerText=`-₹${t.toFixed(2)}`):M.style.display="none";const i=e>=399?0:49,s=e*.08,a=e-t+i+s;Ee.innerText=`₹${e.toFixed(2)}`,Le.innerText=i===0?"FREE":`₹${i.toFixed(2)}`,Be.innerText=`₹${s.toFixed(2)}`,xe.innerText=`₹${a.toFixed(2)}`,ve.innerText=a.toFixed(2)}function q(){if(c.length===0){H.innerHTML=`
      <div class="drawer-empty">
        <svg style="width: 50px; height: 50px; fill: none; stroke: var(--danger); stroke-width: 2;"><use href="#icon-heart"></use></svg>
        <h4>No favorites saved</h4>
        <p>Click the heart icon on any card to add it to your wishlist.</p>
        <button class="browse-btn" id="wishlist-empty-browse-btn">Browse Shop</button>
      </div>
    `;const t=document.getElementById("wishlist-empty-browse-btn");t&&t.addEventListener("click",()=>{d()});return}const e=m.filter(t=>c.includes(t.id));H.innerHTML=e.map(t=>`
      <div class="wishlist-item animate-in">
        <div class="cart-item-img">
          <img src="${t.image}" alt="${t.title}">
        </div>
        <div class="wishlist-item-detail">
          <h4 class="cart-item-title" style="margin-bottom: 0.15rem;">${t.title}</h4>
          <span class="cart-item-weight" style="margin-bottom: 0.25rem;">${t.weight}</span>
          <span class="cart-item-price" style="display: block;">₹${t.price.toFixed(2)}</span>
        </div>
        <button class="wishlist-to-cart" onclick="moveWishlistToCart(${t.id})" aria-label="Add to cart">
          <svg><use href="#icon-plus"></use></svg>
        </button>
        <button class="cart-item-remove" onclick="removeWishlistItem(${t.id})" aria-label="Remove item">
          <svg style="width: 16px; height: 16px;"><use href="#icon-close"></use></svg>
        </button>
      </div>
    `).join("")}window.moveWishlistToCart=function(e){const t=m.find(i=>i.id===e);t&&T(t,1)};window.removeWishlistItem=function(e){const t=m.find(s=>s.id===e);if(!t)return;c=c.filter(s=>s!==e),G(),S(),q();const i=document.querySelector(`.product-card[data-product-id="${e}"]`);if(i){const s=i.querySelector(".favorite-btn");s&&s.classList.remove("active")}l(`Removed ${t.title} from favorites`,"warning")};ke.addEventListener("click",()=>{if(be.value.trim().toUpperCase()==="FRESH10"){E="FRESH10";try{localStorage.setItem("fk-promo","FRESH10")}catch(t){console.warn("localStorage 'fk-promo' write error.",t)}l("Promo code applied successfully (10% Off)!","success"),X()}else l("Invalid promo code. Try FRESH10","danger")});window.openDetails=function(e){const t=m.find(o=>o.id===e);if(!t)return;c.includes(t.id);const i=t.oldPrice?`<span class="price-old" style="margin-left: 0.5rem; font-size: 1rem;">₹${t.oldPrice.toFixed(2)}</span>`:"";pe.innerHTML=`
    <div class="detail-img-wrap">
      <img src="${t.image}" alt="${t.title}" class="detail-img">
    </div>
    
    <div class="detail-info">
      <span class="detail-tag">${t.badge||"Fresh"}</span>
      <h2 class="detail-title">${t.title}</h2>
      
      <div class="detail-meta">
        <div class="product-rating" style="font-size: 0.95rem;">
          <svg style="width: 16px; height: 16px;"><use href="#icon-star"></use></svg>
          ${t.rating} <span>(${t.reviews} customer reviews)</span>
        </div>
        <span style="color: var(--text-tertiary);">|</span>
        <span style="font-weight: 700; color: var(--text-secondary);">${t.weight}</span>
      </div>
      
      <p class="detail-desc">${t.description}</p>
      
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem; font-weight: 700; letter-spacing: 0.05em;">Nutrition Information</h4>
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <div class="nutrition-val">${t.nutrition.calories}</div>
          <div class="nutrition-lbl">Calories</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${t.nutrition.carbs}</div>
          <div class="nutrition-lbl">Carbs</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${t.nutrition.protein}</div>
          <div class="nutrition-lbl">Protein</div>
        </div>
        <div class="nutrition-item">
          <div class="nutrition-val">${t.nutrition.fat}</div>
          <div class="nutrition-lbl">Fat</div>
        </div>
      </div>
      
      <div class="detail-footer">
        <div class="product-price" style="flex: 1;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.15rem;">Price</span>
          <div style="display: flex; align-items: baseline;">
            <span class="price-current" style="font-size: 1.8rem;">₹${t.price.toFixed(2)}</span>
            ${i}
          </div>
        </div>
        
        <div class="detail-qty-select">
          <button class="detail-qty-btn" id="modal-qty-minus">-</button>
          <span class="detail-qty-val" id="modal-qty-val">1</span>
          <button class="detail-qty-btn" id="modal-qty-plus">+</button>
        </div>
        
        <button class="detail-add-btn" id="modal-add-to-cart-btn" data-id="${t.id}">
          <svg style="width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2.5;"><use href="#icon-cart"></use></svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;let s=1;const a=document.getElementById("modal-qty-val"),r=document.getElementById("modal-add-to-cart-btn");document.getElementById("modal-qty-plus").addEventListener("click",()=>{s++,a.innerText=s}),document.getElementById("modal-qty-minus").addEventListener("click",()=>{s>1&&(s--,a.innerText=s)}),r.addEventListener("click",()=>{T(t,s),f()}),v.classList.add("active"),$.style.display="block",C.style.display="none"};let u=1;fe.addEventListener("click",()=>{n.length!==0&&(d(),Pe())});function Pe(){u=1,B(),v.classList.add("active"),C.style.display="block",$.style.display="none"}function B(){document.querySelectorAll(".checkout-step-panel").forEach(t=>t.classList.remove("active")),document.getElementById(`checkout-panel-${u}`).classList.add("active");for(let t=1;t<=3;t++){const i=document.getElementById(`step-node-${t}`);i.className="step-node",t<u?i.classList.add("completed"):t===u&&i.classList.add("active")}const e=(u-1)/2*100;ye.style.width=`${e}%`}document.getElementById("checkout-panel-1").addEventListener("submit",e=>{e.preventDefault(),u=2,B()});const R=document.querySelectorAll(".payment-card"),W=document.getElementById("credit-card-inputs");let j="credit";R.forEach(e=>{e.addEventListener("click",()=>{R.forEach(t=>t.classList.remove("active")),e.classList.add("active"),j=e.getAttribute("data-payment"),j==="credit"?(W.style.display="grid",z(!0)):(W.style.display="none",z(!1))})});function z(e){document.getElementById("card-num").required=e,document.getElementById("card-expiry").required=e,document.getElementById("card-cvc").required=e}document.getElementById("checkout-panel-2").addEventListener("submit",e=>{e.preventDefault(),u=3,B(),n=[],L(),y(),w(),Ae()});document.getElementById("payment-back-btn").addEventListener("click",()=>{u=1,B()});we.addEventListener("click",()=>{f(),I()});function Ae(){I();const e=document.getElementById("tracker-step-1"),t=document.getElementById("tracker-step-2"),i=document.getElementById("tracker-step-3"),s=document.getElementById("tracker-step-4");e.className="tracker-step completed",t.className="tracker-step active",i.className="tracker-step",s.className="tracker-step",p=setTimeout(()=>{t.className="tracker-step completed",i.className="tracker-step active",l("Your organic order is packed and dispatched!","success"),p=setTimeout(()=>{i.className="tracker-step completed",s.className="tracker-step active",l("Delivery driver is approaching your address","warning"),p=setTimeout(()=>{s.className="tracker-step completed",l("Your FreshKart package has arrived at your door!","success")},6e3)},6e3)},6e3)}function I(){p&&(clearTimeout(p),p=null)}function l(e,t="success"){const i=document.createElement("div");i.className=`toast ${t}`;let s="check";t==="danger"?s="close":t==="warning"&&(s="heart"),i.innerHTML=`
    <div class="toast-icon">
      <svg style="width: 18px; height: 18px; fill: currentColor;"><use href="#icon-${s}"></use></svg>
    </div>
    <span class="toast-msg">${e}</span>
  `,$e.appendChild(i),setTimeout(()=>{i.classList.add("show")},50),setTimeout(()=>{i.classList.remove("show"),i.addEventListener("transitionend",()=>{i.remove()})},3200)}function He(){de.addEventListener("click",()=>{d(),Q.classList.add("active"),b.classList.add("active"),w()}),ue.addEventListener("click",d),ne.addEventListener("click",()=>{d(),J.classList.add("active"),b.classList.add("active"),q()}),ce.addEventListener("click",d),b.addEventListener("click",d),F.addEventListener("input",e=>{k=e.target.value,g()}),re.addEventListener("click",()=>{g(),x.scrollIntoView({behavior:"smooth",block:"start"})}),ge.addEventListener("click",f),he.addEventListener("click",()=>{f(),I()}),v.addEventListener("click",e=>{e.target===v&&(f(),I())}),oe.addEventListener("click",e=>{e.preventDefault(),h="all",k="",F.value="",document.querySelectorAll(".category-pill").forEach(t=>{t.classList.remove("active"),t.getAttribute("data-id")==="all"&&t.classList.add("active")}),g(),window.scrollTo({top:0,behavior:"smooth"})}),P.forEach(e=>{e.addEventListener("click",t=>{e.getAttribute("data-nav")==="all"&&(t.preventDefault(),P.forEach(s=>s.classList.remove("active")),e.classList.add("active"),h="all",g(),window.scrollTo({top:600,behavior:"smooth"}))})})}function d(){Q.classList.remove("active"),J.classList.remove("active"),b.classList.remove("active")}function f(){v.classList.remove("active"),setTimeout(()=>{$.style.display="none",C.style.display="none"},400)}function K(){const e=document.querySelectorAll(".reveal");if("IntersectionObserver"in window){const t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),t.unobserve(s.target))})},{threshold:.05,rootMargin:"0px 0px -50px 0px"});e.forEach(i=>t.observe(i))}else e.forEach(t=>t.classList.add("revealed"))}
