import { MenuProduct, BasketProductQuantity } from "./Product";

export type UserData = {
  username: string;
  menu: MenuProduct[];
  basket: BasketProductQuantity[];
};
