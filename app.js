// app.js - مدیریت تب‌ها، سرچ و نمایش پاپ‌آپ فقط قیمت
let currentCat = "all";

function formatMoney(num) {
  return new Intl.NumberFormat("fa-IR").format(num) + " تومان";
}

function makeTabs() {
  const tabsWrap = document.getElementById("categoryTabs");
  tabsWrap.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const b = document.createElement("button");
    b.className = `tab ${cat.id === currentCat ? "active" : ""}`;
    b.innerText = cat.title;
    b.onclick = () => {
      currentCat = cat.id;
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      b.classList.add("active");
      renderList(document.getElementById("searchInput").value.trim());
    };
    tabsWrap.appendChild(b);
  });
}

function renderList(q = "") {
  const listWrap = document.getElementById("menuList");
  const empty = document.getElementById("noResults");
  listWrap.innerHTML = "";

  const filtered = MENU_ITEMS.filter(it => {
    const matchCat = (currentCat === "all" || it.category === currentCat);
    const matchText = it.name.includes(q) || (it.desc && it.desc.includes(q));
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    empty.classList.remove("hidden");
  } else {
    empty.classList.add("hidden");
  }

  filtered.forEach(it => {
    const card = document.createElement("div");
    card.className = "item-card";

    const minPrice = it.variants[0].price;

    card.innerHTML = `
      <div class="item-info">
        <h4 class="item-title">${it.name}</h4>
        <p class="item-desc">${it.desc}</p>
      </div>
      <div class="item-badge">
        <span class="price-hint">${formatMoney(minPrice)}</span>
        <span class="click-hint">مشاهده قیمت‌ها ❯</span>
      </div>
    `;

    card.onclick = () => showPrices(it);
    listWrap.appendChild(card);
  });
}

function showPrices(it) {
  document.getElementById("modalTitle").innerText = it.name;
  document.getElementById("modalDesc").innerText = it.desc;

  const pricesBox = document.getElementById("modalPrices");
  pricesBox.innerHTML = "";

  it.variants.forEach(v => {
    const row = document.createElement("div");
    row.className = "price-row";
    row.innerHTML = `
      <span class="label">${v.label}</span>
      <span class="cost">${formatMoney(v.price)}</span>
    `;
    pricesBox.appendChild(row);
  });

  document.getElementById("modalOverlay").classList.add("active");
}

function closePopup() {
  document.getElementById("modalOverlay").classList.remove("active");
}

document.getElementById("modalClose").onclick = closePopup;
document.getElementById("modalCloseBtn").onclick = closePopup;
document.getElementById("modalOverlay").onclick = (e) => {
  if (e.target.id === "modalOverlay") closePopup();
};

document.getElementById("searchInput").oninput = (e) => {
  renderList(e.target.value.trim());
};

document.addEventListener("DOMContentLoaded", () => {
  makeTabs();
  renderList();
});
