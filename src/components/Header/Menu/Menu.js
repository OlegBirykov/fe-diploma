import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const menuItemClick = (evt) => {
    evt.preventDefault();
    console.log('Выбран пункт меню');
  }
  
  return (
    <nav className="menu">
      <NavLink to={process.env.PUBLIC_URL} className="menu__item" activeClassName="menu__item_active" onClick={menuItemClick}>
        О нас
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL} className="menu__item" activeClassName="menu__item_active" onClick={menuItemClick}> 
        Как это работает
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL} className="menu__item" activeClassName="menu__item_active" onClick={menuItemClick}>
        Отзывы
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL} className="menu__item" activeClassName="menu__item_active" onClick={menuItemClick}>
        Контакты
      </NavLink>
    </nav>    
  )
}

export default Menu;