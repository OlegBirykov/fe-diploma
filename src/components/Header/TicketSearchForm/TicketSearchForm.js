import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './TicketSearchForm.css';
import buttonInvert from './button-invert.svg';

function TicketSearchForm(props) {
  const { classModificator } = props;
  const formClassName = 'ticket-search-form' + (classModificator ? ` ticket-search-form${classModificator}` : '');
  const labelClassName = 'ticket-search-form__label' + (classModificator ? ` ticket-search-form__label${classModificator}` : '');
  const inputClassName = 'ticket-search-form__input' + (classModificator ? ` ticket-search-form__input${classModificator}` : '');
  const buttonClassName = 'ticket-search-form__button' + (classModificator ? ` ticket-search-form__button${classModificator}` : '');

  const initialFormState = {
    from: '',
    to: '',
    leftDate: '',
    returnDate: ''
  };

  const [formState, setFormState] = useState(initialFormState);
  const [redirect, setRedirect] = useState(false);

  const fromChange = (evt) => {
    setFormState({ ...formState, from: evt.target.value });
    setRedirect(false);
  }; 

  const toChange = (evt) => {
    setFormState({ ...formState, to: evt.target.value });
    setRedirect(false);
  };

  const leftDateChange = (evt) => {
    setFormState({ ...formState, leftDate: evt.target.value });
    setRedirect(false);
  };

  const returnDateChange = (evt) => {
    setFormState({ ...formState, returnDate: evt.target.value });
    setRedirect(false);
  }; 

  const searchTickets = (evt) => {
    evt.preventDefault();
    setFormState(initialFormState);
    setRedirect(true);
  };

  return (
    <form className={formClassName} onSubmit={searchTickets}> 
      <label className={labelClassName}>
        Направление
        <input 
          className={`${inputClassName} ticket-search-form__input_location`}
          type="text" 
          name="from" 
          value={formState.from}
          placeholder="Откуда"
          onChange={fromChange}
        />
      </label>
      <button className="ticket-search-form__button-invert" type="button">
        <img className="ticket-search-form__image-invert" src={buttonInvert} width="100%" alt="button-invert" />
      </button>
      <input 
        className={`${inputClassName} ticket-search-form__input_location`}
        type="text" 
        name="to" 
        value={formState.to}
        placeholder="Куда"
        onChange={toChange}
      />
      <label className={labelClassName}>
        Дата
        <input 
          className={`${inputClassName} ticket-search-form__input_date`}
          type="text" 
          name="left-date" 
          value={formState.leftDate}
          placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
          onChange={leftDateChange}
        />
      </label>
      <input 
        className={`${inputClassName} ticket-search-form__input_date`}
        type="text" 
        name="return-date" 
        value={formState.returnDate}
        placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
        onChange={returnDateChange}
      />
      <button className={buttonClassName} type="submit">
        Найти билеты
      </button>
      {redirect && <Redirect to={process.env.PUBLIC_URL + '/run/seats'} />}
    </form>    
  )
}

TicketSearchForm.propTypes = {
  classModificator: PropTypes.string.isRequired,
};

export default TicketSearchForm;