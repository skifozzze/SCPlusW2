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
}else if (city.toLowerCase() === 'lisbon') {
  alert(`It is currently ${Math.round(weather.lisbon.temp)}° С (${Math.round (weather.lisbon.temp * 9/5 + 32)}° F) in Lisbon with a humidity of ${weather.lisbon.humidity} %`)
} else if (city.toLowerCase() === 'san francisco') {
  alert(`It is currently ${Math.round(weather.sanFrancisco.temp)}° С (${Math.round (weather.sanFrancisco.temp * 9/5 + 32)}° F) in San Francisco with a humidity of ${weather.sanFrancisco.humidity} %`)
}else if (city.toLowerCase() === 'oslo') {
  alert(`It is currently ${Math.round(weather.oslo.temp)}° С (${Math.round (weather.oslo.temp * 9/5 + 32)}° F) in Oslo with a humidity of ${weather.oslo.humidity} %`)
} else {
  alert (`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${city}`)
}
  


