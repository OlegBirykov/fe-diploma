import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectTrainsPage.css';

function SelectTrainsPage (props) {
  const { totalCount, limit, offset/*, reloadInfo*/ } = props; 

  const [/*pageNumber*/, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageNumber(Math.floor(offset / limit));
    setPageCount(Math.ceil(totalCount / limit));
  }, [totalCount, limit, offset]);

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
      <button className="select-trains-page__button" type="button">
        &lt;
      </button>
      <button className="select-trains-page__button select-trains-page__button_active" type="button">
        1
      </button>
      <button className="select-trains-page__button" type="button">
        ...
      </button>
      <button className="select-trains-page__button" type="button">
        4
      </button>
      <button className="select-trains-page__button" type="button">
        5
      </button>
      <button className="select-trains-page__button" type="button">
        ...
      </button>
      <button className="select-trains-page__button" type="button">
        10
      </button>
      <button className="select-trains-page__button" type="button">
        &gt;
      </button>
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