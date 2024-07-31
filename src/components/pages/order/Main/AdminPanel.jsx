import styled from "styled-components";
import { theme } from "../../../../theme";

function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="tabs-container">
        <div className="arrow tab">⬇</div>
        <div className="addProduct tab">Ajouter un produit</div>
        <div className="modifyProduct tab">Modifier un produit</div>
      </div>
      <div className="content"> </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;

  .tabs-container {
    /* border: 3px solid blue; */
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1px;
    margin-left: ${theme.spacing.xxl};

    .tab {
      background: ${theme.colors.white};
      min-width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
      border: 1px solid ${theme.colors.greyLight};
      padding: 10px 20px;
      cursor: pointer;

      &.addProduct {
        background: black;
        color: white;
      }
    }
  }

  .content {
    flex: 1;
    border: 3px solid red;
    border-radius: 0 0 15px 15px;
    background: ${theme.colors.white};
  }
`;

export default AdminPanel;
