import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Seats.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TrainsParams from '../Trains/TrainsParams/TrainsParams';
import LastRoutes from '../Trains/LastRoutes/LastRoutes';

function Seats() {
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);
  
  const reloadInfo = async (/*params*/) => {
//    await loadTrainsInfo(setAnimation, setPopup, setTrainsInfo, { ...trainsInfo.params, ...params });
  }

  return (
    <main className="seats"> 
      <ProgressIndicator stepNumber={1} /> 
      <div className="seats__main">
        <section className="seats__left">
          <TrainsParams reloadInfo={reloadInfo}/>
          <LastRoutes />
        </section>
        <section className="seats-right"> 
          <Link to={process.env.PUBLIC_URL + '/run/passengers'} className="seats__xxx"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Seats;