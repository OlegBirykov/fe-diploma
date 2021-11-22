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
      <div className="completion__window">
        <p className="development-label">
          Страница находится в процессе разработки
        </p>
        <Link to={process.env.PUBLIC_URL} className="completion__xxx"> 
           Вернуться на главную
        </Link>
      </div>
    </main>
  )
}

export default Completion;