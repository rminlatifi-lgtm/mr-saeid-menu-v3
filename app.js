// app.js - نمایش مستقیم و تفکیک‌شده وزن‌ها و قیمت‌ها زیر هر غذا
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

    // ساخت سطرهای تفکیک‌شده قیمت (پرسی، کیلویی و...)
    const variantsHtml = it.variants.map(v => `
      <div class="variant-row">
        <span class="variant-name">${v.label}</span>
        <span class="variant-price">${formatMoney(v.price)}</span>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="item-head">
        <h4 class="item-title">${it.name}</h4>
        <p class="item-desc">${it.desc}</p>
      </div>
      <div class="item-variants-box">
        ${variantsHtml}
      </div>
    `;

    listWrap.appendChild(card);
  });
}

document.getElementById("searchInput").oninput = (e) => {
  renderList(e.target.value.trim());
};

document.addEventListener("DOMContentLoaded", () => {
  makeTabs();
  renderList();
});
