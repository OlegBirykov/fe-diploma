import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TrainsListItem.css';
//import OptionIcons from '../../OptionIcons/OptionIcons';
import icons from '../../OptionIcons/icons.svg';
import { secToHourMin } from 'api/utils';

function TrainsListItem(props) {
  const { trainInfo } = props;
  const { 
    from,
    to,
    train
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
          <p>
            {secToHourMin(from.datetime)}
          </p>
          <p>
            ччччччччччччч
          </p>
          <p>
            rtrjrjtrt
          </p>
        </div>
        <div className="trains-list-item__middle-way">
          <p>
            xx : xx
          </p>
          <p>
            &#x279e;
          </p>
        </div>
        <div className="trains-list-item__middle-to">
          <p>
            {secToHourMin(to.datetime)}
          </p>
          <p>
            ччччччччччччч
          </p>
          <p>
            rtrjrjtrt
          </p>
        </div>
      </div>
      <div className="trains-list-item__right">
        <button type="button" onClick={goToNextPage}>
          Выбрать места
        </button>
      </div>      
    </div>    
  )
}

TrainsListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired
};

export default TrainsListItem;