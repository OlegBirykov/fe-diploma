import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NoPage.css';
import AppContext from '../../../AppContext';

function NoPage() { 
  const { bookingStage } = useContext(AppContext);
  let url = process.env.PUBLIC_URL;

  switch (bookingStage) {
    case 'seats':
      url += '/run/seats';
      break;
    case 'passengers':
      url += '/run/passengers';
      break;
    case 'payment':
      url += '/run/payment';
      break;
    case 'confirmation':
      url += '/run/confirmation';
      break;
    case 'completion':
      url += 'run/completion';
      break;
    default:
  }

  return (
    <main className="no-page"> 
      <p className="no-page__title">
        Извините, эта страница временно недоступна
      </p>
      <Link to={url} className="no-page__return-button"> 
        Назад
      </Link>
    </main>
  )
}

export default NoPage;