import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../../theme";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { focusOnRef } from "../../../../../utils/focusOnRef";
import { findObjectById, isArrayEmpty } from "../../../../../utils/array";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Menu() {
  // state
  const {
    menu,
    isAdminMode,
    handleDeleteProduct,
    productSelected,
    setProductSelected,
    setIsPanelAdminOpen,
    setActiveTab,
    editProductTitleRef,
    handleAddToBasket,
    handleDeleteFromBasket,
  } = useOrderContext();
  const [isLoading, setIsLoading] = useState(false);

  // behavior (event handlers)
  const handleCardSelection = async (id) => {
    if (!isAdminMode) return;
    if (productSelected.id === id) return setProductSelected(EMPTY_PRODUCT); // Désélectionne une card qui est sélectionnée

    await openEditTab();

    const productClickedOn = findObjectById(id, menu);

    await setProductSelected(productClickedOn);

    focusOnRef(editProductTitleRef);
  };

  const openEditTab = () => {
    setIsPanelAdminOpen(true);
    setActiveTab("editProduct");
  };

  const handleCardDeletion = (e, idOfCardToDelete) => {
    e.stopPropagation();

    handleDeleteProduct(idOfCardToDelete);

    idOfCardToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);

    focusOnRef(editProductTitleRef);
    handleDeleteFromBasket(idOfCardToDelete);
  };

  const handleAddCardToBasket = (e, id) => {
    e.stopPropagation();
    const productAdded = findObjectById(id, menu);

    handleAddToBasket(productAdded);
  };

  // Display the loader when data received from LS
  useEffect(() => {
    setIsLoading(true);

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [setIsLoading]);

  // render
  if (isLoading || menu === undefined) return <Loader />;

  if (isArrayEmpty(menu)) {
    return isAdminMode ? <EmptyMenuAdmin /> : <EmptyMenuUser />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          picture={imageSource ? imageSource : IMAGE_BY_DEFAULT}
          label={title}
          price={price}
          onDelete={(e) => handleCardDeletion(e, id)}
          isDeleteButtonVisible={isAdminMode}
          isLabel={title === "" ? false : true}
          isAdminMode={isAdminMode}
          onClick={() => handleCardSelection(id)}
          isCardSelected={productSelected.id === id}
          onAddToBasket={(e) => handleAddCardToBasket(e, id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl} ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  overflow-y: scroll;
`;

export default Menu;
