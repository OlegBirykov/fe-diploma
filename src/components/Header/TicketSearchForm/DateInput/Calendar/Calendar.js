import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import moment from 'moment';

function Calendar(props) {
  const { date, selectDate } = props;

  const format = 'DD.MM.YYYY';
  const curSelectedDay = moment(date, format);

  const [monthArray, setMonthArray] = useState([]);
  const [monthIndex, setMonthIndex] = useState(0);
  const [minDay, setMinDay] = useState(moment());
  const [maxDay, setMaxDay] = useState(moment());

  useEffect(() => {
    const now = moment();
    const _minDay = moment(now).add(1, 'days');
    const _maxDay = moment(now).add(90, 'days');
    setMinDay(_minDay);
    setMaxDay(_maxDay);
  
    const minMonthFirstDay = moment(_minDay).set('date', 1);
    const maxMonthFirstDay = moment(_maxDay).set('date', 1);
  
    const _monthArray = [minMonthFirstDay];
    let index = 0;
    while (_monthArray[index].get('month') !== maxMonthFirstDay.get('month')) {
      _monthArray.push(moment(_monthArray[index]).add(1, 'month'));
      index++;
    }
    setMonthArray(_monthArray);
  }, []);

  const monthDecEnabled = monthIndex > 0;
  const monthIncEnabled = monthIndex < monthArray.length - 1;

  const monthDec = () => {
    if (monthDecEnabled) {
      setMonthIndex(monthIndex - 1);
    }
  }

  const monthInc = () => {
    if (monthIncEnabled) {
      setMonthIndex(monthIndex + 1);
    }
  } 

  const monthName = (number) => {
    switch(number) {
      case 0:
        return 'Январь';
      case 1:
        return 'Февраль';
      case 2:
        return 'Март';
      case 3:
        return 'Апрель';  
      case 4:
        return 'Май';
      case 5:
        return 'Июнь';
      case 6:
        return 'Июль';
      case 7:
        return 'Август';
      case 8:
        return 'Сентябрь';
      case 9:
        return 'Октябрь';
      case 10:
        return 'Ноябрь';
      case 11:
        return 'Декабрь';  
      default: 
        return '';           
    }
  }

  console.log(selectDate, curSelectedDay, minDay, maxDay); // убрали предупреждения

  return (
    <div className="calendar" tabIndex="9999">
      <div className="calendar__month">
        <div className={'calendar__month-page calendar__month-page_dec' + (monthDecEnabled ? '' : ' calendar__month-page_dec-disabled')} onClick={monthDec}>
        </div>
        <p className="calendar__month-name">
          {monthName(monthArray[monthIndex].get('month'))}
        </p>
        <div className={'calendar__month-page calendar__month-page_inc' + (monthIncEnabled ? '' : ' calendar__month-page_inc-disabled')} onClick={monthInc}>
        </div>
      </div>
      <div className="calendar__days-container">
        <p className="calendar__day calendar__day_over-month">
          30
        </p>
        <p className="calendar__day calendar__day_over-month">
          31
        </p>
        <p className="calendar__day calendar__day_over-limit">
          1
        </p>
        <p className="calendar__day calendar__day_over-limit">
          2
        </p>
        <p className="calendar__day calendar__day_over-limit">
          3
        </p>
        <p className="calendar__day calendar__day_over-limit">
          4
        </p>
        <p className="calendar__day calendar__day_over-limit calendar__day_sunday">
          5
        </p>
        <p className="calendar__day calendar__day_over-limit">
          6
        </p>
        <p className="calendar__day">
          7
        </p>
        <p className="calendar__day">
          8
        </p>
        <p className="calendar__day">
          9
        </p>
        <p className="calendar__day calendar__day_selected">
          10
        </p>
        <p className="calendar__day">
          11
        </p>
        <p className="calendar__day calendar__day_sunday">
          12
        </p>
        <p className="calendar__day calendar__day_over-limit">
          6
        </p>
        <p className="calendar__day">
          7
        </p>
        <p className="calendar__day">
          8
        </p>
        <p className="calendar__day">
          9
        </p>
        <p className="calendar__day calendar__day_selected">
          10
        </p>
        <p className="calendar__day">
          11
        </p>
        <p className="calendar__day calendar__day_sunday">
          12
        </p>
        <p className="calendar__day calendar__day_over-limit">
          6
        </p>
        <p className="calendar__day">
          7
        </p>
        <p className="calendar__day">
          8
        </p>
        <p className="calendar__day">
          9
        </p>
        <p className="calendar__day calendar__day_selected">
          10
        </p>
        <p className="calendar__day">
          11
        </p>
        <p className="calendar__day calendar__day_sunday">
          12
        </p>
        <p className="calendar__day calendar__day_over-limit">
          6
        </p>
        <p className="calendar__day">
          7
        </p>
        <p className="calendar__day">
          8
        </p>
        <p className="calendar__day">
          9
        </p>
        <p className="calendar__day calendar__day_selected">
          10
        </p>
        <p className="calendar__day">
          11
        </p>
        <p className="calendar__day calendar__day_sunday">
          12
        </p>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  selectDate: PropTypes.func.isRequired
};

export default Calendar;