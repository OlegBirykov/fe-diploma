function verifyEmail(email) {
  return /@[^.]+\.\w/.test(email);
}

export function verifyEmail();