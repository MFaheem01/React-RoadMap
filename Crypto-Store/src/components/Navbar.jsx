import { Link } from 'react-router-dom'

import { CryptoState } from './Context/CryptoContext'

const Navbar = () => {

    const { currency, setCurrency, symbol } = CryptoState();

    return (
        <>
            <nav className="bg-gray-900 text-white shadow-sm p-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Left side */}
                        <div className="flex text-2xl items-center font-bold uppercase">
                            <Link to="/"> Crypto Store</Link>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center space-x-4">
                            <span className='font-bold' >{currency}({symbol})</span>
                            <Link className='font-semibold' to="/coins">Coins</Link>
                            <div className="relative inline-block group">
                                {/* Button */}
                                <button className="px-3 py-1 rounded border">
                                    More ▾
                                </button>

                                <div
                                    className="absolute mt-3 right-1 w-40 border rounded shadow opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top">
                                    <ul className="py-2">
                                        <li className="px-4 py-2 cursor-pointer" onClick={() => { setCurrency("INR") }}>INR
                                        </li>
                                        <li className="px-4 py-2 cursor-pointer" onClick={() => { setCurrency("USD") }} >USD</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar