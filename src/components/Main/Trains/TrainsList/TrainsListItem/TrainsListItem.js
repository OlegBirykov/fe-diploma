import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TrainsListItem.css';
import TrainClassSeatsInfo from './TrainClassSeatsInfo/TrainClassSeatsInfo';
import OptionIcons from '../../OptionIcons/OptionIcons';
import icons from '../../OptionIcons/icons.svg';
import { secToHourMin, durationToHourMin } from 'api/utils';


function TrainsListItem(props) {
  const { trainInfo, isForward } = props;
  const { 
    from,
    to,
    train,
    duration,
    have_first_class,
 //   have_second_class,
 //   have_third_class,
 //   have_fourth_class,
    available_seats_info,
    price_info,
    have_wifi,
    is_express
  } = trainInfo.departure;

  const history = useHistory();

  const goToNextPage = () => {
    history.push(process.env.PUBLIC_URL + '/run/seats');
  }

  return (
    <div className="trains-list-item">
      <div className="trains-list-item__left">
        <div className="trains-list-item__icon-container">
          <svg className="trains-list-item__icon" width="44" height="52">
            <use xlinkHref={icons + '#train-face'} />
          </svg>
        </div>
        <p className="trains-list-item__train-number">
          {train._id}
        </p>
        <div className="trains-list-item__train-properties">
          <p className="trains-list-item__train-property">
            {from.city.name} &#x2192;
          </p>
          <p className="trains-list-item__train-property">
            {to.city.name}
          </p>
          <p className="trains-list-item__train-property">
            {train.name  && `\u00ab${train.name}\u00bb`}
          </p>
        </div>
      </div>
      <div className="trains-list-item__middle">
        <div className="trains-list-item__middle-from">
          <p className="trains-list-item__time">
            {secToHourMin(isForward ? from.datetime : to.datetime)}
          </p>
          <p className="trains-list-item__city">
            {isForward ? from.city.name : to.city.name}
          </p>
          <p className="trains-list-item__station">
            {isForward ? from.railway_station_name : to.railway_station_name}
          </p>
        </div>
        <div className="trains-list-item__middle-way">
          <p className="trains-list-item__duration">
            {durationToHourMin(duration)}
          </p>
          <p className="trains-list-item__arrow">
            {isForward ? '\u279e' : '\u279d'}
          </p>
        </div>
        <div className="trains-list-item__middle-to">
          <p className="trains-list-item__time">
            {secToHourMin(isForward ? to.datetime : from.datetime)}
          </p>
          <p className="trains-list-item__city">
            {isForward ? to.city.name : from.city.name}
          </p>
          <p className="trains-list-item__station">
            {isForward ? to.railway_station_name : from.railway_station_name}
          </p>
        </div>
      </div>
      <div className="trains-list-item__right">
        {have_first_class &&
          <div className="trains-list-item__train-class-seats-info">
            <TrainClassSeatsInfo 
              classNumber={1} 
              seatsCount={available_seats_info.first}
              priceInfo={price_info.first}
            />
          </div>
        }
        <div>
          <OptionIcons haveWifi={have_wifi} isExpress={is_express} includeFood={true} />
        </div>
        <button type="button" onClick={goToNextPage}>
          Выбрать места
        </button>
      </div>      
    </div>    
  )
}

TrainsListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired,
  isForward: PropTypes.bool.isRequired
};

export default TrainsListItem;