export type MenuProduct = {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable: boolean;
  isAdvertised: boolean;
};

export type BasketProductQuantity = {
  id: string;
  quantity: number;
};

export type BasketProduct = MenuProduct & BasketProductQuantity;
