import { useState } from 'react';
import PropTypes from 'prop-types';
import './PriceRangeBar.css';

function PriceRangeBar(props) {
  const { minValue, maxValue, setMinValue, setMaxValue/*, changeRange */} = props;

  const [isCaptureLeft, setIsCaptureLeft] = useState(false);
  const [isCaptureRight, setIsCaptureRight] = useState(false);

  const minLimit = 0;
  const maxLimit = 5000;
  const step = 500;
  const minDiff = 1000;

  let curMinValue = minValue >= minLimit ? minValue : minLimit;
  let curMaxValue = maxValue <= maxLimit ? maxValue : maxLimit;
  if (curMinValue + minDiff > curMaxValue) {
    curMinValue = minLimit;
    curMaxValue = maxLimit;
  }

  const curMinPos = Math.round(curMinValue / maxLimit * 100);
  const curMaxPos = 100 - Math.round(curMaxValue / maxLimit * 100);

  const onMouseDownLeft = (evt) => {
    setIsCaptureLeft(true);
  }

  const onMouseDownRight = (evt) => {
    setIsCaptureRight(true);
  }

  const onMouseMoveLeft = (evt) => {
    if (!isCaptureLeft) {
      return;
    }
    setMinValue(curMinValue + step);
  }

  const onMouseMoveRight = (evt) => {
    if (!isCaptureRight) {
      return;
    }
    setMaxValue(curMaxValue - step);
  }  

  const onMouseUpLeft = (evt) => {
    setIsCaptureLeft(false);
  }

  const onMouseUpRight = (evt) => {
    setIsCaptureRight(false);
  }  

  return (
    <div className="price-range-bar"> 
      <div className="price-range-bar__range" style={{ left: `${curMinPos}%`, right: `${curMaxPos}%` }}>
        <div className="price-range-bar__handle price-range-bar__handle-min" onMouseDown={onMouseDownLeft} onMouseMove={onMouseMoveLeft} onMouseUp={onMouseUpLeft}>
          <p className="price-range-bar__handle-title">
            от
          </p>
          <p className="price-range-bar__handle-value">
            {curMinValue}
          </p>
        </div>
        <div className="price-range-bar__handle price-range-bar__handle-max" onMouseDown={onMouseDownRight} onMouseMove={onMouseMoveRight} onMouseUp={onMouseUpRight}>
          <p className="price-range-bar__handle-title">
            до
          </p>
          <p className="price-range-bar__handle-value">
            {curMaxValue !== maxLimit ? curMaxValue : 'max'}
          </p>
        </div>
      </div>
    </div>    
  )
}

PriceRangeBar.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  setMinValue: PropTypes.func.isRequired,
  setMaxValue: PropTypes.func.isRequired,
  changeRange: PropTypes.func.isRequired
};

export default PriceRangeBar;