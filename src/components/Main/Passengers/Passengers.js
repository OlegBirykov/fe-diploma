import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Passengers.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from './TravelDetails/TravelDetails';

function Passengers() {  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('passengers');
  }, [setBookingStage]);

  return (
    <main className="passengers"> 
      <ProgressIndicator stepNumber={2} />
      <div className="passengers__main">
        <section className="passengers__left">
          <TravelDetails />
        </section>
        <section className="passengers__right">
          <Link to={process.env.PUBLIC_URL + '/run/payment'} className="passengers__button passengers__button_active"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Passengers;