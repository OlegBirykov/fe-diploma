//import { useContext } from 'react'; 
//import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CoachProperties.css';
//import AppContext from 'AppContext';
//import TrainSeatsHeader from './TrainSeatsHeader/TrainSeatsHeader';
//import icons from 'components/Main/icons.svg';
//import { loadTrainsInfo } from 'api/http';


function CoachProperties(props) {
  const { coach/*, checkSeat */} = props;

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
    <div className="coach-properties">   
      <p>
        {coach.index}
      </p>
    </div>    
  )
}

CoachProperties.propTypes = {
  coach: PropTypes.object.isRequired,
  checkSeat: PropTypes.func.isRequired
};

export default CoachProperties;