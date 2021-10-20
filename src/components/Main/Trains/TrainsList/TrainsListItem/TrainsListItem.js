import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TrainsListItem.css';
//import OptionIcons from '../../OptionIcons/OptionIcons';
import icons from '../../OptionIcons/icons.svg';

function TrainsListItem(props) {
  const { trainInfo } = props;
  const { 
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
        <p>
        </p>
        <div>
          <p>
          </p>
          <p>
          </p>
          <p>
            {train.name}
          </p>
        </div>
      </div>
      <div className="trains-list-item__middle">
        середина
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