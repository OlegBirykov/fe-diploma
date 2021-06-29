import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../AppContext';

function Completion() {  
  const { setBookingStage } = useContext(AppContext);

  const next = () => {
    setBookingStage(null);
  }

  return (
    <main className="Completion"> 
      <Link to={process.env.PUBLIC_URL} className="" onClick={next}> 
        Вернуться на главную
      </Link>
    </main>
  )
}

export default Completion;