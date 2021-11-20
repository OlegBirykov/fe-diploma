//import PropTypes from 'prop-types';
import './TravelDetails.css';
import TravelDetailsTrain from './TravelDetailsTrain/TravelDetailsTrain';
import TravelDetailsPassengers from './TravelDetailsPassengers/TravelDetailsPassengers';


function TravelDetails() {

  return (
    <div className="travel-details"> 
      <h2 className="travel-details__title">
        Детали поездки
      </h2>
      <div className="travel-details__train">
        <TravelDetailsTrain isForward={true} />
      </div>
      <div className="travel-details__train">
        <TravelDetailsTrain isForward={false} />
      </div>
      <div className="travel-details__passengers">
        <TravelDetailsPassengers />
      </div>
      <div className="travel-details__total">
        Итог
      </div>
    </div>    
  )
}

//TravelDetails.propTypes = {
//  reloadInfo: PropTypes.func.isRequired
//};

export default TravelDetails;