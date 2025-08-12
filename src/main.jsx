import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './pages/App0805-1.jsx'
// import App from './pages/Data0806-2.jsx'
// import App from './pages/App0806-3.jsx'
import App from './pages/App0811-weather.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode 為嚴謹模式，開發期間會開著。
  <StrictMode>
    <App />
  </StrictMode>,
)
