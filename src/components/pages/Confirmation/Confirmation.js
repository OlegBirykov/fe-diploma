import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../AppContext';

function Confirmation() { 
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('confirmation');
  }, [setBookingStage]);

  return (
    <main className="Confirmation"> 
      <Link to={process.env.PUBLIC_URL + '/run/completion'} className=""> 
        Подтвердить
      </Link>
    </main>
  )
}

export default Confirmation;