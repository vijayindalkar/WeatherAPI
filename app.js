const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
    //   `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API_KEY}`
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

const location = 'Mumbai ';
getWeatherData(location)
  .then((weatherData) => {
    console.log(`Weather in ${location}:`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
