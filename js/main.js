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

    let descrEl = document.querySelector(".indicators_data-descr");
    descrEl.innerHTML = `${response.data.weather[0].description}`;

    let iconEl = document.querySelector(".icon");
    iconEl.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    const degreesFar = function (event) {
      event.preventDefault();
      tempEl.innerHTML = `${Math.round((tempNowEl * 9) / 5 + 32)}`;
    };

    let farTemp = document.querySelector(".far");
    farTemp.addEventListener("click", degreesFar);

    const degreesCel = function (event) {
      event.preventDefault();
      tempEl.innerHTML = `${tempNowEl}`;
    };

    let celTemp = document.querySelector(".cel");
    celTemp.addEventListener("click", degreesCel);

    getForecast(response.data.coord);
  };

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
};

let citySearchForm = document.querySelector(".city-search_form ");
citySearchForm.addEventListener("submit", citySearch);

let now = new Date();

let nowDay = document.querySelector(".now_day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
nowDay.innerHTML = days[now.getDay()];

let nowTime = document.querySelector(".now_time");

let hours = now.getHours();
if (hours <= 9) {
  hours = `0${hours} `;
}
let minute = now.getMinutes();
if (minute <= 9) {
  minute = `0${minute} `;
}
nowTime.innerHTML = `${hours}:${minute} `;

let nowDate = document.querySelector(".now_date");
let dayToday = now.getDate();
let monthToday = now.getMonth() + 1;
let yearToday = now.getFullYear();
nowDate.innerHTML = `${dayToday}/${monthToday}/${yearToday}`;

const getForecast = function (coordinates) {
  let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
};

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

const displayForecast = function (response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        
        <img
          class = 'icon'
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-day"> ${Math.round(
            forecastDay.temp.day
          )}  </span>
          <span > / </span>
          <span class="weather-forecast-temperature-night"> ${Math.round(
            forecastDay.temp.night
          )} </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
};
displayForecast();
