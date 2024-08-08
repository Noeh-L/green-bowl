import styled from "styled-components";
import Card from "./Card";
// import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import { useOrderContext } from "../../../../context/OrderPageContext";
// import { useContext } from "react";
// import { OrderContext } from "../../../../context/OrderPageContext";

function Menu() {
  // const menu = fakeMenu.LARGE;
  const { menu, setMenu } = useOrderContext();

  const handleDelete = (IdItemToDelete) => {
    // 1. Copie du state
    const menuCopy = menu;

    // 2. Manip du state

    const newMenu = menuCopy.filter((item) => item.id !== IdItemToDelete);

    // 3. Update du state
    setMenu(newMenu);
  };

  return (
    <MenuStyled>
      {menu.map((item, index) => (
        <Card
          key={`${item.title}-${index}`}
          picture={item.imageSource}
          label={item.title}
          price={item.price}
          onClick={() => handleDelete(item.id)}
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
