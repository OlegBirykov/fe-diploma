import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [bookingStage, setBookingStage] = useState(null);
  const [animation, setAnimation] = useState({ loading: false });
  const [popup, setPopup] = useState({ visible: false });
  const [direction, setDirection] = useState({});

  return (
    <AppContext.Provider 
      value={{ 
        bookingStage, setBookingStage,
        animation, setAnimation,
        popup, setPopup,
        direction, setDirection
      }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

