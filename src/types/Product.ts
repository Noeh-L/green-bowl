export type MenuProduct = {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable: boolean;
  isAdvertised: boolean;
  calories?: number;
  description?: string;
};

export type BasketProductQuantity = {
  id: string;
  quantity: number;
};

export type BasketProduct = MenuProduct & BasketProductQuantity;
