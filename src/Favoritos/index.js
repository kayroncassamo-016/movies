import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import './favoritos.css'
import {toast} from 'react-toastify'

function Favoritos ()
{
    const [filme,setFilmes] = useState([])

    useEffect(() =>{
        const listaFilmes = localStorage.getItem('@Filmes')
        
        setFilmes(JSON.parse(listaFilmes))

    },[])

    function ExcluirFilme (id)
    {
      let listaFiltrada = filme.filter((filmefiltro)=>
      {
            return filmefiltro.id !== id
      })

      setFilmes(listaFiltrada)
      localStorage.setItem('@Filmes',JSON.stringify(listaFiltrada))
      toast.success('Filme removido com sucesso!')
    }

    return (
   
      <div className="favoritos">
         {filme.map((item) =>
         {
           return (
            <div className="favoritos-detalhes">
                <span>{item.title}</span>

                <div className="butoes">
                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                    <button onClick={()=>{ExcluirFilme(item.id)}}>Excluir</button>
                </div>

            </div>
           )
         })}
            
        </div>
    )
}
export default Favoritos;