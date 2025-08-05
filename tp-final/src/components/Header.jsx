import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const { user } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [goodbyeMsg, setGoodbyeMsg] = useState(false);

  const handleLogout = () => {
    logout();
    setGoodbyeMsg(true);       // 👈 muestra el mensaje
    setTimeout(() => {
      setGoodbyeMsg(false);    // 👈 lo oculta después de 2 segundos
      navigate('/');
    }, 2000);
  };

};

return (
  <header style={{ backgroundColor: "lightblue" }}>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cedol.org.ar%2Flogistica%2Freferentes-la-logistica-dictaran-curso-la-utn%2Flogo-utn-frba-2%2F&psig=AOvVaw1Z_3o77X5AXIAs2sK5r_BV&ust=1754348156664000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiSyave744DFQAAAAAdAAAAABAE" alt="imagen de logo" />
    {goodbyeMsg && (
      <p style={{
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '10px',
        background: '#e0ffe0',
        borderRadius: '5px'
      }}>
        ¡Hasta pronto!
      </p>
    )}
    <nav>
      <ul>
        {/* Cambiar elementos a por componentes Link de react-router-dom */}
        {
          user && <>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        }
        {
          !user && <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registrate">Registrate</Link></li>
          </>
        }
      </ul>
    </nav>
  </header>
)


export { Header }