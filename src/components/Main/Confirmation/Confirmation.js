import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from '../Passengers/TravelDetails/TravelDetails';
import TrainsConfirmation from './TrainsConfirmation/TrainsConfirmation';
import PassengersConfirmation from './PassengersConfirmation/PassengersConfirmation';
import PaymentConfirmation from './PaymentConfirmation/PaymentConfirmation';

function Confirmation() { 
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('confirmation');
  }, [setBookingStage]);

  return (
    <main className="confirmation"> 
      <ProgressIndicator stepNumber={4} />
      <div className="confirmation__main">
        <section className="confirmation__left">
          <TravelDetails />
        </section>
        <section className="confirmation__right">
          <p className="development-label">
            Страница находится в процессе разработки
          </p>
          <div className="confirmation__trains">
            <TrainsConfirmation />
          </div>
          <div className="confirmation__passengers">
            <PassengersConfirmation />
          </div>
          <div className="confirmation__payment">
            <PaymentConfirmation />
          </div>
          <Link to={process.env.PUBLIC_URL + '/run/completion'} className="confirmation__button confirmation__button_active"> 
            Подтвердить
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Confirmation;