import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Passengers.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from './TravelDetails/TravelDetails';
import EditPassenger from './EditPassenger/EditPassenger';
import AddPassenger from './AddPassenger/AddPassenger';

function Passengers() {
  const [detailsCollapsed, setDetailsCollapsed] = useState({
    forward: false,
    backward: false,
    passengers: false,
  });
  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('passengers');
  }, [setBookingStage]);

  return (
    <main className="passengers"> 
      <ProgressIndicator stepNumber={2} />
      <div className="passengers__main">
        <section className="passengers__left">
          <TravelDetails collapsed={detailsCollapsed} setCollapsed={setDetailsCollapsed} />
        </section>
        <section className="passengers__right">
          <p className="development-label">
            Страница находится в процессе разработки
          </p>
          <div className="passengers__edit-passenger">
            <EditPassenger />
          </div>   
          <div className="passengers__edit-passenger">
            <EditPassenger />
          </div> 
          <div className="passengers__add-passenger">
            <AddPassenger />
          </div>   
          <Link to={process.env.PUBLIC_URL + '/run/payment'} className="passengers__button passengers__button_active"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Passengers;