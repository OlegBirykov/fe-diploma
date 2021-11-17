//import { useState, useContext, useEffect } from 'react';
//import PropTypes from 'prop-types';
import './TravelDetails.css';
//import AppContext from 'AppContext';
//import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';
//import { dayInFirstPosition, dayInLastPosition } from 'api/utils';

function TravelDetails() {

  return (
    <div className="travel-details"> 
      <div className="travel-details__title">
        Детали поездки
      </div>
      <div className="travel-details__train">
        Туда
      </div>
      <div className="travel-details__train">
        Обратно
      </div>
      <div className="trains-params__passengers">
        Пассажиры
      </div>
      <div className="trains-params__total">
        Итог
      </div>
    </div>    
  )
}

//TravelDetails.propTypes = {
//  reloadInfo: PropTypes.func.isRequired
//};

export default TravelDetails;