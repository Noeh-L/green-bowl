import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../../theme";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { focusOnRef } from "../../../../../utils/focusOnRef";
import { findObjectById, isArrayEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuCardAnimation } from "../../../../../theme/animation";
import { displayToast } from "../../../../../utils/displayToast";

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
    isLoading,
  } = useOrderContext();

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

  const handleUnavailableProduct = (e) => {
    e.stopPropagation();
    displayToast("warn", "Produit indisponible 😞", 2000);
  };

  // render
  if (isLoading || menu === undefined) return <Loader />;

  if (isArrayEmpty(menu)) {
    return isAdminMode ? <EmptyMenuAdmin /> : <EmptyMenuUser />;
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isAdvertised }) => (
          <CSSTransition
            classNames={"card"}
            timeout={500}
            key={id}
            appear={true}
          >
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
              onAddToBasket={(e) =>
                isAvailable
                  ? handleAddCardToBasket(e, id)
                  : handleUnavailableProduct(e)
              }
              isAvailable={isAvailable}
              isAdvertised={isAdvertised}
            />
          </CSSTransition>
        ),
      )}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl} ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  overflow-y: scroll;

  ${menuCardAnimation}
`;

export default Menu;
