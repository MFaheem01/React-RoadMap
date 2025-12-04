import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Coins from "./pages/Coins"
import Home from "./pages/Home"

function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coins />} />

      </Routes>

    </>
  )
}

export default App
