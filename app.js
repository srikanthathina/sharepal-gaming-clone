const grid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");
const mobileFilterRow = document.querySelector("#mobile-filter-row");
const drawer = document.querySelector("#product-drawer");
const durationModal = document.querySelector("#duration-modal");
const cartDrawer = document.querySelector("#cart-drawer");
const cartList = document.querySelector("#cart-list");
const cartEmpty = document.querySelector("#cart-empty");
const rail = document.querySelector(".category-rail");
const catalogTitle = document.querySelector("#catalog-title");
const heroTitle = document.querySelector("#hero-title");
const heroEyebrow = document.querySelector("#hero-eyebrow");
const heroDescription = document.querySelector("#hero-description");
const heroImage = document.querySelector("#hero-image");
const brandRow = document.querySelector(".brand-row");
let activeSection = "gaming";
let activeFilter = "All";
let visibleCount = 8;
let selectedProduct = null;
const cart = [];

function money(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function durationTotal(price, days) {
  const discount = days >= 30 ? 0.18 : days >= 15 ? 0.12 : days >= 7 ? 0.08 : 0;
  return Math.round(price * days * (1 - discount));
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <button class="wishlist" type="button" aria-label="Add ${product.name} to wishlist">♡</button>
    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
    <button class="card-detail-trigger" type="button" aria-label="View details for ${product.name}">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-copy">
        <p>${product.name}</p>
        <span>Starts at</span>
        <strong>${money(product.price)}<small>/day</small></strong>
      </div>
    </button>
    <div class="product-meta">
      <span>${product.booked}</span>
      <span>★ ${product.rating}</span>
    </div>
    <button class="cart-button" type="button">${product.booked.includes("Unavailable") ? "Check Availability" : "Add to Cart"}</button>
  `;

  card.querySelector(".card-detail-trigger").addEventListener("click", () => openProductDrawer(product));
  card.querySelector(".cart-button").addEventListener("click", () => {
    if (product.booked.includes("Unavailable")) {
      openProductDrawer(product);
      return;
    }
    addToCart(product);
  });
  return card;
}

function currentSection() {
  return sections[activeSection];
}

function currentProducts() {
  return currentSection().products;
}

function filteredProducts() {
  if (activeFilter === "All") return currentProducts();
  return currentProducts().filter((product) => product.category === activeFilter);
}

function renderProducts() {
  const items = filteredProducts();
  grid.innerHTML = "";
  items.slice(0, visibleCount).forEach((product) => grid.appendChild(createProductCard(product)));
  resultCount.textContent = activeFilter === "All" ? currentSection().countLabel : `${items.length} items`;
  document.querySelector("#show-more").style.display = visibleCount < items.length ? "inline-flex" : "none";
}

function setActiveFilter(filter) {
  activeFilter = filter;
  visibleCount = filter === "All" ? 8 : 12;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  mobileFilterRow.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderProducts();
}

function renderFilters() {
  mobileFilterRow.innerHTML = "";
  rail.innerHTML = "";

  currentSection().categories.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.dataset.filter = category;
    chip.textContent = category === "PS5" ? "PS5 Console" : category;
    chip.className = category === "All" ? "active" : "";
    chip.addEventListener("click", () => setActiveFilter(category));
    mobileFilterRow.appendChild(chip);

    const railItem = document.createElement("button");
    railItem.className = `rail-item${category === activeFilter ? " active" : ""}`;
    railItem.type = "button";
    railItem.dataset.filter = category;
    railItem.innerHTML = `
      <span class="rail-icon">${category === "All" ? "☻" : category.slice(0, 2).toUpperCase()}</span>
      <span>${category === "PS5" ? "PS5 Console" : category}</span>
    `;
    railItem.addEventListener("click", () => setActiveFilter(category));
    rail.appendChild(railItem);
  });
}

function renderSection() {
  const section = currentSection();
  activeFilter = "All";
  visibleCount = activeSection === "gaming" ? 8 : 12;
  heroTitle.textContent = section.title;
  heroEyebrow.textContent = section.eyebrow;
  heroDescription.innerHTML = section.description.replace("SharePal", "<b>SharePal</b>");
  heroImage.src = section.heroImage;
  heroImage.alt = section.heroAlt;
  catalogTitle.textContent = section.catalogTitle;
  brandRow.innerHTML = section.categories.filter((item) => item !== "All").slice(0, 3).map((item) => `<span>${item}</span>`).join("");

  document.querySelectorAll("[data-section]").forEach((tab) => {
    const isActive = tab.dataset.section === activeSection;
    tab.classList.toggle("active", isActive);
    tab.classList.toggle("selected", isActive);
  });

  renderFilters();
  renderProducts();
}

function renderFaqs() {
  const faqList = document.querySelector("#faq-list");
  faqs.forEach(([question, answer], index) => {
    const item = document.createElement("article");
    item.className = "faq-item";
    item.innerHTML = `
      <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        <span>${question}</span>
        <strong>+</strong>
      </button>
      <p>${answer}</p>
    `;
    if (index === 0) item.classList.add("open");
    item.querySelector("button").addEventListener("click", () => {
      item.classList.toggle("open");
      item.querySelector("button").setAttribute("aria-expanded", item.classList.contains("open"));
    });
    faqList.appendChild(item);
  });
}

function renderReviews() {
  const track = document.querySelector("#review-track");
  reviews.forEach(([initials, name, location, quote]) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <p>"${quote}"</p>
      <div>
        <span>${initials}</span>
        <div><strong>${name}</strong><small>${location}</small></div>
      </div>
    `;
    track.appendChild(card);
  });
}

