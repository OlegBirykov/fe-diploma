import { useContext } from 'react';
import './TrainsList.css';
import AppContext from 'AppContext';

function TrainsList() {

  const { trainsInfo } = useContext(AppContext);

  const foundForward = `туда: ${trainsInfo.forwardTrainsInfo.total_count}`;
  const foundBackward = `обратно: ${trainsInfo.backwardTrainsInfo.total_count}`;

  return (
    <div className="trains-list"> 
      <div className="trains-list__menu">
        <p>
          Найдено поездов {trainsInfo.direction === 'forward' ? foundForward : foundBackward}
        </p>
      </div>
    </div>    
  )
}

export default TrainsList;