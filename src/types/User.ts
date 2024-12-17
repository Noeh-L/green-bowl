import { MenuProduct, BasketProduct } from "./Product";

export type UserData = {
  username: string;
  menu: MenuProduct[];
  basket: BasketProduct[];
};
