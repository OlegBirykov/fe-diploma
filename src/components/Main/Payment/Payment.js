import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

function Payment() {  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('payment');
  }, [setBookingStage]);

  return (
    <main className="payment"> 
      <ProgressIndicator stepNumber={3} />
      <Link to={process.env.PUBLIC_URL + '/run/confirmation'} className="payment__xxx"> 
        Купить билеты
      </Link>
    </main>
  )
}

export default Payment;