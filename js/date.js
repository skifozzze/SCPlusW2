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
let minute = now.getMinutes();
nowTime.innerHTML = `${hours}:${minute} `;

let nowDate = document.querySelector(".now_date");
let dayToday = now.getDate();
let monthToday = now.getMonth() + 1;
let yearToday = now.getFullYear();
nowDate.innerHTML = `${dayToday}/${monthToday}/${yearToday}`;

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];

  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          class = 'icon'
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span > / </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}
displayForecast();
