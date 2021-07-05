import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Seats.css';
import AppContext from '../../../AppContext';

function Seats() {
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);
  
  return (
    <main className="seats"> 
      <Link to={process.env.PUBLIC_URL + '/run/passengers'} className="seats__xxx"> 
        Далее
      </Link>
    </main>
  )
}

export default Seats;