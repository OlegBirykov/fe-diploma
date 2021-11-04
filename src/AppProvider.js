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
    storageTrainsInfo = null;
  }
  if (!storageTrainsInfo || !storageTrainsInfo.params) {
    storageTrainsInfo = { params: {} };
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

  let storageSeatsInfo;
  try {
    storageSeatsInfo = JSON.parse(localStorage.getItem('seatsInfo'));
  } catch {
    storageSeatsInfo = null;
  }
  if (!storageSeatsInfo || !storageSeatsInfo.params) {
    storageSeatsInfo = { params: {} };
  }
  const [seatsInfo, setSeatsInfo] = useState(storageSeatsInfo);

  let storageReservedSeats;
  try {
    storageReservedSeats = JSON.parse(localStorage.getItem('reservedSeats'));
  } catch {
    storageReservedSeats = {};
  }
  const [reservedSeats, setReservedSeats] = useState(storageReservedSeats);

  let storageOrderInfo;
  try {
    storageOrderInfo = JSON.parse(localStorage.getItem('orderInfo'));
  } catch {
    storageOrderInfo = {};
  }
  const [orderInfo, setOrderInfo] = useState(storageOrderInfo);

  return (
    <AppContext.Provider 
      value={{ 
        bookingStage, setBookingStage,
        animation, setAnimation,
        popup, setPopup,
        trainsInfo, setTrainsInfo,
        forwardTrain, setForwardTrain,
        backwardTrain, setBackwardTrain,
        seatsInfo, setSeatsInfo,
        reservedSeats, setReservedSeats,
        orderInfo, setOrderInfo
      }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

