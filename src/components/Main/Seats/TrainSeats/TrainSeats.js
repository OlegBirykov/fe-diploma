//import { useContext } from 'react'; 
//import { useHistory } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './TrainSeats.css';
//import AppContext from 'AppContext';
//import TrainClassSeatsInfo from './TrainClassSeatsInfo/TrainClassSeatsInfo';
//import OptionIcons from '../../OptionIcons/OptionIcons';
//import icons from 'components/Main/icons.svg';
//import { secToHourMin, durationToHourMin } from 'api/utils';

function TrainSeats() {
//  const { trainInfo, isForward, reloadInfo, loadSeats } = props;
//  const { 
//    from,
//    to,
//    train,
//    duration,
//    have_first_class,
//    have_second_class,
//    have_third_class,
//    have_fourth_class,
//    available_seats_info,
//    price_info,
//    have_wifi,
//    is_express,
//    _id
//  } = trainInfo.departure;

//  const { forwardTrain, setForwardTrain, backwardTrain, setBackwardTrain } = useContext(AppContext);

//  const history = useHistory();

//  const goToNextPage = () => {
//    const trainInfoString = JSON.stringify(trainInfo.departure);

//    if (isForward) {
//      setForwardTrain(JSON.parse(trainInfoString));
//      localStorage.setItem('forwardTrain', trainInfoString);
//    } else {
//      setBackwardTrain(JSON.parse(trainInfoString));
//      localStorage.setItem('backwardTrain', trainInfoString);
//    }

//    if (isForward && !backwardTrain) {
//      reloadInfo({ 
//        direction: 'backward',
//        offset: 0
//      });    
//    } else {
//      if (isForward) {
//        loadSeats( _id, backwardTrain._id );
//      } else {
//        loadSeats( forwardTrain._id, _id );  
//      }
//      history.push(process.env.PUBLIC_URL + '/run/seats');
//    }
//  }

  return (
    <div className="train-seats">   
    </div>    
  )
}

//TrainSeats.propTypes = {
//  trainInfo: PropTypes.object.isRequired,
// isForward: PropTypes.bool.isRequired,
//  reloadInfo: PropTypes.func.isRequired,
//  loadSeats: PropTypes.func.isRequired
//};

export default TrainSeats;