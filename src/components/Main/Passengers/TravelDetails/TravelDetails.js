//import { useState, useContext, useEffect } from 'react';
//import PropTypes from 'prop-types';
import './TravelDetails.css';
//import AppContext from 'AppContext';
//import DateInput from 'components/Header/TicketSearchForm/DateInput/DateInput';
//import { dayInFirstPosition, dayInLastPosition } from 'api/utils';

function TravelDetails() {

  return (
    <div className="travel-details"> 
      <section className="travel-details__train">
        Туда
      </section>
      <section className="travel-details__train">
        Обратно
      </section>
      <section className="trains-params__passengers">
        Пассажиры
      </section>
    </div>    
  )
}

//TravelDetails.propTypes = {
//  reloadInfo: PropTypes.func.isRequired
//};

export default TravelDetails;