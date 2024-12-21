import { BasketProductQuantity, MenuProduct } from "@/types/Product";
import { findObjectById } from "../../../../../utils/array";

export const getMenuProductAssociated = (
  product: BasketProductQuantity,
  menu: MenuProduct[],
) => {
  const productAssociated = findObjectById(product.id, menu);
  return productAssociated;
};

export const calculateSumToPay = (
  basket: BasketProductQuantity[],
  menu: MenuProduct[],
) => {
  return basket.reduce((acc, item) => {
    const menuProductAssociated = getMenuProductAssociated(item, menu);
    if (menuProductAssociated === undefined) return acc;
    const priceOfMenuProductAssociated =
      isNaN(menuProductAssociated.price) || !menuProductAssociated.isAvailable
        ? 0
        : Math.round(menuProductAssociated.price * 100) / 100;

    return acc + item.quantity * priceOfMenuProductAssociated;
  }, 0);
};
