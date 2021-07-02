import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <NavLink to={process.env.PUBLIC_URL + '/about'} className="menu__item" activeClassName="menu__item_active">
        О нас
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/help'} className="menu__item" activeClassName="menu__item_active"> 
        Как это работает
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/feedbacks'} className="menu__item" activeClassName="menu__item_active">
        Отзывы
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/contacts'} className="menu__item" activeClassName="menu__item_active">
        Контакты
      </NavLink>
    </nav>    
  )
}

export default Menu;