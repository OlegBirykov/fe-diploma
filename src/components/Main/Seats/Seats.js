import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Seats.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from '../Trains/TrainsParams/TrainsParams';
import LastRoutes from '../Trains/LastRoutes/LastRoutes';
import TrainSeats from './TrainSeats/TrainSeats';
import { loadSeatsInfo } from 'api/http';

function Seats() {
  const { setBookingStage, setAnimation, setPopup, seatsInfo, setSeatsInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);
  
  const reloadInfo = async (params) => {
    await loadSeatsInfo(setAnimation, setPopup, setSeatsInfo, { ...seatsInfo.params, ...params });
  }

  return (
    <main className="seats"> 
      <ProgressIndicator stepNumber={1} /> 
      <div className="seats__main">
        <section className="seats__left">
          <TrainsParams reloadInfo={reloadInfo}/>
          <LastRoutes />
        </section>
        <section className="seats__right"> 
          <h3 className="seats__title">
            Выбор мест
          </h3>
          <div className="seats__train-seats">
            <TrainSeats />
          </div>
          <div className="seats__train-seats">
            <TrainSeats />
          </div>
          <Link to={process.env.PUBLIC_URL + '/run/passengers'} className="seats__button seats__button_no-active"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Seats;