import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aulas from './Aulas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aulas/>
  </StrictMode>,
)
