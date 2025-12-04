import { TrendingCoins } from '../config/Api'
import { CryptoState } from "./Context/CryptoContext"
import { useEffect, useState } from "react"
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import { Link } from 'react-router-dom'

import axios from 'axios'



export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Carousel() {

    const [trending, setTrending] = useState([])

    const { currency, symbol } = CryptoState()

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
    }



    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={7}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {trending.map(function (item) {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='flex text-base'>
                                <Link className="flex flex-col text-white text-center" to={`/coins/${item.id}`}>
                                    <img src={item.image} width={100} style={{ marginBottom: 10 }} alt="" />

                                    <span>
                                        {`${item.price_change_percentage_24h?.toFixed(2)}%`}
                                    </span>
                                    {/* Or */}

                                    {/* But In Below State He Show Only + Positive Value */}

                                    {/* {(item.price_change_percentage_24h > 0 ? "+" : "")} {item?.price_change_percentage_24h?.toFixed(2)}% */}

                                    <span>
                                        { /* Importent: NOTE:- If We Cann't Use "?" Then Error: Cannot read property 'current_price' of undefined But In 'Some Case Code Run Correctly' */}
                                        {symbol}{numberWithCommas(item.current_price.toFixed(2))}
                                    </span>

                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Carousel