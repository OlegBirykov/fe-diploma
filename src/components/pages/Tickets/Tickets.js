import { Link } from 'react-router-dom';

function Tickets() {  
  return (
    <main className="Tickets"> 
      <Link to={process.env.PUBLIC_URL + '/run/passengers'} className=""> 
        Далее
      </Link>
    </main>
  )
}

export default Tickets;