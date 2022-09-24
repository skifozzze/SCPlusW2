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
