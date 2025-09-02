import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FateSelector from './pages/App0830-fateSelector';
import ScenarioManager from './pages/App0830-history3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FateSelector />} />
        <Route path="/scenario/:id" element={<ScenarioManager />} />
      </Routes>
    </Router>
  );
}

export default App;
