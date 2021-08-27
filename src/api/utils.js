export function verifyEmail(email) {
  return /@[^.]+\.\w/.test(email);
}
