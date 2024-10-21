import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { WEATHER_KEY } from "../utils/Constants";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const predefinedCountries = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Berlin",
  ];

  const fetchWeatherData = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_KEY}`;
    try {
      const response = await axios.get(url);
      if (
        !weatherData.some(
          (data) => data.name.toLowerCase() === response.data.name.toLowerCase()
        )
      ) {
        setWeatherData((prevData) => [response.data, ...prevData]);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    predefinedCountries.forEach((country) => fetchWeatherData(country));
  }, []);

  const removeCity = (index) => {
    setWeatherData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, fetchWeatherData, removeCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
