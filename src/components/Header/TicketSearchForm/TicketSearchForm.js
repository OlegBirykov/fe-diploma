import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TicketSearchForm.css';
import AppContext from 'AppContext';
import LocationInput from './LocationInput/LocationInput';
import DateInput from './DateInput/DateInput';
import { errorBox } from 'api/gui';
import { readDate } from 'api/utils';
import buttonInvert from './button-invert.svg';

function TicketSearchForm(props) {
  const { classModificator } = props;
  const formClassName = 'ticket-search-form' + (classModificator ? ` ticket-search-form${classModificator}` : '');
  const labelClassName = 'ticket-search-form__label' + (classModificator ? ` ticket-search-form__label${classModificator}` : '');
  const buttonClassName = 'ticket-search-form__button' + (classModificator ? ` ticket-search-form__button${classModificator}` : '');

  const initialFormState = {
    from: '',
    to: '',
    leftDate: '',
    returnDate: ''
  };

  const [formState, setFormState] = useState(initialFormState);
  const { setPopup } = useContext(AppContext);
  const history = useHistory();

  const fromChange = (value) => {
    setFormState({ ...formState, from: value });
  }; 

  const toChange = (value) => {
    setFormState({ ...formState, to: value });
  };

  const leftDateChange = (value) => {
    setFormState({ ...formState, leftDate: value });
  };

  const returnDateChange = (value) => {
    setFormState({ ...formState, returnDate: value });
  }; 

  const invertDirection = () => {
    const from = formState.to;
    const to = formState.from;
    setFormState({ ...formState, from, to });
  }

  const searchTickets = (evt) => {
    evt.preventDefault();
    const date = readDate(formState.leftDate, formState.returnDate);
    console.log(date);
    if (!date.status) {
      errorBox(setPopup, date.errorText);
      return;
    }

    setFormState(initialFormState);
    history.push(process.env.PUBLIC_URL + '/run/trains');
  };

  return (
    <form className={formClassName} onSubmit={searchTickets}> 
      <label className={labelClassName}>
        Направление
        <div className="ticket-search-form__input-container">
          <LocationInput name='from' value={formState.from} placeholder='Откуда' setValue={fromChange} />
        </div>
      </label>
      <button className="ticket-search-form__button-invert" type="button" onClick={invertDirection}>
        <img className="ticket-search-form__image-invert" src={buttonInvert} width="100%" alt="button-invert" />
      </button>
      <div className="ticket-search-form__input-container">
        <LocationInput name='to' value={formState.to} placeholder='Куда' setValue={toChange} />
      </div>
      <label className={labelClassName}>
        Дата
        <div className="ticket-search-form__input-container">
          <DateInput name='left-date' value={formState.leftDate} placeholder='ДД ММ ГГГГ' setValue={leftDateChange} />
        </div>    
      </label>
      <div className="ticket-search-form__input-container">
        <DateInput name='return-date' value={formState.returnDate} placeholder='ДД ММ ГГГГ' setValue={returnDateChange} />
      </div> 
      <button className={buttonClassName} type="submit">
        Найти билеты
      </button>
    </form>    
  )
}

TicketSearchForm.propTypes = {
  classModificator: PropTypes.string.isRequired,
};

export default TicketSearchForm;