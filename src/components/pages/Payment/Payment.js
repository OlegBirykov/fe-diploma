import { Link } from 'react-router-dom';

function Payment() {  
  return (
    <main className="Payment"> 
      <Link to={process.env.PUBLIC_URL + '/run/confirmation'} className=""> 
        Купить билеты
      </Link>
    </main>
  )
}

export default Payment;