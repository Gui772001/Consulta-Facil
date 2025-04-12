import { Link } from "react-router-dom"
import './Home.css'

function Home(){
    return(
<div className="style-home">
      <h1>Bem-vindo ao Consulta Facil</h1>
      <p>Encontre rapidamente o endereço completo a partir de um CEP brasileiro.</p>
      
      <Link to="/Servicos">
        <button className="btn btn-secondary">
          Ir para Consulta
        </button>
      </Link>
    </div>
)
}

export default Home