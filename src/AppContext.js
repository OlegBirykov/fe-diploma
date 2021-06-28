import { createContext } from 'react';

const AppContext = createContext({
  popup: {
    visible: false,
    buttonText: 'Ok',
    content: [''],
    error: false
  }
});

export default AppContext;
