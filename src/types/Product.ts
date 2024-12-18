export type MenuProduct = {
  id: string | number;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable: boolean;
  isAdvertised: boolean;
};

export type BasketProductQuantity = {
  id: string | number;
  quantity: number;
};

export type BasketProduct = MenuProduct & BasketProductQuantity;
