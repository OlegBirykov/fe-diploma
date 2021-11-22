import { useState } from 'react';
//import PropTypes from 'prop-types';
import './TravelDetailsPassengers.css';
import icons from 'components/Main/icons.svg';
import { separateThousands } from 'api/utils';

function TravelDetailsPassengers() {
//  const { isForward } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="travel-details-passengers"> 
      <div className="travel-details-passengers__collapsed">
        <svg className="travel-details-passengers__icon" width="26" height="26">
          <use xlinkHref={icons + '#passenger'} />
        </svg>
        <p className="travel-details-passengers__title">
          Пассажиры
        </p>
        <button className={'travel-details-passengers__button' + (isCollapsed ? '' : ' travel-details-passengers__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="travel-details-passengers__full">
          <div className="travel-details-passengers__item">
            <p className="travel-details-passengers__count">
              2 Взрослых
            </p>
            <p className="travel-details-passengers__price">
              {separateThousands(5840)}
            </p>
            <p className="travel-details-passengers__currency">
              &#x20bd;
            </p>
          </div>
          <div className="travel-details-passengers__item">
            <p className="travel-details-passengers__count">
              1 Ребенок
            </p>
            <p className="travel-details-passengers__price">
              {separateThousands(1920)}
            </p>
            <p className="travel-details-passengers__currency">
              &#x20bd;
            </p>
          </div>
        </div> 
      }
    </div>    
  )
}

//TravelDetailsPassengers.propTypes = {
//  isForward: PropTypes.bool.isRequired
//};

export default TravelDetailsPassengers;