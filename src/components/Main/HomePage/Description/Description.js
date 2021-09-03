import React, { useContext } from 'react';
import './Description.css';
import AppContext from 'AppContext';
import { infoBox } from 'api/gui';

function Description() {
  const { setPopup } = useContext(AppContext);

  const description = [
    ['Удобный заказ', 'на сайте'],
    ['Нет необходимости', 'ехать в офис'],
    ['Огромный выбор', 'направлений'], 
  ];

  const showPopup = () => {
    infoBox(setPopup, 'Чтобы узнать больше, вы можете связаться с нами по телефону, почте или скайпу, указанным в разделе "Контакты"');  
  }

  return (
    <div className="description"> 
      <div className="description__top">
        <h2 className="description__title">
          Как это работает
        </h2>
        <button className="description__button" type="button" onClick={showPopup}>
          Узнать больше
        </button>
      </div>
      <div className="description__items">
        {description.map((item, index) => 
          <div key={index} className="description__item">
            <div className={`description__icon description__icon_${index + 1}`}>
            </div>
            <p className="description__text">
              {item.map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Description;