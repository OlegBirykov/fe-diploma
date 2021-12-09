import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from '../Passengers/TravelDetails/TravelDetails';
import UserData from './UserData/UserData';

function Payment() {  
  const { setBookingStage, orderInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('payment');
  }, [setBookingStage]);

  const { 
    user = {} 
  } = orderInfo;

  return (
    <main className="payment"> 
      <ProgressIndicator stepNumber={3} />
      <div className="payment__main">
        <section className="payment__left">
          <TravelDetails />
        </section>
        <section className="payment__right">
          <p className="development-label">
            Страница находится в процессе разработки
          </p>
          <UserData user={user} />
          <Link to={process.env.PUBLIC_URL + '/run/confirmation'} className="payment__button payment__button_active"> 
            Купить билеты
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Payment;