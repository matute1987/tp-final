import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        <Link to="/sobreMi">Sobre mí</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
      </Routes>
    </>
  );
}

export default App;