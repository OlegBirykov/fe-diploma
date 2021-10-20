import { useContext } from 'react';
import './TrainsList.css';
import AppContext from 'AppContext';
import SortingSelection from './SortingSelection/SortingSelection';
import LimitSelection from './LimitSelection/LimitSelection';
import TrainsListItem from './TrainsListItem/TrainsListItem';
import shortid from 'shortid';

function TrainsList() {

  const { trainsInfo } = useContext(AppContext);

  const foundForward = `туда: ${trainsInfo.forwardTrainsInfo.total_count}`;
  const foundBackward = `обратно: ${trainsInfo.backwardTrainsInfo.total_count}`;

  const trainsArray = trainsInfo.params.direction === 'forward' 
    ? trainsInfo.forwardTrainsInfo.items 
    : trainsInfo.backwardTrainsInfo.items;

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
      <div className="trains-list__list">
        {trainsArray.length &&
          trainsArray.map((item) => <TrainsListItem trainInfo={item} key={shortid.generate()} />)
        }
      </div>
    </div>    
  )
}

export default TrainsList;