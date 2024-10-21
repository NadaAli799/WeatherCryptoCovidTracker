import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [allCoins, setCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-XV3TVLpe2M2vEd8bG4qNzh4n",
          },
        }
      );
      const data = await response.json();
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <Context.Provider value={{ allCoins, currency, setCurrency }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
