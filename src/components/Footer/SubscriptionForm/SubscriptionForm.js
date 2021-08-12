import { useState, useContext } from 'react';
import './SubscriptionForm.css';
import AppContext from 'AppContext';

function SubscriptionForm() { 
  const [email, setEmail] = useState('');
  const { loading, setLoading } = useContext(AppContext);
  
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const sendEmail = (evt) => {
    evt.preventDefault();
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