import React, { useState, useContext } from "react";
import WeatherCard from "../atoms/WeatherCard";
import { WeatherContext } from "../../context/WeatherContext";

const WeatherInformationPage = () => {
  const [city, setCity] = useState("");
  const { weatherData, fetchWeatherData, removeCity } =
    useContext(WeatherContext);

  const handleSearch = (event) => {
    if (event.key === "Enter" && city.trim()) {
      fetchWeatherData(city);
      setCity(""); // Clear input after search
    }
  };

  return (
    <div className="app">
      <h1>Weather Information</h1>
      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleSearch}
          placeholder="Enter city name"
          type="text"
        />
      </div>
      <div className="container">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            data={data}
            onRemove={() => removeCity(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherInformationPage;
