import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserData.css';
import AppContext from 'AppContext';

function UserData() {
  const [user, setUser] = useState({});

  const { orderInfo } = useContext(AppContext);

  useEffect(() => {
    setUser(orderInfo.user ? orderInfo.user : {});
  }, [orderInfo.user]);

  const {
    firstName = '',
    lastName = '',
    patronymic = '',
    phone = '',
    email = '',
    paymentMethod = ''
  } = user;

  const isOnline = paymentMethod === 'online';
  const isCash = paymentMethod === 'cash';

  const changeFirstName = (value) => {
    setUser({ ...user, firstName: value});
  }

  const changeLastName = (value) => {
    setUser({ ...user, lastName: value});
  }

  const changePatronymic = (value) => {
    setUser({ ...user, patronymic: value});
  }

  const changePhone = (value) => {
    setUser({ ...user, phone: value});
  }

  const changeEmail = (value) => {
    setUser({ ...user, email: value});
  }

  const changePaymentMethod = (value) => {
    setUser({ ...user, paymentMethod: value});
  }

  const isNextEnabled = false;

  return (
    <div className="user-data"> 
      <form className="user-data__form">
        <h3 className="user-data__title">
          Персональные данные
        </h3>
        <div className="user-data__data-section">
          <div className='user-data__name-line'>
            <label className="user-data__label user-data__last-name">
              Фамилия
              <input 
                className="user-data__input"
                type="text" 
                name="last-name" 
                placeholder="Иванов" 
                value={lastName} 
                onChange={(evt) => changeLastName(evt.target.value)}
                onBlur={(evt) => changeLastName(evt.target.value.trim())}
              />
            </label>   
            <label className="user-data__label user-data__first-name">
              Имя
              <input 
                className="user-data__input"
                type="text" 
                name="first-name" 
                placeholder="Иван" 
                value={firstName} 
                onChange={(evt) => changeFirstName(evt.target.value)}
                onBlur={(evt) => changeFirstName(evt.target.value.trim())}
              />
            </label>  
            <label className="user-data__label user-data__patronymic">
              Отчество
              <input 
                className="user-data__input"
                type="text" 
                name="patronymic" 
                placeholder="Иванович" 
                value={patronymic} 
                onChange={(evt) => changePatronymic(evt.target.value)}
                onBlur={(evt) => changePatronymic(evt.target.value.trim())}
              />
            </label> 
          </div>
          <label className="user-data__label user-data__phone">
            Контактный телефон
            <input 
              className="user-data__input"
              type="text" 
              name="phone"
              placeholder="+7 ___ ___ __ __" 
              value={phone} 
              onChange={(evt) => changePhone(evt.target.value)}
            />
          </label>
          <label className="user-data__label user-data__email">
            E-mail
            <input 
              className="user-data__input"
              type="text" 
              name="email"
              placeholder="inbox@gmail.ru" 
              value={email} 
              onChange={(evt) => changeEmail(evt.target.value)}
            />
          </label>
        </div>
        <h3 className="user-data__title">
          Способ оплаты
        </h3>
        <div className="user-data__online-section">
          <label className={'user-data__label user-data__label-checkbox' + (isOnline ? ' user-data__label-checkbox_checked' : '')}>
            <input 
              className="user-data__checkbox" 
              type="checkbox" 
              name="online" 
              checked={isOnline}
              onChange={() => changePaymentMethod('online')}
            />
            Онлайн
          </label>
          <ul className="user-data__online-list">
            <li className="user-data__online-list-item">
              Банковской картой
            </li>
            <li className="user-data__online-list-item">
              PayPal
            </li>
            <li className="user-data__online-list-item">
              Visa QIWI Wallet
            </li>
          </ul>
        </div>
        <div className="user-data__cash-section">
          <label className={'user-data__label user-data__label-checkbox' + (isCash ? ' user-data__label-checkbox_checked' : '')}>
            <input 
              className="user-data__checkbox" 
              type="checkbox" 
              name="cash" 
              checked={isCash}
              onChange={() => changePaymentMethod('cash')}
            />
            Наличными
          </label>
        </div>
      </form>
      <Link 
        to={process.env.PUBLIC_URL + '/run/confirmation'} 
        className={'user-data__button' + (isNextEnabled ? ' user-data__button_active' : '')}
        onClick={null}
      > 
        Купить билеты
      </Link>
    </div>    
  )
}

export default UserData;


/*
          <div className="edit-passenger__options-section">
            <label className={'edit-passenger__label edit-passenger__label-checkbox' + (isDisability ? ' edit-passenger__label-checkbox_checked' : '')}>
              <input 
                className="edit-passenger__checkbox" 
                type="checkbox" 
                name="disability" 
                checked={isDisability}
                onChange={() => setValue('isDisability', !isDisability)}
              />
              ограниченная подвижность
            </label>
*/