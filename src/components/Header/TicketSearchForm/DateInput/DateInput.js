import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './DateInput.css';
import Calendar from './Calendar/Calendar';
import buttonIcon from './date.svg';

function DateInput(props) {
  const { name, value, placeholder, setValue, isMini, isDisabled } = props;

  const [showCalendar, setShowCalendar] = useState(false); 

  const changeText = (evt) => {
    if (isDisabled) {
      return;
    }

    const digitsArray = evt.target.value.replace(/[^\d]/g, '').split('', 8);
    if (digitsArray.length > 4) {
      digitsArray.splice(4, 0, '.');
    }
    if (digitsArray.length > 2) {
      digitsArray.splice(2, 0, '.');
    }
    setValue(digitsArray.join(''));
  }

  const removeFocus = (evt) => {
    if (evt.relatedTarget && evt.relatedTarget.className === 'calendar') {
      return;
    }
    setShowCalendar(false);   
  }

  const clickCalendarIcon = () => {
    if (isDisabled) {
      return;
    }
    setShowCalendar(!showCalendar);
  }

  const selectDate = (date) => {
    setValue(date);
    setShowCalendar(false);    
  }

  return (
    <Fragment>
      <input 
        className={'date-input__input' + (isMini ? ' date-input__input_mini' : '') + (isDisabled ? ' date-input__input_disabled' : '')}
        type="text" 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={changeText}
        onBlur={removeFocus}
      />
      <button className="date-input__button" type="button" onClick={clickCalendarIcon} onBlur={removeFocus}>
        <img className="date-input__button-icon" src={buttonIcon} width={isMini ? '20' : '30'} alt="button-date" />
      </button>
      {showCalendar && <Calendar date={value} selectDate={selectDate} />}
    </Fragment>
  )
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isMini: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default DateInput;