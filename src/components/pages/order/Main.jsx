import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "./Card";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

function Main() {
  return (
    <MainSyled>
      {/* <div className="basket">Panier</div> */}
      <div className="deck">
        {fakeMenu2.map((item, index) => (
          <Card name={item.title} key={`${item.id}-${index}`} />
        ))}
      </div>
    </MainSyled>
  );
}

const MainSyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  overflow: hidden;

  .deck {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.xl} ${theme.spacing.xxl};
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
    overflow-y: scroll;
  }
`;

export default Main;
