import { useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  const mensagem = location.state?.error || 'Página não encontrada';

  return (
    <h1 style={{ color: 'red', marginTop: '10px' }}>
      {mensagem}
    </h1>
  );
}

export default NotFound;