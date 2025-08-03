import { IconType } from "react-icons";

export type Input = {
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  Icon?: IconType;
  placeholder?: string;
  className?: string;
  options?: Option[];
  type?: InputType;
};

export type Option = {
  id: string;
  value: string | number | readonly string[] | undefined;
  label: string;
};

export type InputType = "text" | "select" | "textarea";
