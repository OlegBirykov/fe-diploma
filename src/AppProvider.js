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

  let storageForwardTrain;
  try {
    storageForwardTrain = JSON.parse(localStorage.getItem('forwardTrain'));
  } catch {
    storageForwardTrain = null;
  }
  const [forwardTrain, setForwardTrain] = useState(storageForwardTrain);

  let storageBackwardTrain;
  try {
    storageBackwardTrain = JSON.parse(localStorage.getItem('backwardTrain'));
  } catch {
    storageBackwardTrain = null;
  }
  const [backwardTrain, setBackwardTrain] = useState(storageBackwardTrain);

  return (
    <AppContext.Provider 
      value={{ 
        bookingStage, setBookingStage,
        animation, setAnimation,
        popup, setPopup,
        trainsInfo, setTrainsInfo,
        forwardTrain, setForwardTrain,
        backwardTrain, setBackwardTrain
      }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

