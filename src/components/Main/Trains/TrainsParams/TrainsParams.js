import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TrainsParams.css';
import AppContext from 'AppContext';
import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';
import OptionCheckBox from './OptionCheckBox/OptionCheckBox';
import { dayInFirstPosition, dayInLastPosition } from 'api/utils';

function TrainsParams(props) {
  const { reloadInfo } = props;

  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [haveFirstClass, setHaveFirstClass] = useState(false);
  const [haveSecondClass, setHaveSecondClass] = useState(false);
  const [haveThirdClass, setHaveThirdClass] = useState(false);
  const [haveFourthClass, setHaveFourthClass] = useState(false);
  const [haveWifi, setHaveWifi] = useState(false);
  const [isExpress, setIsExpress] = useState(false);

  const { bookingStage, trainsInfo } = useContext(AppContext);

  useEffect(() => {
    setDateStart(dayInFirstPosition(trainsInfo.params.dateStart));
  }, [trainsInfo.params.dateStart]);

  useEffect(() => {
    setDateEnd(dayInFirstPosition(trainsInfo.params.dateEnd));
  }, [trainsInfo.params.dateEnd]);

  useEffect(() => {
    setHaveFirstClass(!!trainsInfo.params.haveFirstClass);
  }, [trainsInfo.params.haveFirstClass]);

  useEffect(() => {
    setHaveSecondClass(!!trainsInfo.params.haveSecondClass);
  }, [trainsInfo.params.haveSecondClass]);

  useEffect(() => {
    setHaveThirdClass(!!trainsInfo.params.haveThirdClass);
  }, [trainsInfo.params.haveThirdClass]);

  useEffect(() => {
    setHaveFourthClass(!!trainsInfo.params.haveFourthClass);
  }, [trainsInfo.params.haveFourthClass]);

  useEffect(() => {
    setHaveWifi(!!trainsInfo.params.haveWifi);
  }, [trainsInfo.params.haveWifi]);

  useEffect(() => {
    setIsExpress(!!trainsInfo.params.isExpress);
  }, [trainsInfo.params.isExpress]);

  const changeDateStart = (date) => {
    setDateStart(date);
    if(!date) {
      reloadInfo({
        dateStart: '',
        offset: 0
      });
    } else if (date.length === 10) {
      reloadInfo({
        dateStart: dayInLastPosition(date),
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
    } else if (date.length === 10) {
      reloadInfo({
        dateEnd: dayInLastPosition(date),
        offset: 0
      }); 
    }  
  }

  const changeHaveFirstClass = (value) => {
    setHaveFirstClass(value);
    reloadInfo({
      haveFirstClass: value,
      offset: 0
    });    
  }

  const changeHaveSecondClass = (value) => {
    setHaveSecondClass(value);
    reloadInfo({
      haveSecondClass: value,
      offset: 0
    });    
  }

  const changeHaveThirdClass = (value) => {
    setHaveThirdClass(value);
    reloadInfo({
      haveThirdClass: value,
      offset: 0
    });    
  }

  const changeHaveFourthClass = (value) => {
    setHaveFourthClass(value);
    reloadInfo({
      haveFourthClass: value,
      offset: 0
    });    
  }

  const changeHaveWifi = (value) => {
    setHaveWifi(value);
    reloadInfo({
      haveWifi: value,
      offset: 0
    });    
  }

  const changeIsExpress = (value) => {
    setIsExpress(value);
    reloadInfo({
      isExpress: value,
      offset: 0
    });    
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
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={haveSecondClass} setValue={changeHaveSecondClass} />
        </div>
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={haveThirdClass} setValue={changeHaveThirdClass} />
        </div>
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={haveFourthClass} setValue={changeHaveFourthClass} />
        </div>
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={haveFirstClass} setValue={changeHaveFirstClass} />
        </div>
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={haveWifi} setValue={changeHaveWifi} />
        </div>
        <div className="trains-params__option">
          <OptionCheckBox iconName='' value={isExpress} setValue={changeIsExpress} />
        </div>
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