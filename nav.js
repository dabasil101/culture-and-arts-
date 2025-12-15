document.addEventListener("DOMContentLoaded", function () {

  var nav = document.querySelector("#search-container");
  var searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search activities...";
  searchInput.classList.add("form-control", "ms-3");

  nav.appendChild(searchInput);

  var cards = document.querySelectorAll(".about-card");

  searchInput.addEventListener("keyup", function () {
    var query = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
      var text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  var radios = document.querySelectorAll("input[name='aboutslider']");
  var index = 0;
  var total = radios.length;

  setInterval(function () {
    radios[index].checked = false;
    index = (index + 1) % total;
    radios[index].checked = true;
  }, 4000);

  var ticketButton = document.querySelector(".ticket-btn");

  ticketButton.addEventListener("click", function () {
    alert("Redirecting to ticket purchase page");
  });

});
