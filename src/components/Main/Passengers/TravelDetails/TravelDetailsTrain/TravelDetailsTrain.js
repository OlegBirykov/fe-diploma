import { useState } from 'react';
import PropTypes from 'prop-types';
import './TravelDetailsTrain.css';
import icons from 'components/Main/icons.svg';

function TravelDetailsTrain(props) {
  const { isForward } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="trains-time-filter"> 
      <div className={'trains-time-filter__collapsed' + (isCollapsed ? '' : ' trains-time-filter__collapsed_exp')}>
        <svg className={'trains-time-filter__arrow' + (isForward ? '' : ' trains-time-filter__arrow_mirror')} width="32" height="26">
          <use xlinkHref={icons + '#arrow-negative'} />
        </svg>
        <p className="trains-time-filter__title">
          {isForward ? 'Туда' : 'Обратно'}
        </p>
        <button className={'trains-time-filter__button' + (isCollapsed ? '' : ' trains-time-filter__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="trains-time-filter__full">
        </div> 
      }
    </div>    
  )
}

TravelDetailsTrain.propTypes = {
  isForward: PropTypes.bool.isRequired
};

export default TravelDetailsTrain;