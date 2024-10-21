import React, { useContext } from "react";
import { Context } from "../../context/Context";

const CurrencySelector = () => {
  const { setCurrency } = useContext(Context);

  const currencyChange = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="search-currency-container">
      <label style={{ fontSize: "25px" }}>Choose the currency type</label>

      <select className="currencyTypeSelector" onChange={currencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
