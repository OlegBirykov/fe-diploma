export function infoBox(callback, content, buttonText = 'OK') {
  callback({
    visible: true,
    buttonText,
    content: Array.isArray(content) ? content : [content],
    error: false
  });
  return;
}

export function errorBox(callback, content, buttonText = 'OK') {
  callback({
    visible: true,
    buttonText,
    content: Array.isArray(content) ? content : [content],
    error: true
  });
  return;
}
