import { useContext, useEffect } from 'react';
import './Trains.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from './TrainsParams/TrainsParams';
import LastRoutes from './LastRoutes/LastRoutes';
import TrainsList from './TrainsList/TrainsList';

function Trains() {
  const { setBookingStage, trainsInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('trains');
    console.log(trainsInfo);
  });
  
  return (
    <main className="trains"> 
      <ProgressIndicator stepNumber={1} />
      <div className="trains__main">
        <section className="trains__left">
          <TrainsParams />
          <LastRoutes />
        </section>
        <section className="trains__right">
          <TrainsList />
        </section>
      </div>
    </main>
  )
}

export default Trains;