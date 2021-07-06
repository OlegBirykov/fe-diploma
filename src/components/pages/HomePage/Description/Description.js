import { Link } from 'react-router-dom';
import './Description.css';

function Description() {
  const description = [
    ['Удобный заказ', 'на сайте'],
    ['Нет необходимости', 'ехать в офис'],
    ['Огромный выбор', 'направлений'], 
  ];

  return (
    <div className="description"> 
      <div className="description__top">
        <f2 className="description__title">
          Как это работает
        </f2>
        <Link to={process.env.PUBLIC_URL} className="description__link">
          Узнать больше
        </Link>
      </div>
      <div className="description__items">
        {description.map((item, index) => 
          <div key={index} className="description__item">
            <div className={`description__icon description__icon_${index + 1}`}>
            </div>
            <p className="description__text">
              {item.map((line, index) => <span key={index}>{line}<br/></span>)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Description;