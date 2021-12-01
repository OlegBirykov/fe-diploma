import PropTypes from 'prop-types';
import './EditPassenger.css';

function EditPassenger(props) {
  const { /*passenger, */number/*, edit, del */} = props;

 // const { } = passenger;

//  const [isCollapsed, setIsCollapsed] = useState(false);

  /*
        <div className="travel-details-passengers__collapsed">
        <svg className="travel-details-passengers__icon" width="26" height="26">
          <use xlinkHref={icons + '#passenger'} />
        </svg>
        <p className="travel-details-passengers__title">
          Пассажиры
        </p>
        <button className={'travel-details-passengers__button' + (isCollapsed ? '' : ' travel-details-passengers__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
        </button>
      </div>
      {!isCollapsed &&
        <div className="travel-details-passengers__full">
          <div className="travel-details-passengers__item">
            <p className="travel-details-passengers__count">
              2 Взрослых
            </p>
            <p className="travel-details-passengers__price">
              {separateThousands(5840)}
            </p>
            <p className="travel-details-passengers__currency">
              &#x20bd;
            </p>
          </div>
          <div className="travel-details-passengers__item">
            <p className="travel-details-passengers__count">
              1 Ребенок
            </p>
            <p className="travel-details-passengers__price">
              {separateThousands(1920)}
            </p>
            <p className="travel-details-passengers__currency">
              &#x20bd;
            </p>
          </div>
        </div> 
      }
  */

  return (
    <div className="edit-passenger"> 
      Пассажир {number}
    </div>    
  )
}

EditPassenger.propTypes = {
  passenger: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired
};

export default EditPassenger;