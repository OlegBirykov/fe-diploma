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

/*
setLoading(true);
try {
  const response = await fetch(url, opts);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  setError(null);
  setData(data);

} catch (error) {
  setError(error);

} finally {
  setLoading(false);
}
*/