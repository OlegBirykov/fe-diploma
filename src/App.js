import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './AppProvider';
import AppContext from './AppContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingAnimation from 'components/LoadingAnimation/LoadingAnimation';
import Popup from './components/Popup/Popup';

import HomePage from './components/pages/HomePage/HomePage';
import Seats from './components/pages/Seats/Seats';
import Passengers from './components/pages/Passengers/Passengers';
import Payment from './components/pages/Payment/Payment';
import Confirmation from './components/pages/Confirmation/Confirmation';
import Completion from './components/pages/Completion/Completion';

function App() {
  const [loadingShow, setLoadingShow] = useState('false');
  const { loading } = useContext(AppContext);

  useEffect(() => {
    setLoadingShow(loading.state);
    console.log('Ага');
  }, [loading.state]);

  return (
    <AppProvider>
      <Router>
        <Header />
        {loadingShow ?
          <LoadingAnimation /> :
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/run/seats'} component={Seats} />
            <Route path={process.env.PUBLIC_URL + '/run/passengers'} component={Passengers} />
            <Route path={process.env.PUBLIC_URL + '/run/payment'} component={Payment} />
            <Route path={process.env.PUBLIC_URL + '/run/confirmation'} component={Confirmation} />
            <Route path={process.env.PUBLIC_URL + '/run/completion'} component={Completion} />
            <Route path={process.env.PUBLIC_URL} component={HomePage} />
          </Switch>
        } 
        <Footer />
        <Popup />
      </Router>
    </AppProvider>
  );
}

export default App;