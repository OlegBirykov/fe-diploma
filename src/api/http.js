import { httpErrorBox, incorrectDataErrorBox } from './gui';

async function fetchData(url, opt) {
  try {
    return await fetch(url, opt);
  } catch(err) {
    return {
      ok: false,
      status: '',
      statusText: 'No Connect'
    };
  }
}

export async function cities (setAnimation, name) {
  setAnimation({ loading: true, text: 'Идёт поиск' });

  const url = `${process.env.REACT_APP_TRAIN_BOOKING_SERVER}/routes/cities?name=${name}`;
  const response = await fetchData(url);

  setAnimation({ loading: false }); 
  return response;
}

async function routes (params) {
  const url = new URL(`${process.env.REACT_APP_TRAIN_BOOKING_SERVER}/routes`);
  Object.entries(params).forEach((item) => url.searchParams.append(item[0], item[1]));
  const response = await fetchData(url);
  return response;
}

async function last () {
  const url = `${process.env.REACT_APP_TRAIN_BOOKING_SERVER}/routes/last`;
  const response = await fetchData(url);
  return response;
}

export async function subscribe (setAnimation, email) {
  setAnimation({ loading: true, text: 'Ожидание ответа сервера' });

  const url = `${process.env.REACT_APP_TRAIN_BOOKING_SERVER}/subscribe`;
  const opt = {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email })
  };
  const response = await fetchData(url, opt);
  
  setAnimation({ loading: false });
  return response;
}

export async function loadTrainsInfo (setAnimation, setPopup, setTrainsInfo, params) {
  setAnimation({ loading: true, text: 'Идёт поиск' });

  let response;
  let forwardTrainsInfo;
  let backwardTrainsInfo;
  let lastRoutes;

  const {
    fromCityId,
    toCityId,
    dateStart,
    dateEnd,
    limit,
    offset,
    sort,
    haveFirstClass,
    haveSecondClass,
    haveThirdClass,
    haveFourthClass,
    haveWifi,
    isExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo
  } = params;

  const forwardTrainsParams = {
    from_city_id: fromCityId,
    to_city_id: toCityId,
    date_start: dateStart,
    limit,
    offset,
    sort,
  };

  const backwardTrainsParams = {
    from_city_id: toCityId,
    to_city_id: fromCityId,
    date_start_arrival: dateEnd,
    limit,
    offset,
    sort
  };

  if (haveFirstClass) {
    forwardTrainsParams.have_first_class = true;
    backwardTrainsParams.have_first_class = true;
  }

  if (haveSecondClass) {
    forwardTrainsParams.have_second_class = true;
    backwardTrainsParams.have_second_class = true;  
  }

  if (haveThirdClass) {
    forwardTrainsParams.have_third_class = true;
    backwardTrainsParams.have_third_class = true;  
  }

  if (haveFourthClass) {
    forwardTrainsParams.have_fourth_class = true;
    backwardTrainsParams.have_fourth_class = true;  
  }

  if (haveWifi) {
    forwardTrainsParams.have_wifi = true;
    backwardTrainsParams.have_wifi = true;  
  }

  if (isExpress) {
    forwardTrainsParams.is_express = true;
    backwardTrainsParams.is_express = true;  
  }

  if (isFinite(+priceFrom)) {
    forwardTrainsParams.price_from = priceFrom;
    backwardTrainsParams.price_from = priceFrom;
  }

  if (isFinite(+priceTo)) {
    forwardTrainsParams.price_to = priceTo;
    backwardTrainsParams.price_to = priceTo;
  }

  if (!isNaN(+startDepartureHourFrom)) {
    forwardTrainsParams.start_departure_hour_from = startDepartureHourFrom;
  }

  if (!isNaN(+startDepartureHourTo)) {
    forwardTrainsParams.start_departure_hour_to = startDepartureHourTo;
  }

  if (!isNaN(+startArrivalHourFrom)) {
    forwardTrainsParams.start_arrival_hour_from = startArrivalHourFrom;
  }
  
  if (!isNaN(+startArrivalHourTo)) {
    forwardTrainsParams.start_arrival_hour_to = startArrivalHourTo;
  }

  if (!isNaN(+endDepartureHourFrom)) {
    backwardTrainsParams.start_departure_hour_from = endDepartureHourFrom;
  }

  if (!isNaN(+endDepartureHourTo)) {
    backwardTrainsParams.start_departure_hour_to = endDepartureHourTo;
  }

  if (!isNaN(+endArrivalHourFrom)) {
    backwardTrainsParams.start_arrival_hour_from = endArrivalHourFrom;
  }
  
  if (!isNaN(+endArrivalHourTo)) {
    backwardTrainsParams.start_arrival_hour_to = endArrivalHourTo;
  }

  response = await routes (forwardTrainsParams);
  if (!response.ok) {
    setAnimation({ loading: false }); 
    httpErrorBox(setPopup, response);   
    return false; 
  } 
  
  try {
    forwardTrainsInfo = await response.json();
  } catch(e) {
    setAnimation({ loading: false }); 
    incorrectDataErrorBox(setPopup);
    return false;
  }

  response = await routes (backwardTrainsParams);
  if (!response.ok) {
    setAnimation({ loading: false }); 
    httpErrorBox(setPopup, response);
    return false; 
  } 

  try {
    backwardTrainsInfo = await response.json();
  } catch(e) {
    setAnimation({ loading: false }); 
    incorrectDataErrorBox(setPopup);
    return false;
  }

  response = await last ();
  if (!response.ok) {
    setAnimation({ loading: false }); 
    httpErrorBox(setPopup, response);
    return false; 
  } 

  try {
    lastRoutes = await response.json();
  } catch(e) {
    setAnimation({ loading: false }); 
    incorrectDataErrorBox(setPopup);
    return false;
  }

  const trainsInfo = {
    params,
    forwardTrainsInfo,
    backwardTrainsInfo,
    lastRoutes
  };

  setTrainsInfo(trainsInfo);
  console.log(trainsInfo);
  localStorage.setItem('trainsInfo', JSON.stringify(trainsInfo));

  setAnimation({ loading: false }); 
  return true;
}
