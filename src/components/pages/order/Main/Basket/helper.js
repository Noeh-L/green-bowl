import { findObjectById } from "../../../../../utils/array";

export const getMenuProductAssociated = (product, menu) => {
  const productAssociated = findObjectById(product.id, menu);
  return productAssociated;
};

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((acc, item) => {
    const menuProductAssociated = getMenuProductAssociated(item, menu);

    const priceOfMenuProductAssociated =
      isNaN(menuProductAssociated.price) || !menuProductAssociated.isAvailable
        ? 0
        : Math.round(menuProductAssociated.price * 100) / 100;

    return acc + item.quantity * priceOfMenuProductAssociated;
  }, 0);
};
