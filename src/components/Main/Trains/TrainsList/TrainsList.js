import { useContext } from 'react';
import './TrainsList.css';
import AppContext from 'AppContext';
import SortingSelection from './SortingSelection/SortingSelection';
import LimitSelection from './LimitSelection/LimitSelection';

function TrainsList() {

  const { trainsInfo } = useContext(AppContext);

  const foundForward = `туда: ${trainsInfo.forwardTrainsInfo.total_count}`;
  const foundBackward = `обратно: ${trainsInfo.backwardTrainsInfo.total_count}`;

  return (
    <div className="trains-list"> 
      <div className="trains-list__menu">
        <p className="trains-list__menu-item-count">
          Найдено поездов {trainsInfo.params.direction === 'forward' ? foundForward : foundBackward}
        </p>
        <div className="trains-list__menu-item-sort">
          <SortingSelection />
        </div>
        <div className="trains-list__menu-item-limit">
          <LimitSelection />
        </div>
      </div>
    </div>    
  )
}

export default TrainsList;