import { useState, useContext } from 'react';
import './SubscriptionForm.css';
import AppContext from 'AppContext';
import { errorBox } from 'api/gui';
import { verifyEmail } from 'api/utils';

function SubscriptionForm() { 
  const [email, setEmail] = useState('');
  const { setLoading, setPopup } = useContext(AppContext);
  
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const sendEmail = (evt) => {
    evt.preventDefault();
    const mail = email.trim();
    if (!mail) {
      errorBox(setPopup, [
        'Поле обязательно для заполнения',
        'Введите адрес электронной почты в поле рядом с кнопкой "Отправить"',
      ]);
      setEmail('');
      return;
    }
    if (!verifyEmail(mail)) {
      errorBox(setPopup, [
        'Ошибка ввода адреса электронной почты',
        'Адрес должен иметь вид xxx@xxx.xx',
        'Пример: qwerty111@mail.ru',
      ]);
      setEmail(mail);
      return;      
    }
    setEmail('');
    setLoading({ state: true, text: 'Ожидание ответа сервера' });
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