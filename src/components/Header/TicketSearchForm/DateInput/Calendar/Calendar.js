import PropTypes from 'prop-types';
import './Calendar.css';

function Calendar(props) {
//  const { date/*, selectDate */} = props;

  return (
    <div className="calendar" tabIndex="9999">
      <div className="calendar__month">
        <div className="calendar__month-dec">
        </div>
        <p className="calendar__month-name">
          Август
        </p>
        <div className="calendar__month-inc">
        </div>
      </div>
      <div className="calendar__days-container">
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
        </p>
        <p className="calendar__day">
          00
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