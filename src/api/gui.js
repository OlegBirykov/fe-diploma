export function infoBox(setPopup, content, buttonText = 'OK') {
  setPopup({
    visible: true,
    buttonText,
    content: Array.isArray(content) ? content : [content],
    error: false
  });
  return;
}

export function errorBox(setPopup, content, buttonText = 'OK') {
  setPopup({
    visible: true,
    buttonText,
    content: Array.isArray(content) ? content : [content],
    error: true
  });
  return;
}
