import { useState } from "react";
// import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";
import { updateUserData } from "../api/user";

export const useBasket = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const basketFromLS = userData ? userData.basket : [];
  const [basket, setBasket] = useState(basketFromLS);

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

    updateBasketInLStorageAndDB(basketUpdated);
  };

  const incrementProductInBasket = async (productAlreadyInBasket, basket) => {
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

  const addNewProductInBasket = async (productToAddInBasket, basket) => {
    const newProductToAddToBasket = {
      id: productToAddInBasket.id,
      quantity: 1,
    };

    const basketUpdated = [newProductToAddToBasket, ...basket];

    setBasket(basketUpdated);

    updateBasketInLStorageAndDB(basketUpdated);
  };

  const updateBasketInLStorageAndDB = async (basketUpdated) => {
    try {
      await updateUserData(userData.username, { basket: [...basketUpdated] });
      console.log("🛒 Basket updated successfully!");

      // update the localStorage
      const userDataUpdated = { ...userData, basket: [...basketUpdated] };
      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating basket in the database: ", error);
    }
  };

  return { basket, handleAddToBasket, handleDeleteFromBasket };
};
