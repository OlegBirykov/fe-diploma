import './Contacts.css';
import icons from './icons.svg';

function Contacts() {  
  return (
    <div className="contacts">
      <h3 className="contacts__title">
        Свяжитесь с нами
      </h3>
      <ul className="contacts__list">
        <li className="contacts__list-item">
          <a className="contacts__link" href="tel:+78000000000">
            <svg className="contacts__icon" width="30" height="30">
              <use xlinkHref={icons + '#phone'} />
            </svg>
          </a>
          <p className="contacts__text">
            8 (800) 000 00 00
          </p>
        </li>
        <li className="contacts__list-item">
          <svg className="contacts__icon" width="30" height="25">
            <use xlinkHref={icons + '#email'} />
          </svg>
        </li>
        <li className="contacts__list-item">
          <svg className="contacts__icon" width="30" height="30">
            <use xlinkHref={icons + '#skype'} />
          </svg>
        </li>
        <li className="contacts__list-item">
          <svg className="contacts__icon" width="21" height="30">
            <use xlinkHref={icons + '#location'} />
          </svg>
        </li>
      </ul>
    </div>
  )
}

export default Contacts;