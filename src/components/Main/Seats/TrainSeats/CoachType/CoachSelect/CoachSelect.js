//import { useContext } from 'react'; 
//import { useHistory, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './CoachSelect.css';
//import AppContext from 'AppContext';
//import TrainSeatsHeader from './TrainSeatsHeader/TrainSeatsHeader';
//import icons from 'components/Main/icons.svg';
//import { loadTrainsInfo } from 'api/http';


function CoachSelect() {
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
    <div className="coach-select">   
      <h3>
        выбор вагонов
      </h3>
    </div>    
  )
}

//CoachSelect.propTypes = {
//  trainInfo: PropTypes.object.isRequired,
//  isForward: PropTypes.bool.isRequired
//};

export default CoachSelect;