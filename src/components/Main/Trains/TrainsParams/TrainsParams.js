//import { useContext } from 'react';
import PropTypes from 'prop-types';
import './TrainsParams.css';
import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';

function TrainsParams() {

  return (
    <div className="trains-params"> 
      <section className="trains-params__dates">
      <label className="trains-params__date-title">
        Дата поездки
        <div className="trains-params__date-container">
          <DateInput name='left-date' value={null} placeholder='ДД ММ ГГГГ' setValue={null} isMini={true}/>
        </div>    
      </label>
      <label className="trains-params__date-title">
        Дата возвращения
        <div className="trains-params__date-container">
          <DateInput name='left-date' value={null} placeholder='ДД ММ ГГГГ' setValue={null} isMini={true}/>
        </div>    
      </label>
      </section>
      <section className="trains-params__options">
        Опции
      </section>
      <section className="trains-params__price">
        Цена
      </section>
      <section className="trains-params__times">
        Туда
      </section>
      <section className="trains-params__times">
        Обратно
      </section>
    </div>    
  )
}

TrainsParams.propTypes = {
  reloadInfo: PropTypes.func.isRequired
};

export default TrainsParams;