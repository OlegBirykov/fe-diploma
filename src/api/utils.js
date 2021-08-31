export function verifyEmail(email) {
  return /^[^@]+@([^@.]+\.)+[^@.]+$/.test(email);
}
