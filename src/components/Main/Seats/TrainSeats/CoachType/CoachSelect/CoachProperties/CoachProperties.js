import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './CoachProperties.css';
import icons from 'components/Main/icons.svg';
import { separateThousands } from 'api/utils';

function CoachProperties(props) {
  const { coach, checkOption, /*checkSeat, */competitorCount } = props;

  const [showHints, setShowHints] = useState([false, false, false, false]);
 
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

  const buttonClassName = "coach-properties__button";
  const iconClassName = "coach-properties__button-icon";

  let conditionerClassName = buttonClassName;
  let conditionerIconClassName = iconClassName;
  if (coach.coach.have_air_conditioning) {
    conditionerClassName += ` ${buttonClassName}_included`;
  }

  let wifiClassName = buttonClassName;
  let wifiIconClassName = iconClassName;
  if (coach.coach.have_wifi) {
    wifiClassName += ` ${buttonClassName}_enabled`;
    wifiIconClassName += ` ${iconClassName}_enabled`;
  }
  if (coach.addWifi) {
    wifiClassName += ` ${buttonClassName}_selected`;
    wifiIconClassName += ` ${iconClassName}_selected`;
  } 
  
  let linensClassName = buttonClassName;
  let linensIconClassName = iconClassName;
  if (coach.coach.class_type !== 'fourth') {
    if (coach.coach.is_linens_included) {
      linensClassName += ` ${buttonClassName}_included`;
    } else { 
      linensClassName += ` ${buttonClassName}_enabled`;
      linensIconClassName += ` ${iconClassName}_enabled`;

      if (coach.addLinens) {
        linensClassName += ` ${buttonClassName}_selected`;
        linensIconClassName += ` ${iconClassName}_selected`;
      }  
    }
  }

  let foodClassName = buttonClassName;
  let foodIconClassName = iconClassName;
  if (coach.coach.have_food) {
    foodClassName += ` ${buttonClassName}_enabled`;
    foodIconClassName += ` ${iconClassName}_enabled`;
  }
  if (coach.addFood) {
    foodClassName += ` ${buttonClassName}_selected`;
    foodIconClassName += ` ${iconClassName}_selected`;
  } 

  const wifiChange = () => {
    if (coach.coach.have_wifi) {
      checkOption(coach.index, 'addWifi');
    }
  }

  const linensChange = () => {
    if (coach.coach.class_type === 'fourth' || coach.coach.is_linens_included) {
      return;
    }
    checkOption(coach.index, 'addLinens');
  }

  const foodChange = () => {
    if (coach.coach.have_food) {
      checkOption(coach.index, 'addFood');
    }
  }

  const changeHint = (optionIndex, isShow) => {
    const hints = [...showHints];
    hints[optionIndex] = isShow;
    setShowHints(hints); 
  }

  const buttonMouseOver = (optionIndex) => {
    changeHint(optionIndex, true);
  }

  const buttonMouseOut = (optionIndex) => {
    changeHint(optionIndex, false);
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
            <li className={conditionerClassName} onMouseOver={() => buttonMouseOver(0)} onMouseOut={() => buttonMouseOut(0)}>
              <svg className={conditionerIconClassName} width="21" height="21">
                <use xlinkHref={icons + '#conditioner'} />
              </svg> 
              {showHints[0] &&
                <p className="coach-properties__button-hint">
                  Кондиционер
                </p>
              }
            </li>
            <li className={wifiClassName} onClick={wifiChange} onMouseOver={() => buttonMouseOver(1)} onMouseOut={() => buttonMouseOut(1)}>
              <svg className={wifiIconClassName} width="20" height="16">
                <use xlinkHref={icons + '#wifi'} />
              </svg> 
              {showHints[1] &&
                <p className="coach-properties__button-hint">
                  WI-FI
                </p>
              }
            </li>
            <li className={linensClassName} onClick={linensChange} onMouseOver={() => buttonMouseOver(2)} onMouseOut={() => buttonMouseOut(2)}>
              <svg className={linensIconClassName} width="22" height="16">
                <use xlinkHref={icons + '#linens'} />
              </svg> 
              {showHints[2] &&
                <p className="coach-properties__button-hint">
                  Бельё
                </p>
              }
            </li>
            <li className={foodClassName} onClick={foodChange} onMouseOver={() => buttonMouseOver(3)} onMouseOut={() => buttonMouseOut(3)}>
              <svg className={foodIconClassName} width="20" height="18">
                <use xlinkHref={icons + '#food'} />
              </svg> 
              {showHints[3] &&
                <p className="coach-properties__button-hint">
                  Питание
                </p>
              }
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