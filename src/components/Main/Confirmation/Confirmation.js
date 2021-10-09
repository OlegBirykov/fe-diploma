import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

function Confirmation() { 
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('confirmation');
  }, [setBookingStage]);

  return (
    <main className="confirmation"> 
      <ProgressIndicator stepNumber={4} />
      <Link to={process.env.PUBLIC_URL + '/run/completion'} className="confirmation__xxx"> 
        Подтвердить
      </Link>
    </main>
  )
}

export default Confirmation;