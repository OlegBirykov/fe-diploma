import { Link } from 'react-router-dom';

function Confirmation() {  
  return (
    <main className="Confirmation"> 
      <Link to={process.env.PUBLIC_URL + '/run/completion'} className=""> 
        Подтвердить
      </Link>
    </main>
  )
}

export default Confirmation;