function openProductDrawer(product) {
  selectedProduct = product;
  document.querySelector("#drawer-image").src = product.image;
  document.querySelector("#drawer-image").alt = product.name;
  document.querySelector("#drawer-title").textContent = product.name;
  document.querySelector("#drawer-description").textContent = product.description;
  document.querySelector("#drawer-badge").textContent = product.badge || "SharePal Pick";
  document.querySelector(".drawer-price strong").innerHTML = `${money(product.price)}<small>/day</small>`;
  document.querySelector(".drawer-price span").textContent = "Starting rental price";
  document.querySelector(".duration-options").innerHTML = [3, 7, 15, 30]
    .map((days) => `<button type="button">${days} Days <small>${money(durationTotal(product.price, days))}</small></button>`)
    .join("");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeProductDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1, days: 3 });
  }
  renderCart();
  openCartDrawer();
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) cart.splice(index, 1);
  renderCart();
}

function changeCartQuantity(productId, direction) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += direction;
  if (item.quantity <= 0) removeFromCart(productId);
  renderCart();
}

function renderCart() {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + durationTotal(item.price, item.days) * item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((count) => {
    count.textContent = itemCount;
    count.classList.toggle("show", itemCount > 0);
  });
  document.querySelector("#cart-items-count").textContent = itemCount;
  document.querySelector("#cart-total").textContent = money(total);
  cartEmpty.style.display = cart.length ? "none" : "grid";
  cartList.innerHTML = cart
    .map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h3>${item.name}</h3>
          <p>${money(item.price)}/day • ${item.days} days</p>
          <strong>${money(durationTotal(item.price, item.days) * item.quantity)}</strong>
          <div class="quantity-control">
            <button type="button" data-cart-minus="${item.id}">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-plus="${item.id}">+</button>
            <button type="button" data-cart-remove="${item.id}">Remove</button>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function openCartDrawer() {
  closeProductDrawer();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openDurationModal() {
  durationModal.classList.add("open");
  durationModal.setAttribute("aria-hidden", "false");
}

function closeDurationModal() {
  durationModal.classList.remove("open");
  durationModal.setAttribute("aria-hidden", "true");
}

function renderCalendar() {
  const days = document.querySelector("#calendar-days");
  const disabledDays = ["27", "28", "29", "30", "1", "2", "3", "4", "5", "6"];
  const values = ["27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  values.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = value;
    if (disabledDays.includes(value)) button.disabled = true;
    days.appendChild(button);
  });
}

document.querySelector("#show-more").addEventListener("click", () => {
  visibleCount += 4;
  renderProducts();
});

document.querySelectorAll("[data-section]").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    activeSection = tab.dataset.section;
    renderSection();
  });
});

document.querySelectorAll("[data-open-duration]").forEach((button) => button.addEventListener("click", openDurationModal));
document.querySelector("[data-close-duration]").addEventListener("click", closeDurationModal);
document.querySelector("[data-close-product]").addEventListener("click", closeProductDrawer);
document.querySelector("[data-close-cart]").addEventListener("click", closeCartDrawer);
document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openCartDrawer();
  });
});
document.querySelector("#drawer-add-cart").addEventListener("click", () => {
  if (selectedProduct && !selectedProduct.booked.includes("Unavailable")) addToCart(selectedProduct);
});
durationModal.addEventListener("click", (event) => {
  if (event.target === durationModal) closeDurationModal();
});
drawer.addEventListener("click", (event) => {
  if (event.target === drawer) closeProductDrawer();
});
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCartDrawer();
  const minusId = event.target.dataset.cartMinus;
  const plusId = event.target.dataset.cartPlus;
  const removeId = event.target.dataset.cartRemove;
  if (minusId) changeCartQuantity(Number(minusId), -1);
  if (plusId) changeCartQuantity(Number(plusId), 1);
  if (removeId) removeFromCart(Number(removeId));
});
document.querySelector(".go-up").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

renderSection();
renderCart();
renderFaqs();
renderReviews();
renderCalendar();
