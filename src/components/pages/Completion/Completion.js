import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Completion.css';
import AppContext from 'AppContext';

function Completion() {  
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('completion');
  }, [setBookingStage]);

  return (
    <main className="completion"> 
      <Link to={process.env.PUBLIC_URL} className="completion__xxx"> 
        Вернуться на главную
      </Link>
    </main>
  )
}

export default Completion;