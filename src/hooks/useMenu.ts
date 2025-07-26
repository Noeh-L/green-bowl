import { useState } from "react";
import { fakeMenu } from "@/fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "@/utils/array";
import { updateUserData } from "@/api/user";
import { getLocalStorage, setLocalStorage } from "@/utils/windows";
import { MenuProduct } from "@/types/Product";
import { UserData } from "@/types/User";

export const useMenu = () => {
  // state
  const userData = getLocalStorage("userData") as UserData | null;
  const usernameFromLS = userData ? userData.username : undefined;
  const menuFromLS = userData ? userData.menu : undefined;
  const [menu, setMenu] = useState<MenuProduct[] | undefined>(menuFromLS);

  // behavior
  const handleAddProduct = async (newProduct: MenuProduct) => {
    if (menu) {
      const menuCopy = deepClone(menu);

      // Process calories: if empty field, set to null; otherwise, convert to number
      const processedCalories = !newProduct.calories
        ? null
        : Number(newProduct.calories);

      const menuUpdated = [
        {
          ...newProduct,
          price: Number(newProduct.price),
          calories: processedCalories,
        },
        ...menuCopy,
      ];

      setMenu(menuUpdated);

      await updateMenuInLStorageAndDB(menuUpdated);
    }
  };

  const handleDeleteProduct = async (idItemToDelete: string) => {
    if (menu) {
      const menuCopy = deepClone(menu);

      const menuUpdated = removeObjectById(idItemToDelete, [...menuCopy]);

      setMenu(menuUpdated);

      await updateMenuInLStorageAndDB(menuUpdated);
    }
  };

  const handleEditProduct = async (productBeingEdited: MenuProduct) => {
    if (menu) {
      const menuCopy = deepClone(menu);

      const indexOfProductBeingEdited = findIndex(
        productBeingEdited.id,
        menuCopy,
      );

      menuCopy[indexOfProductBeingEdited] = {
        ...productBeingEdited,
        price: Number(productBeingEdited.price),
        calories:
          String(productBeingEdited.calories) === ""
            ? null
            : Number(productBeingEdited.calories),
      };

      setMenu(menuCopy);

      updateMenuInLStorageAndDB(menuCopy);
    }
  };

  const resetMenu = async () => {
    setMenu(fakeMenu.LARGE);
    updateMenuInLStorageAndDB(fakeMenu.LARGE);
  };

  const updateMenuInLStorageAndDB = async (menuUpdated: MenuProduct[]) => {
    try {
      await updateUserData(usernameFromLS as string, {
        menu: [...menuUpdated],
      });
      console.log("🧾 Menu updated successfully!");

      // update the localStorage
      const userDataUpdated = { ...userData, menu: [...menuUpdated] };

      setLocalStorage("userData", userDataUpdated);
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
