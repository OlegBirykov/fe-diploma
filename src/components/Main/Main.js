import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from 'AppContext';

import LoadingAnimation from './LoadingAnimation/LoadingAnimation';
import HomePage from './HomePage/HomePage';
import Seats from './Seats/Seats';
import Passengers from './Passengers/Passengers';
import Payment from './Payment/Payment';
import Confirmation from './Confirmation/Confirmation';
import Completion from './Completion/Completion';

function Main() {
  const { animation } = useContext(AppContext);

  return animation.loading ?
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

export default Main;