import { useState } from "react";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";
//@ts-ignore
import { updateUserData } from "../api/user";
import { getLocalStorage, setLocalStorage } from "../utils/windows";
import { UserData } from "@/types/User";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";

export const useBasket = () => {
  const userData = (getLocalStorage("userData") as UserData) || null;
  const basketFromLS = userData ? userData.basket : [];
  const [basket, setBasket] = useState<BasketProductQuantity[]>(basketFromLS);

  const handleAddToBasket = (productAdded: MenuProduct) => {
    const basketCopy = deepClone(basket);

    const productAlreadyAdded = findObjectById(productAdded.id, basketCopy);

    if (productAlreadyAdded) {
      incrementProductInBasket(productAlreadyAdded, basketCopy);
    } else {
      addNewProductInBasket(productAdded, basketCopy);
    }
  };

  const handleDeleteFromBasket = (id: string | number) => {
    const basketCopy = deepClone(basket);

    const basketUpdated = removeObjectById(id, basketCopy);

    setBasket(basketUpdated);

    updateBasketInLStorageAndDB(basketUpdated);
  };

  const incrementProductInBasket = async (
    productAlreadyInBasket: BasketProductQuantity,
    basket: BasketProductQuantity[],
  ) => {
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

    updateBasketInLStorageAndDB(basketUpdated);
  };

  const addNewProductInBasket = async (
    productToAddInBasket: MenuProduct,
    basket: BasketProductQuantity[],
  ) => {
    const newProductToAddToBasket = {
      id: productToAddInBasket.id,
      quantity: 1,
    };

    const basketUpdated = [newProductToAddToBasket, ...basket];

    setBasket(basketUpdated);

    updateBasketInLStorageAndDB(basketUpdated);
  };

  const updateBasketInLStorageAndDB = async (
    basketUpdated: BasketProductQuantity[],
  ) => {
    try {
      await updateUserData(userData.username, { basket: [...basketUpdated] });
      console.log("🛒 Basket updated successfully!");

      // update the localStorage
      const userDataUpdated = { ...userData, basket: [...basketUpdated] };
      setLocalStorage("userData", userDataUpdated);
    } catch (error) {
      console.error("Error updating basket in the database: ", error);
    }
  };

  return { basket, handleAddToBasket, handleDeleteFromBasket };
};
