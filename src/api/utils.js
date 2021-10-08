export function verifyEmail(email) {
  return /^[^@]+@([^@.]+\.)+[^@.]+$/.test(email);
}

export function readDate(date1, date2) {
  const result = { status: false };

  if (!date1) {
    result.errorText = [
      'Поле обязательно для заполнения',
      'Введите дату поездки'
    ];
    return result;
  }

  if (!date2) {
    result.errorText = [
      'Поле обязательно для заполнения',
      'Введите дату возвращения'
    ];
    return result;
  }

  result.status = true;
  return result;
}