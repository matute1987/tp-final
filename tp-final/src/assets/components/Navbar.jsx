import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/sobreMi">Sobre mí</Link>
    </nav>
  );
}

export default Navbar;