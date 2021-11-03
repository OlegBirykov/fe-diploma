import { useContext } from 'react'; 
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TrainSeats.css';
import AppContext from 'AppContext';
import TrainSeatsHeader from './TrainSeatsHeader/TrainSeatsHeader';
import icons from 'components/Main/icons.svg';
import { loadTrainsInfo } from 'api/http';


function TrainSeats(props) {
  const { train, isForward } = props;

  const { setAnimation, setPopup, trainsInfo, setTrainsInfo } = useContext(AppContext);

  const history = useHistory();

  const returnToTrains = async (evt) => {
    evt.preventDefault();
    
    const result = await loadTrainsInfo(setAnimation, setPopup, setTrainsInfo, {
      ...trainsInfo.params, 
      offset: 0,
      direction: isForward ? 'forward' : 'backward'
    });

    if (result) {
      history.push(process.env.PUBLIC_URL + '/run/trains');
    }
  }

  return (
    <div className="train-seats">  
      <div className={'train-seats__return' + (isForward ? '' : ' train-seats__return_mirror')}>  
        <svg className={'train-seats__return-icon' + (isForward ? '' : ' train-seats__return-icon_mirror')} width="76" height="60">
          <use xlinkHref={icons + '#arrow-negative-big'} />
        </svg> 
        <Link to={process.env.PUBLIC_URL + '/run/trains'} className="train-seats__return-button" onClick={returnToTrains}> 
          Выбрать другой поезд
        </Link>
      </div> 
      <TrainSeatsHeader train={train} isForward={isForward} />  
    </div>    
  )
}

TrainSeats.propTypes = {
  train: PropTypes.object.isRequired,
  isForward: PropTypes.bool.isRequired
};

export default TrainSeats;