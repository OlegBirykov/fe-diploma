import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AppContext from '../../AppContext';

function Header() {
  const { bookingStage } = useContext(AppContext);
  let classModificator = '';

  switch (bookingStage) {
    case 'seats':
    case 'passengers':
    case 'payment':
    case 'confirmation':
      classModificator = 'Header_run';
      break;
    case 'completion':
      classModificator = 'Header_completion';
      break;
    default:
  }
 
  return (
    <header className={'Header' + (bookingStage ? ` ${classModificator}` : '')}>
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className=""> 
        Найти билеты
      </Link>
    </header>
  )
}

export default Header;