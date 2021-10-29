import PropTypes from 'prop-types';
import './OptionCheckBox.css';
import icons from 'components/Main/icons.svg';

function OptionCheckBox(props) {
  const { iconName, iconWidth, iconHeight, name, value, setValue } = props;

  return (
    <div className="option-check-box"> 
      <svg className="option-check-box__icon" width={iconWidth} height={iconHeight}>
        <use xlinkHref={`${icons}#${iconName}`} />
      </svg>
      <p>
        {name}
      </p>
      <div className={'option-check-box__selector ' + (value ? 'option-check-box__selector_on' : 'option-check-box__selector_off')} onClick={setValue}>
        {value}
      </div>
    </div>    
  )
}

OptionCheckBox.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconWidth: PropTypes.number.isRequired,
  iconHeight: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired
};

export default OptionCheckBox;