import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './main.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

/**
 * Notes:
 * Kenapa BrowserRouter di sini, bukan di App?
    - App = logic aplikasi
    - main.jsx = environment setup
    - nanti testing / SSR / wrapper lain → lebih fleksibel

    Kalau lu taruh di App, project kecil aman, project gede nyusahin.
 */