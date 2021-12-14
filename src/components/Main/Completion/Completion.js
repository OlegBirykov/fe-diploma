import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Completion.css';
import AppContext from 'AppContext';
import { separateThousands, totalTicketPrice } from 'api/utils';

function Completion() {  
  const { setBookingStage, orderInfo } = useContext(AppContext);
  const { user: { firstName, patronymic } } = orderInfo;

  useEffect(() => {
    setBookingStage('completion');
  }, [setBookingStage]);

  return (
    <main className="completion"> 
      <div className="completion__window">
        <h2 className="completion__title">
          Благодарим Вас за заказ!
        </h2>
        <div className="completion__body">
          <div className="completion__order-data">
            <p className="completion__order-number">
              №заказа {Math.trunc(Math.random() * 900 + 100)}АА
            </p>
            <p className="completion__order-sum-title">
              сумма
            </p>
            <p className="completion__order-price">
              {separateThousands(totalTicketPrice(orderInfo))}
            </p>
            <p className="completion__order-currency">
              &#x20bd;
            </p>
          </div>
          <div className="completion__manual">
            <div className="completion__manual-item">
              <div className="completion__manual-icon completion__manual-icon_1">
                <p className="completion__manual-text">
                  билеты будут
                </p>
                <p className="completion__manual-text">
                  отправлены
                </p>
                <p className="completion__manual-text">
                  на ваш <span className="completion__manual-text_bold">e-mail</span>
                </p>
              </div>
            </div>
            <div className="completion__manual-item">
              <div className="completion__manual-icon completion__manual-icon_2">
                <p className="completion__manual-text completion__manual-text_bold">
                  распечатайте
                </p>
                <p className="completion__manual-text">
                  и сохраняйте билеты
                </p>
                <p className="completion__manual-text">
                  до даты поездки
                </p>
              </div>
            </div>
            <div className="completion__manual-item">
              <div className="completion__manual-icon completion__manual-icon_3">
                <p className="completion__manual-text completion__manual-text_bold">
                  предъявите
                </p>
                <p className="completion__manual-text">
                  распечатанные
                </p>
                <p className="completion__manual-text">
                  билеты при посадке
                </p>
              </div>
            </div>
          </div>
          <div className="completion__text-container">
            <p className="completion__text-title">
              {firstName} {patronymic}
            </p>
            <p className="completion__text-text">
              Ваш заказ успешно оформлен.
            </p>
            <p className="completion__text-text">
              В ближайшее время с Вами свяжется наш оператор для подтверждения.
            </p>
            <p className="completion__text-end">
              Благодарим Вас за оказанное доверие и желаем приятного путешествия!
            </p>
          </div>
          <div className="completion__controls">
            <p className="completion__controls-text">
              Оценить сервис
            </p>
            <Link to={process.env.PUBLIC_URL} className="completion-button"> 
               Вернуться на главную
            </Link>  
          </div>      
        </div>
      </div>
    </main>
  )
}

export default Completion;