import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './CoachProperties.css';
//import TrainSeatsHeader from './TrainSeatsHeader/TrainSeatsHeader';
import icons from 'components/Main/icons.svg';
import { separateThousands } from 'api/utils';

function CoachProperties(props) {
  const { coach, /*checkOption, checkSeat, */competitorCount } = props;

  const isTop = (coach.coach.class_type === 'second') || (coach.coach.class_type === 'third');

  const availableSeatsCount = { top: 0, bottom: 0 };
  coach.seats.forEach((item) => {
    if (item.available) {
      if (!isTop || item.index % 2) {
        availableSeatsCount.bottom++;
      } else {
        availableSeatsCount.top++;
      }
    }
  });

  let price1 = null;
  let price2 = null;
  switch (coach.coach.class_type) {
    case 'first':
      price1 = coach.coach.price;
      break;
    case 'second':
    case 'third':
      price1 = coach.coach.top_price;
      price2 = coach.coach.bottom_price;
      break;
    case 'fourth':
      price1 = coach.coach.bottom_price;
      break;
      default:
  }

  return (
    <div className="coach-properties">
      <div className="coach-properties__header"> 
        <div className="coach-properties__label">
          <p className="coach-properties__index">
            {coach.index > 9 ? coach.index : '0' + coach.index}
          </p>
        </div>
        <div className="coach-properties__seats">
          <p className="coach-properties__seats-all-title">
            Места<span className="coach-properties__seats-all-count">{availableSeatsCount.top + availableSeatsCount.bottom}</span>
          </p>
          {isTop && 
            <Fragment>
              <p className="coach-properties__seats-title">
                Верхние<span className="coach-properties__seats-count">{availableSeatsCount.top}</span>
              </p>
              <p className="coach-properties__seats-title">
                Нижние<span className="coach-properties__seats-count">{availableSeatsCount.bottom}</span>
              </p>
            </Fragment>
          }
        </div>
        <div className="coach-properties__prices">
          <p className="coach-properties__prices-title">
            Стоимость
          </p>
          <p className="coach-properties__price">
            {separateThousands(price1)}<span className="coach-properties__currency">&#x20bd;</span>
          </p>
          {price2 &&
            <p className="coach-properties__price">
              {separateThousands(price2)}<span className="coach-properties__currency">&#x20bd;</span>
            </p>
          }
        </div>
        <div className="coach-properties__service">
          <p className="coach-properties__service-title">
            Обслуживание<span className="coach-propertis__service-title_light">Фпк</span>
          </p>
          <ul className="coach-properties__options">
            <li className="coach-properties__button">
              <svg className="coach-properties__button-icon" width="21" height="21">
                <use xlinkHref={icons + '#conditioner'} />
              </svg> 
            </li>
            <li className="coach-properties__button">
              <svg className="coach-properties__button-icon" width="20" height="16">
                <use xlinkHref={icons + '#wifi'} />
              </svg> 
            </li>
            <li className="coach-properties__button">
              <svg className="coach-properties__button-icon" width="22" height="16">
                <use xlinkHref={icons + '#linens'} />
              </svg> 
            </li>
            <li className="coach-properties__button">
              <svg className="coach-properties__button-icon" width="20" height="18">
                <use xlinkHref={icons + '#food'} />
              </svg> 
            </li>
          </ul>
        </div>
      </div>  
      <div className="coach-properties__map-container">
        <p className="coach-properties__hint">
          {competitorCount} человек выбирают места в этом поезде
        </p>
      </div>
    </div>  
  )
}

CoachProperties.propTypes = {
  coach: PropTypes.object.isRequired,
  checkOption: PropTypes.func.isRequired,
  checkSeat: PropTypes.func.isRequired,
  competitorCount: PropTypes.number.isRequired
};

export default CoachProperties;