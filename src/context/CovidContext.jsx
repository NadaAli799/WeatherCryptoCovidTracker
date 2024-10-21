import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CovidContext = createContext();

export const CovidProvider = ({ children }) => {
  const [covidData, setCovidData] = useState({
    totalCases: null,
    totalDeaths: null,
    totalRecovered: null,
    totalActive: null,
    countryData: [],
  });

  const loadCovidData = async () => {
    try {
      const globalResponse = await axios.get(
        "https://disease.sh/v3/covid-19/all"
      );
      const countriesResponse = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );

      setCovidData({
        totalCases: globalResponse.data.cases,
        totalDeaths: globalResponse.data.deaths,
        totalRecovered: globalResponse.data.recovered,
        totalActive: globalResponse.data.active,
        countryData: countriesResponse.data,
      });
    } catch (err) {
      console.error("Error fetching COVID data:", err);
    }
  };

  useEffect(() => {
    loadCovidData();
  }, []);

  return (
    <CovidContext.Provider value={{ ...covidData }}>
      {children}
    </CovidContext.Provider>
  );
};
