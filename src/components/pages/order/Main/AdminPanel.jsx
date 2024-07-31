import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="tabs-container">
        <div className="chevron tab">
          <FiChevronDown className="icon" />
          <p className="title"></p>
        </div>
        <div className="addProduct tab">
          <AiOutlinePlus />
          <p className="title">Ajouter un produit</p>
        </div>
        <div className="modifyProduct tab">
          <MdModeEditOutline />
          <p className="title">Modifier un produit</p>
        </div>
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
    border: 3px solid blue;
    width: fit-content;
    display: flex;
    align-items: end;
    gap: 1px;
    margin-left: ${theme.spacing.xxl};

    .tab {
      min-width: 60px;
      min-height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing.sm};

      background: ${theme.colors.white};
      border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
      border: 1px solid ${theme.colors.greyLight};
      padding: 10px 22px;
      cursor: pointer;

      &.addProduct {
        background: ${theme.colors.background_dark};
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
