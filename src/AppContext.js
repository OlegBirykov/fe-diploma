import { createContext } from 'react';

const AppContext = createContext({
  bookingStage: null,
  loading: {
    state: false,
    text: 'Идёт поиск'
  },
  popup: {
    visible: false,
    buttonText: 'OK',
    content: [''],
    error: false
  }
});

export default AppContext;
