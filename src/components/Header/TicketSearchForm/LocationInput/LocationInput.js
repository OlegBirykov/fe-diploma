import { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';
import AppContext from 'AppContext';
import { cities } from 'api/http';
import buttonIcon from './location.svg';

function LocationInput(props) {
  const { name, value, placeholder, setValue } = props;

  const [citiesList] = useState([{ name: 'qqq', _id: 1 }, { name: '111', _id: 2 }]);
  const [isShowList, setIsShowList] = useState(false);
  const { setAnimation } = useContext(AppContext);

  const getCities = async (cityName) => {
    const response = await cities(setAnimation, cityName);    
    console.log(await response.json());
  }

  const locationClick = () => {
    if (!isShowList && value) {
      getCities(value);
    }
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
          {citiesList.map((item) =>
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