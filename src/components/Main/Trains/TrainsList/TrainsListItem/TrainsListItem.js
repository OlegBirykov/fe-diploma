import PropTypes from 'prop-types';
import './TrainsListItem.css';
//import OptionIcons from '../../OptionIcons/OptionIcons';

function TrainsListItem(props) {
  const { trainInfo } = props;

  const { 
    train
  } = trainInfo.departure;

  return (
    <div className="last-routes-item">
      {train.name}
    </div>    
  )
}

TrainsListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired
};

export default TrainsListItem;