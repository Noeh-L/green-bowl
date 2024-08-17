import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../../theme";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";

const IMAGE_BY_DEFAULT = "../../../../../../public/assets/coming-soon.png";

function Menu() {
  const { menu, isAdminMode, handleDeleteProduct } = useOrderContext();

  if (menu.length === 0) {
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
          onDelete={() => handleDeleteProduct(id)}
          isDeleteButtonVisible={isAdminMode}
          isLabel={title === "" ? false : true}
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
