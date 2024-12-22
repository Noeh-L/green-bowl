import { ADMIN_TAB_LABEL } from "@/enums/adminTabLabel";
import { JSX } from "react";
import { IconType } from "react-icons";

export type Tab = {
  id: string;
  name: ADMIN_TAB_LABEL;
  Icon: IconType;
  label: string;
  Content: JSX.Element;
};
