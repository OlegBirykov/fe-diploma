import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Passengers.css';
import AppContext from 'AppContext';

function Passengers() {  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('passengers');
  }, [setBookingStage]);

  return (
    <main className="passengers"> 
      <Link to={process.env.PUBLIC_URL + '/run/payment'} className="passengers__xxx"> 
        Далее
      </Link>
    </main>
  )
}

export default Passengers;