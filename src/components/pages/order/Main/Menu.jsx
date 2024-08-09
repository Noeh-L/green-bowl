import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../theme";
import { useOrderContext } from "../../../../context/OrderPageContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";

function Menu() {
  const { menu, setMenu, isAdminMode } = useOrderContext();

  const handleDelete = (idItemToDelete) => {
    const menuCopy = menu;

    const newMenu = menuCopy.filter((item) => item.id !== idItemToDelete);

    setMenu(newMenu);
  };

  if (menu.length === 0) {
    return isAdminMode ? <EmptyMenuAdmin /> : <EmptyMenuUser />;
  }

  return (
    <MenuStyled>
      {menu.map((item) => (
        <Card
          key={item.id}
          picture={item.imageSource}
          label={item.title}
          price={item.price}
          onDelete={() => handleDelete(item.id)}
          isDeleteButtonVisible={isAdminMode}
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
