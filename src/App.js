import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayoutBasic from "./components/organisms/layout/DashboardLayout";
import CovidStatisticsPage from "./components/pages/CovidStatisticsPage";
import CryptocurrencyPricesPage from "./components/pages/CryptocurrencyPricesPage";
import WeatherInformationPage from "./components/pages/WeatherInformationPage";
import WeatherDetailsPage from "./components/pages/WeatherDetailsPage";

function App() {
  return (
    <Router>
      <DashboardLayoutBasic>
        <Routes>
          <Route path="/covid" element={<CovidStatisticsPage />} />
          <Route path="/crypto" element={<CryptocurrencyPricesPage />} />
          <Route path="/weather" element={<WeatherInformationPage />} />
          <Route
            path="/weather-details/:cityName"
            element={<WeatherDetailsPage />}
          />
        </Routes>
      </DashboardLayoutBasic>
    </Router>
  );
}

export default App;
