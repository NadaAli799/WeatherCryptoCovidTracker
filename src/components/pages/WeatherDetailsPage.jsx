import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { WEATHER_KEY } from "../../utils/Constants";

const WeatherDetailsPage = () => {
  const { cityName } = useParams();
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${WEATHER_KEY}`;

      try {
        const response = await axios.get(url);
        const dailyForecast = getNextFiveDaysForecast(response.data.list);
        setForecast(dailyForecast);
      } catch (error) {
        console.error("Error fetching detailed weather data:", error);
      }
    };

    fetchWeatherDetails();
  }, [cityName]);

  // Function to filter and get the next five days' forecasts
  const getNextFiveDaysForecast = (list) => {
    const uniqueDates = new Set();
    const fiveDaysForecast = [];

    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Extract the date part (YYYY-MM-DD)
      const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

      // Check if the date is today or in the next 5 days and if it's not already included
      if (
        uniqueDates.size < 5 &&
        date >= currentDate &&
        !uniqueDates.has(date)
      ) {
        uniqueDates.add(date);
        fiveDaysForecast.push(item);
      }
    });

    return fiveDaysForecast;
  };

  return (
    <div className="weather-details">
      <h2 className="title">5-Day Weather Forecast for {cityName}</h2>
      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div key={index} className="weather-card">
            <h3 className="date">
              {new Date(day.dt_txt).toLocaleDateString()}
            </h3>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="weather-icon"
            />
            <h5>Temp: {day.main.temp.toFixed()}°F</h5>
            <h5>Weather: {day.weather[0].main}</h5>
            <h5>Feels Like: {day.main.feels_like.toFixed()}°F</h5>
            <h5>Humidity: {day.main.humidity}%</h5>
            <h5>Wind Speed: {day.wind.speed.toFixed()} MPH</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetailsPage;
