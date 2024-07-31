/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminTab from "../../../reusable-ui/AdminTab";
import { useIsAdminModeContext } from "../../../../context/IsAdminContext";

function AdminPanel() {
  const { isAdminMode, setIsAdminMode } = useIsAdminModeContext();

  return (
    <AdminPanelStyled $isVisible={isAdminMode}>
      <AdminTabs>
        <AdminTab Icon={FiChevronDown} />
        <AdminTab Icon={AiOutlinePlus} label={"Ajouter un produit"} />
        <AdminTab Icon={MdModeEditOutline} label={"Modifier un produit"} />
      </AdminTabs>
      <AdminContent></AdminContent>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 295px;
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column;
  filter: drop-shadow(0 0 10px rgba(0 0 0 / 0.4));
`;

const AdminTabs = styled.div`
  /* border: 3px solid blue; */
  width: fit-content;
  display: flex;
  align-items: end;
  gap: 1px;
  margin-left: ${theme.spacing.xxl};
`;
const AdminContent = styled.div`
  flex: 1;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 15px 15px;
  background: ${theme.colors.white};
`;

export default AdminPanel;
