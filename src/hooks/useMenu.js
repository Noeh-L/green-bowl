import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";

export const useMenu = () => {
  // state
  const menuFromLS = JSON.parse(localStorage.getItem("menu"));
  const [menu, setMenu] = useState(menuFromLS);

  // behavior
  const handleAddProduct = async (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const handleDeleteProduct = (idItemToDelete) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = removeObjectById(idItemToDelete, menuCopy);

    setMenu(menuUpdated);
  };

  const handleEditProduct = (productBeingEdited) => {
    // 1. Copie du state
    const menuCopy = deepClone(menu);

    // 2. Manipuation de la copie
    const indexOfProductBeingEdited = findIndex(
      productBeingEdited.id,
      menuCopy,
    );

    menuCopy[indexOfProductBeingEdited] = productBeingEdited;

    // 3. Update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  return {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};
