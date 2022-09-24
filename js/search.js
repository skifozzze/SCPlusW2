const citySearch = function (event) {
  event.preventDefault();
  let city = document.querySelector(".text");
  let cityNow = document.querySelector(".city");
  cityNow.innerHTML = `${city.value}`;
};

let citySearchForm = document.querySelector(".city-search_form");
citySearchForm.addEventListener("submit", citySearch);
