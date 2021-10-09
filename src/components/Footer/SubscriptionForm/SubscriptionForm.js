import { useState, useContext } from 'react';
import './SubscriptionForm.css';
import AppContext from 'AppContext';
import { infoBox, errorBox } from 'api/gui';
import { verifyEmail } from 'api/utils';
import { subscribe } from 'api/http';

function SubscriptionForm() { 
  const [email, setEmail] = useState('');
  const { setAnimation, setPopup } = useContext(AppContext);

  
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const sendEmail = async (evt) => {
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
    const response = await subscribe(setAnimation, mail);
    if (response.ok) {
      infoBox(setPopup, [
        `На вашу почту ${mail} отправлено письмо`,
        'Для подтверждения подписки откройте его и перейдите по указанной в нём ссылке'
      ]);
    } else {
      errorBox(setPopup, [
        `Ошибка ${response.status} - ${response.statusText}`,
        `Проверьте интернет-соединение и повторите попытку`
      ]);
    }
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