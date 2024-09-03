import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";
import { getUser } from "../api/user";
import { useParams } from "react-router-dom";

export const useMenu = () => {
  // state
  const { username } = useParams();
  const [menu, setMenu] = useState([]);

  const fetchUserData = async (userId) => {
    const userData = await getUser(userId);
    return userData;
  };

  fetchUserData(username).then((data) => setMenu(data.menu));

  // behavior
  const handleAddProduct = (newProduct) => {
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
