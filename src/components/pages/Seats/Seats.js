import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../AppContext';

function Seats() {
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('seats');
  }, [setBookingStage]);
  
  return (
    <main className="Seats"> 
      <Link to={process.env.PUBLIC_URL + '/run/passengers'} className=""> 
        Далее
      </Link>
    </main>
  )
}

export default Seats;