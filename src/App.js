// Alex Joshua (c) 2022

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loader from './pages/Loader';
import SplitText from './pages/SplitText';

function App() {
  return (
    <div className="App">
      <div class="sticky">
        <nav>
          <ul>
            <li><Link to="/" class="link">Home</Link></li>
            <li><Link to="/loader" class="link">Loader</Link></li>
            <li><Link to="/splittext" class="link">Split Text</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/splittext" element={<SplitText />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
