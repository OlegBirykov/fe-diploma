import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [popup, setPopup] = useState({ visible: false });
  const [bookingStage, setBookingStage] = useState(null);
  
  return (
    <AppContext.Provider value={{ 
      popup, setPopup,
      bookingStage, setBookingStage,
    }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

