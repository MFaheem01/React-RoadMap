// import Carousel from '../components/Carousel'

import Carousel from "../components/Carousel"
import CoinsTable from "../components/CoinsTable"

const Home = () => {
  return (
    <>
      <div className='h-130 bg-no-repeat bg-center bg-cover bg-[url("https://crypto-hunter.netlify.app/banner2.jpg")]'>
        <div className='flex flex-col text-white justify-center h-80 align-middle text-center gap-5'>
          <h1 className='text-5xl'>CRYPTO STORE</h1>
          <p className='text-xl'>Get all the Info regarding your favorite Crypto Currency</p>
        </div>
        <div className=''>
          <Carousel />
        </div>
      </div>
      <div>
        <CoinsTable />
      </div>
    </>
  )
}

export default Home