import React, { useContext, useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomTable from "../atoms/CustomTable";
import { CovidContext } from "../../context/CovidContext";

const CovidDataComponent = () => {
  const { totalCases, totalDeaths, totalRecovered, totalActive, countryData } =
    useContext(CovidContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter countries based on the search query
  const filteredCountries = countryData.filter((country) =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Display only the first 20 countries
  const displayedCountries = filteredCountries.slice(0, 10);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Prepare data for the table
  const tableData = displayedCountries.map((country) => ({
    flag: (
      <img
        src={country.countryInfo.flag}
        alt={`Flag of ${country.country}`}
        style={{ width: "30px", height: "20px" }} // Optional: Add styling for the flag size
      />
    ),
    country: country.country,
    cases: country.cases,
    deaths: country.deaths,
    recovered: country.recovered,
    active: country.active,
  }));

  return (
    <div className="mainPage">
      <h2 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.8)" }}>
        Covid-19 Data
      </h2>
      <div>
        <h3>Global Statistics</h3>
        <div>
          <h4>Total Recovered: {totalRecovered}</h4>
          <h4>Total Cases: {totalCases}</h4>
          <h4>Total Active: {totalActive}</h4>
          <h4>Total Deaths: {totalDeaths}</h4>
        </div>
      </div>
      {/* <h2>Statistics by Country</h2> */}

      <CustomInput
        placeholder="Search by country..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <CustomTable
        headers={["Flag", "Country", "Cases", "Deaths", "Recovered", "Active"]}
        data={tableData}
      />
    </div>
  );
};

export default CovidDataComponent;
