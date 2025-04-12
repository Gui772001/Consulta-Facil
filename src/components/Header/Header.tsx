import { Link } from 'react-router-dom';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';


function Header(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/Sobre"className="nav-link">Sobre</Link>
            </li>
            <li className="nav-item">
            <Link to="/Servicos"className="nav-link">Serviços</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contato"className="nav-link">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      );
    };
export default Header