import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './DateInput.css';
import buttonIcon from './date.svg';

function DateInput(props) {
  const { name, value, placeholder, setValue } = props;

  return (
    <Fragment>
      <input 
        className="date-input__input"
        type="text" 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button className="date-input__button" type="button">
        <img className="date-input__button-icon" src={buttonIcon} width="100%" alt="button-date" />
      </button>
    </Fragment>
  )
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default DateInput;