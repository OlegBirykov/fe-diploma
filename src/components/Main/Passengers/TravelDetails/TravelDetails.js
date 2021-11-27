import PropTypes from 'prop-types';
import './TravelDetails.css';
import TravelDetailsTrain from './TravelDetailsTrain/TravelDetailsTrain';
import TravelDetailsPassengers from './TravelDetailsPassengers/TravelDetailsPassengers';
import { separateThousands } from 'api/utils';


function TravelDetails(props) {
  const { collapsed, setCollapsed } = props;

  const setSectionCollapsed = (name) => {
    setCollapsed({ ...collapsed, [name]: !collapsed[name] });
  }

  return (
    <div className="travel-details"> 
      <h2 className="travel-details__title">
        Детали поездки
      </h2>
      <div className="travel-details__train">
        <TravelDetailsTrain isForward={true} isCollapsed={collapsed.forward} setCollapsed={() => setSectionCollapsed('forward')}/>
      </div>
      <div className="travel-details__train">
        <TravelDetailsTrain isForward={false} isCollapsed={collapsed.backward} setCollapsed={() => setSectionCollapsed('backward')}/>
      </div>
      <div className="travel-details__passengers">
        <TravelDetailsPassengers isCollapsed={collapsed.passengers} setCollapsed={() => setSectionCollapsed('passengers')}/>
      </div>
      <div className="travel-details__total">
        <p className="travel-details__total-title">
          Итог
        </p>
        <p className="travel-details__price">
          {separateThousands(7760)}
        </p>
        <p className="travel-details__currency">
          &#x20bd;
        </p>
      </div>
    </div>    
  )
}

TravelDetails.propTypes = {
  collapsed: PropTypes.object.isRequired,
  setCollapsed: PropTypes.func.isRequired
};

export default TravelDetails;