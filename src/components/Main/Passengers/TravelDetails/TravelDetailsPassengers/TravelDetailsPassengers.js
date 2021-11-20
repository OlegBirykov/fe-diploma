import { useState } from 'react';
//import PropTypes from 'prop-types';
import './TravelDetailsPassengers.css';
import icons from 'components/Main/icons.svg';

function TravelDetailsPassengers() {
//  const { isForward } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="travel-details-train"> 
      <div className="travel-details-train__collapsed">
        <svg className="travel-details-train__arrow" width="32" height="26">
          <use xlinkHref={icons + '#arrow-negative'} />
        </svg>
        <p className="travel-details-train__title">
          Пассажиры
        </p>
        <button className={'travel-details-train__button' + (isCollapsed ? '' : ' travel-details-train__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="travel-details-train__full">
        </div> 
      }
    </div>    
  )
}

//TravelDetailsPassengers.propTypes = {
//  isForward: PropTypes.bool.isRequired
//};

export default TravelDetailsPassengers;