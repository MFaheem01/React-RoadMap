import { TrendingCoins } from '../config/Api'
import { CryptoState } from "./Context/CryptoContext"
import { useEffect } from "react"
import AliceCarousel from 'react-alice-carousel'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Carousel = () => {

    const [trending, settrending] = useState([])

    const { currency } = CryptoState()

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        settrending(data)
    }

    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])


    const items = trending.map((coin) => (

        <Link className="flex gap-10" to={`/coins/${coin.id}`}> <img src={coin.image} height="80" style={{ marginBottom: 10 }} alt="" /></Link>
    ))

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }

    return (
        <>
            <div className='text-white'>Carousel</div>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                items={items}
                autoPlay

            />
        </>
    )
}

export default Carousel