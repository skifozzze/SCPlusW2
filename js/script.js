


let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  sanFrancisco: {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt('Enter a city');

if (city.toLowerCase() === 'paris') {
  alert(`It is currently ${Math.round(weather.paris.temp)}° С (${Math.round (weather.paris.temp * 9/5 + 32)}° F) in Paris with a humidity of ${weather.paris.humidity} %`)
} else if (city.toLowerCase() === 'tokyo') {
  alert(`It is currently ${Math.round(weather.tokyo.temp)}° С (${Math.round (weather.tokyo.temp * 9/5 + 32)}° F) in Tokyo with a humidity of ${weather.tokyo.humidity} %`)
} else if (city.toLowerCase() === 'lisbon') {
  alert(`It is currently ${Math.round(weather.lisbon.temp)}° С (${Math.round (weather.lisbon.temp * 9/5 + 32)}° F) in Lisbon with a humidity of ${weather.lisbon.humidity} %`)
} else if (city.toLowerCase() === 'san francisco') {
  alert(`It is currently ${Math.round(weather.sanFrancisco.temp)}° С (${Math.round (weather.sanFrancisco.temp * 9/5 + 32)}° F) in San Francisco with a humidity of ${weather.sanFrancisco.humidity} %`)
} else if (city.toLowerCase() === 'oslo') {
  alert(`It is currently ${Math.round(weather.oslo.temp)}° С (${Math.round (weather.oslo.temp * 9/5 + 32)}° F) in Oslo with a humidity of ${weather.oslo.humidity} %`)
} else {
  alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${city}`)
}





 



// -------------------------

// let now = new Date();

// let num = now.getDate()
// console.log(num);

// console.log(now.getMilliseconds());

// let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// let day = days[now.getDay()]
// console.log(day);

// let year = now.getFullYear()
// console.log(year);

// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let month = months[now.getMonth()]
// console.log(month);

// console.log(`Today is ${day}, ${month} ${num}, ${year}`)

// const formatDate = function(){
//   return `Today is ${day}, ${month} ${num}, ${year}`
// }

// console.log (formatDate())

// його рішення ----


// function formatDate(date) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];

//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];

//   let currentYear = date.getFullYear();
//   let currentDay = days[date.getDay()];
//   let currentMonth = months[date.getMonth()];
//   let currentDate = date.getDate();

//   let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

//   return formattedDate;
// }

// console.log(formatDate(currentTime));
  
  
  
 
