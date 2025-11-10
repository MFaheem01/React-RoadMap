import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import States from './components/States.jsx'
import Local from './components/Local.jsx'
import Fatch from './components/Fatch.jsx'
import Effect from './components/Effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <States />
    <Local />
    <Fatch />
    <Effect/>
  </StrictMode>
)
