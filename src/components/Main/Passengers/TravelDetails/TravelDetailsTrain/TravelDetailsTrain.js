import PropTypes from 'prop-types';
import './TravelDetailsTrain.css';
import icons from 'components/Main/icons.svg';

function TravelDetailsTrain(props) {
  const { isForward, isCollapsed, setCollapsed } = props;

  return (
    <div className="travel-details-train"> 
      <div className="travel-details-train__collapsed">
        <svg className={'travel-details-train__arrow-neg' + (isForward ? '' : ' travel-details-train__arrow-neg_mirror')} width="32" height="26">
          <use xlinkHref={icons + '#arrow-negative'} />
        </svg>
        <p className="travel-details-train__title">
          {isForward ? 'Туда' : 'Обратно'}
        </p>
        <p className={'travel-details-train__title-date' + (isForward ? '' : ' travel-details-train__title-date_backward')}>
          01.01.2000
        </p>
        <button className={'travel-details-train__button' + (isCollapsed ? '' : ' travel-details-train__button_minus')} type="button" onClick={setCollapsed}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="travel-details-train__full">
          <div className="travel-details-train__number">
            <p className="travel-details-train__number-left">
              № Поезда
            </p>
            <p className="travel-details-train__number-right">
              1313
            </p>
          </div>
          <div className="travel-details-train__name">
            <p className="travel-details-train__name-left">
              Название
            </p>
            <p className="travel-details-train__name-right">
              Москва<br/>Санкт-Петербург
            </p> 
          </div>
          <p className="travel-details-train__duration">
            0 : 00
          </p>
          <div className="travel-details-train__times">
            <p className="travel-details-train__time-left">
              00:00
            </p>
            <svg className={'travel-details-train__arrow' + (isForward ? '' : ' travel-details-train__arrow_mirror')} width="30" height="20">
              <use xlinkHref={icons + '#arrow'} />
            </svg>
            <p className="travel-details-train__time-right">
              00:00
            </p>
          </div>
          <div className="travel-details-train__dates">
            <p className="travel-details-train__date-left">
              01.01.2021
            </p>
            <p className="travel-details-train__date-right">
              01.01.2021
            </p>
          </div>
          <div className="travel-details-train__cities">
            <p className="travel-details-train__city-left">
              Москва
            </p>
            <p className="travel-details-train__city-right">
              Санкт-Петербург
            </p>
          </div>
          <div className="travel-details-train__stations">
            <p className="travel-details-train__station-left">
              Ленинградский вокзал
            </p>
            <p className="travel-details-train__station-right">
              Московский вокзал
            </p>
          </div>
        </div> 
      }
    </div>    
  )
}

TravelDetailsTrain.propTypes = {
  isForward: PropTypes.bool.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired
};

export default TravelDetailsTrain;