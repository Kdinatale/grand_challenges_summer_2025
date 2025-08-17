import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Browser from './Browser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Browser />
  </StrictMode>,
)
