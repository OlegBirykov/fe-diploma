import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Seats.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from '../Trains/TrainsParams/TrainsParams';
import LastRoutes from '../Trains/LastRoutes/LastRoutes';
import TrainSeats from './TrainSeats/TrainSeats';
import { loadSeatsInfo } from 'api/http';

function Seats() {
  const [forwardSeats, setForwardSeats] = useState({});
  const [backwardSeats, setBackwardSeats] = useState({});

  const { setBookingStage, setAnimation, setPopup, forwardTrain, backwardTrain, seatsInfo, setSeatsInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);

  useEffect(() => {
    setForwardSeats({ 
      info: seatsInfo.forwardSeatsInfo,
      classNumber: 0
    });
    setBackwardSeats({ 
      info: seatsInfo.backwardSeatsInfo,
      classNumber: 0
    });
  }, [seatsInfo]);
  
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
          <h2 className="seats__title">
            Выбор мест
          </h2>
          <div className="seats__train-seats">
            <TrainSeats trainInfo={forwardTrain} seatsState={forwardSeats} setSeatsState={setForwardSeats} isForward={true}/>
          </div>
          <div className="seats__train-seats">
            <TrainSeats trainInfo={backwardTrain} seatsState={backwardSeats} setSeatsState={setBackwardSeats} isForward={false}/>
          </div>
          <Link to={process.env.PUBLIC_URL + '/run/passengers'} className="seats__button seats__button_active"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Seats;