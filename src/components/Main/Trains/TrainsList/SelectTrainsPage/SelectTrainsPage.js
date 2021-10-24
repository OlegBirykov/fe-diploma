import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectTrainsPage.css';
//import shortid from 'shortid';

function SelectTrainsPage (props) {
  const { totalCount, limit, offset/*, reloadInfo*/ } = props; 

  const [/*pageNumber*/, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageNumber(Math.floor(offset / limit));
    setPageCount(Math.ceil(totalCount / limit));
  }, [totalCount, limit, offset]);

//  const isForward = trainsInfo.params.direction === 'forward';
//  const trainsArray = isForward ? trainsInfo.forwardTrainsInfo.items : trainsInfo.backwardTrainsInfo.items;
//  const trainsCount = isForward ? `туда: ${trainsInfo.forwardTrainsInfo.total_count}` : `обратно: ${trainsInfo.backwardTrainsInfo.total_count}`

//  const sortModes = [
//    { mode: 'date', name: 'времени' },
//    { mode: 'price_', name: 'стоимости' },
//    { mode: 'duration', name: 'длительности' }
//  ];

//  const limits = [5, 10, 20];

//  const selectSort = (index) => {
//    setShowList(false);
//    setSortIndex(index);
//    reloadInfo({ sort: sortModes[index].mode });
//  }

//  const selectLimit = (index) => {
//    setLimitIndex(index);
//    reloadInfo({ limit: limits[index] });
//  }

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="select-trains-page"> 
      Я компонент выбора страницы!!!
    </div>    
  )
}

SelectTrainsPage.propTypes = {
  totalCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  reloadInfo: PropTypes.func.isRequired
};

export default SelectTrainsPage;