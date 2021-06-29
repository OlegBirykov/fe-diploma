import { Link } from 'react-router-dom';

function Seats() {  
  return (
    <main className="Seats"> 
      <Link to={process.env.PUBLIC_URL + '/run/passengers'} className=""> 
        Далее
      </Link>
    </main>
  )
}

export default Seats;