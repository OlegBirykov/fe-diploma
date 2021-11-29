import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Seats.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from '../Trains/TrainsParams/TrainsParams';
import LastRoutes from '../Trains/LastRoutes/LastRoutes';
import TrainSeats from './TrainSeats/TrainSeats';
import { loadSeatsInfo } from 'api/http';
import { errorBox } from 'api/gui';
import { createSeatsMap } from 'api/seats';

function Seats() {
  const [forwardSeats, setForwardSeats] = useState({ competitorCount: 0 });
  const [backwardSeats, setBackwardSeats] = useState({ competitorCount: 0 });

  const { setBookingStage, setAnimation, setPopup, forwardTrain, backwardTrain, seatsInfo, setSeatsInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);

  useEffect(() => {
    setForwardSeats({ 
      info: seatsInfo.forwardSeatsInfo.map((item) => createSeatsMap(item)),
      classNumber: 0,
      curTicketType: 'full',
      fullTicketsCount: 0,
      childTicketsCount: 0,
      parentTicketsCount: 0,
      competitorCount: Math.trunc(Math.random() * 10) + 5
    });
    setBackwardSeats({ 
      info: seatsInfo.backwardSeatsInfo.map((item) => createSeatsMap(item)),
      classNumber: 0,
      curTicketType: 'full',
      fullTicketsCount: 0,
      childTicketsCount: 0,
      parentTicketsCount: 0,
      competitorCount: Math.trunc(Math.random() * 10) + 5
    });
  }, [seatsInfo]);
  
  const reloadInfo = async (params) => {
    await loadSeatsInfo(setAnimation, setPopup, setSeatsInfo, { ...seatsInfo.params, ...params });
  }

  const forwardTicketsCount = forwardSeats.fullTicketsCount + forwardSeats.childTicketsCount + forwardSeats.parentTicketsCount;
  const backwardTicketsCount = backwardSeats.fullTicketsCount + backwardSeats.childTicketsCount + backwardSeats.parentTicketsCount;
  const isNextEnabled = forwardTicketsCount 
    && forwardSeats.fullTicketsCount === backwardSeats.fullTicketsCount
    && forwardSeats.childTicketsCount === backwardSeats.childTicketsCount
    && forwardSeats.parentTicketsCount === backwardSeats.parentTicketsCount

  const goToNext = (evt) => {
    if (!isNextEnabled) {
      evt.preventDefault();
    }

    if (!forwardTicketsCount || !backwardTicketsCount) {
      errorBox(setPopup, [
        'Ошибка ввода данных',
        'Должен быть выбран хотя бы один билет туда и один билет обратно'
      ]);
      return;
    }

    if (forwardSeats.fullTicketsCount !== backwardSeats.fullTicketsCount) {
      errorBox(setPopup, [
        'Ошибка ввода данных',
        'Количество взрослых билетов туда и обратно должно быть одинаковым'
      ]);
      return;
    }

    if (forwardSeats.childTicketsCount !== backwardSeats.childTicketsCount) {
      errorBox(setPopup, [
        'Ошибка ввода данных',
        'Количество детских билетов туда и обратно должно быть одинаковым'
      ]);
      return;
    }

    if (forwardSeats.parentTicketsCount !== backwardSeats.parentTicketsCount) {
      errorBox(setPopup, [
        'Ошибка ввода данных',
        'Количество детских билетов без места туда и обратно должно быть одинаковым'
      ]);
      return;
    }

    // В этом месте информация о билетах будет сохранена в структуре orderInfo контекста приложения
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
          <Link 
            to={process.env.PUBLIC_URL + '/run/passengers'} 
            className={'seats__button' + (isNextEnabled ? ' seats__button_active' : '')}
            onClick={goToNext}
          > 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Seats;