import { useContext } from 'react';
import './TravelDetails.css';
import AppContext from 'AppContext';
import TravelDetailsTrain from './TravelDetailsTrain/TravelDetailsTrain';
import TravelDetailsPassengers from './TravelDetailsPassengers/TravelDetailsPassengers';
import { separateThousands } from 'api/utils';

function TravelDetails() {

  const { forwardTrain, backwardTrain, travelDetailsCollapsed, setTravelDetailsCollapsed } = useContext(AppContext);

  const setSectionCollapsed = (name) => {
    setTravelDetailsCollapsed({ ...travelDetailsCollapsed, [name]: !travelDetailsCollapsed[name] });
  }

  return (
    <div className="travel-details"> 
      <h2 className="travel-details__title">
        Детали поездки
      </h2>
      <div className="travel-details__train">
        <TravelDetailsTrain 
          isForward={true} 
          isCollapsed={travelDetailsCollapsed.forward} 
          setCollapsed={() => setSectionCollapsed('forward')}
          train={forwardTrain}
        />
      </div>
      <div className="travel-details__train">
        <TravelDetailsTrain 
          isForward={false} 
          isCollapsed={travelDetailsCollapsed.backward} 
          setCollapsed={() => setSectionCollapsed('backward')}
          train={backwardTrain}
        />
      </div>
      <div className="travel-details__passengers">
        <TravelDetailsPassengers 
          isCollapsed={travelDetailsCollapsed.passengers} 
          setCollapsed={() => setSectionCollapsed('passengers')}
        />
      </div>
      <div className="travel-details__total">
        <p className="travel-details__total-title">
          Итог
        </p>
        <p className="travel-details__price">
          {separateThousands(0)}
        </p>
        <p className="travel-details__currency">
          &#x20bd;
        </p>
      </div>
    </div>    
  )
}

export default TravelDetails;