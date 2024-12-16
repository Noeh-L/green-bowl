import { RefObject } from "react";

export const focusOnRef = (inputField: RefObject<HTMLElement>) => {
  if (inputField.current) {
    inputField.current.focus();
  }
};
