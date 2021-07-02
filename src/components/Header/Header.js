import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AppContext from '../../AppContext';
import Menu from './Menu/Menu';

function Header() {
  const { bookingStage } = useContext(AppContext);
  let classModificator = '';

  switch (bookingStage) {
    case 'seats':
    case 'passengers':
    case 'payment':
    case 'confirmation':
      classModificator = '_run';
      break;
    case 'completion':
      classModificator = '_completion';
      break;
    default:
  }
 
  return (
    <header className={'header' + (bookingStage ? ` header${classModificator}` : '')}>
      <div className={'header__top' + (bookingStage ? ` header__top${classModificator}` : '')}>
        <p className="header__logo">
          Лого
        </p>
      </div>
      <Menu />
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className=""> 
        Найти билеты
      </Link>
    </header>
  )
}

export default Header;