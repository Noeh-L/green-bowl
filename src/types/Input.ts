import { IconType } from "react-icons";

export type TextInput = {
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  Icon?: IconType;
  placeholder?: string;
  className?: string;
  options?: Option[];
};

export type SelectInput = {
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  Icon?: IconType;
  placeholder?: string;
  className?: string;
  options?: Option[];
};

export type Option = {
  id: string;
  value: string | number | readonly string[] | undefined;
  label: string;
};

export type Input = TextInput | SelectInput;
