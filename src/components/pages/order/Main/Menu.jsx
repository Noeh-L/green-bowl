import styled from "styled-components";
import Card from "./Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map((item) => (
        <Card
          key={`${item.id}`}
          picture={item.imageSource}
          label={item.title}
          price={item.price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${theme.spacing.xl} ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  overflow-y: scroll;
`;

export default Menu;
