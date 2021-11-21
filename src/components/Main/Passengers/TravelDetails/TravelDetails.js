//import PropTypes from 'prop-types';
import './TravelDetails.css';
import TravelDetailsTrain from './TravelDetailsTrain/TravelDetailsTrain';
import TravelDetailsPassengers from './TravelDetailsPassengers/TravelDetailsPassengers';
import { separateThousands } from 'api/utils';


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
        <p className="travel-details__total-title">
          Итог
        </p>
        <p className="travel-details__price">
          {separateThousands(7760)}
        </p>
        <p className="travel-details__currency">
          &#x20bd;
        </p>
      </div>
    </div>    
  )
}

//TravelDetails.propTypes = {
//  reloadInfo: PropTypes.func.isRequired
//};

export default TravelDetails;