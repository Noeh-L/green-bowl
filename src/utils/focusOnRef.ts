import { RefObject } from "react";

export const focusOnRef = (inputField: RefObject<HTMLInputElement | null>) => {
  if (inputField.current) {
    inputField.current.focus();
  }
};
