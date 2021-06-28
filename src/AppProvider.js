import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [popup, setPopup] = useState({ visible: false });
  
  return (
    <AppContext.Provider value={{ popup, setPopup }}>
      {props.children}  
    </AppContext.Provider>
  )
}

export default AppProvider;

