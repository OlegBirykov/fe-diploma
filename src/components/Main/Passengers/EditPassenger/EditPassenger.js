import { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import './EditPassenger.css';
import AppContext from 'AppContext';

function EditPassenger(props) {
  const { passenger, index, passengerList, setPassengerList } = props;

  const [passengerState, setPassengerState] = useState(passenger); 
  const [ageListShow, setAgeListShow] = useState(false);
  const [documentTypeListShow, setDocumentTypeListShow] = useState(false);

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
    documentType = 'Паспорт РФ',
    passportSeries = '',
    passportNumber = '',
    birthSertificateNumber = '',
    isChange = false,
    isError = false,
    isReady = false 
  } = passengerState;

  const isPassport = documentType === 'Паспорт РФ';

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

  const changePassportSeries = (value) => {
    const newValue = value.replace(/[^\d]/g, '').slice(0, 4);
    changeValue('passportSeries', newValue);
  }

  const changePassportNumber = (value) => {
    const newValue = value.replace(/[^\d]/g, '').slice(0, 6);
    changeValue('passportNumber', newValue);
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
        if (list[index][name] !== value) {
          list[index].isChange = true;
          list[index].isError = false;
          list[index].isReady = false;
        } 
    }

    list[index][name] = value;
    setPassengerList(list);
  }

  const setBirthSertificateNumber = (value) => {
    const newValue = value.replace(/[^0-9IVXА-Я]/g, '').slice(0, 12).toUpperCase();
    setValue('birthSertificateNumber', newValue);
  }

  const savePassenger = (evt) => {
    evt.preventDefault();
    setValue('isChange', false);
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
        <form className="edit-passenger__form" onSubmit={savePassenger}>
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
                <li className="edit-passenger__list-item" onClick={() => setValue('isAdult', true)}>
                  Взрослый
                </li>
                <li className="edit-passenger__list-item" onClick={() => setValue('isAdult', false)}>
                  Детский
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
                onBlur={(evt) => setValue('lastName', evt.target.value.trim())}
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
                onBlur={(evt) => setValue('firstName', evt.target.value.trim())}
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
                onBlur={(evt) => setValue('patronymic', evt.target.value.trim())}
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
            <label className={'edit-passenger__label edit-passenger__document-type' + (isPassport ? ' edit-passenger__document-type_passport' : ' edit-passenger__document-type_sertificate')}>
              Тип документа
              <input 
                className="edit-passenger__input edit-passsenger__listbox" 
                type="text" 
                name="document-type" 
                value={documentType} 
                readOnly
                onClick={() => setDocumentTypeListShow(true)}
              />
              {documentTypeListShow &&
                <ul className="edit-passenger__list edit-passenger__list_document-type">
                  <li className="edit-passenger__list-item" onClick={() => setValue('documentType', 'Паспорт РФ')}>
                    Паспорт РФ
                  </li>
                  <li className="edit-passenger__list-item" onClick={() => setValue('documentType', 'Свидетельство о рождении')}>
                    Свидетельство о рождении
                  </li>
                </ul>
              }
            </label>
            {isPassport ?
              <Fragment>
                <label className="edit-passenger__label edit-passenger__passport-series">
                  Серия
                  <input 
                    className="edit-passenger__input edit-passenger__input_passport-series" 
                    type="text" 
                    name="passport-series" 
                    placeholder=" " 
                    value={passportSeries} 
                    required
                    onChange={(evt) => changePassportSeries(evt.target.value)}
                    onBlur={(evt) => setValue('passportSeries', evt.target.value)}
                  />
                </label>
                <label className="edit-passenger__label edit-passenger__passport-number">
                  Номер
                  <input 
                    className="edit-passenger__input edit-passenger__input_passport-number" 
                    type="text" 
                    name="passport-number" 
                    placeholder=" " 
                    value={passportNumber} 
                    required
                    onChange={(evt) => changePassportNumber(evt.target.value)}
                    onBlur={(evt) => setValue('passportNumber', evt.target.value)}
                  />
                </label>
              </Fragment> :
              <label className="edit-passenger__label edit-passenger__sertificate-number">
                Номер
                <input 
                  className="edit-passenger__input edit-passenger__input_sertificate" 
                  type="text" 
                  name="sertificate-number" 
                  placeholder="12 символов " 
                  value={birthSertificateNumber} 
                  required
                  onChange={(evt) => changeValue('birthSertificateNumber', evt.target.value.toUpperCase())}
                  onBlur={(evt) => setBirthSertificateNumber(evt.target.value)}
                />
              </label>
            }
          </div>
          <div className={'edit-passenger__state-section' + (isError ? ' edit-passenger__state-section_error' : '') + (isReady ? ' edit-passenger__state-section_ready' : '')}>
            {isChange &&
              <button className="edit-passenger__button-save" type="submit"> 
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