//import { useContext } from 'react';
import './TrainsParams.css';
import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';

function TrainsParams() {

  return (
    <div className="trains-params"> 
      <section className="trains-params__dates">
      <label className="trains-params__date-title">
        Дата поездки
        <div className="trains-params__date-container">
          <DateInput name='left-date' value={null} placeholder='ДД ММ ГГГГ' setValue={null} />
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

export default TrainsParams;