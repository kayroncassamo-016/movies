import {useState,useEffect} from 'react';
import api from '../Api'
import './home.css'
import { Link } from 'react-router-dom';

function Home ()
{
const[filmes,setFilmes] = useState ([])
const[loading,setLoading] = useState (true)

useEffect(() => 
{

  async function loading ()
   {
      const response = await api.get ('movie/now_playing',
        {
            params:
            {
                api_key:'66fab646768ff8b667597f506e73b94b',
                language:'en-US'
            }
        }
      )
         console.log (response.data);
         setFilmes(response.data.results)
         setLoading(false)

   }
   loading ();

},[])

if (loading)
{
    return(<h2 className='loading'>Carregando filmes...</h2>)
}

return (
    <div className='filmes' >
      {filmes.map((filme) =>
        {
        return (
          <div className='lista-filmes'>
           <h2 className='titulo'>{filme.title}</h2>
           
           <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>

           <Link to={`/filme/${filme.id}`}>Acessar</Link>

          </div>
          )
        })}
    </div>
)

}


export default Home;