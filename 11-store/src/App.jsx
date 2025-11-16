import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './pages/components/Card'


// Images
import img1 from "./assets/images/1.jpg.webp";
import img2 from "./assets/images/2.jpg.webp";
import img3 from "./assets/images/3.jpg.webp";
import img5 from "./assets/images/5.jpg.webp";
import img7 from "./assets/images/7.jpg.webp";
import img8 from "./assets/images/8.jpg.webp";

function App() {

  const Product = [

    { id: 1, img: img1, title: "Modern Chair", price: "$180", Counts: 0 },
    { id: 2, img: img2, title: "Minimalistic Plant Pot", price: "$190", Counts: 0 },
    { id: 3, img: img5, title: "Plant Pot", price: "$120", Counts: 0 },
    { id: 4, img: img8, title: "Modern Rocking Chair", price: "$40", Counts: 0 },
    { id: 5, img: img3, title: "Rocking Chair", price: "$150", Counts: 0 },
    { id: 6, img: img7, title: "Small Table", price: "$330", Counts: 0 },

  ];

  const [Items, setItems] = useState(Product);

  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home Items={Items} setItems={setItems} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/card' element={<Card Items={Items} setItems={setItems} />} />
      </Routes>
    </div>
  )
}

export default App
