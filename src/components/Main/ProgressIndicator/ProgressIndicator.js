import PropTypes from 'prop-types';
import './ProgressIndicator.css';

function ProgressIndicator(props) {
  const { stepNumber } = props;

  return (
    <div className="progress-indicator"> 
      Прогресс - индикатор! {stepNumber}
    </div>    
  )
}

ProgressIndicator.propTypes = {
  stepNumber: PropTypes.number.isRequired,
};

export default ProgressIndicator;