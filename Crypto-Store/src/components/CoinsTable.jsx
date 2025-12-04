import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../config/api";
import { Link, useNavigate } from "react-router-dom";
import { CryptoState } from "./Context/CryptoContext";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const { currency, symbol } = CryptoState();
    const navigation = useNavigate()

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCoins();
    }, [currency]);

    const handleSearch = () =>
        coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(search.toLowerCase())
        );

    const pageCoins = handleSearch().slice((page - 1) * 10, page * 10);

    return (
        <div className="mx-auto rounded px-4 text-center text-white mb-1">
            <h1 className="text-3xl font-bold my-5 text-black opacity-70">
                Cryptocurrency Prices by Market Cap
            </h1>

            <input
                type="text"
                placeholder="Search For a Crypto Currency.."
                className="w-full border-3 rounded px-3 py-2 mb-3 text-black"
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (
                <div className="h-2 bg-yellow-500 animate-pulse"></div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse text-left">
                        <thead className="bg-yellow-500 text-black">
                            <tr className="py-5">
                                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                    <th key={head} className="px-6 py-2">
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {pageCoins.map((row) => {
                                const profit = row.price_change_percentage_24h > 0;
                                return (

                                    <tr
                                        key={row.name}
                                        onClick={() => navigation(`/coins/${row.id}`)}
                                        className="bg-gray-900 hover:bg-gray-800 cursor-pointer"
                                    >
                                        <td className="px-4 py-2 flex items-center gap-4">
                                            <img
                                                src={row.image}
                                                alt={row.name}
                                                className="h-12 mb-2"
                                            />
                                            <div className="flex flex-col">
                                                <span className="uppercase text-lg">{row.symbol}</span>
                                                <span className="text-gray-400">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                                        </td>
                                        <td
                                            className={`px-4 py-2 text-right font-medium ${profit ? "text-green-500" : "text-red-500"
                                                }`}
                                        >
                                            {profit && "+"}
                                            {row.price_change_percentage_24h.toFixed(2)}%
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            {symbol}{" "}
                                            {numberWithCommas(
                                                row.market_cap.toString().slice(0, -6)
                                            )}
                                            M
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center my-5 gap-2">
                {Array.from(
                    { length: Math.ceil(handleSearch().length / 10) },
                    (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-1 rounded ${page === i + 1 ? "bg-yellow-500 text-black" : "bg-gray-700"
                                }`}
                            onClick={() => {
                                setPage(i + 1);
                                window.scrollTo(0, 0);
                            }}
                        >
                            {i + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
