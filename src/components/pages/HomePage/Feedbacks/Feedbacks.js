import { useState } from 'react';
import './Feedbacks.css';
import data from './data'; 

function Feedbacks() {
  const [pageNumber, setPageNumber] = useState(0);

  const selectPage = (number) => {
    setPageNumber(number);
  };

  const points = (new Array(Math.trunc((data.length + 1) / 2))).map((item, index) => 
    <div 
      className={'feedbacks__point' + (pageNumber === index ? ' feedbacks__point_active' : '')}
      onClick={() => selectPage(index)} 
    >
    </div>
  );

  return (
    <div className="feedbacks"> 
      <h2 className="feedbacks__title">
        Отзывы
      </h2>
      <div className="feedbacks__items">
      </div>
      <div className="feedbacks__points">
        {points}
      </div>
    </div>
  )
}

export default Feedbacks;