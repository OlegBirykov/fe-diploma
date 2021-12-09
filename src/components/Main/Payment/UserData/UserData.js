//import PropTypes from 'prop-types';
import './UserData.css';


function UserData() {
//  const { addPassenger } = props;

  return (
    <div className="user-data"> 
      <h3 className="user-data__title">
        Персональные данные
      </h3>
      <div className='user-data__name-section'>
      </div>
      <h3 className="user-data__title">
        Способ оплаты
      </h3>
    </div>    
  )
}

//UserData.propTypes = {
//  addPassenger: PropTypes.func.isRequired
//};

export default UserData;
/*
<label className="edit-passenger__label edit-passenger__last-name">
Фамилия
<input 
  className={'edit-passenger__input' + (errorFlags.lastName ? ' edit-passenger__error' : '')} 
  type="text" 
  name="last-name" 
  placeholder="Иванов" 
  value={lastName} 
  onChange={(evt) => changeValue('lastName', evt.target.value)}
  onBlur={(evt) => setValue('lastName', evt.target.value.trim())}
/>
</label>
<label className="edit-passenger__label edit-passenger__first-name">
Имя
<input 
  className={'edit-passenger__input' + (errorFlags.firstName ? ' edit-passenger__error' : '')} 
  type="text" 
  name="first-name" 
  placeholder="Иван" 
  value={firstName} 
  onChange={(evt) => changeValue('firstName', evt.target.value)}
  onBlur={(evt) => setValue('firstName', evt.target.value.trim())}
/>
</label>
<label className="edit-passenger__label edit-passenger__patronymic">
Отчество
<input 
  className={'edit-passenger__input' + (errorFlags.patronymic ? ' edit-passenger__error' : '')}
  type="text" 
  name="patronymic" 
  placeholder="Иванович" 
  value={patronymic} 
  onChange={(evt) => changeValue('patronymic', evt.target.value)}
  onBlur={(evt) => setValue('patronymic', evt.target.value.trim())}
/>
</label>
*/

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