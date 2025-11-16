import { useState } from "react";

import { Link } from "react-router-dom";

import Footer from "./components/Footer";

import { ToastContainer, toast } from 'react-toastify'

const Home = ({ Items, setItems }) => {

    // Total Cart Count

    const total = Items.reduce((acc, x) => acc + x.Counts, 0);

    // Add to Cart Function — Max 5 Per Product

    const addToCart = (id) => {
        setItems(
            Items.map((p) => {
                if (p.id === id) {

                    if (p.Counts < 5) {
                        return { ...p, Counts: p.Counts + 1 };
                    } else {

                        toast.error('Only Five Products Can Be Select', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            className: 'toast-bold',
                            theme: "light",
                        });

                    }
                }

                return p;
            })
        );
    };

    return (
        <div className="flex">

            {/* Sidebar */}

            <div className="md:w-64 navbar sm:w-full overflow-y-auto h-screen fixed">
                <header className="flex flex-col items-center gap-5 py-16">
                    <div className="flex items-center border-b px-6 py-4">
                        <img
                            src="https://preview.colorlib.com/theme/amado/img/core-img/logo.png"
                            className="w-3/4 ml-4"
                        />
                    </div>

                    <ul className="flex flex-col text-xl gap-7">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Account</a></li>
                        <li>
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>

                            <Link to='/card'>Card:{total}</Link>

                        </li>
                        <li><a href="#">Checkout</a></li>
                    </ul>

                    <div className="flex gap-8">
                        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </header>
            </div>

            {/* Main Section */}

            <div style={{ marginLeft: "290px" }} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {Items.map((p) => (
                        <>
                            <div
                                key={p.id}
                                className="relative group rounded-lg overflow-hidden shadow-lg"
                            >
                                <img src={p.img} className="w-full h-64 object-cover" />

                                <div
                                    className="absolute inset-0 backdrop-blur-sm bg-white/30 
                opacity-0 group-hover:opacity-100 transition duration-500
                flex flex-col justify-between p-4"
                                >
                                    <div>
                                        <hr className="w-20 border-2 border-amber-500" />
                                        <h2 className="text-black text-lg font-bold">{p.title}</h2>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <p className="text-black text-2xl">{p.price}</p>

                                        <button
                                            onClick={() => addToCart(p.id)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded"
                                        >
                                            Add To Card
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </>

                    ))}

                    <ToastContainer>

                    </ToastContainer>

                </div>

                <Footer />

            </div>
        </div>
    );
};

export default Home;
