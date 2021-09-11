import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';
import buttonIcon from './location.svg';

function LocationInput(props) {
  const { name, value, placeholder, setValue } = props;

  const [list] = useState([{ name: 'qqq', _id: 1 }, { name: '111', _id: 2 }]);
  const [isShowList, setIsShowList] = useState(false);

  const locationClick = () => {
    setIsShowList(!isShowList);
  }

  return (
    <Fragment>
      <input 
        className="location-input__input"
        type="text" 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button className="location-input__button" type="button" onClick={locationClick}>
        <img className="location-input__button-icon" src={buttonIcon} width="100%" alt="button-location" />
      </button>
      {isShowList &&
        <p className="location-input__hint">
          qqq
        </p>
      }
      {isShowList &&
        <ul className="location-input__list">
          {list.map((item) =>
            <li className="location-input__list-item" key={item._id}>
              {item.name}
            </li> 
          )}
        </ul>
      }
    </Fragment>
  )
}

LocationInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default LocationInput;