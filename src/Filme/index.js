import {useState, useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'
import api from '../Api'
import './filme.css'

function Filme()
{
  const {id} = useParams()
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  const [filme,setFilmes] = useState([])

  useEffect(() => {

    async function loading() 
    {
        try
        {
            const response = await api.get(`/movie/${id}`,
                {
                    params:
                    {
                       api_key: '66fab646768ff8b667597f506e73b94b',
                       language: 'en-US' 
                    }
                }
            )
            setFilmes(response.data)
            setLoading(false)
        }

        catch (error)
        {
           navigate ('/',{replace:true})
        }
        
    }
     loading();
  },[id, navigate])  


   if(loading)
   {
    return (
        <h2 className='loading'>Carregando dados do filme...</h2>
    )
   }

   function SalvarDados()
   {
     const buscarFilmes = localStorage.getItem('@Filmes')
     const array_filmes = JSON.parse(buscarFilmes) || []

     const hasFilme = array_filmes.some ((filmeProcurado) => {
       
      return filmeProcurado.id === filme.id
      }
    )

    if(hasFilme)
    {
      toast.warn('Filme já estava salvo')
    }

    else
    {
       array_filmes.push(filme)
       localStorage.setItem('@Filmes', JSON.stringify(array_filmes))
       toast.success('Filme salvo com sucesso!')
    }

   }

    return (
      <div className='dados-filme'>
        
        <h2>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
             
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação:{filme.vote_average}/ 10</strong>
        
        <div className='area-butoes'>
            <button onClick={SalvarDados}>Salvar</button>

            <button>
               <a target='blank' rel='externeal'
             href={`https://youtube.com/results?search_query=${filme.title} Trailer`} >
               Trailer
               </a>
            </button>

        </div>
        
      </div>
    )

}
export default Filme;