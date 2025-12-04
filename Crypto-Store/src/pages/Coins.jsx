import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../components/Context/CryptoContext";
import Coininfo from "../components/Coininfo";

const Coins = () => {
  const { id } = useParams();
  const { currency, symbol } = CryptoState();

  const [coin, setCoin] = useState(null);

  const fetchCoin = async () => {
    // {} ye hum nay ici laye use kya hy q kay API ko file say import kr rahay hy 
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, [currency]);

  return (
    <div className="min-h-screen bg-black text-gray-400 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="p-4 border-r border-gray-700 w-full lg:max-w-1/4 mb-5 lg:mb-0">
        <img
          className="mb-5 w-32 h-32 mx-auto object-contain"
          src={coin?.image?.large}
          alt={coin?.name}
        />
        <div className="text-center">
          <h3 className="text-xl lg:text-4xl font-bold md:text-xl">{coin?.name}</h3>
        </div>
        <div className="px-2 font-normal justify-center text-center py-2">
          <p>
            {(coin?.description?.en || "No description available").slice(0, 200) + "..."}
          </p>
        </div>
        <div className="text-2xl font-bold flex flex-col gap-2 px-3">
          <h1>Ranke: {coin?.market_cap_rank}</h1>
          <h1>Current Price: {symbol}{coin?.market_data.current_price[currency.toLowerCase()]}</h1>
          <h1>Market Cap: <span className="text-xl">{symbol}{coin?.market_data.market_cap[currency.toLowerCase().toString().slice(0. - 6)]}</span></h1>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <Coininfo coin={coin} />
      </main>
    </div>
  );
};

export default Coins;
