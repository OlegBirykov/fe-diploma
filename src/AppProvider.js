import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [bookingStage, setBookingStage] = useState(null);
  const [loading, setLoading] = useState({ state: false, text: 'Идёт поиск' });
  const [popup, setPopup] = useState({ visible: false });

  return (
    <AppContext.Provider value={{ 
      bookingStage, setBookingStage,
      loading, setLoading,
      popup, setPopup,
    }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

