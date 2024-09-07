import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";
import { updateUserMenu } from "../api/user";

export const useMenu = () => {
  // state
  const usernameFromLS = JSON.parse(localStorage.getItem("userData")).username;
  const menuFromLS = JSON.parse(localStorage.getItem("userData")).menu;
  const [menu, setMenu] = useState(menuFromLS);

  // behavior
  const handleAddProduct = async (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    // update the state
    setMenu(menuUpdated);

    // update the localStorage
    const userDataUpdated = {
      username: usernameFromLS,
      menu: menuUpdated,
    };

    localStorage.setItem("userData", JSON.stringify(userDataUpdated));

    // update the database
    updateUserMenu(usernameFromLS, { menu: [newProduct, ...menuFromLS] });
  };

  const handleDeleteProduct = (idItemToDelete) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = removeObjectById(idItemToDelete, menuCopy);

    setMenu(menuUpdated);

    const userDataUpdated = {
      username: usernameFromLS,
      menu: menuUpdated,
    };

    localStorage.setItem("userData", JSON.stringify(userDataUpdated));

    updateUserMenu(usernameFromLS, { menu: menuUpdated });
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

    localStorage.setItem("userData", JSON.stringify(fakeMenu.LARGE));

    updateUserMenu(usernameFromLS, { menu: fakeMenu.LARGE });
  };

  return {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};
