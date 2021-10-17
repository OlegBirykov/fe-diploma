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
    limit,
    offset,
    sort,
  } = params;

  const forwardTrainsParams = {
    from_city_id: fromCityId,
    to_city_id: toCityId,
    limit,
    offset,
    sort
  };

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

  const backwardTrainsParams = {
    from_city_id: toCityId,
    to_city_id: fromCityId,
    limit,
    offset,
    sort
  };

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

  setTrainsInfo({
    ...params,
    forwardTrainsInfo,
    backwardTrainsInfo,
    lastRoutes
  });

  setAnimation({ loading: false }); 
  return true;
}

