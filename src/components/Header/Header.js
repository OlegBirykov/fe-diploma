import { Link } from 'react-router-dom';
import './Header.css';

function Header() { 
  return (
    <header className="Header">
      <Link to={process.env.PUBLIC_URL + '/run/tickets'} className=""> 
        Найти билеты
      </Link>
    </header>
  )
}

export default Header;