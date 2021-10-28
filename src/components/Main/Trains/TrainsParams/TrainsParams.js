import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TrainsParams.css';
import AppContext from 'AppContext';
import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';
import { dayInFirstPosition, /*dayInLastPosition*/ } from 'api/utils';

function TrainsParams(props) {
  const { reloadInfo } = props;

  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  const { bookingStage, trainsInfo } = useContext(AppContext);

  useEffect(() => {
    setDateStart(dayInFirstPosition(trainsInfo.params.dateStart));
  }, [trainsInfo.params.dateStart]);

  useEffect(() => {
    setDateEnd(dayInFirstPosition(trainsInfo.params.dateEnd));
  }, [trainsInfo.params.dateEnd]);

  const changeDateStart = (date) => {
    setDateStart(date);
    if(!date) {
      reloadInfo({
        dateStart: '',
        offset: 0
      });
    }
  }

  const changeDateEnd = (date) => {
    setDateEnd(date);
    if(!date) {
      reloadInfo({
        dateEnd: '',
        offset: 0
      });
    }   
  }

  return (
    <div className="trains-params"> 
      <section className="trains-params__dates">
      <label className="trains-params__date-title">
        Дата поездки
        <div className="trains-params__date-container">
          <DateInput 
            name='start-date' 
            value={dateStart} 
            placeholder='ДД ММ ГГГГ' 
            setValue={changeDateStart} 
            isMini={true}
            isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'forward')}
          />
        </div>    
      </label>
      <label className="trains-params__date-title">
        Дата возвращения
        <div className="trains-params__date-container">
          <DateInput 
            name='end-date' 
            value={dateEnd} 
            placeholder='ДД ММ ГГГГ' 
            setValue={changeDateEnd} 
            isMini={true}
            isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'backward')}
          />
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