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

  const [redirect, setRedirect] = useState(false);

  const formSubmit = (evt) => {
    evt.preventDefault();
    setRedirect(true);
  }

  return (
    <form className={formClassName} onSubmit={formSubmit}> 
      <label className={labelClassName}>
        Направление
        <input 
          className={inputClassName}
          type="text" 
          name="from" 
          placeholder="Откуда"
          required
        />
      </label>
      <button className="ticket-search-form__button-invert" type="button">
        <img className="ticket-search-form__image-invert" src={buttonInvert} width="100%" alt="button-invert" />
      </button>
      <input 
        className={inputClassName}
        type="text" 
        name="to" 
        placeholder="Куда"
        required
      />
      <label className={labelClassName}>
        Дата
        <input 
          className={inputClassName}
          type="text" 
          name="left-date" 
          placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
          required
        />
      </label>
      <input 
        className={inputClassName}
        type="text" 
        name="return-date" 
        placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
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