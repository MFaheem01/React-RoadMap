import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CryptoContext from './components/Context/CryptoContext.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CryptoContext>
        <App />
      </CryptoContext>
    </BrowserRouter>
  </StrictMode>,
)
