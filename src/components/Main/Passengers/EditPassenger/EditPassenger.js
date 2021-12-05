import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './EditPassenger.css';
import AppContext from 'AppContext';

function EditPassenger(props) {
  const { passenger, index, passengerList, setPassengerList } = props;

  const [passengerState, setPassengerState] = useState({}); 
  const [ageListShow, setAgeListShow] = useState(false);
//  const [documentTypeListShow, setDocumentTypeListShow] = useState(false);

  useEffect(() => {
    setPassengerState({ ...passenger });
  }, [passenger]);  

  const { orderInfo, setOrderInfo } = useContext(AppContext);

  const { 
    isCollapsed = false,
    isAdult = true,
    firstName = '',
    lastName = '',
    patronymic = '',
    gender = true,
    birthday = '',
    isDisability = false,
    includeChild = false,
    documentType = 'паспорт',
    documentData1 = '',
    documentData2 = '',
//    isChange = false,
//    isError = false,
//    isReady = false 
  } = passengerState;

  const changeValue = (name, value) => {
    setPassengerState({ ...passengerState, [name]: value});
  }

  const setValue = (name, value) => {
    const list = [...passengerList];

    switch (name) {
      case 'isCollapsed':
      case 'isChange':
      case 'isError':
      case 'isReady':
        break;
      default:
        list[index].isChange = list[index].isChange || list[index][name] !== value; 
    }

    list[index][name] = value;
    setPassengerList(list);
  }

  const deletePassenger = () => {
    const list = passengerList;
    list.splice(index, 1);
    const newOrderInfo = { ...orderInfo, passengerList: list };
    setOrderInfo(newOrderInfo);
    localStorage.setItem('orderInfo', JSON.stringify(newOrderInfo));
  }

  return (
    <div className="edit-passenger">
      <div className={'edit-passenger__collapsed' + (isCollapsed ? '' : ' edit-passenger__collapsed_gray')}>
        <button 
          className={'edit-passenger__button-collapse' + (isCollapsed ? '' : ' edit-passenger__button-collapse_minus')} 
          type="button" 
          onClick={() => setValue('isCollapsed', !isCollapsed)}>
        </button>
        <p className="edit-passenger__title">
          Пассажир {index + 1}
        </p> 
        {!isCollapsed &&
          <button className="edit-passenger__button-close" type="button" onClick={deletePassenger}>  
          </button>
        }
      </div>
      {!isCollapsed &&
        <form className="edit-passenger__form">
          <div className="edit-passenger__ago-container">
            <input 
              className="edit-passenger__input edit-passenger__ago edit-passsenger__listbox" 
              type="text" 
              name="age" 
              value={isAdult ? 'Взрослый' : 'Детский'} 
              readOnly
              onClick={() => setAgeListShow(true)}
              onBlur={() => setTimeout(() => setAgeListShow(false), 1000)}
            />
            {ageListShow &&
              <ul className="edit-passenger__list">
                <li className="edit-passenger__list-item" onClick={() => setValue('isAdult', false)}>
                  Детский
                </li>
                <li className="edit-passenger__list-item" onClick={() => setValue('isAdult', true)}>
                  Взрослый
                </li>
              </ul>
            }
          </div>
          <div className="edit-passenger__name-section">
            <label className="edit-passenger__label">
              Фамилия
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="last-name" 
                placeholder="Иванов" 
                value={lastName} 
                required
                onChange={(evt) => changeValue('lastName', evt.target.value)}
                onBlur={(evt) => setValue('lastName', evt.target.value)}
              />
            </label>
            <label className="edit-passenger__label">
              Имя
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="first-name" 
                placeholder="Иван" 
                value={firstName} 
                required
                onChange={(evt) => changeValue('firstName', evt.target.value)}
                onBlur={(evt) => setValue('firstName', evt.target.value)}
              />
            </label>
            <label className="edit-passenger__label">
              Отчество
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="patronymic" 
                placeholder="Иванович" 
                value={patronymic} 
                required
                onChange={(evt) => changeValue('patronymic', evt.target.value)}
                onBlur={(evt) => setValue('patronymic', evt.target.value)}
              />
            </label>
          </div>
          <div className="edit-passenger__data-section">
            <label className="edit-passenger__label">
              Пол
              <div className={'edit-passenger__male' + (gender ? ' edit-passenger__select-gender' : '')}>
                М
              </div>
              <div className={'edit-passenger__female' + (gender ? '' : ' edit-passenger__select-gender')}>
                Ж
              </div>
            </label>
            <label className="edit-passenger__label">
              Дата рождения
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="birthday" 
                placeholder="ДД ММ ГГГГ" 
                value={birthday} 
                required
                onChange={(evt) => changeValue('birthday', evt.target.value)}
                onBlur={(evt) => setValue('birthday', evt.target.value)}
              />
            </label>
          </div>
          <div className="edit-passenger__options-section">
            <label className="edit-passenger__label">
              ограниченная подвижность
              <input 
                className="edit-passenger__checkbox" 
                type="checkbox" 
                name="disability" 
                checked={isDisability}
                onChange={() => setValue('isDisability', !isDisability)}
              />
            </label>
            <label className="edit-passenger__label">
              провоз ребёнка "без места"
              <input 
                className="edit-passenger__checkbox" 
                type="checkbox" 
                name="include-child" 
                checked={includeChild}
                onChange={() => setValue('includeChild', !includeChild)}
              />
            </label>
          </div>
          <div className="edit-passenger__document-data-section">
            <label className="edit-passenger__label">
              Тип документа
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="" 
                value={documentType} 
                readOnly
              />
            </label>
            <label className="edit-passenger__label">
              Серия
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="" 
                placeholder="______" 
                value={documentData1} 
                required
                onChange={(evt) => changeValue('documentData1', evt.target.value)}
                onBlur={(evt) => setValue('documentData1', evt.target.value)}
              />
            </label>
            <label className="edit-passenger__label">
              Номер
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="" 
                placeholder="_________" 
                value={documentData2} 
                required
                onChange={(evt) => changeValue('documentData2', evt.target.value)}
                onBlur={(evt) => setValue('documentData2', evt.target.value)}
              />
            </label>
          </div>
          <div className="edit-passenger__state-section">
            <button className="edit-passenger__button-save" type="submit" onClick={null}> 
              Сохранить изменения 
            </button>            
          </div>
        </form>
      }
    </div>    
  )
}

EditPassenger.propTypes = {
  passenger: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  passengerList: PropTypes.array.isRequired,
  setPassengerList: PropTypes.func.isRequired
};

export default EditPassenger;