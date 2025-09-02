import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
=======
// import './index.css'
// import App from './App.jsx'
// import App from './pages/App0805-1.jsx'
// import App from './pages/Data0806-2.jsx'
// import App from './pages/App0806-3.jsx'
// import "./sass/all.scss"
// import App from './pages/App0813-weather3.jsx'
// import App from './pages/Home.jsx'
// import MyApp from './MyApp'
import App from './pages/App0830-fateSelector'
>>>>>>> 80b4cb89e89a1b6e5e27bbe410a0388250898f21
import { HashRouter } from 'react-router-dom'


import App from './pages/App0902a-useMemo'



createRoot(document.getElementById('root')).render(
  // StrictMode 為嚴謹模式，開發期間會開著。
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
