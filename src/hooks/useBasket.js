import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productAdded) => {
    const basketCopy = deepClone(basket);

    const productAlreadyAdded = findObjectById(productAdded.id, basketCopy);

    if (productAlreadyAdded) {
      incrementProductInBasket(productAlreadyAdded, basketCopy);
    } else {
      addNewProductInBasket(productAdded, basketCopy);
    }
  };

  const handleDeleteFromBasket = (id) => {
    const basketCopy = deepClone(basket);

    const basketUpdated = removeObjectById(id, basketCopy);

    setBasket(basketUpdated);
  };

  const incrementProductInBasket = (productAlreadyInBasket, basket) => {
    const productAlreadyAddedUpdated = {
      ...productAlreadyInBasket,
      quantity: productAlreadyInBasket.quantity + 1,
    };

    const basketUpdated = basket.map((product) =>
      product.id === productAlreadyInBasket.id
        ? productAlreadyAddedUpdated
        : product,
    );

    setBasket(basketUpdated);
  };

  const addNewProductInBasket = (productToAddInBasket, basket) => {
    const newProductToAddToBasket = {
      ...productToAddInBasket,
      quantity: 1,
    };

    const basketUpdated = [newProductToAddToBasket, ...basket];

    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteFromBasket };
};
