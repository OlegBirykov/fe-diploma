import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trains.css';
import AppContext from 'AppContext';

function Trains() {
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('trains');
  }, [setBookingStage]);
  
  return (
    <main className="trains"> 
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className="trains__xxx"> 
        Далее
      </Link>
    </main>
  )
}

export default Trains;