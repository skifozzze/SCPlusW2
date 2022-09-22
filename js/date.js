let now = new Date();

let nowDay = document.querySelector('.now_day')
let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
nowDay.innerHTML = days[now.getDay()]

let nowTime = document.querySelector('.now_time');
let hours = now.getHours();
let minute = now.getMinutes();
nowTime.innerHTML = `${hours}:${minute} `