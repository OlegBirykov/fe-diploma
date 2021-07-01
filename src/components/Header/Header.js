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
      classModificator = 'header_run';
      break;
    case 'completion':
      classModificator = 'header_completion';
      break;
    default:
  }
 
  return (
    <header className={'header' + (bookingStage ? ` ${classModificator}` : '')}>
      <p className="header__logo">
        Logo
      </p>
      <Menu />
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className=""> 
        Найти билеты
      </Link>
    </header>
  )
}

export default Header;