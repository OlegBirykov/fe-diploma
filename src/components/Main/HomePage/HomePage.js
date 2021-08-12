import { useContext, useEffect } from 'react';
import './HomePage.css';
import AppContext from 'AppContext';
import About from './About/About';
import Description from './Description/Description';
import Feedbacks from './Feedbacks/Feedbacks';

function HomePage() { 
  const { setBookingStage } = useContext(AppContext);

  useEffect(() => {
    setBookingStage(null);
  }, [setBookingStage]);

  return (
    <main className="home-page"> 
      <About />
      <Description />
      <Feedbacks />
    </main>
  )
}

export default HomePage;