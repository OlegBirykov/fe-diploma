import { useContext } from 'react';
import PropTypes from 'prop-types';
import './TrainsList.css';
import AppContext from 'AppContext';
import SortingSelection from './SortingSelection/SortingSelection';
import LimitSelection from './LimitSelection/LimitSelection';
import TrainsListItem from './TrainsListItem/TrainsListItem';
import shortid from 'shortid';

function TrainsList(props) {
  const { reloadInfo } = props; 

  const { trainsInfo } = useContext(AppContext);

  const isForward = trainsInfo.params.direction === 'forward';
  const trainsArray = isForward ? trainsInfo.forwardTrainsInfo.items : trainsInfo.backwardTrainsInfo.items;
  const trainsCount = isForward ? `туда: ${trainsInfo.forwardTrainsInfo.total_count}` : `обратно: ${trainsInfo.backwardTrainsInfo.total_count}`

  return (
    <div className="trains-list"> 
      <div className="trains-list__menu">
        <p className="trains-list__menu-item-count">
          Найдено поездов {trainsCount}
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
          trainsArray.map((item) => <TrainsListItem trainInfo={item} isForward={isForward} reloadInfo={reloadInfo} key={shortid.generate()} />)
        }
      </div>
    </div>    
  )
}

TrainsListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired,
  isForward: PropTypes.bool.isRequired,
  reloadInfo: PropTypes.func.isRequired
};

export default TrainsList;