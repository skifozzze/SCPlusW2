const citySearch = function (event) {
  event.preventDefault();
  let city = document.querySelector(".text");
  let cityNow = document.querySelector(".city");
  cityNow.innerHTML = `${city.value}`;

  let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=ac209dae1f283fb332a5bb7f50b0f468`;

  const showTemperature = function (response) {
    let tempNow = Math.round(response.data.main.temp);
    
    let temp = document.querySelector(".temperature");
    temp.innerHTML = `${tempNow}`;
  };

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
};

let citySearchForm = document.querySelector(".city-search_form ");
citySearchForm.addEventListener("submit", citySearch);








