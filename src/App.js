import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './AppProvider';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Tickets from './components/Tickets';
import Passengers from './components/Passengers';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Completion from './components/Completion';

function App() {    
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/run/tickets'} component={Tickets} />
          <Route path={process.env.PUBLIC_URL + '/run/passengers'} component={Passengers} />
          <Route path={process.env.PUBLIC_URL + '/run/payment'} component={Payment} />
          <Route path={process.env.PUBLIC_URL + '/run/confirmation'} component={Confirmation} />
          <Route path={process.env.PUBLIC_URL + '/run/completion'} component={Completion} />
          <Route path={process.env.PUBLIC_URL} component={HomePage} />
        </Switch> 
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;