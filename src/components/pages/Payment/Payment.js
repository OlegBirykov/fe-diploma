import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import AppContext from 'AppContext';

function Payment() {  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('payment');
  }, [setBookingStage]);

  return (
    <main className="payment"> 
      <Link to={process.env.PUBLIC_URL + '/run/confirmation'} className="payment__xxx"> 
        Купить билеты
      </Link>
    </main>
  )
}

export default Payment;