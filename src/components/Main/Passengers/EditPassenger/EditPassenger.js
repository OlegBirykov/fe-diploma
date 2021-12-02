import PropTypes from 'prop-types';
import './EditPassenger.css';

function EditPassenger(props) {
  const { passenger, index, passengerList, setPassengerList} = props;
  const { isCollapsed } = passenger;

  const collapse = () => {
    const list = [...passengerList];
    list[index].isCollapsed = !isCollapsed;
    setPassengerList(list);
  }

  return (
    <div className="edit-passenger">
      <div className={'edit-passenger__collapsed' + (isCollapsed ? '' : ' edit-passenger__button-collapsed_gray')}>
        <button className={'edit-passenger__button-collapse' + (isCollapsed ? '' : ' edit-passenger__button-collapse_minus')} type="button" onClick={collapse}>      
          xp
        </button>
        <p className="edit-passenger__title">
          Пассажир {index + 1}
        </p> 
        <button className="edit-passenger__button-close" type="button" onClick={null}>  
          x
        </button>
      </div>
      {!isCollapsed &&
        <form className="edit-passenger__form">
          Форма с данными
        </form>
      }
    </div>    
  )
}

EditPassenger.propTypes = {
  passenger: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  passengerList: PropTypes.array.isRequired,
  setPassengerList: PropTypes.func.isRequired
};

export default EditPassenger;