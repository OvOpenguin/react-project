import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

// import App from './MyApp'
import App from './pages/App0908-api-unsplash.jsx'




createRoot(document.getElementById('root')).render(
  // StrictMode 為嚴謹模式，開發期間會開著。
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
