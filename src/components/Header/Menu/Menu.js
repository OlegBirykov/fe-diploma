import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <a className="menu__item" href={process.env.PUBLIC_URL + '#about'}>
        О нас
      </a>
      <a className="menu__item" href={process.env.PUBLIC_URL + '#description'}> 
        Как это работает
      </a>
      <a className="menu__item" href={process.env.PUBLIC_URL + '#feedbacks'}>
        Отзывы
      </a>
      <a className="menu__item" href="#footer">
        Контакты
      </a>
    </nav>    
  )
}

export default Menu;