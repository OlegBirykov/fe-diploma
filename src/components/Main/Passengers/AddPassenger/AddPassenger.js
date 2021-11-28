import PropTypes from 'prop-types';
import './AddPassenger.css';


function AddPassenger(props) {
  const { add } = props;

  return (
    <div className="add-passenger"> 
      <h3 className="add-passenger__title">
        Добавить пассажира
      </h3>
      <button className="add-passenger__button" type="button" onClick={add}>   
        +   
      </button>
    </div>    
  )
}

AddPassenger.propTypes = {
  add: PropTypes.func.isRequired
};

export default AddPassenger;