import React, { useState } from 'react';
import './Feedbacks.css';
import data from './data'; 

function Feedbacks() {
  const [pageNumber, setPageNumber] = useState(0);

  const selectPage = (number) => {
    setPageNumber(number);
  };

  const points = data.filter((item, index) => !(index % 2)).map((item, index) =>
    <div 
      className={'feedbacks__point' + (pageNumber === index ? ' feedbacks__point_active' : '')}
      key={index}
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
        {data.filter((item, index) => Math.trunc(index / 2) === pageNumber).map((item, index) => 
          <div className="feedbacks__item" key={index}>
            <img className="feedbacks__avatar" src={item.avatar} alt="avatar" />
            <div className="feedbacks__content">
              <h3 className="feedbacks__name">
                {item.name}
              </h3>
              <p className="feedbacks__text">
                <span className="feedbacks__quote feedbacks__quote_begin">
                  &#x201C;
                </span>
                {item.text.map((line, index) => 
                  <React.Fragment key={index}>{line}
                    {(index < item.text.length - 1) && <br/>}
                  </React.Fragment>
                )}
                <span className="feedbacks__quote feedbacks__quote_end">
                  &nbsp;&#x201E;
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="feedbacks__points">
        {points}
      </div>
    </div>
  )
}

export default Feedbacks;