import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import moment from 'moment';
import shortid from 'shortid';


function Calendar(props) {
  const { date, selectDate } = props;

  const format = 'DD.MM.YYYY';

  const [monthArray, setMonthArray] = useState([moment()]);
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

    const _monthIndex = _monthArray.findIndex((item) => date.slice(3) === item.format('MM.YYYY'));
    if (_monthIndex >= 0) {
      setMonthIndex(_monthIndex);
    }
  }, [date]);

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

  const getMonthName = () => {
    switch(monthArray[monthIndex].get('month')) {
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

  const daysArray = [];
  const dayPointer = moment(monthArray[monthIndex]);

  while (dayPointer.get('day') !== 1) {
    dayPointer.add(-1, 'days');
  }

  while (dayPointer.get('month') !== monthArray[monthIndex].get('month')) {
    daysArray.push({
      date: dayPointer.format(format),
      isOverMonth: true
    });
    dayPointer.add(1, 'days');
  }

  while (dayPointer.get('month') === monthArray[monthIndex].get('month')) {
    const isOverRange = (dayPointer.format('YYYYMMDD') < minDay.format('YYYYMMDD')) || (dayPointer.format('YYYYMMDD') > maxDay.format('YYYYMMDD'));
    daysArray.push({
      date: dayPointer.format(format), 
      isOverRange,
      isSunday: !dayPointer.get('day'),
      isSelected: (dayPointer.format(format) === date) && !isOverRange 
    });
    dayPointer.add(1, 'days');
  } 

  while (dayPointer.get('day') !== 1) {
    daysArray.push({
      date: dayPointer.format(format),  
      isOverMonth: true,
      isSunday: !dayPointer.get('day')   
    });
    dayPointer.add(1, 'days');
  } 

  const dayClick = (day) => {
    if (day.isOverMonth || day.isOverRange) {
      return;
    }
    selectDate(day.date);
  }

  return (
    <div className="calendar" tabIndex="9999">
      <div className="calendar__month">
        <div className={'calendar__month-page calendar__month-page_dec' + (monthDecEnabled ? '' : ' calendar__month-page_dec-disabled')} onClick={monthDec}>
        </div>
        <p className="calendar__month-name">
          {getMonthName()}
        </p>
        <div className={'calendar__month-page calendar__month-page_inc' + (monthIncEnabled ? '' : ' calendar__month-page_inc-disabled')} onClick={monthInc}>
        </div>
      </div>
      <div className="calendar__days-container">
        {daysArray.map((item) => {
          let className = 'calendar__day';

          if (item.isOverMonth) {
            className += ' calendar__day_over-month';
          }
          if (item.isOverRange) {
            className += ' calendar__day_over-range';
          }
          if (item.isSunday) {
            className += ' calendar__day_sunday';
          }
          if (item.isSelected) {
            className += ' calendar__day_selected';
          }

          return (
            <p className={className} key={shortid.generate()} onClick={() => dayClick(item)}>
              {item.date.slice(0, 2)}
            </p> 
          )         
        })}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  selectDate: PropTypes.func.isRequired
};

export default Calendar;