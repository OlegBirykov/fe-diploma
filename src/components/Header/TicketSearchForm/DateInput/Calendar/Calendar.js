import PropTypes from 'prop-types';
import './Calendar.css';

function Calendar(props) {
//  const { date, selectDate } = props;

  return (
    <div className="calendar" tabIndex="9999">
      <div className="calendar__month">
        <div className="calendar__month-page calendar__month-page_dec">
        </div>
        <p className="calendar__month-name">
          Август
        </p>
        <div className="calendar__month-page calendar__month-page_inc">
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