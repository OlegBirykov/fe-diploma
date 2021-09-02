import { createContext } from 'react';

const AppContext = createContext({
  bookingStage: null,
  animation: {
    loading: false,
    text: ''
  },
  popup: {
    visible: false,
    buttonText: '',
    content: [''],
    error: false
  }
});

export default AppContext;
