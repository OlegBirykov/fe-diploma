import PropTypes from 'prop-types';
import './OptionIcons.css';
import icons from './icons.svg';

function OptionIcons(props) {
  const { haveWifi, isExpress, includeFood } = props;
  
  return (
    <div className="option-icons">
      {haveWifi && 
        <div className="option-icons__container">
          <svg className="option-icons__icon" width="20" height="16">
            <use xlinkHref={icons + '#wifi'} />
          </svg>
        </div>
      }
      {isExpress && 
        <div className="option-icons__container">
          <svg className="option-icons__icon" width="20" height="20">
            <use xlinkHref={icons + '#express'} />
          </svg>
        </div>
      }
      {includeFood &&
        <div className="option-icons__container">
          <svg className="option-icons__icon" width="20" height="18">
            <use xlinkHref={icons + '#food'} />
          </svg>
        </div>
      }
    </div>
  )
}

OptionIcons.propTypes = {
  haveWifi: PropTypes.bool.isRequired,
  isExpress: PropTypes.bool.isRequired,
  includeFood: PropTypes.bool.isRequired
};

export default OptionIcons;