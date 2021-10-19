import PropTypes from 'prop-types';
import './LastRoutesItem.css';
import OptionIcons from '../../OptionIcons/OptionIcons';

function LastRoutesItem(props) {
  const { route } = props;
  const { 
    from,
    to,
    have_wifi,
    is_express,
    min_price
  } = route.departure;

  let price = min_price + '';
  if (price.length > 3) {
    price = price.slice(0, -3) + ' ' + price.slice(-3);
  }

  return (
    <div className="last-routes-item">
      <div className="last-routes-item__city-names">
        <p className="last-routes-item__city-name-from">
          {from.city.name}
        </p>
        <p className="last-routes-item__city-name-to">
          {to.city.name}
        </p>
      </div>
      <div className="last-routes-item__station-names">
        <p className="last-routes-item__station-name-from">
          {from.railway_station_name}
        </p>
        <p className="last-routes-item__station-name-to">
          {to.railway_station_name}
        </p>
      </div>
      <div className="last-routes-item__min-price">
        <OptionIcons haveWifi={have_wifi} isExpress={is_express} includeFood={false} />
        <p className="last-routes-item__before-price">
          от
        </p>
        <p className="last-routes-item__price">
          {price}
        </p>
        <p className="last-routes-item__after-price">
          &#x20bd;
        </p>
      </div>
    </div>    
  )
}

LastRoutesItem.propTypes = {
  route: PropTypes.object.isRequired
};

export default LastRoutesItem;