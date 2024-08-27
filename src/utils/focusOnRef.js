export const focusOnRef = (inputField) => {
  if (inputField.current) {
    inputField.current.focus();
  }
};
