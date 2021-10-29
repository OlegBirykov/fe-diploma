import PropTypes from 'prop-types';
import './OptionCheckBox.css';

function OptionCheckBox(props) {
  const { iconName, value, setValue } = props;

  return (
    <div className="option-check-box"> 
      Флажок выбора опции {iconName} {value}
      <button onClick={setValue}>
      </button>
    </div>    
  )
}

OptionCheckBox.propTypes = {
  iconName: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired
};

export default OptionCheckBox;