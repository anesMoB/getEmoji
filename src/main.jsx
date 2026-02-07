import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/search_context/SearchContext.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
      <Footer/>
    </ContextProvider>

  </StrictMode>,
)
