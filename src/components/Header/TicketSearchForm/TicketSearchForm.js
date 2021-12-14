import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TicketSearchForm.css';
import AppContext from 'AppContext';
import LocationInput from './LocationInput/LocationInput';
import DateInput from './DateInput/DateInput';
import { errorBox, httpErrorBox } from 'api/gui';
import { readDate } from 'api/utils';
import { loadCities } from 'api/http/loadCities';
import { loadTrainsInfo } from 'api/http/loadTrainsInfo';
import buttonInvert from './button-invert.svg';

function TicketSearchForm(props) {
  const { classModificator } = props;
  const formClassName = 'ticket-search-form' + (classModificator ? ` ticket-search-form${classModificator}` : '');
  const labelClassName = 'ticket-search-form__label' + (classModificator ? ` ticket-search-form__label${classModificator}` : '');
  const buttonClassName = 'ticket-search-form__button' + (classModificator ? ` ticket-search-form__button${classModificator}` : '');

  const initialFormState = {
    from: '',
    to: '',
    dateStart: '',
    dateEnd: ''
  };

  const [formState, setFormState] = useState(initialFormState);
  const { setPopup, setAnimation, setTrainsInfo, setForwardTrain, setBackwardTrain } = useContext(AppContext);
  const history = useHistory();

  const fromChange = (value) => {
    setFormState({ ...formState, from: value });
  }; 

  const toChange = (value) => {
    setFormState({ ...formState, to: value });
  };

  const leftDateChange = (value) => {
    setFormState({ ...formState, dateStart: value });
  };

  const returnDateChange = (value) => {
    setFormState({ ...formState, dateEnd: value });
  }; 

  const invertDirection = () => {
    const from = formState.to;
    const to = formState.from;
    setFormState({ ...formState, from, to });
  }

  const getCityId = async (cityName, field) => {
    const name = cityName.trim();
    const response = await loadCities(setAnimation, name); 
    if (!response.ok) {
      httpErrorBox(setPopup, response);
      return null; 
    }

    let list;
    try {
      list = await response.json();
    } catch(e) {
      return null;
    }  

    if (!list.length) {
      errorBox(setPopup, [
        'Ошибка ввода направления',
        `Значение в поле "${field}" отстутствует в списке станций`
      ]);
      return null;        
    }

    const city = list.find((item) => item.name === name);
    if (!city) {
      errorBox(setPopup, [
        'Ошибка ввода направления',
        `Значение в поле "${field}" отстутствует в списке станций`
      ]);
      return null;        
    }

    return city._id;
  }

  const searchTickets = async (evt) => {
    evt.preventDefault();
    const date = readDate(formState.dateStart, formState.dateEnd);
    if (!date.status) {
      errorBox(setPopup, date.errorText);
      return;
    }
    const dateStart = date.date1;
    const dateEnd = date.date2;

    if (!formState.from) {
      errorBox(setPopup, [
        'Ошибка ввода направления',
        'Поле "Откуда" обязательно для заполнения'
      ]);
      return;
    }

    if (!formState.to) {
      errorBox(setPopup, [
        'Ошибка ввода направления',
        'Поле "Куда" обязательно для заполнения'
      ]);
      return;
    }
   
    const fromCityId = await getCityId(formState.from, 'Откуда');
    if (fromCityId === null) {
      return;
    }
    const toCityId = await getCityId(formState.to, 'Куда');
    if (toCityId === null) {
      return;
    }

    if (fromCityId === toCityId) {
      errorBox(setPopup, [
        'Ошибка ввода направления',
        'Значения полей "Откуда" и "Куда" не должны быть одинаковыми'
      ]);
      return;   
    }

    const result = await loadTrainsInfo(setAnimation, setPopup, setTrainsInfo, {
      fromCityId, 
      toCityId, 
      dateStart, 
      dateEnd,
      limit: 5,
      offset: 0,
      sort: 'date',
      direction: 'forward'
    });
    
    if (!result) {
      return;
    }

    history.push(process.env.PUBLIC_URL + '/run/trains');
    setFormState(initialFormState);
    setForwardTrain(null);
    setBackwardTrain(null);
    localStorage.setItem('forwardTrain', null);
    localStorage.setItem('backwardTrain', null);
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
          <DateInput name='start-date' value={formState.dateStart} placeholder='ДД ММ ГГГГ' setValue={leftDateChange} />
        </div>    
      </label>
      <div className="ticket-search-form__input-container">
        <DateInput name='end-date' value={formState.dateEnd} placeholder='ДД ММ ГГГГ' setValue={returnDateChange} />
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