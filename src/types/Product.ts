export type MenuProduct = {
  id: string | number;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
};

export type BasketProduct = {
  id: string | number;
  quantity: number;
};
