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

export async function routes (setAnimation, params) {
  setAnimation({ loading: true, text: 'Идёт поиск' });

  const url = new URL(`${process.env.REACT_APP_TRAIN_BOOKING_SERVER}/routes`);
  Object.entries(params).forEach((item) => url.searchParams.append(item[0], item[1]));
  const response = await fetchData(url);

  setAnimation({ loading: false }); 
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
  let response;
  let trainsInfoStart;
  let trainsInfoEnd;

  const paramsStart = {
    from_city_id: params.fromCityId,
    to_city_id: params.toCityId
  };

  response = await routes (setAnimation, paramsStart);
  if (!response.ok) {
    httpErrorBox(setPopup, response);
    return false; 
  } 
  
  try {
    trainsInfoStart = await response.json();
  } catch(e) {
    incorrectDataErrorBox(setPopup);
    return false;
  }

  const paramsEnd = {
    from_city_id: params.toCityId,
    to_city_id: params.fromCityId
  }

  response = await routes (setAnimation, paramsEnd);
  if (!response.ok) {
    httpErrorBox(setPopup, response);
    return false; 
  } 

  try {
    trainsInfoEnd = await response.json();
  } catch(e) {
    incorrectDataErrorBox(setPopup);
    return false;
  }

  console.log(trainsInfoStart);
  console.log(trainsInfoEnd);

  return true;
}

