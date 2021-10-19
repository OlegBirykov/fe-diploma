import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [bookingStage, setBookingStage] = useState(null);
  const [animation, setAnimation] = useState({ loading: false });
  const [popup, setPopup] = useState({ visible: false });

  let storageTrainsInfo;
  try {
    storageTrainsInfo = JSON.parse(localStorage.getItem('trainsInfo'));
  } catch {
    storageTrainsInfo = {};
  }
  const [trainsInfo, setTrainsInfo] = useState(storageTrainsInfo);

  return (
    <AppContext.Provider 
      value={{ 
        bookingStage, setBookingStage,
        animation, setAnimation,
        popup, setPopup,
        trainsInfo, setTrainsInfo
      }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

