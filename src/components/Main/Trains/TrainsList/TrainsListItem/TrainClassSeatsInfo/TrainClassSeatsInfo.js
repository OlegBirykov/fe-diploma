import PropTypes from 'prop-types';
import './TrainClassSeatsInfo.css';

function TrainClassSeatsInfo(props) {
  const { classNumber/*, seatsCount, priceInfo */} = props;
  //const { 
  //  top_price,
  //  bottom_price,
  //  side_price
  //} = priceInfo;

  return (
    <div className="train-class-seats-info"> 
      {classNumber}
    </div>    
  )
}

TrainClassSeatsInfo.propTypes = {
  classNumber: PropTypes.number.isRequired,
//  seatsCount: PropTypes.number.isRequired,
//  priceInfo: PropTypes.object.isRequired
};

export default TrainClassSeatsInfo;