document.addEventListener("DOMContentLoaded", function () {
  const searchContainer = document.getElementById("search-container");

  // Create Bootstrap search wrapper
  const form = document.createElement("form");
  form.className = "d-flex position-relative";
  form.setAttribute("role", "search");

  // Input
  const input = document.createElement("input");
  input.className = "form-control form-control-sm me-2";
  input.type = "search";
  input.placeholder = "Search site...";
  input.setAttribute("aria-label", "Search");

  // Results dropdown
  const results = document.createElement("div");
  results.className = "list-group position-absolute w-100 mt-1";
  results.style.zIndex = "1050";
  results.style.display = "none";

  form.appendChild(input);
  form.appendChild(results);
  searchContainer.appendChild(form);

  // --- GLOBAL SITE INDEX ---
  const siteIndex = [
    { title: "Home", keywords: "home culture arts", url: "index.html" },
    { title: "About", keywords: "about university culture", url: "aboutus.html" },
    { title: "Arts", keywords: "arts art painting", url: "art.html" },
    { title: "Attire", keywords: "attire clothing traditional wear", url: "attire.html" },
    { title: "Cultural Day", keywords: "cultural day events", url: "cultural-day.html" },
    { title: "Tickets", keywords: "tickets booking events", url: "tickets.html" }
  ];

  // --- SEARCH LOGIC ---
  input.addEventListener("input", function () {
    const query = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if (!query) {
      results.style.display = "none";
      return;
    }

    const matches = siteIndex.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.keywords.includes(query)
    );

    if (matches.length === 0) {
      results.innerHTML =
        `<div class="list-group-item small text-muted">No results</div>`;
    } else {
      matches.forEach(page => {
        const item = document.createElement("a");
        item.className = "list-group-item list-group-item-action";
        item.textContent = page.title;
        item.href = page.url;
        results.appendChild(item);
      });
    }

    results.style.display = "block";
  });

  // Hide results when clicking outside
  document.addEventListener("click", e => {
    if (!form.contains(e.target)) {
      results.style.display = "none";
    }
  });
});
