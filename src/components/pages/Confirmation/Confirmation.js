import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../AppContext';

function Confirmation() { 
  const { setBookingStage } = useContext(AppContext);

  const next = () => {
    setBookingStage('completion');
  }
  
  return (
    <main className="Confirmation"> 
      <Link to={process.env.PUBLIC_URL + '/run/completion'} className="" onClick={next}> 
        Подтвердить
      </Link>
    </main>
  )
}

export default Confirmation;