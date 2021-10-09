import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trains.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

function Trains() {
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('trains');
  }, [setBookingStage]);
  
  return (
    <main className="trains"> 
      <ProgressIndicator stepNumber={1} />
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className="trains__xxx"> 
        Далее
      </Link>
    </main>
  )
}

export default Trains;