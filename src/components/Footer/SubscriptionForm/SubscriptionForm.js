import { useState, useContext } from 'react';
import './SubscriptionForm.css';
import AppContext from 'AppContext';
import { infoBox } from 'api/gui';

function SubscriptionForm() { 
  const [email, setEmail] = useState('');
  const { loading, setLoading, setPopup } = useContext(AppContext);

  const showBox = (popup) => {
    setPopup(popup);
  }
  
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const sendEmail = (evt) => {
    evt.preventDefault();
    setEmail(email.trim());
    if (!email) {
      infoBox(showBox, 'Заполните поле адреса электронной почты');
    }
    setEmail('');
    setLoading({ state: !loading.state, text: 'Ожидание ответа сервера' });
  }

  return (
    <form className="subscription-form" onSubmit={sendEmail}>
      <h3 className="subscription-form__title">
        Подписка
      </h3>
      <div className="subscription-form__body">
        <label className="subscription-form__label">
          Будьте в курсе событий
          <input 
            className="subscription-form__input"
            type="text" 
            name="e-mail" 
            value={email}
            placeholder="e-mail"
            onChange={emailChange}
          />
        </label>
        <button className="subscription-form__button" type="submit">
          Отправить
        </button>        
      </div>
    </form>
  )
}

export default SubscriptionForm;