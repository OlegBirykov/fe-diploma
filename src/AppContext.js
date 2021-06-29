import { createContext } from 'react';

const AppContext = createContext({
  bookingStage: null,
  popup: {
    visible: false,
    buttonText: 'Ok',
    content: [''],
    error: false
  }
});

export default AppContext;
