import { useEffect, useState } from "react";
import { CryptoState } from "./Context/CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { chartDays } from "../config/Data";

// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Coininfo = ({ coin }) => {
  const [HistoricalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
      setHistoricalData(data.prices);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  useEffect(() => {
    if (coin?.id) fetchHistoricalData();
  }, [coin, currency, days]);

  if (!HistoricalData || HistoricalData.length === 0)
    return <div className="text-white">Loading Chart...</div>;

  return (
    <>
      <Line
        data={{
          labels: HistoricalData.map((value) => {
            let date = new Date(value[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${String(date.getMinutes()).padStart(2, "0")} PM`
                : `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: HistoricalData.map((value) => value[1]),
              label: `Price (Past ${days} Days) in ${currency}`,
              borderColor: "#EEBC1D",
              fill: false,
            },
          ],
        }}
        options={{
          elements: { point: { radius: 1 } },
          responsive: true,
        }}
      />
      <div className="flex justify-center text-center text-2xl m-auto py-3 px-2 gap-5 mt-7">
        {chartDays.map((days) => (
          <button className="border border-gray-500 py-2 px-5 rounded-xl hover:bg-[#EEBC1D] hover:text-black transition-all duration-500" onClick={() => setDays(days.value)}>{days.label}</button>
        ))}
      </div>
    </>
  );
};

export default Coininfo;
