import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import CustomInput from "../atoms/CustomInput";
import CurrencySelector from "../atoms/CurrencySelector";
import CustomTable from "../atoms/CustomTable";

const CryptocurrencyPricesPage = () => {
  const { allCoins, currency } = useContext(Context);
  const [displayedCoins, setDisplayedCoins] = useState(allCoins);
  const [searchTerm, setSearchTerm] = useState("");

  // Handles the search input changes and filters the coins
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setDisplayedCoins(filteredCoins);
  };

  // Resets the displayed coins when allCoins changes
  useEffect(() => {
    setDisplayedCoins(allCoins);
  }, [allCoins]);

  // Prepares data for the table display
  const tableData = displayedCoins.slice(0, 10).map((coin) => ({
    rank: coin.market_cap_rank,
    name: (
      <div className="logoCurrencySec">
        <img src={coin.image} alt={`Logo of ${coin.name}`} />
        {`${coin.name} - ${coin.symbol}`}
      </div>
    ),
    price: `${currency.symbol} ${coin.current_price}`,
  }));

  return (
    <div className="mainPage">
      <h1>Cryptocurrency Prices</h1>
      <CustomInput
        placeholder="Search for cryptocurrency"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <CurrencySelector />
      <CustomTable headers={["Rank", "Coins", "Price"]} data={tableData} />
    </div>
  );
};

export default CryptocurrencyPricesPage;
