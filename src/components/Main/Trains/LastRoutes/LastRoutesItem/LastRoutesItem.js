import PropTypes from 'prop-types';
import './LastRoutesItem.css';

function LastRoutesItem(props) {
  const { route } = props;
  const { 
    from,
    to 
  } = route.departure;

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
    </div>    
  )
}

LastRoutesItem.propTypes = {
  route: PropTypes.object.isRequired
};

export default LastRoutesItem;