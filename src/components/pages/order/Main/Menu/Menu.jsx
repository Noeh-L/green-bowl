import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../../theme";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";
import { IMAGE_BY_DEFAULT } from "../../../../../config/config";

function Menu() {
  // state
  const {
    menu,
    isAdminMode,
    handleDeleteProduct,
    idOfProductSelected,
    handleProductSelection,
  } = useOrderContext();

  // behavior
  if (menu.length === 0) {
    return isAdminMode ? <EmptyMenuAdmin /> : <EmptyMenuUser />;
  }

  // render
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          picture={imageSource ? imageSource : IMAGE_BY_DEFAULT}
          label={title}
          price={price}
          onDelete={(e) => handleDeleteProduct(e, id)}
          isDeleteButtonVisible={isAdminMode}
          isLabel={title === "" ? false : true}
          isAdminMode={isAdminMode}
          onSelection={() => handleProductSelection(id)}
          isCardSelected={idOfProductSelected === id}
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
