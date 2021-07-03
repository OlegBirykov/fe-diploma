import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <Link to={process.env.PUBLIC_URL} className="menu__item">
        О нас
      </Link>
      <Link to={process.env.PUBLIC_URL} className="menu__item"> 
        Как это работает
      </Link>
      <Link to={process.env.PUBLIC_URL} className="menu__item">
        Отзывы
      </Link>
      <Link to={process.env.PUBLIC_URL} className="menu__item">
        Контакты
      </Link>
    </nav>    
  )
}

export default Menu;