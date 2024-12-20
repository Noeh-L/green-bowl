import { RefObject } from "react";

export const focusOnRef = (inputField: RefObject<HTMLInputElement>) => {
  if (inputField.current) {
    inputField.current.focus();
  }
};
