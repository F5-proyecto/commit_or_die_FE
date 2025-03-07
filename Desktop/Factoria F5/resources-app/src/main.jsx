import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="text-4xl font-bold text-center text-blue-500">
      Hello, Vite + React + Tailwind
    </h1>
  </StrictMode>,
)
