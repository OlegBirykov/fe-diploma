import { useState } from 'react';
import PropTypes from 'prop-types';
import './TravelDetailsTrain.css';
import icons from 'components/Main/icons.svg';

function TravelDetailsTrain(props) {
  const { isForward } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="travel-details-train"> 
      <div className="travel-details-train__collapsed">
        <svg className={'travel-details-train__arrow' + (isForward ? '' : ' travel-details-train__arrow_mirror')} width="32" height="26">
          <use xlinkHref={icons + '#arrow-negative'} />
        </svg>
        <p className="travel-details-train__title">
          {isForward ? 'Туда' : 'Обратно'}
        </p>
        <p className={'travel-details-train__title-date' + (isForward ? '' : ' travel-details-train__title-date_backward')}>
          01.01.2000
        </p>
        <button className={'travel-details-train__button' + (isCollapsed ? '' : ' travel-details-train__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="travel-details-train__full">
          Номер поезда
        </div> 
      }
    </div>    
  )
}

TravelDetailsTrain.propTypes = {
  isForward: PropTypes.bool.isRequired
};

export default TravelDetailsTrain;