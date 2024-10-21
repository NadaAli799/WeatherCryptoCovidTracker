import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextProvider from "./context/Context";
import { WeatherProvider } from "./context/WeatherContext";
import { CovidProvider } from "./context/CovidContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <WeatherProvider>
        <CovidProvider>
          <App />
        </CovidProvider>
      </WeatherProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
