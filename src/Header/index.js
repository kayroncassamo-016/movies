import {Link} from 'react-router-dom';
import './header.css'

function Header()
{
  return (
    
  <header>
        <Link to='/' className='primeFlix'>PrimeFlix</Link>
        <Link to='/favoritos'className='meus-filmes'>Meus filmes</Link>
  </header>

  );
}
export default Header;