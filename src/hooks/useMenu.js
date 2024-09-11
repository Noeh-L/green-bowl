import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";
import { updateUserMenu } from "../api/user";

export const useMenu = () => {
  // state
  const userData = JSON.parse(localStorage.getItem("userData"));
  const usernameFromLS = userData ? userData.username : undefined;
  const menuFromLS = userData ? userData.menu : undefined;
  const [menu, setMenu] = useState(menuFromLS);

  // behavior
  const handleAddProduct = async (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    // update the state
    setMenu(menuUpdated);

    // update the database
    try {
      await updateUserMenu(usernameFromLS, {
        menu: [newProduct, ...menuFromLS],
      });
      console.log("Menu updated successfully");

      // update the localStorage
      const userDataUpdated = {
        username: usernameFromLS,
        menu: menuUpdated,
      };

      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating menu in the database:", error);
    }
  };

  const handleDeleteProduct = async (idItemToDelete) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = removeObjectById(idItemToDelete, menuCopy);

    setMenu(menuUpdated);

    // Update of LS and DB
    try {
      await updateUserMenu(usernameFromLS, { menu: [...menuUpdated] });

      // update the localStorage
      const userDataUpdated = {
        username: usernameFromLS,
        menu: menuUpdated,
      };

      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating menu in the database: ", error);
      setMenu(menuCopy);
    }
  };

  const handleEditProduct = async (productBeingEdited) => {
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

    // Update of LS and DB
    try {
      await updateUserMenu(usernameFromLS, { menu: [...menuCopy] });

      // update the localStorage
      const userDataUpdated = {
        username: usernameFromLS,
        menu: [...menuCopy],
      };

      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating menu in the database: ", error);
      setMenu(menuCopy);
    }
  };

  const resetMenu = async () => {
    setMenu(fakeMenu.LARGE);

    // Update of LS and DB
    try {
      await updateUserMenu(usernameFromLS, { menu: fakeMenu.LARGE });

      const userDataUpdated = {
        username: usernameFromLS,
        menu: fakeMenu.LARGE,
      };

      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating menu in the database:", error);
    }
  };

  return {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};
