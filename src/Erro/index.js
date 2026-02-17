import { Link } from "react-router-dom";
import './erro.css'


function Erro ()
{
  return (
    <div className="Erro">
      <h1>404</h1>
      <h2>Pagina não encontrada</h2>
      <Link to= '/' className="ver-filmes">Veja todos os filmes</Link>
    
    </div>
  )
}
export default Erro;