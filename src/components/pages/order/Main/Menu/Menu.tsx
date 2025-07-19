import styled from "styled-components";
import Card from "./Card";
import { theme } from "@/theme/theme";
import { useOrderContext } from "@/context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";
import { IMAGE_BY_DEFAULT } from "@/enums/product";
import { focusOnRef } from "@/utils/focusOnRef";
import { findObjectById, isArrayEmpty } from "@/utils/array";
import Loader from "./Loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuCardAnimation } from "@/theme/animation";

function Menu() {
  // state
  const {
    menu,
    isAdminMode,
    handleDeleteProduct,
    productSelectedByAdmin,
    setProductSelectedByAdmin,
    editProductTitleRef,
    handleAddToBasket,
    handleDeleteFromBasket,
    isLoading,
    handleCardSelection,
  } = useOrderContext();

  const handleCardDeletion = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idOfCardToDelete: string,
  ) => {
    e.stopPropagation();

    await handleDeleteProduct(idOfCardToDelete);
    await handleDeleteFromBasket(idOfCardToDelete);

    if (!productSelectedByAdmin) return;
    idOfCardToDelete === productSelectedByAdmin.id &&
      setProductSelectedByAdmin(null);

    focusOnRef(editProductTitleRef);
  };

  const handleAddCardToBasket = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.stopPropagation();
    if (!menu) return;
    const productAdded = findObjectById(id, menu);

    if (!productAdded) return;
    handleAddToBasket(productAdded);
  };

  // render
  if (isLoading || menu === undefined) return <Loader />;

  if (isArrayEmpty(menu)) {
    return isAdminMode ? <EmptyMenuAdmin /> : <EmptyMenuUser />;
  }

  return (
    <TransitionGroup component={MenuStyled}>
      <>
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
                onCardSelected={() => handleCardSelection(id)}
                isCardSelected={
                  productSelectedByAdmin
                    ? productSelectedByAdmin.id === id
                    : false
                }
                onAddToBasket={(e) => handleAddCardToBasket(e, id)}
                isAvailable={isAvailable}
                isAdvertised={isAdvertised}
              />
            </CSSTransition>
          ),
        )}
      </>
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
