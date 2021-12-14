import { useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Confirmation.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from '../Passengers/TravelDetails/TravelDetails';
import TrainsListItem from '../Trains/TrainsList/TrainsListItem/TrainsListItem';
import PassengersConfirmation from './PassengersConfirmation/PassengersConfirmation';
import PaymentConfirmation from './PaymentConfirmation/PaymentConfirmation';
import { setOrder } from 'api/http/setOrder';
import { httpErrorBox } from 'api/gui';

function Confirmation() { 
  const { setBookingStage, setAnimation, setPopup, forwardTrain, backwardTrain, orderInfo } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    setBookingStage('confirmation');
  }, [setBookingStage]);

  const goToNext = async (evt) => {
    evt.preventDefault();

    const response = await setOrder(setAnimation, orderInfo);

    if (response.ok) {
      history.push(process.env.PUBLIC_URL + '/run/completion');
    } else {
      httpErrorBox(setPopup, response);
    }
  }

  return (
    <main className="confirmation"> 
      <ProgressIndicator stepNumber={4} />
      <div className="confirmation__main">
        <section className="confirmation__left">
          <TravelDetails />
        </section>
        <section className="confirmation__right">
          <div className="confirmation__section">
            <TrainsListItem 
              trainInfo={forwardTrain}
              isForward={true} 
              reloadInfo={(f) => f} 
              loadSeats={(f) => f}
              isConfirmation={true}
            />
          </div>
          <div className="confirmation__section">
            <TrainsListItem 
              trainInfo={backwardTrain}
              isForward={false} 
              reloadInfo={(f) => f} 
              loadSeats={(f) => f}
              isConfirmation={true}
            />
          </div>
          <div className="confirmation__section">
            <PassengersConfirmation />
          </div>
          <div className="confirmation__section">
            <PaymentConfirmation />
          </div>
          <Link to={process.env.PUBLIC_URL + '/run/completion'} className="confirmation__button confirmation__button_active" onClick={goToNext}> 
            Подтвердить
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Confirmation;