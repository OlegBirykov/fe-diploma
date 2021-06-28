import { Link } from 'react-router-dom';

function Passengers() {  
  return (
    <main className="Passengers"> 
      <Link to={process.env.PUBLIC_URL + '/run/payment'} className=""> 
        Далее
      </Link>
    </main>
  )
}

export default Passengers;