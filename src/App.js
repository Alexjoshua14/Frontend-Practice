// Alex Joshua (c) 2022

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loader from './pages/Loader';
import SpinLoader from './pages/SpinLoader';
import SplitText from './pages/SplitText';
import TypingAnim from './pages/TypingAnim';

function App() {
  return (
    <div className="App">
      <div class="sticky">
        <nav>
          <ul>
            <li><Link to="/" class="link">Home</Link></li>
            <li><Link to="/loader" class="link">Loader</Link></li>
            <li><Link to="/spinloader" class="link">Spin Loader</Link></li>
            <li><Link to="/splittext" class="link">Split Text</Link></li>
            <li><Link to="/typinganim" class="link">Typing Animation</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/spinloader" element={<SpinLoader />} />
          <Route path="/splittext" element={<SplitText />} />
          <Route path="/typinganim" element={<TypingAnim />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
