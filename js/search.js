const citySearch = function (event) {
  event.preventDefault();
  let city = document.querySelector(".text");
  let cityNow = document.querySelector(".city");
  cityNow.innerHTML = `${city.value}`;

  let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;

  const showTemperature = function (response) {
    let tempNowEl = Math.round(response.data.main.temp);
    let tempEl = document.querySelector(".temperature");
    tempEl.innerHTML = `${tempNowEl}`;

    let windEl = document.querySelector(".indicators_data-wind");
    windEl.innerHTML = `${response.data.wind.speed}`;

    let humidityEl = document.querySelector(".indicators_data-humidity");
    humidityEl.innerHTML = `${response.data.main.humidity}`;

    // let precipitationEl = document.querySelector(
    //   ".indicators_data-precipitation"
    // );
    // precipitationEl.innerHTML = `${response.data.wind.speed}`;

    let descrEl = document.querySelector(".indicators_data-descr");
    descrEl.innerHTML = `${response.data.weather[0].description}`;

    let iconEl = document.querySelector(".icon");
    iconEl.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    const degreesFar = function (event) {
      event.preventDefault();
      temp.innerHTML = `${Math.round((tempNowEl * 9) / 5 + 32)}`;
    };

    let farTemp = document.querySelector(".far");
    farTemp.addEventListener("click", degreesFar);

    const degreesCel = function (event) {
      event.preventDefault();
      temp.innerHTML = `${tempNowEl}`;
    };

    let celTemp = document.querySelector(".cel");
    celTemp.addEventListener("click", degreesCel);
  };

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
};

let citySearchForm = document.querySelector(".city-search_form ");
citySearchForm.addEventListener("submit", citySearch);
