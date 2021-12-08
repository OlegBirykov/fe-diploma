export function verifyData(data) {
  const result = {
    errorFlags: {},
    errorText: []
  };

  result.errorText.push({
    string1: 'qwerty',
    string2: 'qwerty 1',
    string3: 'qwerty 2'
  });

  result.isReady = !result.errorText.length;
  return result;
}