import React from "react";
import { Link } from "react-router-dom";

const WeatherCard = ({ data, onRemove }) => {
  const { name, main, weather, wind } = data;
  const { temp, feels_like, humidity } = main;
  const weatherMain = weather[0].main;
  const weatherIcon = weather[0].icon; // Get the icon code

  return (
    <div className="weather-card">
      <div className="card">
        <h2>{name}</h2>
        <div className="header">
          <h3>{weatherMain}</h3>
          <div className="weatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
              alt={weather[0].description}
              className="weather-icon"
            />
            <h3>{temp.toFixed()}°F</h3>
          </div>
        </div>
        <button onClick={onRemove}>Remove</button>
        <Link to={`/weather-details/${name}`}>
          <button>View Details</button>
        </Link>
      </div>

      <div className="bottom">
        <div>
          <p>{feels_like.toFixed()}°F</p>
          <p>Feels Like</p>
        </div>
        <div>
          <p>{humidity}%</p>
          <p>Humidity</p>
        </div>
        <div>
          <p>{wind.speed.toFixed()} MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
