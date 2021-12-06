import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './EditPassenger.css';
import AppContext from 'AppContext';

function EditPassenger(props) {
  const { passenger, index, passengerList, setPassengerList } = props;

  const [passengerState, setPassengerState] = useState(passenger); 
  const [ageListShow, setAgeListShow] = useState(false);
//  const [documentTypeListShow, setDocumentTypeListShow] = useState(false);

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
    isChange = false,
    isError = false,
    isReady = false 
  } = passengerState;

  const changeValue = (name, value) => {
    setPassengerState({ ...passengerState, [name]: value });
  }

  const changeBirthday = (value) => {
    const digitsArray = value.replace(/[^\d]/g, '').split('', 8);
    if (digitsArray.length > 4) {
      digitsArray.splice(4, 0, '.');
    }
    if (digitsArray.length > 2) {
      digitsArray.splice(2, 0, '.');
    }
    changeValue('birthday', digitsArray.join(''));
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

  const setIsAdult = (value) => {
    setValue('isAdult', value);
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
            />
            {ageListShow &&
              <ul className="edit-passenger__list">
                <li className="edit-passenger__list-item" onClick={() => setIsAdult(false)}>
                  Детский
                </li>
                <li className="edit-passenger__list-item" onClick={() => setIsAdult(true)}>
                  Взрослый
                </li>
              </ul>
            }
          </div>
          <div className="edit-passenger__name-section">
            <label className="edit-passenger__label edit-passenger__last-name">
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
            <label className="edit-passenger__label edit-passenger__first-name">
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
            <label className="edit-passenger__label edit-passenger__patronymic">
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
            <label className="edit-passenger__label edit-passenger__gender">
              Пол
              <div className="edit-passenger__gender-selector">
                <div 
                  className={'edit-passenger__gender-item' + (gender ? ' edit-passenger__gender-item_active' : '')}
                  onClick={() => setValue('gender', true)}
                >
                  М
                </div>
                <div 
                  className={'edit-passenger__gender-item' + (gender ? '' : ' edit-passenger__gender-item_active')}
                  onClick={() => setValue('gender', false)}
                >
                  Ж
                </div>
              </div>
            </label>
            <label className="edit-passenger__label edit-passenger__birthday">
              Дата рождения
              <input 
                className="edit-passenger__input" 
                type="text" 
                name="birthday" 
                placeholder="ДД ММ ГГГГ" 
                value={birthday} 
                required
                onChange={(evt) => changeBirthday(evt.target.value)}
                onBlur={(evt) => setValue('birthday', evt.target.value)}
              />
            </label>
          </div>
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
            {isAdult &&
              <label className={'edit-passenger__label edit-passenger__label-checkbox' + (includeChild ? ' edit-passenger__label-checkbox_checked' : '')}>
                <input 
                  className="edit-passenger__checkbox" 
                  type="checkbox" 
                  name="include-child" 
                  checked={includeChild}
                  onChange={() => setValue('includeChild', !includeChild)}
                />
                провоз ребёнка "без места"
              </label>
            }
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
          <div className={'edit-passenger__state-section' + (isError ? ' edit-passenger__state-section_error' : '') + (isReady ? ' edit-passenger__state-section_ready' : '')}>
            {isChange &&
              <button className="edit-passenger__button-save" type="submit" onClick={null}> 
                Сохранить изменения 
              </button>  
            }          
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