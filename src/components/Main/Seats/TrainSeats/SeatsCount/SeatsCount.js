//import { useContext } from 'react'; 
//import { useHistory, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './SeatsCount.css';
//import AppContext from 'AppContext';
//import TrainSeatsHeader from './TrainSeatsHeader/TrainSeatsHeader';
//import icons from 'components/Main/icons.svg';
//import { loadTrainsInfo } from 'api/http';


function SeatsCount() {
//  const { trainInfo, isForward } = props;

//  const { setAnimation, setPopup, trainsInfo, setTrainsInfo } = useContext(AppContext);

//  const history = useHistory();

//  const returnToTrains = async (evt) => {
//    evt.preventDefault();
    
//    const result = await loadTrainsInfo(setAnimation, setPopup, setTrainsInfo, {
//      ...trainsInfo.params, 
//      offset: 0,
//      direction: isForward ? 'forward' : 'backward'
//    });

//    if (result) {
//      history.push(process.env.PUBLIC_URL + '/run/trains');
//    }
//  }

  return (
    <div className="seats-count">   
      <h3>
        Количество билетов
      </h3>
    </div>    
  )
}

//SeatsCount.propTypes = {
//  trainInfo: PropTypes.object.isRequired,
//  isForward: PropTypes.bool.isRequired
//};

export default SeatsCount;