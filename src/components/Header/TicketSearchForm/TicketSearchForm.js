import PropTypes from 'prop-types';
import './TicketSearchForm.css';

function TicketSearchForm(props) {
  const { classModificator } = props;
  const formClassName = 'ticket-search-form' + (classModificator ? ` ticket-search-form${classModificator}` : '');

  return (
    <form className={formClassName}>
      <label className="ticket-search-form__label">
        Направление
        <input 
          className="ticket-search-form__input" 
          type="text" 
          name="from" 
          placeholder="Откуда"
          required
        />
      </label>
      <input 
        className="ticket-search-form__input" 
        type="text" 
        name="to" 
        placeholder="Куда"
        required
      />
      <label className="ticket-search-form__label">
        Дата
        <input 
          className="ticket-search-form__input" 
          type="text" 
          name="left-date" 
          placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
          required
        />
      </label>
      <input 
        className="ticket-search-form__input" 
        type="text" 
        name="return-date" 
        placeholder={classModificator ? '' : 'ДД/ММ/ГГ'}
      />
      <button className="ticket-search-form__button" type="submit">
        Найти билеты
      </button>
    </form>    
  )
}

TicketSearchForm.propTypes = {
  classModificator: PropTypes.string.isRequired,
};

export default TicketSearchForm;