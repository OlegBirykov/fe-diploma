//import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
//import buttonIcon from './date.svg';

function Calendar(props) {
  const { date/*, selectDate */} = props;

  return (
    <div className="calendar" tabIndex="9999">
      {date}
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  selectDate: PropTypes.func.isRequired
};

export default Calendar;