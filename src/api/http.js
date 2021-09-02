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

  let response;

  try {
    response = await fetch(url, opt);
  } catch(err) {
    response = {
      ok: false,
      status: '',
      statusText: 'No Connect'
    };
  }
  
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