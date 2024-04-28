import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MapContextProvider from './context/MapContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MapContextProvider>
  </React.StrictMode>,
)
