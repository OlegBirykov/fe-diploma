import { order } from "./http";

export async function setOrder (setAnimation, orderInfo) {
  setAnimation({ loading: true, text: 'Ожидание ответа сервера' });
  const response = await order(orderInfo);
  setAnimation({ loading: false });
  return response;
}