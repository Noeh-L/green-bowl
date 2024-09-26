import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";
import { updateUserData } from "../api/user";

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

    setMenu(menuUpdated);

    updateMenuInLStorageAndDB(menuUpdated);
  };

  const handleDeleteProduct = async (idItemToDelete) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = removeObjectById(idItemToDelete, [...menuCopy]);

    setMenu(menuUpdated);

    updateMenuInLStorageAndDB(menuUpdated);
  };

  const handleEditProduct = async (productBeingEdited) => {
    const menuCopy = deepClone(menu);

    const indexOfProductBeingEdited = findIndex(
      productBeingEdited.id,
      menuCopy,
    );

    menuCopy[indexOfProductBeingEdited] = productBeingEdited;

    setMenu(menuCopy);

    updateMenuInLStorageAndDB(menuCopy);
  };

  const resetMenu = async () => {
    setMenu(fakeMenu.LARGE);
    updateMenuInLStorageAndDB(fakeMenu.LARGE);
  };

  const updateMenuInLStorageAndDB = async (menuUpdated) => {
    try {
      await updateUserData(usernameFromLS, {
        menu: [...menuUpdated],
      });
      console.log("🧾 Menu updated successfully!");

      // update the localStorage
      const userDataUpdated = { ...userData, menu: [...menuUpdated] };

      localStorage.setItem("userData", JSON.stringify(userDataUpdated));
    } catch (error) {
      console.error("Error updating menu in the database:", error);
      setMenu(menu);
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
