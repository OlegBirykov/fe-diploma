//import PropTypes from 'prop-types';
import './AddPassenger.css';


function AddPassenger() {
//  const { addPassenger } = props;

  return (
    <div className="add-passenger"> 
      <h3 className="add-passenger__title">
        Добавить пассажира
      </h3>
      <button className="add-passenger__button" type="button">   
        +   
      </button>
    </div>    
  )
}

//AddPassenger.propTypes = {
//  addPassenger: PropTypes.func.isRequired
//};

export default AddPassenger;