import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trains.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from './TrainsParams/TrainsParams';
import LastRouters from './LastRouters/LastRouters';
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
      <div className="trains-main">
        <section className="trains-left">
          <TrainsParams />
          <LastRouters />
        </section>
        <section className="trains-main">
          <TrainsList />
        </section>
      </div>
      <Link to={process.env.PUBLIC_URL + '/run/seats'}> 
        Далее
      </Link>
    </main>
  )
}

export default Trains;