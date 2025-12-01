import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Coins from "./pages/Coins"
import Home from "./pages/Home"

function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<Home />} />

      </Routes>

    </>
  )
}

export default App
