import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Si el contexto aún está cargando el usuario
  if (loading) {
    return <p>Cargando...</p>; // Aquí podrías poner un spinner o componente de carga
  }

  // Si no hay usuario, redirige al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, renderiza el contenido protegido
  return children;
};

export default PrivateRoute;