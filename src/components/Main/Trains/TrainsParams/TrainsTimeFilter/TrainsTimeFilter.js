import { useState } from 'react';
import PropTypes from 'prop-types';
import './TrainsTimeFilter.css';
import arrow from './arrow.svg';

function TrainsTimeFilter(props) {
  const { /*times, setTimes, changeTimes, */isStart/*, isDisabled */} = props;
//  const { departureHourFrom, departureHourTo, endArrivalHourFrom, endArrivalHourTo } = times;
//  const { setDepartureHourFrom, setDepartureHourTo, setArrivalHourFrom, setArrivalHourTo } = setTimes;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="trains-time-filter"> 
      <div className="trains-time-filter__collapsed">
        <img className={'trains-time-filter__arrow' + (isStart ? '' : ' trains-time-filter__arrow_mirror')} src={arrow} width="32" height="26" alt="arrow"/>
        <p className="trains-time-filter__title">
          {isStart ? 'Туда' : 'Обратно'}
        </p>
        <button className={'trains-time-filter__button' + (isCollapsed ? '' : ' trains-time-filter__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="trains-time-filter__collapsed">
          Мы открылись
        </div> 
      }
    </div>    
  )
}

TrainsTimeFilter.propTypes = {
  times: PropTypes.objectOf(PropTypes.number),
  setTimes: PropTypes.objectOf(PropTypes.func),
  changeTimes: PropTypes.func.isRequired,
  isStart: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default TrainsTimeFilter;