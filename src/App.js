import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './AppProvider';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

import HomePage from './components/pages/HomePage/HomePage';
import Seats from './components/pages/Seats/Seats';
import Passengers from './components/pages/Passengers/Passengers';
import Payment from './components/pages/Payment/Payment';
import Confirmation from './components/pages/Confirmation/Confirmation';
import Completion from './components/pages/Completion/Completion';
import NoPage from './components/pages/NoPage/NoPage';

function App() {    
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/run/seats'} component={Seats} />
          <Route path={process.env.PUBLIC_URL + '/run/passengers'} component={Passengers} />
          <Route path={process.env.PUBLIC_URL + '/run/payment'} component={Payment} />
          <Route path={process.env.PUBLIC_URL + '/run/confirmation'} component={Confirmation} />
          <Route path={process.env.PUBLIC_URL + '/run/completion'} component={Completion} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={NoPage} />
          <Route path={process.env.PUBLIC_URL + '/help'} component={NoPage} />
          <Route path={process.env.PUBLIC_URL + '/feedbacks'} component={NoPage} />
          <Route path={process.env.PUBLIC_URL + '/contacts'} component={NoPage} />
          <Route path={process.env.PUBLIC_URL} component={HomePage} />
        </Switch> 
        <Footer />
        <Popup />
      </Router>
    </AppProvider>
  );
}

export default App;