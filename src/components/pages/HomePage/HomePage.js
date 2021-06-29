import { useContext, useEffect } from 'react';
import AppContext from '../../../AppContext';

function HomePage() { 
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage(null);
  }, [setBookingStage]);

  return (
    <main className="HomePage"> 
      Это главная страница
    </main>
  )
}

export default HomePage;